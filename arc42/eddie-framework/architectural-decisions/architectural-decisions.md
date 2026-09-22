---
title: Architectural Decisions
order: 6
---

This section outlines key architectural decisions made for the EDDIE Framework:

- [Monolithic Architecture of the EDDIE Framework](#monolithic-architecture-of-the-eddie-framework)
- [Region Connector and Outbound Connector Isolation](#region-connector-and-outbound-connector-isolation)
- [Event-Driven Permission Process Model](#event-driven-permission-process-model)
- [Embed the EDDIE Popup as a Custom Element](#embed-the-eddie-popup-as-a-custom-element)
- [Publish/Subscribe Mechanism for Data Exchange](#publishsubscribe-mechanism-for-data-exchange)
- [Separate System Monitoring and Admin Console](#separate-system-monitoring-and-admin-console)
- [Database](#database)
- [Region Connectors Architecture](#region-connectors-architecture)
- [Management API Isolation](#management-api-isolation)

## Monolithic Architecture of the EDDIE Framework

### Context

EDDIE Framework’s core responsibility is to handle permission requests, manage data access, and ensure interoperability across regions.  
During system design, two architectural approaches were evaluated — a monolithic application versus a distributed microservice architecture.  
Given the complexity of managing multiple Region Connectors and the need for consistent state handling, a simpler, centralized approach was deemed beneficial for early adoption and ease of deployment by Eligible Parties.

### Decision

Implement the EDDIE Framework as a modular monolith rather than a distributed microservice architecture.  
This approach allows all components (e.g., EDDIE Core logic, Connectors, and Admin Console) to run within a single deployable unit, typically as a Docker container.

### Consequences

Positive consequences
- Simplified deployment, setup, and maintenance for Eligible Parties.
- Faster development cycles and easier testing.
- Facilitates future modularization when scaling becomes necessary.

Negative consequences
- Limited scalability across components.
- Potential for performance bottlenecks under heavy concurrent workloads.

### Alternatives

A microservice architecture could have been used, isolating permission handling, connector management, and data exchange.  
However, this would increase infrastructure complexity, require advanced orchestration tools, and slow down the development process in the project’s current scope.

## Region Connector and Outbound Connector Isolation

### Context

The EDDIE Framework integrates several independent modules, such as Region Connectors and Outbound Connectors.  
Each connector must remain isolated to prevent data leakage, ensure fault containment, and enable flexible module management without interference.

### Decision

Maintain a monolithic structure with isolated Spring contexts for each component.  
Each connector operates in its own child context managed by a parent context, ensuring strong encapsulation while keeping deployment simple.

### Consequences

Positive consequences
- Prevents information leakage between connectors.
- Allows selective activation of connectors.
- Ensures clear contracts and modularity within a single deployable unit.

Negative consequences
- Increased complexity in managing context boundaries.
- More intricate communication between connectors.

### Alternatives

Running connectors as independent microservices would enhance fault isolation but add deployment overhead.  
Using a single shared Spring context would simplify runtime management but risk unintentional cross-component interference.

## Event-Driven Permission Process Model

### Context

EDDIE Framework’s original implementation used a rigid state machine to manage permission lifecycles.  
This approach proved cumbersome to extend, as adding new states or handling asynchronous updates required extensive code modifications.

### Decision

Adopt an event-driven architecture for managing the permission process model.  
Each state transition is now triggered by and persisted as an event, improving flexibility and traceability.

### Consequences

Positive consequences
- Enhanced flexibility for evolving the permission model.
- Better transparency and traceability of permission lifecycle events.
- Simplified debugging and auditability.

Negative consequences
- Event synchronization introduces added complexity.
- Requires robust event persistence and replay mechanisms.

### Alternatives

A purely state-machine-driven model was considered but rejected due to high maintenance overhead and poor adaptability to asynchronous workflows from diverse Permission Administrators.


## Embed the EDDIE Popup as a Custom Element

### Context

The Permission Facade is initiated when the Eligible Party embeds the EDDIE Popup into their website.  
Two main implementation options were considered: embedding it as a custom web component or hosting it as a standalone web application.

### Decision

Embed the EDDIE Popup as a custom web component that loads asynchronously and opens the permission dialog directly within the Eligible Party’s website.

### Consequences

Positive consequences
- Seamless user experience without page reloads.
- Simple integration for eligible parties.
- Asynchronous loading improves performance.

Negative consequences
- Limited flexibility for server-side rendering.
- Requires front-end expertise to manage web component lifecycle.

### Alternatives

A standalone web application (opened in a new window or iframe) was considered but dismissed due to reduced user experience cohesion and more complex navigation handling.


## Publish/Subscribe Mechanism for Data Exchange

### Context

The EDDIE Framework collects historical data from Regional Data-sharing Infrastructures and near real-time data from AIIDA.  
This data must be distributed efficiently to multiple Eligible Parties and services while maintaining scalability and minimal latency.

### Decision

Implement a publish/subscribe mechanism to distribute data through Outbound Connectors (e.g., Kafka, AMQP, MQTT).  
Each service subscribes to its respective topic, receiving data in either standardized CIM or non-standardized EDDIE format.

### Consequences

Positive consequences
- Scalable and flexible data delivery mechanism.
- Reduces coupling between data producers and consumers.
- Enables near real-time streaming for multiple Eligible Parties.

Negative consequences
- Requires additional infrastructure and monitoring.
- Increased complexity for debugging distributed data flows.

### Alternatives

Direct HTTP-based delivery was considered simpler but unsuitable for high-volume or near real-time data exchange scenarios.


## Separate System Monitoring and Admin Console

### Context

The initial design included monitoring and debugging capabilities within the Admin Console.  
However, these functionalities are better managed by specialized tools with industry-standard observability stacks.

### Decision

Delegate monitoring, logging, and tracing to external tools such as OpenTelemetry, Prometheus, Loki, Jaeger, and Grafana.  
The Admin Console remains focused on domain-level management, including permissions, Data Needs, and Connectors.

### Consequences

Positive consequences
- Clear separation of concerns between monitoring and administrative functions.
- Better integration with existing EP infrastructure.
- Adoption of proven observability tools.

Negative consequences
- Requires Eligible Parties to configure additional services.

### Alternatives

Bundling all monitoring functionality within the Admin Console was deemed less maintainable and would duplicate existing open-source solutions.


## Database

### Context

EDDIE Framework requires persistent storage for permissions, Data Needs, and events.  
Supporting multiple database systems would introduce compatibility and maintenance challenges.

### Decision

Standardize on PostgreSQL as the only supported database.  
This ensures consistent behavior across environments and leverages PostgreSQL’s strong feature set, including window functions and JSON support.

### Consequences

Positive consequences
- Simplified development and testing setup.
- Access to advanced PostgreSQL features (e.g., window functions, JSONB).
- Consistent performance and reliability across deployments.

Negative consequences
- Limited flexibility for EPs with alternative database preferences.

### Alternatives

Supporting multiple SQL databases was rejected due to testing overhead, inconsistent behavior, and increased complexity in query optimization.


## Region Connectors Architecture

### Context

All Region Connectors follow a similar structure to ensure consistency and reusability across regions.  
Early designs relied on state machines, which limited flexibility in handling asynchronous processes.

### Decision

Use the event sourcing pattern for Region Connectors.  
Events are persisted in append-only tables and emitted via Project Reactor’s reactive streams.  
Aggregates are built using PostgreSQL views to reconstruct permission requests.

### Consequences

Positive consequences
- Uniform connector implementation pattern.
- High traceability and auditability of events.
- Improved maintainability and modularity.

Negative consequences
- Requires understanding of reactive programming and event sourcing principles.

### Alternatives

A traditional state-machine approach was abandoned in favor of event sourcing due to its scalability, traceability, and better handling of asynchronous communication.

## Management API Isolation

### Context

The EDDIE Framework exposes APIs serving different purposes and with different security requirements.
Public APIs are usually customer facing and integrated into the EDDIE Button or AIIDA.
Management APIs provide privileged administrative capabilities.

These interfaces have different security requirements and therefore require the ability to apply different access-control policies at the deployment level.

### Decision
Separate public and management interfaces through distinct network ports:

- Public interface (8080): exposes APIs required for integration with external applications.
- Management interface (9090): exposes privileged APIs used to administer and configure the EDDIE Framework.

The management interface is logically separated from the public interface to allow deployment environments to apply independent network and access-control policies.

The architectural decision does not prescribe a specific authentication or authorization mechanism.
Protection of the management interface may be implemented using infrastructure-level controls, such as network restrictions, reverse proxies, authentication gateways, or other access-control mechanisms appropriate to the deployment environment.

The ports and endpoint paths are configurable to support different deployment architectures.

### Consequences

Positive consequences
- Establishes a clear security boundary between public and privileged functionality.
- Allows management interfaces to be protected independently of public interfaces.
- Enables deployment-specific network and access-control policies.
- Reduces the exposure of privileged functionality to untrusted networks.
- Avoids coupling the EDDIE Framework to a specific authentication or authorization technology.

Negative consequences
- Introduces an additional network interface that must be configured and secured.
- Requires deployment environments to explicitly manage access to both public and management interfaces.
- Incorrect exposure or configuration of the management interface may weaken the intended security boundary.

### Alternatives

Exposing public and management APIs through a single network interface was considered. This would simplify network configuration but would make it more difficult to enforce distinct access-control policies for privileged functionality.

An alternative approach would be to enforce all access control within EDDIE Core. This was not selected because infrastructure-level protection provides greater flexibility for deployment-specific security requirements and avoids coupling the architecture to a particular authentication mechanism.