---
title: Adapter Device
order: 4
---

<!-- The AIIDA Embedded App runs on an in-house device, e.g., a Raspberry Pi computer, that needs to connect to the metering devices in order to access the energy data of the customer's site. Since the metering devices, e.g., the smart meters, may support limited interfaces for accessing the energy data, e.g., DSMR over RJ12, an Adapter Device is needed to connect the Raspberry Pi to the smart meter. This Adapter Device depends on the provided interface of the smart meter which can vary per country. Once connected to the smart meter, the Adapter Device can send the energy data to the AIIDA Embedded App running on the Raspberry Pi via a different protocol, e.g., MQTT over Wi-Fi. So far, Adapter Devices for smart meters in the following countries are supported. -->

The Adapter Device is a device that sends energy-related data to the AIIDA Embedded App. The Adapter Device has access to energy data either because it collects it from a metering device (such as a smart meter), or because it is an IoT device that generates the energy data itself. Since many different devices can act as an Adapter Device, each device may use different communication protocols to access energy data (e.g., DSMR over RJ12), or to send the data to the AIIDA Embedded App (e.g., MQTT over WiFi). For this reason, we clarify the connectivity of each supported Adapter Device in the links of the tables below.

This table shows the supported Adapter Devices that connect to smart meters of specific countries. 

| To access smart meter data in specific countries | Adapter Device |
|-|-|
| Austria | [Smart Meter Adapter](./adapter-device-austria.md) |
| France | [Micro Teleinfo V3.0](./adapter-device-france.md) |
| Italy | [Sinapsi Alfa](./adapter-device-italy.md) |
| Netherlands, Belgium, Sweden, Denmark, Finland, Hungary, Ireland, Lithuania, Switzerland | [Smart Meter WiFi Gateway](./adapter-device-north-europe.md) |

This table shows the supported IoT devices that also act as Adapter Devices.

| To access IoT data | Adapter Device |
|-|-|
| Devices using the Matter standard | [Matter IoT Adapter Device](./iot-device-matter.md) |
| Loxone devices | [Loxone IoT Adapter Device](./iot-device-loxone.md) |
