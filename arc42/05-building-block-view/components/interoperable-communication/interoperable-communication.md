---
title: Inter. Communication
---

#### Interoperable Communication

The internal structure of the Interoperable Communication component is shown below. The Interoperable Communication is a collection of regional connectors. Each regional connector implements the functionality to access the APIs of the Regional Data-sharing Infrastructure of a specific country.

<div align="center">
<img src="./figures/component-diagram-level-3-inter-comm.png" width="700">
</div>

The included components are the following:



| Component | Responsibility | Link |
| - | - | - |
| Regional Connector | Implements the functionality to access the APIs of a country-specific Regional Data-sharing Infrastructure, e.g., to request the consent of the consumer. | [Link](./regional-connectors/regional-connectors.md)|
| Message Producer  | Receives energy data from a regional connector and publishes it to the Streaming Infrastructure. |  |

