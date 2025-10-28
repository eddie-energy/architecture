---
title: Data Sources
order: 5
---

The Data Source is a device that sends energy-related data to the AIIDA application. The Data Source has access to
energy data either because it collects it from a metering device (such as a smart meter), or because it is an IoT device
that measures the energy data itself. Since many different devices can act as a Data Source, each device may use
different communication protocols to access energy data (e.g., DSMR over RJ12), or to send the data to the AIIDA
Application (e.g., MQTT over WiFi). For this reason, we clarify the connectivity of each supported Data Source in the
links of the tables below.

This table shows the supported Data Sources that connect to smart meters of specific countries.

| To access smart meter data in specific countries                                         | Data Source                                                      |
|------------------------------------------------------------------------------------------|------------------------------------------------------------------|
| Austria                                                                                  | [Smart Meter Adapter](./data-source-sma.md)                      |
| France                                                                                   | [Micro Teleinfo V3.0](./data-source-micro-teleinfo.md)           |
| Italy                                                                                    | [Sinapsi Alfa](./data-source-sinapsi.md)                         |
| Netherlands, Belgium, Sweden, Denmark, Finland, Hungary, Ireland, Lithuania, Switzerland | [Smart Meter WiFi Gateway](./data-source-sga.md)                 |
| Austria, Germany, Slovenia, Luxembourg, Switzerland                                      | [Smartmeter Kundenschnittstellen Modul](./data-source-shrdzm.md) |

This table shows the supported data sources which don't connect to a smart meters.

| To access other data | Data Source                               |
|----------------------|-------------------------------------------|
| Shelly               | [Shelly](./data-source-shelly.md)         |
| Modbus               | [Modbus](./data-source-modbus.md)         |
| CIM                  | [CIM](./data-source-cim.md)               |
| Simulation           | [Simulation](./data-source-simulation.md) |
| Inbound API          | [Inbound](./data-source-inbound.md)       |
