---
title: AD1: Dedicated In-house Device
---

## Context

AIIDA, which runs on in-house infrastructure, collects data from a smart meter in real time. This data forms a data stream that originates in AIIDA and needs to be sent to the framework (running on the infrastructure of the eligible party). Thus, each AIIDA instance creates one data stream that has to be sent to one or more instances of the framework, i.e., one or more eligible parties. AD1 refers to the communication mechanism utilized to facilitate the transmission of a data stream from one instance of AIIDA to one or more instances of the framework.    

## Decision

Integration of an Apache Kafka client within AIIDA, that creates one data stream for every framework that needs to receive the data, i.e., for every eligible party. Each eligible party has to integrate an Apache Kafka cluster. Information on how to send data from the client to each cluster (e.g., IP address, port, topic ID) has to be configured in the client. As a result, each AIIDA instance sends the same data stream multiple times, i.e., to each eligible party.

## Consequences

Positive consequences: 
- The goal to send the data from one AIIDA instance to multiple instances of the framework is achieved by Kafka, thereby with little development effort.
- The Kafka cluster on the eligible party infrastructure can also be used for other tasks, e.g., for internal communication between components, or for forwarding the data streams to the services. 

Negative consequences: 
- Since AIIDA may be running on a resource-constrained device, sending multiple data streams at once might affect the device's performance (e.g., CPU, RAM).
- Uploading many identical data streams at once might be limited by the available network bandwidth, i.e., some eligible parties may receive the data with delay.

## Alternatives
