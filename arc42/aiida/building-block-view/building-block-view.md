---
title: Building Block View
order: 2
---

## Overview

This section describes the building block view of the AIIDA (Administration Interface for In-house Data Access) system. To this end, an overview of the AIIDA containers is provided, along with their interactions. The goal of the AIIDA system is to access the real-time energy data of the customer. After accessing the data from the household's in-house metering devices, AIIDA forwards this data to the EDDIE Framework. The following figure shows the containers of AIIDA. While AIIDA can connect with multiple different Adapter Devices to support various metering devices, e.g., smart meters in different countries, only one Adapter Device is shown in the figure for better readability.

 <C4 diagram="container-aiida" />

|Container|Description|
| - | - |
|[AIIDA Embedded App](./aiida-embedded-app/aiida-embedded-app.md)| The AIIDA Embedded App, consisting of a backend and a frontend, implements the core functionalities of AIIDA. The backend is a Spring Boot application that handles the data collection from the Adapter Device, storing the data to the Timescale DB, and forwarding the data to the EDDIE Framework. The frontend is a web application that provides an interface for the customer to manage the customer permissions, and the connections to the Adapter Device and the EDDIE Framework. |
|[AIIDA Smartphone App](./aiida-smartphone-app/aiida-smartphone-app.md)| The AIIDA Smartphone App is developed using the Jetpack Compose framework to provide a user interface for the customer to manage the AIIDA permissions and connections. The AIIDA Smartphone App also implements the functionality to scan a QR code from the EP-website in order to configure the connection between the AIIDA Embedded App and the EDDIE Framework automatically. Notably, to establish the connection between the AIIDA Smartphone App and the AIIDA Embedded App, the AIIDA Smartphone App uses DNS Service Discovery to discover the port where the AIIDA Embedded App is running. |
|[AIIDA regional connector](./aiida-regional-connector/aiida-regional-connector.md)| The AIIDA Regional Connector is a regional connector application of the EDDIE Framework. The AIIDA Regional Connector collects the energy data from the AIIDA Embedded App and sends it to the EDDIE Framework. Even though the AIIDA Regional Connector is part of the AIIDA system, it is a plugin of the EDDIE Framework, i.e., it runs along with the other regional connections of the EDDIE Framework.|
|[Adapter Devices](./devices/devices.md)| To connect with Metering Devices, AIIDA includes various Adapter Device. This is important because each country may be using a different smart meter that requires a specific Adapter Device. Country-specific Adapter Devices are currently supported for Austria, France, Italy and more.|
| [Timescale DB](./data-model/data-model.md) | Timescale DB is a database application that stores the state of the system including information about the customer permissions, the connections to the EDDIE Framework and the Adapter Devices, and the received energy data. |


