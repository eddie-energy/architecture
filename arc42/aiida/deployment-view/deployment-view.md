---
title: Deployment View
order: 4
---

## Overview

The AIIDA system primarily runs on an in-house device (e.g., a Raspberry Pi) and the eligible party's infrastructure. To access real-time data, the Adapter Device connects to the smart meter via a physical port, such as RJ12 using DSMR. The Adapter Device may vary depending on the type of device it needs to interface with, such as different smart meters or other energy-related devices, and may support various protocols based on the device model and its interface. These Adapter Devices can connect to the AIIDA Embedded App through different means, such as wireless or USB, depending on the model. The AIIDA Embedded App stores the real-time data in the Timescale DB and sends it to the AIIDA Regional Connector via MQTT. The AIIDA Regional Connector can then make this data available to the EDDIE Framework.

## Diagram
![](./figures/aiida_deployment_view.svg)

|Node | Description |
| - | - |
| In-house Device | The in-house device is a Raspberry Pi computer, which is operated by the customer. It is connected to the customer's local area network. |
| Smartphone | This is the customer's smartphone which needs to be connected to the local area network as the in-house device to establish a connection between the AIIDA Smartphone App and the AIIDA Embedded App. |
| Metering Device | The metering device, e.g., the smart meter of the customer, collects energy data at the customer's site. |
|Adapter Device| An Adapter Device is needed to facilitate the connection between the smart meter and the AIIDA Embedded App. The Adapter Device may vary per customer, as it must be compatible with each customer's specific metering device or other energy-related devices, and may support different protocols based on the model and interface of the connected device. All the supported Adapter Devices are mentioned the  [Adapter Device section](../building-block-view/adapter-device/adapter-device.md). |
|Eligible Party Infrastructure| This is the computing infrastructure that hosts the EDDIE Framework. The AIIDA Regional Connector is a plugin of the EDDIE Framework and communicates with the EDDIE Core. |

