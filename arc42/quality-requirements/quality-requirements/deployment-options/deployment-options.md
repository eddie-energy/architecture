---
title: Deployment Options
---

## Context

The EDDIE Framework needs to have three deployment options, as shown below:
1. Deployment of the whole EDDIE Framework on a laptop or on a standard server operated by the eligible party. This represents a general-purpose deployment scenario.
1. Deployment of the EDDIE Framework with a connection to existing corporate database/data warehouse running on in-house computing infrastructure, and/or connection to existing data streaming infrastructure that is also deployed in-house. This represents a corporate deployment scenario that reuses existing components that run in-house.
1. Deployment of the EDDIE Framework with a connection to existing corporate database/data warehouse running on cloud computing infrastructure, and/or connection to existing data streaming infrastructure that is also deployed in the cloud. This represents a corporate deployment scenario that reuses existing components that run in the cloud.

## Stimulus
The eligible party executes a Docker compose command and configures the parameters to select the deployment option. This command then downloads and runs the EDDIE Framework on the selected computing infrastructure (which hosts the Docker runtime) with potential connections to existing components that are established based on the configurable parameters.   

## Response
The EDDIE Framework is downloaded from a Docker registry, and is deployed according to the selected deployment option.
