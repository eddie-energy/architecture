---
title: Architecture Constraints
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

Various constraints limit the design and implementation decisions of this architecture. These constraints are divided into two categories below, i.e., political constraints, and technical constraints.

## Political Constraints 

| No. | Constraint | Description |
|-|-|-|
| 1 | Data space interoperability | Interactions with Gaia-X compliant Data Spaces should be explored and, if possible, implemeted. |
| 2 | Respect for subsidiarity | When implementing access to online data-sharing infrastructures, EDDIE Framework and its region connectors will integrate fully into MS data exchange environments, and not intervene into national decisions. |
| 3 |  |  |

## Technical Constraints 

| No. | Constraint | Description |
|-|-|-|
| 1 | Kafka communication  | The EDDIE Framework shall use Apache Kafka for distributing the energy data to the services. |
| 2 | P1 interface | Real-time data from the smart meter shall be collected over the P1 Port. |
| 3 | Distributed architecture | There shall be no central party aggregating data flows. A distributed data architecture must respect this principle. |
| 4 | Secure communication | All communication between parties must be signed and encrypted to ensure authenticity and integrity of data exchange. | 
| 5 |  |  |

