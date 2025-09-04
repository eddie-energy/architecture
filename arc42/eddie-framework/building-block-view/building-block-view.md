---
title: Building Block View
order: 2
---

This section describes the building block view of the EDDIE Framework using the [C4 Model](https://c4model.com/). For this purpose, an overview of the EDDIE containers is provided, along with their interactions. The goal of the EDDIE Framework is to enable Eligible Parties to access energy data from Regional Data-sharing infrastructures and stream this data to their own services. At its core, the EDDIE Application establishes permissions with Permission Administrators, retrieves validated historical data from Metered Data Administrators, and delivers this data through outbound connectors to the Eligible Party’s environment. To ease adoption and integration, the EDDIE Framework also includes companion containers that support administrative features such as authentication, monitoring, and persistence. While these companion containers are recommended and instructions are provided, they are not shipped with the main application and must be provided by the Eligible Party.

<C4 diagram="container-eddie-framework" />

| Container | Description |
| - | - |
| EDDIE Application | The EDDIE Application is the core backend of the framework. It is implemented as a modular monolith using Spring, packaged as a single JAR and deployed inside a Docker container. The application establishes permissions with Permission Administrators, retrieves energy data from Metered Data Administrators, and streams this data to the Eligible Party. |
| Admin Console | The Admin Console is a Vue-based frontend bundled with the EDDIE Application JAR. It allows the Eligible Party to manage Data Needs, configure and monitor Region Connectors, oversee active permissions, and view metrics on permission events and data exchanges. |
| System Monitoring | System monitoring is provided through companion containers chosen by the Eligible Party. We recommend OpenTelemetry for data collection, Prometheus for metrics, Loki for logs, Jaeger for traces, and Grafana for visualization and notifications. Monitoring is optional and can be enabled by the Eligible Party as needed. |
| Authentication Management | Authentication and authorization are handled by a companion container. The framework supports any OAuth provider, but deployment instructions assume Keycloak. This container is optional and provided by the Eligible Party. |
| Database | The framework requires a PostgreSQL database as a companion container. It stores system state, permissions, Data Needs, and metrics about permission events and data exchanges. |

## EDDIE Application

The application uses a plugin architecture for both inbound and outbound data exchange.
_Inbound_ referring to the retrieval of energy data from the data provider, 
and _outbound_ to the communication with the Eligible Party, 
where individual plugins can be enabled to support specific data providers or data exchange protocols. 
These plugins are referred to as _Regional Connectors_ and _Outbound Connectors_.

<C4 diagram="component-eddie-application" />

| Component | Description |
| - | - |
| EDDIE Popup | The EDDIE Popup is a frontend micro-frontend embedded into the website of the Eligible Party. It provides the customer-facing user interface for permission requests, guiding the customer through all required steps to grant or revoke access to their energy data. |
| EDDIE Core | The EDDIE Core is the Spring backend entry point of the framework, packaged as a single JAR inside a Docker container. It orchestrates all other modules and facilitates the flow of information between Region Connectors and Outbound Connectors. |
| Master Data API | The Master Data API is a backend service of the EDDIE Application. It provides metadata about business entities such as Permission Administrators and Metered Data Administrators. |
| Data Needs API | The Data Needs API is part of the EDDIE Application backend. It allows the Eligible Party to manage the data requirements of their services, specifying what type of data should be collected for each permission. |
| [Regional Connectors](./regional-connectors/regional-connectors.md) | Region Connectors are backend plugins implemented within the EDDIE Application. Each connector integrates with the APIs of a specific Regional Data-sharing infrastructure (e.g., PA/MDA systems), handling permission requests and collecting validated historical data and accounting point data. |
| Outbound Connectors | Outbound Connectors are backend plugins in the EDDIE Application that handle data delivery to the Eligible Party. They can support multiple protocols such as REST, Kafka, or AMQP. While EDDIE provides the connector plugins, the actual Kafka/AMQP infrastructure must be provided by the Eligible Party. |
