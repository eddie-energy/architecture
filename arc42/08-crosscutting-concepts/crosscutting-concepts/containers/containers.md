---
title: Containers
---

## Definition

<!-- What it is -->

Containers (or software containers) are lightweight, portable, and self-sufficient units that encapsulate applications and their dependencies, enabling consistent and reliable deployment across different computing environments. Containers package an application and its runtime, libraries, and other necessary components, ensuring that it runs consistently from one computing environment to another, whether it's a developer's laptop, a testing environment, or a production server. Even though a prime reason to use containers is to ensure portability, containers also allow for a simple, one-command deployment of complex software applications in any environment that supports the container runtime.

## Relevance

<!-- Where it is used, i.e., in what parts of EDDIE -->

The goal of the EDDIE Framework is to be usable by both customers and eligible parties. While customers can use the EDDIE Framework only through GUIs, the eligible party also needs to deploy the software components of the EDDIE Framework on computing infrastructure. To make this deployment easy and provide a good user experience for the eligible party, all the software components of the EDDIE Framework are containerized using the Docker containerization platform, and can be downloaded and run using a single Docker-compose command.


## Motivation

<!-- Why it is used, what are alternatives, why is this preferred compared to alternatives -->

By packaging the whole EDDIE Framework in a single Docker-compose file, eligible parties can deploy it with very little effort. Furthermore, updates, new features, and bug fixes, can also be performed using the same commands, thus making the deployment and maintenance of the EDDIE Framework simple for the eligible party. 

An alternative to Containers is:

- Virtual Machines (VMs): VMs run a complete operating system and encapsulate not only the application but also an entire guest operating system. This approach provides stronger isolation between applications, but VMs are generally heavier in terms of resource usage and take longer to start compared to containers.