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

While Regional Data-sharing Infrastructures provide access to historical validated energy consumption data, they typically do not provide real-time energy consumption data. To access real-time energy data, AIIDA retrieves such data directly from in-house metering devices. These devices often have limited-range interfaces, such as DSMR over RJ12, which requires physical proximity for access, making it necessary to have a dedicated in-house device within the customer’s premises. Additionally, metering device interfaces can vary across countries, requiring AIIDA to support multiple interface types for broad compatibility to metering devices across Europe. 

### Decision  

To access real-time energy data, AIIDA is deployed on a dedicated in-house device that connects to metering devices. This dedicated in-house device is a Raspberry Pi computer that collects real-time data via various interfaces of metering devices, and sends this data to the EDDIE Framework via the AIIDA Regional Connector. This approach ensures that metering devices sending data over wired or wireless channels can be connected to the EDDIE System.  

### Consequences  

Using a dedicated in-house device ensures reliable access to metering devices, regardless of physical interfaces or protocol variations across regions. It minimizes delays in data transmission and enhances data security by keeping sensitive information within the customer’s premises before transmission. However, this approach introduces hardware deployment and maintenance costs, requiring customers to install and manage the dedicated in-house device. Additionally, the real-time data from smart meters is not validated, meaning that there may be discrepancies compared to the historical validated consumption data obtained from Regional Data-sharing Infrastructures.  

### Alternatives  

Deploying AIIDA in the cloud avoids the in-house device. However, this assumes that all the metering devices can send the real-time data to the cloud over the Internet. Devices that do not have Internet connectivity cannot connect to AIIDA anymore. Accessing real-time data from Regional Data-sharing Infrastructures (similar to historical validated energy consumption data) avoids the need for AIIDA, but such infrastructures are not available yet.