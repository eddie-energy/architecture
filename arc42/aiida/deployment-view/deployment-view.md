---
title: Deployment View
order: 4
---

## Overview
The AIIDA system runs on a simple raspberry Pi computer, including the embedded app, as well as further components, like a timscaleDB for storing energy data and a MQTT broker, as the austrian device sends the data via MQTT protocol. The country specific devices are somehow connected to the AIIDA device, f.e. as a raspberry Pi shield or via USB. As mentioned at the section of the building block view, the regional connector for AIIDA works as a plugin system, which is deployed at EDDIE Framework. Therefore it is shown has part of AIIDA System for the building block view, but not as part of the AIIDA device. Both, AIIDA Device and the smartphone app have to be in the same network to communicate.

To collect the data from AIIDA the EDDIE Framework also needs a MQTT broker. When scanning a QR Code, the smartphone sends the information to connect to the MQTT broker. With the first connection to the MQTT broker a user for the connected instance is created in the EMQX IAM Database for identity access management, so that it is recognised by the broker. After creating a user, each AIIDA instance stores its energy data in its own account.
The AIIDA deployment view zooms into the highest level depolyment view, defining the environment for AIIDA in specific.

## Diagram

|Node | Description |
| - | - |
|AIIDA Device| The AIIDA Device is a raspberry Pi computer, which is operated by the customer. It is connected to the local network.|
|Smartphone|The Smartphone must be at the same lokal network as the AIIDA Device, to establish a connection with the App to AIIDA.|
|Smart Meter|The Smart Meter collects the data at the customers household and needs to be connected to AIIDA with a device, like the smart meter adapter for Austria f.e.|
|Country specific devices|Countrys may define different ways for the Smart Meter to be connected to AIIDA. Austria For example uses a MQTT protocol to send the data, Italy uses MODBUS TCP protocol. More information can be found at Devices.|
