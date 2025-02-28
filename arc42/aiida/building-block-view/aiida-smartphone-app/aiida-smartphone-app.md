---
title: AIIDA Smartphone App
order: 2
---

## Overview

The AIIDA Smartphone App is a smartphone application for the customer developed using the Jetpack Compose framework. Similar to the AIIDA Frontend, the AIIDA Smartphone App needs to be connected to the same local area network as the AIIDA Embedded App. Using the local area network, the AIIDA Smartphone App uses DNS Service Discovery to find the port of the AIIDA Embedded App and establish a connection. Through the AIIDA Smartphone App, the customer can manage the connections and permissions of AIIDA (similar to the AIIDA Frontend). The AIIDA Smartphone App enables the following functionalities:

1. Scan a QR code from the EP website to configure the connection to the EDDIE Framework automatically.
1. View active and inactive connections/permissions.
1. Manage existing connections/permissions (e.g., activate, terminate, etc.)

When scanning a QR code from the EP Website, the AIIDA Smartphone App shows the available configurations to the customer who is expected to either accept the configurations (i.e., give permission for data access), or reject the configurations (i.e., deny the permission for data access). This is shown in the figure below.

![](./figures/aiida-app.png)

The termination of an active permission for data access can also be executed via the AIIDA App. This is illustrated in the figure below, which shows that the customer first has to select the "Terminate Permission" option (a), then confirm the termination (b), and then observe that the termination was executed by the status change to "TERMINATED".

![](./figures/aiida-app-termination.png)