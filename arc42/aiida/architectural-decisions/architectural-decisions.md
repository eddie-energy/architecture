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

## Using EMQX IAM for user management

### Context

The AIIDA system requires secure authentication and authorization for MQTT interactions. The EMQX IAM Database manages user accounts, ensuring each AIIDA instance has restricted access to designated topics, preventing unauthorized data exchange. It also stores customer, topic, group, and permission data, enabling fine-grained security policies.

### Decision

The EMQX IAM Database is used for SQL-based authentication and authorization, enforcing topic access rules. Security policies define who can access which topics and allowed actions (e.g., publish, subscribe). This ensures strict data flow separation between AIIDA instances.

### Consequences

The EMQX IAM Database enforces access control and provides centralized management ensuring consistency. Additionally, its scalable security policies can adapt to evolving system needs. However, centralized management requires ongoing effort and introduces additional complexity and potential performance overhead.

### Alternatives

Alternatives include static configuration, which offers simplicity with hardcoded permissions but lacks flexibility, and external identity providers such as OAuth2, OpenID, or LDAP, which enable unified authentication but introduce additional complexity.

## Dedicated In-house Device

### Context

The Regional Data-sharing Infrastructures provide access to historical validated energy consumption data of customers. Typically, Regional Data-sharing Infrastructures do not offer access to real-time data. For this reason, real-time data needs to be accessed by other means.

### Decision

To access real-time energy data, AIIDA relies on a dedicated in-house device to connect directly to metering devices and smart meters and access the real-time energy data. This data is then sent from AIIDA to the EDDIE Framework.

### Consequences

Accessing real-time data directly from the smart meter reduces delays in transmission. However, the data from the smart meters is not validated, which means that there may be some deviation compared to the historical validated energy consumption data acquired from the Regional Data-sharing Infrastructures (when this data becomes available).

### Alternatives

An alternative is to access the real-time data from the Regional Data-sharing Infrastructure when it becomes available. However, this can introduce significant delays.
