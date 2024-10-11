---
title: Architectural Decisions
order: 5
---
## General Decisions

> - In-house device vs hosted service (as there are recurring discussions about AIIDA in the cloud)
> - Use MQTT for communication with Framework
> - How MQTT user management is integrated with the Framework (DB-based)




## Publish/subscribe mechanism for sending data from AIIDA to the EDDIE Framework
---


AIIDA, which runs on the in-house device, collects data from a smart meter in real time. This data needs to be sent to the EDDIE Framework (running on the infrastructure of the eligible party). Thus, each AIIDA instance sends real-time data to one or more instances of the EDDIE Framework, i.e., one or more eligible parties. Since this data transfer involves real-time data, it is crucial that all eligible parties get the data in due time. This may create a challenge when the number of receiver eligible parties is large, because the in-house device may not have the resources (e.g., computational and network resources) to initiate many transmissions at once.    

### Decision

To send the real-time data from AIIDA to potentially multiple instances of the EDDIE Framework, a publish/subscribe mechanism is used. This mechanism handles the complexity of sending the real-time data. The specifics of this decision are yet to be determined. 
<!-- TBD -->

### Consequences

Positive consequences: 
<!-- - The goal to send the data from one AIIDA instance to multiple instances of the framework is achieved by Kafka, thereby with little development effort.
- The Kafka cluster on the eligible party infrastructure can also be used for other tasks, e.g., for internal communication between components, or for forwarding the data streams to the services.  -->

Negative consequences: 
<!-- - Since AIIDA may be running on a resource-constrained device, sending multiple data streams at once might affect the device's performance (e.g., CPU, RAM).
- Uploading many identical data streams at once might be limited by the available network bandwidth, i.e., some eligible parties may receive the data with delay. -->

## Dedicated In-house Device
---

> [!WARNING]
> Interesting question but needs re-evaluation of the alternatives, e.g. cloud-AIIDA connecting to a [Smart Meter Adapter from oesterreichs energie](https://oesterreichsenergie.at/aktuelles/neuigkeiten/detailseite/die-smart-booster)

### Context

The goal of the EDDIE Framework is to provide historical and real-time energy data to the Services. Notably, energy consumption data needs to be validated before being considered as accurate and credible data. When the EDDIE Framework acquires historical data from the Regional Data-sharing Infrastructure, this data is already validated. However, the Regional Data-sharing Infrastructure may not offer access to real-time validated data because the validation might incur additional delays. Thus, while access to historical validated data is achieved through the Regional Data-sharing Infrastructure, access to real-time validated data cannot be guaranteed in a similar way.

### Decision

To access real-time energy consumption data, the EDDIE Framework relies on a dedicated in-house device that connects to the smart meter and monitors the energy consumption in real time. This device hosts AIIDA which reads the real-time data and sends it to the EDDIE Framework.

### Consequences

Positive consequences: 
- Access to energy consumption data straight from the smart meter with very little delay (e.g., small transmission, propagation and queuing delay).

Negative consequences: 
- The real-time energy consumption data accessed via the in-house device is not validated.

### Alternatives

Alternatives:
- Access near real-time data from the Regional Data-sharing Infrastructure as soon as (and if) it is available. In this case, the data might be validated, although considerable delay may be introduced thus jeopardizing the sense of real time.
