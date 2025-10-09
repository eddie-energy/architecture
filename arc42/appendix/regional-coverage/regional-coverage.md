---
title: Regional Coverage
---

::: warning TODO
To be moved to the eddie-energy/eddie repository as part of its documentation
:::

## What is a Region Connector?

Due to various reasons (e.g. legal constraints, energy data hubs, data models etc.) permissions as well as data can be provided differently by different countries/data hubs.
In order to meet these requirements, EDDIE Framework is architected in a way that accomodates these differences by enabling different implementations as well as architectures for specific region connectors as well.
These region connectors enable the customers or eligible parties to interact with the system via a common interface which abstracts these differences away, this easing the usage of permission requests, live data as well as historic energy data from these regional data hubs.

## Current State

The following table depicts current situation of EDDIE's region connector support.
It gets updated as new region connectors are developed or the development of existing ones advances.
The hourglass (⏳) depicts that a region connector is currently in development.
_Soon_ (🔜) shows that the development is immediately planned and research is currently conducted.

|     | Region      | Data Hub                                                 | Progress | Remarks                                                                                                           |
| --- | ----------- | -------------------------------------------------------- | -------- | ----------------------------------------------------------------------------------------------------------------- |
| 🇦🇹  | Austria     | [EDA](https://www.eda.at)                                | ✅       | TODO                                                                                                              |
| 🇩🇰  | Denmark     | [Energinet](https://en.energinet.dk/)                    | ✅       | TODO                                                                                                              |
| 🇫🇮  | Finland     | [Fingrid](https://www.fingrid.fi)                        | ⏳       | TODO                                                                                                              |
| 🇫🇷  | France      | Enedis                                                   | ⚠️       | Unstable                                                                                                          |
| 🇩🇪  | Germany     | TODO                                                     | 🔜       | TODO                                                                                                              |
| 🇳🇱  | Netherlands | [Mijn Aansluiting](https://www.mijnaansluiting.nl)       | ⏳       | TODO                                                                                                              |
| 🇪🇸  | Spain       | [Datadis](https://datadis.es)                            | ✅       | TODO                                                                                                              |
| 🇺🇸  | USA         | [Green Button](https://www.energy.gov/data/green-button) | ⏳       | TODO                                                                                                              |
| 🏠  | _AIIDA_     | [AIIDA](../../aiida/aiida.md)                          | ✅       | AIIDA also connects via a region connector, because this allowed us to reuse all of the existing infrastructre. |

## Planned Support

The EDDIE Framework will expand to support customers in many countries in three phases which are described below.

| Phase | Included Countries                                                                                        | Comment                                                                 |
| ----- | --------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| 1     | Austria, Germany, Italy, France, and Spain.                                                               | Compatibility with countries of contributors to the consortium.         |
| 2     | Norway, Finland, Estonia, Latvia, Lithuania, Poland, Greece, Netherlands, Belgium, Portugal, and Ireland. | Compatibility with other countries within Europe (excluded in Phase 1). |
| 3     | Australia, United Kingdom, and United States of America                                                   | Compatibility with countries outside Europe.                            |

- **Phase 1** will cover countries of contributors to the consortium. These countries may already add up to 68% of the European metering points.
- **Phase 2** will cover other Regional Data-sharing Infrastructures not directly in the project, which may add up to 22% of the European metering points.
- **Phase 3** will cover Regional Data-sharing Infrastructures outside Europe.

Thus, EDDIE aims at making available a big part of the European metering points, as shown below.

![](./figures/EDDIE_Coverage.jpg)
