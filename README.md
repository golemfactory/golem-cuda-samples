# golem-cuda-samples
Sample how to compile and run cuda samples on Golem

## Prerequisites

docker installed

## Build binaries using nvidia/cuda image

```bash
docker compose up golem-cuda-builder
```

Binaries are located in ./cuda-samples/bin/x86_64/linux/release

You can run binaries locally if you have nvidia driver installed

## Run example 

Make sure you have polygon GLM and MATIC on your yagna account

```
npm install
npm run golem-cuda-bandwidth
```