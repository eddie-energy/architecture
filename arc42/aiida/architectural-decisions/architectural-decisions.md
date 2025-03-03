---
title: Architectural Decisions
order: 5
---

## Mechanism to send data from AIIDA to the EDDIE Framework

### Context

AIIDA collects real-time data from metering devices, and sends this data to one or more EDDIE Framework instances hosted by eligible parties. To ensure that all eligible parties receive the data in a timely manner, an appropriate communication mechanism is needed, that can manage potential computational and network loads.    

### Decision

The data is sent from AIIDA to the AIIDA Regional Connector of the EDDIE Framework using an MQTT Broker running along with the AIIDA Regional Connector. Using MQTT, an AIIDA instance can send data to multiple MQTT Brokers (i.e., multiple AIIDA Regional Connectors corresponding to multiple EDDIE Frameworks deployed by different eligible parties), and one AIIDA Regional Connector (i.e., one EDDIE Framework) can receive data from multiple AIIDA instances (i.e., multiple customers). This approach simplifies data distribution and mitigates the need for direct communication between AIIDA and EDDIE Framework instances.

### Consequences

MQTT improves scalability while handling real-time data well, and reduces the overhead of AIIDA on the in-house device by leveraging a broker running along with the AIIDA Regional Connector. However, it creates a dependency on the central broker, which introduces a single point of failure for the AIIDA Regional Connector.

### Alternatives

Alternatives include point-to-point communication, e.g., using CoAP or HTTP, which can be resource-intensive when running at scale.

## Dedicated In-house Device

### Context

The Regional Data-sharing Infrastructures provide access to historical validated energy consumption data of customers. Typically, Regional Data-sharing Infrastructures do not offer access to real-time data. For this reason, real-time data needs to be accessed by other means.

### Decision

To access real-time energy data, AIIDA relies on a dedicated in-house device to connect directly to metering devices and smart meters and access the real-time energy data. This data is then sent from AIIDA to the EDDIE Framework.

### Consequences

Accessing real-time data directly from the smart meter reduces delays in transmission. However, the data from the smart meters is not validated, which means that there may be some deviation compared to the historical validated energy consumption data acquired from the Regional Data-sharing Infrastructures (when this data becomes available).

### Alternatives

An alternative is to access the real-time data from the Regional Data-sharing Infrastructure when it becomes available. However, this can introduce significant delays.
