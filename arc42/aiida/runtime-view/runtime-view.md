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

This workflow includes the following steps:

1. The user clicks the AIIDA connect button on the EP website.
2. A Token and a QR code is generated for the user to establish a connection.
3. The user copies the token from the ep website.
4. The user inserts the token at the AIIDA frontend.
5. Through copying the token, the AIIDA backend recieves the information, that a new permission was granted.
6. The backend establishes a connection with the regional connector for AIIDA, to share data with EDDIE Framework.
7. The AIIDA regional connector connects with EDDIE Framework, where a new user is created at the IAM Database, to store the energy data.



### Via Smartphone App
![](./figures/aiida_new_connection_qr.svg)

With the AIIDA Smartphone App the Customer can as well scan the QR Code that was created by the EP Website. The connection is then established automatically.

1. The user clicks the AIIDA connect button on the EP website.
2. A Token and a QR code is generated for the user to establish a connection.
3. The user scans the QR-Code with a smartphone.
4. The AIIDA Smartphone app establishes a connection  with the AIIDA regional connector, to enforce a new permission.
5. The AIIDA regional connector connects with EDDIE Framework, where a new user is created at the IAM Database, to store the energy data.

## Send real-time data from devices
![](./figures/aiida_send_data.svg)

A device, that is somehow connected to the AIIDA Embedded App, streams the data to the AIIDA Backend. The backend forwards the data to the regional connector, where it is shared with the EP Infrastructure. 

1. A device, that is somehow connected to energy collecting systems in a household, sends energy data to the AIIDA embedded app.
2. The embedded app forwards the data to the AIIDA regional connector.
3. The energy data is stored inside the households user account at the IAM database.

On the other hand, the Customer can look at his/her own data by requesting it through the EP Website.

4. To see his/her own energy data, the customer clicks a button on the EP website. 
5. The EP website forwards the request to the IAM database.
6. The IAM Database sends its answer (e.g. data) to the EP Website.
7. The data is shown at the EP website.
