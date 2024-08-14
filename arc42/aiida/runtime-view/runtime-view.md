---
title: Runtime View
order: 3
---

## Overview

The main two functionalities of AIIDA are:
- Managing the connections to EDDIE Framework
- Share real-time data with EDDIE Framework

The access management is both device and time specific, meaning that each token/ QR Code for each device is created for a certain time, that can be defined by the customer. 

## Create a new connection
### Via AIIDA Frontend
![](./figures/aiida_new_connection_token.svg)

Via the EP Website the Customer creates a new token and inserts that into the provided form at the AIIDA Frontend. Afterwards the AIIDA Backend establishes a connection with the AIIDA Regional Connector, while the information about the connection is stored in the EMQX IAM Database.
### Via Smartphone App
![](./figures/aiida_new_connection_qr.svg)

With the AIIDA Smartphone App the Customer can as well scan the QR Code that was created by the EP Website. The connection is then established automatically.

## Send real-time data from devices
![](./figures/aiida_send_data.svg)

A device, that is somehow connected to the AIIDA Embedded App, streams the data to the AIIDA Backend. The backend forwards the data to the regional connector, where it is shared with the EP Infrastructure. 

On the other hand, the Customer can look at his/her own data by requesting it through the EP Website.