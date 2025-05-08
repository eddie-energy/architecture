---
title: Building Block View
order: 2
---

## Overview

This section describes the building block view of the AIIDA (Administration Interface for In-house Data Access) system using the [C4 Model](https://c4model.com/). For this purpose, an overview of the AIIDA containers is provided, along with their interactions. The goal of the AIIDA system is to access the real-time energy data of the customer. After accessing the data from the customer's in-house metering devices, AIIDA sends this data to the EDDIE Framework. While AIIDA can connect with multiple different Adapter Devices to support various metering devices, e.g., smart meters in different countries, only one Adapter Device is shown in the figure for better readability.

 <C4 diagram="container-aiida" />

|Container|Description|
| - | - |
|[AIIDA Embedded App](./aiida-embedded-app/aiida-embedded-app.md)| The AIIDA Embedded App, consisting of a backend and a frontend, implements the core functionalities of AIIDA. The backend is a Spring Boot application that handles: data collection from the Adapter Device, storing the data in the Timescale DB, and sending the data to the EDDIE Framework. The frontend is a web application that provides an interface for the customer to manage the customer permissions, and the connections to the Adapter Device and the EDDIE Framework. |
|[AIIDA Smartphone App](./aiida-smartphone-app/aiida-smartphone-app.md)| The AIIDA Smartphone App is developed using the Jetpack Compose framework to provide a user interface for the customer to manage the AIIDA permissions and connections. The AIIDA Smartphone App also implements the functionality to scan a QR code from the EP website in order to configure the connection between the AIIDA Embedded App and the EDDIE Framework automatically. Notably, to establish the connection between the AIIDA Smartphone App and the AIIDA Embedded App, the AIIDA Smartphone App uses DNS Service Discovery to discover the port where the AIIDA Embedded App is running. |
|[AIIDA Regional Connector](./aiida-regional-connector/aiida-regional-connector.md)| The AIIDA Regional Connector is a regional connector application of the EDDIE Framework. The AIIDA Regional Connector collects the energy data from the AIIDA Embedded App and sends it to the EDDIE Framework. Even though the AIIDA Regional Connector is part of the AIIDA system, it is a plugin of the EDDIE Framework, i.e., it runs along with the other regional connectors of the EDDIE Framework. In addition to collecting energy data, the AIIDA Regional Connector can also send configuration requests to the AIIDA Embedded App, such as the request to cancel the streaming of data from the Embedded App to the AIIDA Regional Connector. |
|[Adapter Device](./adapter-device/adapter-device.md)| The Adapter Device is a device that sends energy-related data to the AIIDA Embedded App. It can be either an adapter to a metering device (such as a smart meter), or as an IoT device that measures energy data itself. AIIDA supports a wide range of Adapter Devices to ensure compatibility with multiple smart meters and IoT devices.|
| [Timescale DB](./data-models/data-models.md) | Timescale DB is a database application that stores the state of the system, including information about the customer permissions, the connections to the EDDIE Framework and the Adapter Devices, and the received energy data. |
