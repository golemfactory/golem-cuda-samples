# golem-cuda-samples
Sample how to compile and run cuda samples on Golem. It can be a starting point
for more complex computations on Golem GPU nodes. All samples are build from scratch
and you can modify them to fit your needs.

## Prerequisites

Docker (with compose) installed.

Repo was tested to work on Linux (Ubuntu) and Windows.
When running on macOS make sure to use x86 version of docker images.
On Linux you can build natively without using docker, but you have
to install cuda toolkit and all necessary tools on your machine.

## Build binaries using nvidia/cuda image

```bash
docker compose up golem-cuda-builder
```

Binaries are located in ./cuda-samples/bin/x86_64/linux/release

You can run binaries locally if you have nvidia driver installed

## Nvidia samples

Samples are copied from repo https://github.com/NVIDIA/cuda-samples

## Run example 

Make sure you have polygon GLM and MATIC on your yagna account

```
npm install
npm run golem-cuda-bandwidth
```

This example uses golem-js, for more information see

https://github.com/golemfactory/golem-js

This example is using image from golem image repository

https://registry.golem.network/explore/nvidia/cuda

tag: 12.6.0-cudnn-runtime-ubuntu24.04

The image is build using dockerfile from runtime folder

## Obtaining GLM tokens

To obtain Golem tokens on polygon network you can top up your account manually or use Golem service:

https://glm.golem.network/

Default allocation is for 10GLMs, but you can modify this in golem-cuda-bandwidth.js


## Cleaning build

You can clean all build files using 

```bash
cd cuda-samples && git ls-files --ignored --exclude-standard -o | xargs rm
```
or
```bash
cd cuda-samples && git clean -fdx
```