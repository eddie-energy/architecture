---
title: Architectural Constraints
order: 2
---

The architectural constraints outlined in this section shape the design decisions for the EDDIE system architecture. These constraints are primarily derived from the Grant Agreement, which outlines the operational requirements and commitments for EDDIE as agreed upon with the [European Commission](https://cordis.europa.eu/project/id/101069510). 

This section outlines the key architectural constraints, including: 
- [Technical Constraints](./architectural-constraints.md#technical-constraints)
- [Non-technical Constraints](./architectural-constraints.md#non-technical-constraints)

## Technical Constraints

| No. | Constraint | Description |
|-|-|-|
| 1 | Customer interface | Integration with customer smart meters shall be facilitated with a focus on standardized interfaces such as the P1. |
| 2 | Distributed architecture | There shall be no central party aggregating all the energy data. Each deployment operated by an eligible party shall be independent, and not be able to aggregate data from other eligible parties by default. |
| 3 | Secure communication | The communication between all entities (e.g., eligible parties, customers, software instances) shall be encrypted and signed to ensure authentication and integrity of the exchanged data. | 
| 5 | Publish/subscribe communication | Appropriate publish/subscribe communication mechanisms (such as MQTT and Kafka) shall be utilized to facilitate efficient messaging between data sources and sinks. |

## Non-technical Constraints

| No. | Constraint | Description |
|-|-|-|
| 1 | Distributed data management | A distributed approach to data management is important, and it can affect architectural decisions. There shall be no middle entity gathering all the data, i.e., in a centralized manner. |
| 2 | Respect for subsidiarity | It is important to integrate with the existing energy data sharing infrastructures of Member States (and not try to replace them). While integrating with existing data sharing infrastructures, comments/remarks/suggestions regarding functionality and usability of the provided APIs may emerge, which can be conveyed to the respective infrastructure providers to facilitate improvements. |
| 3 | Customer data sovereignty | The need of the customers to share their data in order to participate in energy data processing services shall not lead to any loss of data access control (of the customers whose data is stored and used). |
| 4 | Data space interoperability | Interactions with relevant European data space initiatives shall be sought and explored and, if possible, implemented. |
| 5 | European viewpoint | The priority is to integrate with existing European energy data sharing infrastructures and offer European energy data access (not to focus on single countries), and to align with European standards like the European Style Market Profile (ESMP), and the Common Information Model (CIM). |
| 6 | Existing metering infrastructure | When connecting to smart metering infrastructure, the focus is on compatibility with existing and already rolled-out hardware devices. This applies to utility infrastructure as well as in-house IoT and home automation devices. |



