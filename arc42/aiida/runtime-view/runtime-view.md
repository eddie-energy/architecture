---
title: Runtime View
order: 3
---

## Overview

The main workflows of AIIDA are:
- [Create a new connection to the EDDIE Framework](./runtime-view.md#create-a-new-connection-to-the-eddie-framework)
    - [Via the AIIDA Frontend](./runtime-view.md#via-the-aiida-frontend)
    - [Via the AIIDA Smartphone App](./runtime-view.md#via-the-aiida-smartphone-app)
- [Stream energy data from the Metering Device to the EDDIE Framework](./runtime-view.md#stream-energy-data-from-the-metering-device-to-the-eddie-framework)

## Create a new connection to the EDDIE Framework 

### Via the AIIDA Frontend

![](./figures/aiida_new_connection_token.svg)

Via the EP Website, the customer can create a token that encodes the necessary information to establish a connection with the AIIDA Region Connector (e.g., the Region Connector IP and connection ID) and copy-paste this token to the AIIDA Frontend which sends it to the AIIDA Backend. Afterwards, the AIIDA Backend uses the token information to establish a connection with the AIIDA Region Connector which creates a new user at the EMQX IAM Database.

This workflow includes the following steps:

1. The customer requests to connect to AIIDA by clicking a button on the EP website.
1. The EP Website requests to create a new connection to the AIIDA Region Connector, and to provide the QR code/token for establishing this connection.
1. The AIIDA Region Connector generates a Token and a QR code, and shows them on the EP Website.
1. The token and the QR code are shown to the customer.
1. The customer copy-pastes the token at the AIIDA frontend, and gives permission to AIIDA to stream energy data.
1. The AIIDA Frontend forwards the token information and the customer permission to the AIIDA Backend.
1. The AIIDA Backend uses the token information to establish a connection to the AIIDA Region Connector via MQTT. After the connection is established, energy data can be streamed from the AIIDA Embedded App to the AIIDA Region Connector which makes the data available to the EDDIE Framework.
1. The AIIDA Region Connector creates a new user at the EMQX IAM Database for authentication.

To revoke the customer permission and stop streaming data, the customer accesses the AIIDA Frontend where all the permissions and connections can be managed. 

### Via the AIIDA Smartphone App

![](./figures/aiida_new_connection_qr.svg)

Via the EP Website, the customer can create a QR code that encodes the necessary information to establish a connection with the AIIDA Region Connector (e.g., the Region Connector IP and connection ID) and scan this QR code using the AIIDA Smartphone App which sends it to the AIIDA Backend. Afterwards, the AIIDA Backend uses the QR code information to establish a connection with the AIIDA Region Connector which creates a new user at the EMQX IAM Database.

This workflow includes the following steps:

1. The customer requests to connect to AIIDA by clicking a button on the EP website.
1. The EP Website requests to create a new connection to the AIIDA Region Connector, and to provide the QR code/token for establishing this connection.
1. The AIIDA Region Connector generates a Token and a QR code, and shows them on the EP Website.
1. The token and the QR code are shown to the customer.
1. The customer scans the QR code using the AIIDA Smartphone App, and gives permission to AIIDA to stream the energy data.
1. The AIIDA Smartphone App forwards QR code information and the customer permission to the AIIDA Backend.
1. The AIIDA Backend uses the QR code information to establish a connection to the AIIDA Region Connector via MQTT. After the connection is established, energy data can be streamed from the AIIDA Embedded App to the AIIDA Region Connector which makes the data available to the EDDIE Framework.
1. The AIIDA Region Connector creates a new user at the EMQX IAM Database for authentication.

To revoke the customer permission and stop streaming data, the customer accesses the AIIDA Smartphone App where all the permissions and connections can be managed. 

## Stream energy data from AIIDA to the EDDIE Framework

![](./figures/aiida_request_data.svg)

After a connection has been established in AIIDA, the AIIDA Embedded App can stream energy data from Adapter Devices to the AIIDA Region Connector.

1. In case the Adapter Device is connected to a Metering Device, first, the Metering Device sends the energy data to the Adapter Device via a supported protocol, e.g., DSMR over RJ12.
1. The Adapter Device either receives data from a Metering Device or generates energy data itself, and sends this data to the AIIDA Embedded App, e.g., via MQTT.
1. The AIIDA Embedded App stores the energy data in the Timescale DB.
1. The AIIDA Embedded App streams the energy data to the AIIDA Region Connector via MQTT.
1. The AIIDA Region Connector streams the energy data to the Service of the eligible party via Kafka.
