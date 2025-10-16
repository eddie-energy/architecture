---
title: Inbound Permission and Data Source
order: 10
---

For **outbound data** (data sent from AIIDA to an EP), the outbound data need type is used.

In contrast, instead of collecting data from local resources running on the edge,
**AIIDA can also receive data from the EP** using the inbound data need.

## Connection to AIIDA

Instead of adding an outbound permission, an **inbound permission** is added to the AIIDA instance.

These permissions automatically create an inbound data source.
This data source connects to the **MQTT broker** of the EDDIE instance, where the EP can send any data to AIIDA.
An inbound data source is not visible in the AIIDA UI, as it is automatically created and managed by the inbound permission.

The EP can send the data to a specific topic on the MQTT broker.

With an API key, the most recently retrieved incoming data can be retrieved per authorization via REST.