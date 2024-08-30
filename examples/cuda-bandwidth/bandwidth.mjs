import { GolemNetwork } from "@golem-sdk/golem-js";
import { pinoPrettyLogger } from "@golem-sdk/pino-logger";



(async () => {


    const glm = new GolemNetwork({
        logger: pinoPrettyLogger({
            level: "info",
        }),
        api: {
            key: "66iiOdkvV29",
            //key: "cae73410a3b54415b13750d0b6ae9cba",
        },
    });

    const allocation = await glm.payment.createAllocation({
        budget: 10,
        expirationSec: 3600,
        paymentPlatform: 'erc20-polygon-glm'
    });

    const order = {
        demand: {
            workload: {
                imageTag: "nvidia/cuda:12.6.0-cudnn-runtime-ubuntu24.04",
                capabilities: ["!exp:gpu"],
                engine: "vm-nvidia",
            },
        },
        market: {
            rentHours: 0.5,
            pricing: {
                model: "linear",
                maxStartPrice: 0.0,
                maxCpuPerHourPrice: 0.0,
                maxEnvPerHourPrice: 2.0,
            },
        },
        payment: {
            allocation,
        },
    };

    try {
        await glm.connect();
        const rental = await glm.oneOf({ order });
        const exe = await rental.getExeUnit();
        await exe.uploadFile("./cuda-samples/bin/x86_64/linux/release/bandwidthTest", "/storage/bandwithTest");
        await exe.run('chmod +x /storage/bandwithTest')
        await exe.run('/storage/bandwithTest')
            .then((res) => console.log(res));

        await rental.stopAndFinalize();
    } catch (err) {
        console.error("Failed to run the example", err);
    } finally {
        await glm.payment.releaseAllocation(allocation);
        await glm.disconnect();
    }
})().catch(console.error);