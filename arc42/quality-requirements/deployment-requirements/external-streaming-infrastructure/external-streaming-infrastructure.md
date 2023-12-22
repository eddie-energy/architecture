---
title: External Streaming Infrastructure
order: 5
---

## Context

The EDDIE Framework has different deployment options, some of them including a connection to an existing in-house or cloud-hosted streaming infrastructure (e.g., Apache Kafka). To establish this connection to a streaming infrastructure, the EDDIE Framework needs to support widely-used streaming infrastructures such as Apache Kafka, Google Cloud Pub/Sub, or Amazon MQ. The eligible party should be able to configure the deployment option with parameters specifying the connection such existing streaming infrastructures.

## Stimulus
The eligible party executes a Docker compose command to download and run the EDDIE Framework with configurable parameters that establish the connection to an existing in-house or cloud-hosted streaming infrastructure.   

## Response
First, the EDDIE Framework is downloaded from a Docker registry. Then, it starts running using the specified streaming infrastructure.
