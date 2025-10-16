---
title: Modbus Data Source
order: 4
collapsed: true
---

The Modbus Data Source is a generic Data Source that supports metering devices that communicate via the Modbus protocol.
For each Modbus device, a custom configuration is required to map the Modbus registers to OBIS codes.

## Connection to Metering Devices

The Modbus Data Source connects to metering devices via the Modbus protocol over TCP/IP.
Once connected, the Modbus Data Source polls data from the metering device, depending on the configuration of the device.