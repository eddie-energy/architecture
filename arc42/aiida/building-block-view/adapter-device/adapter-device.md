---
title: Adapter Device
order: 4
---

The AIIDA Embedded App runs on an in-house device, e.g., a Raspberry Pi computer, that needs to connect to the metering devices in order to access the energy data of the customer's site. Since the metering devices, e.g., the smart meters, may support limited interfaces for accessing the energy data, e.g., DSMR over RJ12, an Adapter Device is needed to connect the Raspberry Pi to the smart meter. This Adapter Device depends on the provided interface of the smart meter which can vary per country. Once connected to the smart meter, the Adapter Device can send the energy data to the AIIDA Embedded App running on the Raspberry Pi via a different protocol, e.g., MQTT over Wi-Fi. So far, Adapter Devices for smart meters in the following countries are supported.

| Country | Adapter Device |
|-|-|
| Austria | [Smart Meter Adapter](./Austria/Austria.md) |
| France | [Micro Teleinfo V3.0](./France/France.md) |
| Italy | [Sinapsi Alfa](./Italy/Italy.md) |
| Netherlands, Belgium, Sweden, Denmark, Finland, Hungary, Ireland, Lithuania, Switzerland | [Smart Meter WiFi Gateway](./more/more.md) |


