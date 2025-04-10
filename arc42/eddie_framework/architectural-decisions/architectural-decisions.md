---
title: Architectural Decisions
order: 5
---
This section outlines key architectural decisions made for the EDDIE Framework system:
- [Publish/subscribe mechanism for sending data from the EDDIE Framework to the Services](./architectural-decisions.md#publish-subscribe-mechanism-for-sending-data-from-the-eddie-framework-to-the-services)
- [Implement the Permission Facade as a Microfrontend](./architectural-decisions.md#implement-the-permission-facade-as-a-microfrontend)
- [Deployment of a database for storing the internal state of the EDDIE Framework](./architectural-decisions.md#deployment-of-a-database-for-storing-the-internal-state-of-the-eddie-framework)

::: warning NOT FINISHED
This section has to be re-worked.

Moved from overall architectural decisions:
> #### EDDIE Online / multi-tenant use of EDDIE FW
> - Why Kafka pub/sub isn't suitable for EDDIE Online
>
> #### Framework
> - Plugin architecture with in/out facing plugins
> - Monolithic vs. (micro-) service style deployment
> - Modularized frontend instead of a monolithic one
> - Use HTML custom elements for integration in the EP app
:::

> ## General Decisions
> - Why Kafka pub/sub isn't suitable for EDDIE Online
>
> - Plugin architecture with in/out facing plugins
> - Monolithic vs. (micro-) service style deployment
> - Modularized frontend instead of a monolithic one
> - Use HTML custom elements for integration in the EP app
>


---
## Publish/subscribe mechanism for sending data from the EDDIE Framework to the Services
---

> [!CAUTION]
> Kafka is used, but we limit permissions inside Kafka in a way to prevent Kafka's pub/sub features altogether.


The EDDIE Framework gathers historical validated data from the Regional Data-sharing Infrastructure and real-time data from AIIDA, which has to be sent to the Services. Each eligible party can have multiple customers, each one using one or more Services. For this reason, distributing the customer data to the Services may become complicated, especially considering that the real-time data has to be sent with minimum delay.

### Decision

To distribute the customer data to the Services, the EDDIE Framework uses a publish/subscribe mechanism. This way, every Service becomes a subscriber to a particular topic. When the EDDIE Framework acquires data, this data is published to the topics of the Services that the customer wants to use. This publish/subscribe mechanism is implemented using the Apache Kafka Framework.

### Consequences

Positive consequences: 
- Scalable and uncomplicated way to distribute data from many customers to many Services.
- Keep the customer data within the EDDIE Framework only temporarily.

Negative consequences: 
- Additional overhead of deploying and running a publish/subscribe framework.

### Alternatives

Alternatives:
- Send the data of each customer directly to the Services that the customer wants to use, e.g., via HTTP. While this way may work well with few customers and Services, a large number of customers and Services may create bottlenecks and induce additional delay.
 -->

---
## Implement the Permission Facade as a Microfrontend
---

> [!WARNING]
> The permission facade doesn't exist as a component in the architecture but it's spread across the EDDIE core and region connectors. As such it can be embedded as a microfrontend but consists itself of multiple ones. HTML custom elements should be mentioned.

## Context
The Permission Facade is the component that handles the process of acquiring the consent of the customer for access to their historical and real-time data. This component needs to be accessible from the EP Website so that customers can give their consent to the eligible party. 

### Decision

To make the Permission Facade accessible from the EP Website, the Permission Facade is implemented as a microfrontend. This way the EP Website can load the Permission Facade and show the customer all the necessary frontend elements to request the customer's consent. 

### Consequences

Positive consequences: 
- Simple integration of the Permission Facade in the EP Website
- All the EP Websites request the consent of the customer in an identical way, providing a uniform experience for all the customers.

Negative consequences:
- Microfrontends have their own independent development cycle, thus potentially creating additional overhead.

### Alternatives

Alternatives:
- Provide the Permission Facade as an independent website that is operated and maintained by each eligible party.

## Deployment of a database for storing the internal state of the EDDIE Framework
