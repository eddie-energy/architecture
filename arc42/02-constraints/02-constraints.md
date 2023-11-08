---
title: Architectural Constraints
---

<!-- Any requirement that constraints software architects in their freedom of
design and implementation decisions or decisions about the development
process. These constraints sometimes go beyond individual systems and
are valid for whole organizations and companies.

Architects should know exactly where they are free in their design
decisions and where they must adhere to constraints. Constraints must
always be dealt with; they may be negotiable, though.

Simple tables of constraints with explanations. If needed you can
subdivide them into technical constraints, organizational and political
constraints and conventions (e.g. programming or versioning guidelines,
documentation or naming conventions) -->

Various constraints limit the design and implementation decisions of the architecture of the EDDIE Framework. These constraints are divided into two categories below, i.e., political constraints, and technical constraints.

## Political Constraints 

| No. | Constraint | Description |
|-|-|-|
| 1 | Distributed data management | Data is always transferred only from the source to the sink. For the sake of data sharing or communication under the scope of energy-related business processes, there must be no platforms in the middle needed. |
| 2 | Respect for subsidiarity | When implementing access to online data-sharing infrastructures, the EDDIE Framework will integrate fully into Member State data exchange environments, and not intervene into national decisions. This can even be boiled further down to regions. EDDIE supports value creation to stay at local levels and therefore highly supports value streams created by local energy communities and service providers. |
| 3 | Customer sovereignty | The need for sharing data to participate in new energy services must not lead to any loss of data access control of the customers whose data is stored and used. Also, deliverables of the project must be adapted to be easily usable, and provide customers with an understandable overview about the flow of their data. |
| 4 | Data space interoperability | Interactions with relevant European data space initiatives shall be sought and explored and, if possible, implemented. |
| 5 | European viewpoint | EDDIE's primary perspective is a European one. We do not build for national environments, but for and upon European-wide functionality. |
| 6 | Utilize existing infrastructure | EDDIE aims to build as far as possible on existing and already rolled-out hardware and infrastructure. This rule does not only affect utility-owned infrastructure, but also in-house standard home automation and IT shall be utilized. |

## Technical Constraints 

| No. | Constraint | Description |
|-|-|-|
| 1 | Kafka communication  | The EDDIE Framework shall use Apache Kafka for distributing the energy data to the services. |
| 2 | P1 interface | Real-time data from the smart meter shall be collected over the standardized interface as required by Article 20 (a) of Directive (EU) 2019/944 for all smart metering systems deployed after July 5th 2019. |
| 3 | Distributed architecture | There shall be no central party aggregating data flows. A distributed data architecture must respect this principle. |
| 4 | Secure communication | All communication between parties must be signed and encrypted to ensure the authenticity and integrity of the exchanged data. | 
| 5 | Integration into Member State data exchange requirements | All data gathered from online data infrastructure providers must be gathered from these infrastructures. EDDIE does not mandatorily interfere with Member State provisions, but integrates into the respective environments. However, it is part of the project to discover and document shortcomings to initiate much needed improvements. |

