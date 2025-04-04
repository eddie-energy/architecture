---
title: Databases
order: 5
---

Two databases are used in the AIIDA System: 1) The Timescale DB which is used by the AIIDA Embedded App for storing the energy data from metering devices, and information about connections and permissions. 2) The EMQX IAM Database which is used by the AIIDA Regional Connector to store information about AIIDA instances for authentication and authorization. Communication between the various components of the AIIDA system is facilitated by MQTT brokers (EMQX and NanoMQ). Notably, the EDDIE Framework follows the CIM model for energy data. However, AIIDA does not need to implement CIM, because the role of AIIDA is to forward the data from the metering devices to the EDDIE Framework.

## Timescale DB 

The data from metering devices is stored in the Timescale DB as time series using SQL. This data is depicted below including: a date showing when the data was recorded, a code showing the data type, and an integer, string, and double fields to store the recorded values (if applicable).

![](./figures/timescale.png)

## EMQX IAM Database

The EMQX IAM Database stores user accounts for all the AIIDA instances using SQL for authentication and authorization, ensuring that every AIIDA instance has limited rights when sending data to the topics of the EMQX MQTT Broker. This enables the separation of data flows when sending data from multiple AIIDA instances to the AIIDA Regional Connector, such that it is not possible for an AIIDA instance to send data to the topic of another instance. Overall, the EMQX IAM Database stores information about customers, topics, groups, access rights, and permissions. Furthermore, security policies can be defined to specify who can access which topics and for what actions (e.g., publish, subscribe).

## EMQX MQTT Broker

The EMQX MQTT Broker facilitates communication between the AIIDA Embedded App and the AIIDA Regional Connector. Each instance of the AIIDA Embedded App has a dedicated topic through which it publishes energy data from potentially multiple Adapter Devices, and the AIIDA Regional Connector subscribes to receive this data. Additionally, the AIIDA Regional Connector publishes configuration requests to a separate topic for each Embedded App, which the Embedded App receives. These requests can include instructions such as stopping the data stream to the Regional Connector.

## NanoMQ MQTT Broker

The NanoMQ MQTT Broker facilitates sending energy data from the Adapter Device to the AIIDA Embedded App. Each stream of energy data from an Adapter Device has its own unique topic. The Adapter Device publishes energy data to this topic, and the AIIDA Embedded App receives it.

The AIIDA Embedded App has the capability to merge energy data from multiple Adapter Devices and then send this merged data to the AIIDA Regional Connector. This data is published on the same topic as the one used by the EMQX MQTT Broker for the AIIDA Embedded App, allowing it to aggregate and forward the data seamlessly to the EDDIE Framework.