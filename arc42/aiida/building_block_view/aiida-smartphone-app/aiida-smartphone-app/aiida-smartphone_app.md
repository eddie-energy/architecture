---
title: AIIDA Smartphone App
order: 2
---

## Overview

The AIIDA App is a smartphone application for the customer to access and configure the AIIDA Backend of the embedded app, similar to the AIIDA Frontend. Since the AIIDA Backend runs on the in-house device connected to the house's local area network, the AIIDA App needs to be on the same network as well. This is done for security purposes so that only the customer can configure the AIIDA BAckend. The AIIDA App is shown in the figure below.

>[!WARNING]
> The following image got lost and there are currently no further chapters describing the **AIIDA Frontend**.
> 
> `![](../aiida-frontend/figures/aiida-frontend.svg)`

The AIIDA App enables the following functionalities:

1. Scan a QR code from the EP website to configure the connection to the Smart Meter and the EDDIE Framework automatically.
1. View active and inactive connections/permissions.
1. Manage existing connections/permissions (e.g., activate, terminate, etc.)

When scanning a QR code from the EP Website, the AIIDA App shows the configurations to the customer who is expected to either accept the configurations (i.e., give permission for data access), or reject the configurations (i.e., deny the permission for data access). This is shown in the figure below.

![](./figures/aiida-app.png)

The termination of an active permission for data access can also be executed via the AIIDA App. This is shown in the figure below which shows that the customer first has to select the "Terminate Permission" option (a), then confirm the termination (b), and then observe that the termination was executed by the status change to "TERMINATED".

![](./figures/aiida-app-termination.png)

After scanning the QR-Code the AIIDA App first establishes a connection with the Backend of the AIIDA embedded app via DNS Service Discovery, which means that both services have to be in the same network. After the connection is established information that was accessed via scanning the QR-code (f.e. how to connect to the regional connector) is sent through a REST-API via HTTP. 