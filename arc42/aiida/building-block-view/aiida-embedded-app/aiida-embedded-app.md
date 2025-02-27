---
title: AIIDA Embedded App
order: 1
---

### Overview

The AIIDA Embedded App handles the core functionalities of AIIDA. It consists of a backend and a frontend. The AIIDA Backend is a Spring Boot application that is responsible for accessing the real-time data from the Adapter Device and sending it to the EDDIE Framework. The AIIDA Frontend is a web application that provides an interface for the customer to manage the customer permissions, to configure connections to the Adapter Device and the EDDIE Framework, and to view status messages regarding permissions/connections.

<C4 diagram="aiida-embedded-app" />

## AIIDA Backend

The AIIDA Backend includes the follwoing components.

| Component | Responsibility |
| - | - |
| Aggregator | Connects to the Adapter Device and collects the real-time energy data. This data is sent to the Streamer, and is also stored in the Timescale DB. |
| Streamer | Receives the real-time energy data from the Aggregator and sends it to the AIIDA Regional Connector of the EDDIE Framework via MQTT. |
| Permission Manager | Handles the customer permission for access to real-time data, and stores all related information in the Timescale DB. The Permission Manager also configures the Streamer to start streaming the data to the AIIDA Regional Connector, when the customer permission has been granted. |
| Error Handler | Follows the operation of the AIIDA Backend and logs error messages regarding the access to energy data, the customer permissions, and any unexpected situation that might occur. |

## AIIDA Frontend

The AIIDA Frontend is a web application for the customer to access and configure the AIIDA Backend. To enable the communication between the AIDA Frontend and the AIIDA Backend, both components need to run on devices connected to the household's local area network. This is done for security purposes to ensure that only the customer can configure the AIIDA Backend. To configure the connection to the EDDIE Framework, the customer needs to access the EP Website first, and manually copy-paste the provided token (encoding the necessary information, e.g., the Regional Connector IP and connection ID) to the AIIDA Frontend. Alternatively, the customer can use the AIIDA App which automatically sends this information to the AIIDA Backend by scanning a QR code from the EP Website. Overall, the AIIDA Frontend enables the customer to: configure the connection to the Adapter Device, configure the connection to the EDDIE Framework, manage connections/permissions (e.g., create, activate, terminate, etc.), and view the status of existing connections/permissions.

