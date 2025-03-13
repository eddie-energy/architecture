---
title: Adapter Device
order: 4
---

<!-- The AIIDA Embedded App runs on an in-house device, e.g., a Raspberry Pi computer, that needs to connect to the metering devices in order to access the energy data of the customer's site. Since the metering devices, e.g., the smart meters, may support limited interfaces for accessing the energy data, e.g., DSMR over RJ12, an Adapter Device is needed to connect the Raspberry Pi to the smart meter. This Adapter Device depends on the provided interface of the smart meter which can vary per country. Once connected to the smart meter, the Adapter Device can send the energy data to the AIIDA Embedded App running on the Raspberry Pi via a different protocol, e.g., MQTT over Wi-Fi. So far, Adapter Devices for smart meters in the following countries are supported. -->

The AIIDA Embedded App runs on an in-house device, such as a Raspberry Pi, which connects to metering devices to access energy data from the customer's site. Since metering devices, like smart meters, may support varying interfaces for accessing energy data (e.g., DSMR over RJ12), an Adapter Device is required to establish a connection between the Raspberry Pi and the metering device. The Adapter Device can take different forms depending on the type of device, such as an adapter to a smart meter that collects energy data using various protocols based on the specific smart meter model and sends the data to the AIIDA Embedded App using different protocols depending on the Adapter Device model (e.g., MQTT over Wi-Fi). Similarly, the Adapter Device could be an IoT device that collects energy data related to its operation and transmits this data to the AIIDA Embedded App via protocols tailored to the IoT device model. It is important to note that the Adapter Device’s functionality and protocol may differ based on the device's model, country-specific requirements, and the type of energy-related data being collected. Currently, Adapter Devices for smart meters in the following countries are supported.

| Country | Adapter Device |
|-|-|
| Austria | [Smart Meter Adapter](./Austria/Austria.md) |
| France | [Micro Teleinfo V3.0](./France/France.md) |
| Italy | [Sinapsi Alfa](./Italy/Italy.md) |
| Netherlands, Belgium, Sweden, Denmark, Finland, Hungary, Ireland, Lithuania, Switzerland | [Smart Meter WiFi Gateway](./more/more.md) |


