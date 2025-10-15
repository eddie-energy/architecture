---
title: Data Source for Smart Meters in Austria
order: 1
hiddenInSidebar: true
---

The [Smart Meter Adapter](https://oesterreichsenergie.at/smart-meter) developed by Oesterreichs Energie is an Data Source that supports smart meters in **Austria**. This Data Source is shown below.

![](./figures/smart-meter-adapter.jpg)

## Connection to Metering Devices

The Smart Meter Adapter connects to smart meters via the DSMR protocol over the RJ12 port. Once connected, the Smart Meter Adapter reads data from the smart meter, including electricity consumption and production data.

## Connection to AIIDA

To configure the Smart Meter Adapter, the customer can access a configuration web interface via WiFi. Through this interface, the Smart Meter Adapter can be configured to send near real-time energy data to AIIDA via MQTT.