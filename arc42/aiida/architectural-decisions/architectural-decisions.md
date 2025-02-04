---
title: Architectural Decisions
order: 5
---
<!--## General Decisions

> - In-house device vs hosted service (as there are recurring discussions about AIIDA in the cloud)
> - Use MQTT for communication with Framework
> - How MQTT user management is integrated with the Framework (DB-based) -->




## Publish/subscribe mechanism for sending data from AIIDA to the EDDIE Framework

### Context
AIIDA, running on the In-house device, collects real-time data from a smart meter and sends it to one or more EDDIE Framework instances hosted by eligible parties. The data transfer requires timely delivery to ensure all parties receive it, and as the number of eligible parties increases, the In-house device may face computational and network resource constraints.    

### Decision

To address the resource constraints and ensure scalability, a publish/subscribe mechanism is chosen for sending real-time data from AIIDA to multiple EDDIE Framework instances. This mechanism simplifies data distribution and mitigates the need for direct communication between AIIDA and each framework instance.
<!-- TBD -->

### Consequences

The publish/subscribe mechanism improves scalability and reduces the burden on AIIDA by leveraging a broker to handle data delivery. However, it introduces a dependency on the central broker, which could become a point of failure, and requires careful configuration for reliable, real-time delivery with security measures in place.

<!-- Positive consequences: 
 - The goal to send the data from one AIIDA instance to multiple instances of the framework is achieved by Kafka, thereby with little development effort.
- The Kafka cluster on the eligible party infrastructure can also be used for other tasks, e.g., for internal communication between components, or for forwarding the data streams to the services.  

Negative consequences: 
Since AIIDA may be running on a resource-constrained device, sending multiple data streams at once might affect the device's performance (e.g., CPU, RAM).
- Uploading many identical data streams at once might be limited by the available network bandwidth, i.e., some eligible parties may receive the data with delay. -->

### Alternatives
Alternatives include point-to-point communication, which is resource-intensive at scale, or distributed message queues like Kafka for enhanced scalability and fault tolerance. Cloud-based services offer scalability but introduce dependencies, while a hybrid approach could balance performance for critical and non-urgent data.

## Dedicated In-house Device

<!--
> [!WARNING]
> Interesting question but needs re-evaluation of the alternatives, e.g. cloud-AIIDA connecting to a [Smart Meter Adapter from oesterreichs energie](https://oesterreichsenergie.at/aktuelles/neuigkeiten/detailseite/die-smart-booster) -->

### Context

Real-time energy consumption data from the smart meter needs to be validated before being considered credible. The Regional Data-sharing Infrastructure can provide validated historical data but may not offer real-time validated data due to potential delays in the validation process.

### Decision

The EDDIE Framework relies on a dedicated in-house device to directly connect to the smart meter and monitor real-time energy consumption. This device runs AIIDA, which reads the data and sends it to the framework without the validation process.

### Consequences

Accessing real-time data directly from the smart meter minimizes delays in transmission and queuing. However, the lack of validation means that the real-time data cannot be guaranteed as accurate or credible.

### Alternatives

An alternative is to access near real-time data from the Regional Data-sharing Infrastructure, which provides validated data, though this introduces potential delays that may impact the real-time nature of the data.
