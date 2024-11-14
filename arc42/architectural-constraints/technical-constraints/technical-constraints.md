---
title: Technical Constraints 
order: 1
---

| No. | Constraint | Description |
|-|-|-|
| 1 | Kafka communication  | The EDDIE Framework shall use [Apache Kafka](https://kafka.apache.org/) for distributing the energy data to the services. |
| 2 | P1 interface | Real-time data from the smart meter shall be collected via the P1 interface that operates over RJ12 as standardized by the [Dutch Smart Meter Requirements](https://www.netbeheernederland.nl/_upload/Files/Slimme_meter_15_a727fce1f1.pdf) (as required by [Article 20 (a) of Directive (EU) 2019/944](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32019L0944#020) for all smart metering systems deployed after July 5th 2019). |
| 3 | Distributed architecture | There shall be no central party aggregating all data flows. Each deployment of an EDDIE instance operated by an eligible party shall be independent and not be able to aggregate data from other eligible parties. EDDIE must follow a distributed architecture that respects this principle. |
| 4 | Secure communication | All communication between parties must be signed and encrypted to ensure the authenticity and integrity of the exchanged data. | 
| 5 | Integration into Member State data exchange requirements | All data gathered from online data infrastructure providers must be gathered from these infrastructures. EDDIE does not mandatorily interfere with Member State provisions, but integrates into the respective environments. However, it is part of the project to discover and document shortcomings to initiate much needed improvements. |