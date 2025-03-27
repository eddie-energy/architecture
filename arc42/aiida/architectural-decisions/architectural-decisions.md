---
title: Architectural Decisions
order: 5
---

This section outlines key architectural decisions made for the AIIDA system:
- [Mechanism to send data from AIIDA to the EDDIE Framework](./architectural-decisions.md#mechanism-to-send-data-from-aiida-to-the-eddie-framework)
- [Using EMQX IAM for user management](./architectural-decisions.md#using-emqx-iam-for-user-management)
- [Dedicated In-house Device](./architectural-decisions.md#dedicated-in-house-device)

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

AIIDA collects real-time energy data from metering devices, which often have limited-range interfaces, such as DSMR over RJ12. These interfaces require physical proximity for access, making it necessary to have a dedicated in-house device within the customer’s premises. Additionally, energy metering interface types vary across countries, requiring AIIDA to support multiple interface standards for broad compatibility.  

Furthermore, while Regional Data-sharing Infrastructures provide access to historical validated energy consumption data, they typically do not support real-time data access. To ensure real-time availability, AIIDA must retrieve this data directly from metering devices rather than relying on delayed regional sources.  

### Decision  

To access real-time energy data, AIIDA relies on a dedicated in-house device that runs the necessary components to interface with metering devices. This device collects real-time data and facilitates connectivity with the EDDIE Framework via the AIIDA Regional Connector, ensuring compatibility with different interface standards and enabling efficient data transmission.  

### Consequences  

Using an in-house device ensures reliable access to metering interfaces, regardless of protocol variations across regions. It minimizes delays in data transmission and enhances data security by keeping sensitive information within the customer’s premises before transmission. However, this approach introduces hardware deployment and maintenance costs, requiring customers to install and manage the device. Additionally, the real-time data from smart meters is not validated, meaning there may be discrepancies compared to historical data obtained from Regional Data-sharing Infrastructures.  

### Alternatives  

Direct cloud integration without an in-house device would remove the need for on-site hardware but is not feasible due to the limited-range interfaces of many metering devices. Relying on existing smart meter infrastructure could leverage cloud-based APIs; however, these are not universally available or standardized, restricting interoperability. Alternatively, accessing real-time data from Regional Data-sharing Infrastructures could reduce the need for an in-house device, but this approach would introduce significant delays.