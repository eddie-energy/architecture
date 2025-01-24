---
title: Architectural Decisions
order: 5
---

## Monolithic vs. Microservice Deployment
### Context
The goal of the Marketplace is to enable customers to find and use energy services, while eligible parties can access the customer data they need. Concerns were raised about the operational complexities of microservices, particularly around managing inter-service communication and deployment overhead.
### Decision
Opt for a monolithic deployment to simplify development, testing, and maintenance efforts, ensuring quicker delivery and fewer integration challenges.
### Consequences
This decision reduces system complexity and accelerates initial implementation but may limit scalability and flexibility in the long term if requirements evolve significantly.
### Alternatives
Employ a microservice architecture, which would involve breaking functionalities into smaller, independently deployable units.

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