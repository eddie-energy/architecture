---
title: Risks and Technical Debts
order: 13
---

<!-- "Risk management is project management for grown-ups" (Tim Lister,
Atlantic Systems Guild.)

List of risks and/or technical debts ordered by
priority, probably including suggested
measures to minimize, mitigate or avoid risks or reduce technical debts. -->


Various technical risks and technical debts are identified during the design of the EDDIE system. Technical risks refer to unwanted or unexpected behaviors that could negatively impact the system's operation. Technical debt encompasses identified behaviors, solutions, and concepts that could enhance system performance but have not been implemented.

## Risks
The identified risks are categorized into two groups:

### 1. Risks for Developers

| Risk |Description| Applicable Measures |
|-|-|-|
| Monolithic Architecture| EDDIE is developed and deployed as a monolithic application primarily using Java. This architecture limits extensibility since plugins can only be developed in Java, restricting the use of other programming languages. | Gradually transition to a modular architecture or adopt a microservices approach to allow the integration of other languages. Additionally, define and implement a clear plugin API that supports cross-language compatibility through standard protocols (e.g., REST, gRPC).|
|Multitenancy Workarounds|EDDIE was not initially designed for multitenancy. The current implementation uses workaround mechanisms, introducing potential risks related to security and stability.|Implement tenant isolation through database-level segregation or row-level security. Refactor the application to natively support multitenancy with scalable and secure tenant management capabilities.|
|Security|The lack of a robust, multitenancy-first design increases the risk of data breaches or unauthorized access.|Conduct regular security audits focusing on multitenancy-specific risks and implement tenant isolation mechanisms, such as sandboxing or scoped access controls, to enhance security.|
|Stability| Workarounds may lead to unpredictable behavior or system crashes under specific conditions.|Perform thorough load testing and edge-case testing to identify and address stability issues. Develop a migration plan to refactor the system for native multitenancy support.|

### 2. Risks for Users

| Risk |Description| Applicable Measures |
|-|-|-|
|Unvalidated Data| AIIDA could send unvalidated data that diverges from validated values. This could lead to incorrect processing or decisions within the framework.|Implement stricter data validation mechanisms at the point of entry to ensure all incoming data meets expected standards. Further develop fallback strategies or error handling to mitigate the impact of invalid data during runtime.|
|API Instability| The Regional Data-sharing Infrastructure (RDI) may modify its APIs without prior notice, rendering the regional connector non-functional. This can disrupt critical integrations and cause delays.|Update the affected Regional Connector. Establish automated monitoring tools to detect API changes and alert developers. Maintain a buffer layer in the architecture that decouples direct API usage, enabling easier updates when changes occur.|
|Upload Bottlenecks| AIIDA may cause upload bottlenecks due to limited bandwidth.| Reduce volume or frequency of real-time data transmissions. |


## Technical Debt
The following areas represent unresolved technical debt that must be addressed to ensure system maintainability and stability:

| Debt |Description| Applicable Measures |
|-|-|-|
|Legacy CSS Framework|The Bootstrap CSS framework is still in use for simulation purposes, specifically for simulating communication with the Meter Data Administrator (MDA). This dependency should be replaced with a modern or custom solution to align with current standards and improve maintainability.|Replace Bootstrap with a more lightweight and modern CSS framework, or develop a custom styling solution tailored to project needs. Perform regression testing after replacing the framework to verify consistency in the simulation output.|
|API Change Detection|Related to the risk of API instability, there is no established mechanism to identify or anticipate changes in third-party APIs. A proactive solution, such as subscribing to relevant newsletters or implementing automated monitoring tools, should be developed to enable developers to adapt API calls effectively.|Develop a subscription process for API updates through newsletters or RSS feeds. Implement automated tools (e.g., API schema diff tools) to detect changes in third-party APIs and provide actionable insights to developers.|
