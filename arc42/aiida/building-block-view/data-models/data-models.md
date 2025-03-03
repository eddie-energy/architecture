---
title: Data Models
order: 5
---

Two databases are used in the AIIDA System: 1) The Timescale DB which is used by the AIIDA Embedded App for storing the energy data from metering devices, and information about connections and permissions. 2) The EMQX IAM Database which is used by the AIIDA Regional Connector to store information about AIIDA instances for authentication and authorization. Notably, the EDDIE Framework follows the CIM model for energy data. However, AIIDA does not need to implement CIM, because the role of AIIDA is to forward the data from the metering devices to the EDDIE Framework.

## Timescale DB 

The data from metering devices is stored in the Timescale DB as time series using SQL. This data is depicted below including: a date showing when the data was recorded, a code showing the data type, and an integer, string, and double fields to store the recorded values (if applicable).

![](./figures/timescale.png)

## EMQX IAM Database

The EMQX IAM Database stores user accounts for all the AIIDA instances using SQL for authentication and authorization, ensuring that every AIIDA instance has limited rights when sending data to the topics of the EMQX MQTT Broker. This enables the separation of data flows when sending data from multiple AIIDA instances to the AIIDA Regional Connector, such that it is not possible for an AIIDA instance to send data to the topic of another instance. Overall, the EMQX IAM Database stores information about customers, topics, groups, access rights, and permissions. Furthermore, security policies can be defined to specify who can access which topics and for what actions (e.g., publish, subscribe).