---
title: Deployment View
order: 4
---

## Overview
The AIIDA system runs mainly on an in-house device (e.g., a Raspberry Pi computer) and eligible party infrastructure. To access the real-time data, an Adapter Device connects to the smart meter via a physical interface, e.g., RJ12. The Adapter Device may vary to be compatible with different smart meters (e.g., in different countries). Different Adapter Devices can connect to the AIIDA Embedded App in different ways, e.g., via MQTT, or USB. The AIIDA Embedded App stores the real-time data to the TimescaleDB, and also sends this data to the AIIDA Regional Connector via MQTT. The AIIDA Regional Connector then communicates with the EDDIE Framework.

To configure the AIIDA Embedded App (e.g., to configure the IP address of the EMQX MQTT Broker of an eligible party) the AIIDA Smartphone App can be used. Specifically, the customer uses the AIIDA Smartphone App to scan a QR code from the EP Website. This QR code encodes the necessary information to connect to the AIIDA Regional connector. Then, the AIIDA Smartphone App, being in the same local area network with the in-house device, uses DNS Service Discovery to discover the AIIDA Embedded App, and send to the AIIDA Embedded App the encoded information of the QR code. With this information, the AIIDA Embedded App connects to the EMQX MQTT broker which creates a new user for this customer's AIIDA instance in the EMQX IAM Database for identity and access management. 

## Diagram
![](./figures/aiida_deployment_view.svg)

|Node | Description |
| - | - |
|In-house Device| The in-house device is a Raspberry Pi computer, which is operated by the customer. It is connected to the customer's local area network.|
|Smartphone|This is the customer's Smartphone which needs to be connected to the local area network as the in-house device to establish a connection between the AIIDA Smartphone App and the AIIDA Embedded App.|
|Smart Meter|The Smart Meter represents a metering device that collects energy data at the customer's household.|
|Adapter Device| An Adapter Device is needed to facilitate the connection between the smart meter and the AIIDA Embedded App. The Adapter Device may vary per customer in order to be compatible with each customer's specific smart meter. |
|Eligible Party Infrastructure| This is the computing infrastructure that hosts the EDDIE Framework. The AIIDA Regional Connector runs on this node and communicates with the EDDIE Core of the EDDIE Framework.|

