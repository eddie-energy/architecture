---
title: Publish/subscribe mechanism for sending data from AIIDA to the EDDIE Framework
---

> [!CAUTION]
> Neither pub/sub nor Kafka is used for communication between AIIDA instances and the EDDIE framework.

## Context

AIIDA, which runs on the in-house device, collects data from a smart meter in real time. This data needs to be sent to the EDDIE Framework (running on the infrastructure of the eligible party). Thus, each AIIDA instance sends real-time data to one or more instances of the EDDIE Framework, i.e., one or more eligible parties. Since this data transfer involves real-time data, it is crucial that all eligible parties get the data in due time. This may create a challenge when the number of receiver eligible parties is large, because the in-house device may not have the resources (e.g., computational and network resources) to initiate many transmissions at once.    

## Decision

To send the real-time data from AIIDA to potentially multiple instances of the EDDIE Framework, a publish/subscribe mechanism is used. This mechanism handles the complexity of sending the real-time data. The specifics of this decision are yet to be determined. 
<!-- TBD -->

## Consequences

Positive consequences: 
<!-- - The goal to send the data from one AIIDA instance to multiple instances of the framework is achieved by Kafka, thereby with little development effort.
- The Kafka cluster on the eligible party infrastructure can also be used for other tasks, e.g., for internal communication between components, or for forwarding the data streams to the services.  -->

Negative consequences: 
<!-- - Since AIIDA may be running on a resource-constrained device, sending multiple data streams at once might affect the device's performance (e.g., CPU, RAM).
- Uploading many identical data streams at once might be limited by the available network bandwidth, i.e., some eligible parties may receive the data with delay. -->

## Alternatives
