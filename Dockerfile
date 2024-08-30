FROM nvidia/cuda:12.6.0-cudnn-devel-ubuntu20.04 as builder

ENV DEBIAN_FRONTEND=noninteractive
# Install dependencies
RUN apt-get update -y && apt-get install -y build-essential git curl wget cmake

