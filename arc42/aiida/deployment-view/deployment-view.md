---
title: Deployment View
order: 4
---

## Overview

The AIIDA system primarily runs on an in-house device (e.g., a Raspberry Pi) and the eligible party's infrastructure. To access real-time data, it relies on an Adapter Device, which sends energy-related data to the AIIDA Embedded App. The Adapter Device can either be an adapter for a metering device, such as a smart meter, or an IoT device that generates energy data. Depending on the device type and model, it may use different communication protocols for both connecting to the AIIDA Embedded App (e.g., MQTT over Wi-Fi) and interfacing with the metering device (e.g., DSMR over RJ12). The AIIDA Embedded App stores real-time data in the Timescale DB and transmits it to the AIIDA Regional Connector via MQTT, which then makes the data available to the EDDIE Framework.

## Diagram
![](./figures/aiida_deployment_view.svg)

|Node | Description |
| - | - |
| In-house Device | The in-house device is a Raspberry Pi computer, which is operated by the customer. It is connected to the customer's local area network. |
| Smartphone | This is the customer's smartphone which needs to be connected to the local area network as the in-house device to establish a connection between the AIIDA Smartphone App and the AIIDA Embedded App. |
| Metering Device | The metering device, e.g., the smart meter of the customer, collects energy data at the customer's site. |
|Adapter Device| The Adapter Device is a device that sends energy-related data to the AIIDA Embedded App. It may support various communication protocols depending on the connected device's specifications and requirements. All the supported Adapter Devices are mentioned the  [Adapter Device section](../building-block-view/adapter-device/adapter-device.md). |
|Eligible Party Infrastructure| This is the computing infrastructure that hosts the EDDIE Framework. The AIIDA Regional Connector is a plugin of the EDDIE Framework and communicates with the EDDIE Core. |

