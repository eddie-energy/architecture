---
title: Architectural Decisions
order: 5
---
This section outlines key architectural decisions made for the Marketplace system:
- [Monolithic deployment of the Marketplace](./architectural-decisions.md#monolithic-deployment-of-the-marketplace)
- [Centralized Marketplace System Deployment](./architectural-decisions.md#centralized-marketplace-system-deployment)
- [Marketplace Data Access and Security Permissions](./architectural-decisions.md#marketplace-data-access-and-security-permissions)

## Monolithic deployment of the Marketplace

### Context

The goal of the Marketplace is to enable customers to find and use energy services, and to enable eligible parties to find customer data. When designing such a system, the operational complexity of a microservice approach, particularly regarding inter-service communication and deployment overhead, may become concerning.

### Decision

Opt for a monolithic deployment to simplify development, testing, and maintenance efforts, ensuring quicker delivery and fewer integration challenges.

### Consequences

This decision reduces system complexity and accelerates initial implementation but may limit scalability and flexibility in the long term if requirements evolve significantly.

### Alternatives

Employ a microservice architecture, which would involve breaking functionalities into smaller, independently deployable units.

## Centralized Marketplace System Deployment

### Context

The Marketplace serves as a discovery mechanism, allowing customers to find energy services and eligible parties to locate relevant customer energy data. Given the need for streamlined interactions and data exchanges, the architecture must balance simplicity, efficiency, and scalability.

### Decision

Adopt a centralized Marketplace system to unify discovery and transactions under a single platform, ensuring a consistent and cohesive experience for customers and eligible parties. This approach simplifies governance, data management, and system interoperability.

### Consequences

A centralized Marketplace system ensures a single point of truth. It streamlines management, minimizes overhead, and enhances the user experience with a unified interface. However, it may face scalability challenges, introduce a single point of failure, and create bottlenecks in handling diverse marketplace interactions.

### Alternatives

 A separate Marketplace system would allow tailored solutions for specific sectors or regions but it would increase complexity and risks of siloed data. 
 A marketplace of marketplaces would enable scalability and interoperability through a federated model but it would require more coordination and standardization.

 ## Marketplace Data Access and Security Permissions

 ### Context

 The Marketplace allows eligible parties to request access to data from AIIDA instances. Security concerns arise around how the Marketplace gains the right to configure AIIDA and enable data streaming, requiring proper permissions to ensure customer consent.

 ### Decision

 The Marketplace will only configure AIIDA for data sharing if the customer has granted prior permission, such as through the QR code mechanism in AIIDA. It will facilitate the data stream only after this consent is confirmed.

 ### Consequences

 This approach ensures secure, compliant data sharing with customer consent, minimizing privacy risks. However, it introduces operational overhead by requiring customer interaction for each request, potentially slowing the process.

 ### Alternatives

 The Marketplace could configure the connection without customer permission, streamlining the process but bypassing consent, which poses significant security and privacy risks.

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