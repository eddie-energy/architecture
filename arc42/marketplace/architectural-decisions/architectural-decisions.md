---
title: Architectural Decisions
order: 5
---

This section outlines key architectural decisions made for the Marketplace system:
- [Monolithic Deployment of the Marketplace](./architectural-decisions.md#monolithic-deployment-of-the-marketplace)
- [Centralized Marketplace Under one Operator](./architectural-decisions.md#centralized-marketplace-under-one-operator)
- [Marketplace Accessing Data from AIIDA](./architectural-decisions.md#marketplace-accessing-data-from-aiida)

## Monolithic Deployment of the Marketplace

### Context

The goal of the Marketplace is to enable customers to find and use energy services, and to enable eligible parties to find customer data. When designing such a system, the operational complexity of a microservice approach can become significant, particularly regarding inter-service communication and deployment overhead.

### Decision

Opt for a monolithic deployment to simplify development, testing, and maintenance efforts, ensuring quicker delivery and fewer integration challenges.

### Consequences

This decision reduces the system design complexity and accelerates the implementation, but may limit scalability and flexibility in the long term if requirements evolve significantly.

### Alternatives

Employ a microservice architecture, which would involve breaking functionalities into smaller, independently deployable units.


## Centralized Marketplace Under One Operator

### Context

The Marketplace enables customers to find energy services and eligible parties to find customer data. Different operation options have been examined, e.g., whether one Marketplace operator deploys a single central Marketplace instance to serve all the customers and eligible parties, or if multiple Marketplace operators can coexist and deploy multiple Marketplace instances.

### Decision

Opt for a centralized Marketplace system that unifies service and customer data discovery for all customers and eligible parties under one operator. This ensures a consistent and cohesive experience for customers and eligible parties. Also, this approach simplifies governance, data management, and system integration.

### Consequences

A centralized Marketplace system simplifies the data/service discovery processes, reduces overhead, and enhances the user experience with a unified interface for customers and eligible parties. However, it may face scalability challenges, introduce a single point of failure, and create bottlenecks in handling high load.

### Alternatives

Two prime alternatives have been examined:
1. Multiple Marketplace instances operated by different operators can coexist, potentially leading to healthy competition that can increase customer and eligible party engagement (e.g., because every operator strives to have more customers and eligible parties). This 
1. In addition to having multiple Marketplace instances (as in the previous alternative), a higher level Marketplace exists to provide access to the different available Marketplace instances, i.e., a Marketplace of Marketplace instances. This improves the discovery of Marketplaces because customers and eligible parties can find different Marketplace instances easier.

 ## Marketplace Accessing Data from AIIDA

 ### Context

 The Marketplace allows eligible parties to search for specific data in registered AIIDA instances and request access to this data. Security concerns can arise regarding the Marketplace having the right to configure AIIDA instances to start streaming data to EDDIE Framework instances of eligible parties. It is essential that customers have agreed to share their data before AIIDA starts streaming data to the EDDIE Framework.

 ### Decision

 The Marketplace can request AIIDA instances to start streaming data to the EDDIE Framework, but AIIDA will start streaming the data only if the permission to share data with this particular EDDIE Framework instance already exists in AIIDA, for example, through the workflow of the customer visiting the EP Website and requesting to share their data using the corresponding QR code.

 ### Consequences

 This approach ensures that the customer has provided their permission for data sharing, which reduces the risk of privacy infringement. Since the workflow of the customer providing permission is a prerequisite, the overhead of requesting data from the Marketplace is increased, compared to the Marketplace having full rights to enable data sharing. The delay of requesting data sharing from the Marketplace may also be increased.

 ### Alternatives

 The Marketplace has the right to configure AIIDA instances to start streaming data to the EDDIE Framework without relying on external workflows, e.g., in the AIIDA of the EDDIE Framework systems. However, this may create security and privacy risks.

<!--
ask later if there was a decision or if it was a relevant decision at all?
## Modularized Frontend
### Context
The EDDIE marketplace involves user-facing interfaces for managing data-sharing and consent. Discussions focused on whether a modularized frontend could enhance flexibility, scalability, and maintainability.
### Decision
No definitive decision has been made yet. The topic is noted for further discussion and assessment after evaluating the current implementation and its implications.
### Consequences
This leaves room for future modularization while avoiding premature changes that may not align with the current project priorities.
### Alternatives
Retain the existing monolithic frontend to minimize development effort and maintain consistency.
-->