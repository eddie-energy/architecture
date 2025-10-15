---
title: AIIDA Embedded App
order: 1
---

### Overview

The AIIDA Embedded App handles the core functionalities of AIIDA. It consists of a backend and a frontend. The AIIDA
Backend is a Spring Boot application that is responsible for accessing the near real-time data from the Data Source and
sending it to the EDDIE Framework. The AIIDA Frontend is a Vue web application that provides an interface for the customer
to manage the customer permissions, to configure connections to the Data Source and the EDDIE Framework, and to view
status messages regarding permissions/connections.

<C4 diagram="aiida-embedded-app" />

## AIIDA Backend

The AIIDA Backend includes the following components.

| Component           | Responsibility                                                                                                                                                                                                                                                                                                                                  |
|---------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Data Source Adapter | Connects to the Data Source, collects and parses the near real-time energy data. The data is sent to the Aggregator.                                                                                                                                                                                                                            |
| Aggregator          | Filters and buffers the near real-time energy data accordingly. This data is sent to the Streamer, and is also stored in the Timescale DB.                                                                                                                                                                                                      |
| Streamer            | Receives the near real-time energy data from the Aggregator and sends it to the AIIDA Region Connector of the EDDIE Framework via MQTT.                                                                                                                                                                                                         |
| Permission Manager  | Handles the customer permission for access to near real-time data, and stores all related information in the Timescale DB. The Permission Manager also configures the Streamer to start streaming the data to the AIIDA Region Connector, when the customer permission has been granted.                                                        |

## AIIDA Frontend

The AIIDA Frontend is a web application for the customer to access and configure the AIIDA Backend. To enable the
communication between the AIIDA Frontend and the AIIDA Backend, both components need to run on devices connected to the
household's local area network. This is done for security purposes to ensure that only the customer can configure the
AIIDA Backend. To configure the connection to the EDDIE Framework, the customer needs to access the EP Website first,
and manually copy-paste the provided token (encoding the necessary information, e.g., the Region Connector IP and
connection ID) to the AIIDA Frontend. Alternatively, the customer can use the AIIDA Smartphone App which automatically
sends this information to the AIIDA Backend by scanning a QR code from the EP Website. Overall, the AIIDA Frontend
enables the customer to: configure the connection to the Data Source, configure the connection to the EDDIE Framework,
manage connections/permissions (e.g., create, activate, terminate, etc.), and view the status of existing
connections/permissions.

