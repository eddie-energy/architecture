---
title: Deployment View
order: 4
---

## Overview

The AIIDA system primarily runs on an in-house device (e.g., a Raspberry Pi) and the eligible party's infrastructure. To access real-time data, it relies on an Adapter Device, which sends energy-related data to the AIIDA Embedded App. The Adapter Device can be either an adapter to a metering device (such as a smart meter) or an IoT device that measures energy data itself. Depending on the Adapter Device type and model, it may use different communication protocols both for connecting to the AIIDA Embedded App (e.g., MQTT over Wi-Fi), and for connecting to the metering device (e.g., DSMR over RJ12). The AIIDA Embedded App stores real-time data in the Timescale DB and also sends this data to the AIIDA Region Connector via MQTT, which then makes the data available to the EDDIE Framework.

## Diagram
![](./figures/aiida_deployment_view.svg)

|Node | Description |
| - | - |
| In-house Device | The in-house device is a Raspberry Pi computer, which is operated by the customer. It is connected to the customer's local area network. |
| Smartphone | This is the customer's smartphone which needs to be connected to the local area network as the in-house device to establish a connection between the AIIDA Smartphone App and the AIIDA Embedded App. |
| Metering Device | The metering device, e.g., the smart meter of the customer, collects energy data at the customer's site. |
|Adapter Device| The Adapter Device is a device that sends energy-related data to the AIIDA Embedded App. Multiple Adapter Devices are supported, each one providing different connectivity options. The supported Adapter Devices and their connectivity are mentioned in the Adapter Device [section](../building-block-view/adapter-device/adapter-device.md). |
|Eligible Party Infrastructure| This is the computing infrastructure that hosts the EDDIE Framework. The AIIDA Region Connector is a plugin of the EDDIE Framework and communicates with the EDDIE Core. |

