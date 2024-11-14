---
title: Technical Constraints 
order: 1
---

| No. | Constraint | Description |
|-|-|-|
| 1 | Customer interface | Integration with customer smart meters shall be facilitated with a focus on standardized interfaces such as the P1. |
| 2 | Distributed architecture | There shall be no central party aggregating all the energy data. Each deployment operated by an eligible party shall be independent, and not be able to aggregate data from other eligible parties by default. |
| 3 | Secure communication | The communication between all entities (e.g., eligible parties, customers, software instances) shall be encrypted and signed to ensure authentication and integrity of the exchanged data. | 
| 5 | Publish/subscribe communication | Appropriate publish/subscribe communication mechanisms (such as MQTT and Kafka) shall be utilized to facilitate efficient messaging between data sources and sinks. |