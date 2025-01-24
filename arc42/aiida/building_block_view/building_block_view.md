---
title: Building Block View
order: 2
---

## Overview
This section describes the static decomposition of AIIDA into building blocks. It aims to give an overview about the systems containers and components, as well as their interactions. The AIIDA system, which is short for Administration Interface for In-house Data Access, accesses and forwards real-time data at a customer's household. After getting the data from a household's on-site metering device, AIIDA forwards it to EDDIE Framework. The following picture shows the relevant containers of AIIDA, as well as its interactions with the environment. To keep a more compact picture, only one Adapter Device is shown. Other Adapter Devices might be connected in a different way, but otherwise cover the same functionality. 

<!--::: warning TO ADD
According to arc42, [the content should describe the static decomposition of the system into building blocks](https://docs.arc42.org/section-5/) (modules, components, subsystems, classes, interfaces, packages, libraries, frameworks, layers, partitions, tiers, functions, macros, operations, data structures, …) as well as their dependencies (relationships, associations, …)
::: 
[AIIDA embedded app](./embedded_app/embedded_app.md)
-->


## Diagram

 <C4 diagram="container-aiida" />


|Container|Description|
| - | - |
|[AIIDA embedded app](./embedded_app/embedded_app.md)|The AIIDA Embedded App, consisting of backend and frontend components, contains the core functionality of AIIDA. For the customer, it is accessible through the frontend or via the smartphone app. The backend handles data collection, processing, and forwarding the real-time data from the Smart Meter to the EDDIE Framework, while the frontend provides an interface for the customer to manage settings and permissions.|
|[AIIDA smartphone app](./aiida-smartphone-app/aiida-smartphone-app.md)|Via the smartphone app the customer can scan a QR-code from the EP-website that corresponds to the smart meter. While the connection establishes automatically, the customer can either grant or deny access for the collected data to be shared with EDDIE Framework.|
|[AIIDA regional connector](./aiida_regional_connectors/aiida_regional_connectors.md)|As for the regional connectors of EDDIE Framework, the AIIDA regional connector allows AIIDA to interact with EDDIE Framework, e.g. forwards energy data. As the AIIDA regional connector works as a plugin system, it is pictured as part of the AIIDA system, although it is deployed with EDDIE Framework.|
|[Adapter Devices](./devices/devices.md)|To connect with the smart meter, AIIDA includes a country-specific adapter device. The connection between the smart meter and the adapter device is established via several physical interfaces. A diagram for the country-specific adapter devices is shown below.|
|[Timescale DB](./embedded_app/embedded_app.md)|The Timescale Database stores energy data, gathered by the devices.|

## Country specific devices

The above picture only shows the connection of one Adapter Device as a default example. Nevertheless, the following devices are implemented: 
<C4 diagram="container-regional-devices" />



