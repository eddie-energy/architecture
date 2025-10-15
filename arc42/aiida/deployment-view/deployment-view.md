---
title: Deployment View
order: 4
---

## Overview

The AIIDA system primarily runs on an in-house device (e.g., a Raspberry Pi) and the eligible party's infrastructure. To
access near real-time data, it relies on a Data Source, which sends energy-related data to the AIIDA application. The
Data Source can be either an adapter to a metering device (such as a smart meter) or an IoT device that measures energy
data itself. Depending on the Data Source type and model, it may use different communication protocols both for
connecting to the AIIDA application (e.g., MQTT over Wi-Fi), and for connecting to the metering device (e.g., DSMR over
RJ12). The AIIDA application stores near real-time data in the Timescale DB and also sends this data to the AIIDA
Region Connector via MQTT, which then makes the data available to the EDDIE Framework.

## Diagram

![](./figures/aiida_deployment_view.svg)

| Node                          | Description                                                                                                                                                                                                                                                                                                                |
|-------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| In-house Device               | The in-house device is a Raspberry Pi computer, which is operated by the customer. It is connected to the customer's local area network.                                                                                                                                                                                   |
| Measuring Device              | The measuring device, e.g., the smart meter of the customer, collects energy data at the customer's site.                                                                                                                                                                                                                  |
| Data Source                   | The Data Source is a device that sends energy-related data to the AIIDA application. Multiple Data Sources are supported, each one providing different connectivity options. The supported Data Sources and their connectivity are mentioned in the Data Source [section](../building-block-view/data-source/data-source). |
| Eligible Party Infrastructure | This is the computing infrastructure that hosts the EDDIE Framework. The AIIDA Region Connector is a plugin of the EDDIE Framework and communicates with the EDDIE Core.                                                                                                                                                   |

