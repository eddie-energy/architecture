---
title: Publish/subscribe mechanism for sending data from the EDDIE Framework to the Services
---

## Context

The EDDIE Framework gathers historical validated data from the Regional Data-sharing Infrastructure and real-time data from AIIDA, which has to be sent to the Services. Each eligible party can have multiple customers, each one using one or more Services. For this reason, distributing the customer data to the Services may become complicated, especially considering that the real-time data has to be sent with minimum delay.

## Decision

To distribute the customer data to the Services, the EDDIE Framework uses a publish/subscribe mechanism. This way, every Service becomes a subscriber to a particular topic. When the EDDIE Framework acquires data, this data is published to the topics of the Services that the customer wants to use. This publish/subscribe mechanism is implemented using the Apache Kafka Framework.

## Consequences

Positive consequences: 
- Scalable and uncomplicated way to distribute data from many customers to many Services.
- Keep the customer data within the EDDIE Framework only temporarily.

Negative consequences: 
- Additional overhead of deploying and running a publish/subscribe framework.

## Alternatives

Alternatives:
- Send the data of each customer directly to the Services that the customer wants to use, e.g., via HTTP. While this way may work well with few customers and Services, a large number of customers and Services may create bottlenecks and induce additional delay.