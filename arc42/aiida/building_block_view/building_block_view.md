---
title: Building Block View
order: 2
---

## Overview
This section describes the static decomposition of AIIDA into building blocks. It aims to give an overview about the systems containers and components, as well as their interactions. The AIIDA system, which is short for Administration Interface for In-house Data Access, accesses and forwards real-time data at a customers household. After getting the data from a households on-site metering device, AIIDA forwards it to EDDIE Framework. The following picture shows the relevant containers of AIIDA, as well as its interactions with the environment. To keep a more compact picture, only the device of Austria is shown. Other devices might be connected in a different way, but otherwise cover the same functionality. 

<!--::: warning TO ADD
According to arc42, [the content should describe the static decomposition of the system into building blocks](https://docs.arc42.org/section-5/) (modules, components, subsystems, classes, interfaces, packages, libraries, frameworks, layers, partitions, tiers, functions, macros, operations, data structures, …) as well as their dependencies (relationships, associations, …)
::: 
[AIIDA embedded app](./embedded_app/embedded_app.md)
-->


## Diagram

 <C4 diagram="container-aiida" />


|Container|Description|
| - | - |
|[AIIDA embedded app](./embedded_app/embedded_app.md)|The AIIDA embedded app contains the core functionality of AIIDA. For the customer, it is accessible through a frontend or via the smartphone app. Its main purpose is to forward the real-time data, that was collected at the Smart Meter to the EDDIE Framework. Via the frontend or smartphone app, the customer can manage the permission of shared data.|
|[AIIDA smartphone app](./aiida-smartphone-app/aiida-smartphone-app.md)|Via the smartphone app the customer can scan a QR-code from the EP-website that corresponds to the smart meter. While the connection establishes automatically, the customer can either grant or deny access for the collected data to be shared with EDDIE Framework.|
|[AIIDA regional connector](./aiida_regional_connectors/aiida_regional_connectors.md)|As for the regional connectors of EDDIE Framework, the AIIDA regional connector allows AIIDA to interact with EDDIE Framework, e.g. forwards energy data. As the AIIDA regional connector works as a plugin system, it is pictured as part of the AIIDA system, although it is deployed with EDDIE Framework.|
|[Devices](./devices/devices.md)|To connect with the smart meter, AIIDA includes a country specific device. The connection between the smart meter and the device is established via several physical interfaces. A diagram for the country specific devices is shown below.|
|[Timescale DB](./embedded_app/embedded_app.md)|The Timescale Database stores energy data, gathered by the devices.|

## Country specific devices

The above picture only shows the connection to the device Austria as a default example. Nevertheless, the following devices are implemented as well: 
<C4 diagram="container-regional-devices" />



