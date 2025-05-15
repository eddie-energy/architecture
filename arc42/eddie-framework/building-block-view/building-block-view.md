---
title: Building Block View
order: 2
---

<C4 diagram="container-eddie-framework" />

| Container                 | Description                                                                                                                                                           |
|---------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| EDDIE Application         | Modular monolith to establish permissions and retrieve energy data from various data providers and stream it to the eligible party.                                   |
| Admin Console             | Allows the eligible party to manage data needs, manage permissions and their status, view the system state, and view metrics on permission events and data exchanges. |
| System Monitoring         | Aggregate logs and exceptions to analyze and debug the system.                                                                                                        |
| Authentication Management | Authenticates and authorizes users acting on behalf of the eligible party.                                                                                            |
| Database                  | Stores system state, permissions, data needs, as well as permission event and data exchange metrics.                                                                  |

## EDDIE Application

<C4 diagram="component-eddie-application" />

| Component           | Description                                                                                                                                                               |
|---------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| EDDIE Popup         | The user interface for permission requests is embedded into the website of the eligible party and guides the user through all steps necessary to share their energy data. |
| EDDIE Core          | Entry point of the application that orchestrates other modules and facilitates the flow of information between region connectors and outbound connectors.                 |
| Master Data API     | Provides data on related business entities like permission administrators and metered data administrators.                                                                |
| Data Needs API      | Allows the eligible party to manage the data requirements of their services.                                                                                              |
| Region Connectors   | Each region connector implements the necessary workflows to access energy data from a specific regional infrastructure.                                                   |
| Outbound Connectors | Each outbound connector handles the data exchange with the eligible party through a specific technology like Kafka or AMQP.                                               |
