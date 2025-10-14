---
title: Databases
order: 5
---

Two databases are used in the AIIDA System: 1) The Timescale DB which is used by the AIIDA Embedded App for storing the energy data from metering devices, and information about connections and permissions. 2) The EMQX IAM Database which is used by the AIIDA Region Connector to store information about AIIDA instances for authentication and authorization. Communication between the various components of the AIIDA system is facilitated by MQTT brokers (EMQX and NanoMQ). Notably, the EDDIE Framework follows the CIM model for energy data. However, AIIDA does not need to implement CIM, because the role of AIIDA is to forward the data from the metering devices to the EDDIE Framework.

## Timescale DB 

The data from metering devices is stored in the Timescale DB as time series using SQL. This data is depicted below including: a date showing when the data was recorded, a code showing the data type, and an integer, string, and double fields to store the recorded values (if applicable).

![](./figures/timescale.png)

## NanoMQ MQTT Broker

The NanoMQ MQTT Broker facilitates the communication between Data Sources and the AIIDA Embedded App. Each Data Source publishes energy data to its own unique topic, and the AIIDA Embedded App subscribes to this topic to receive the data.

The AIIDA Embedded App has the capability to merge energy data from multiple Data Sources and then send this merged data to the AIIDA Region Connector through the EMQX MQTT Broker.