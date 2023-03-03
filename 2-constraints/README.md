# Architecture Constraints

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

Various constraints limit the design and implementation decisions. These constraints are divided into categories below.

## Political Constraints 

| Constraint | Description |
|------|------------|
| Data Space Interoperability | Interactions with Gaia-X compliant Data Spaces should be explored and, if possible, implemeted. |
| | |

## Technical Constraints 

| Constraint               | Description                                                                                                                                                                                                    |
|--------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| C1: Kafka communication  | The streaming of real-time data from AIIDA to EDDIE Framework over the Internet must implemented with Apache Kafka.                                                                                            |
| C2: P1 interface         | Real-time data from the smart meter must be collected over the P1 Port.                                                                                                                                        |
| C3: Distributed architecture | There shall be no central party aggregating data flows. A distributed data architecture must respect this principle.                                                                                           |
| C4: Secure communication | All communication between parties must be signed and encrypted to ensure authenticity and integrity of data exchange.                                                                                          |
| C5: Respect for subsidiarity | When implementing access to online data-sharing infrastructures, EDDIE Framework and its region connectors will integrate fully into MS data exchange environments, and not intervene into national decisions. |
|                          |                                                                                                                                                                                                                |
|                          |                                                                                                                                                                                                                |

