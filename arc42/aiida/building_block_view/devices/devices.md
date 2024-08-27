---
title: Devices
order: 4
---
The Smart Meter, as well as other in-house devices collecting energy metering information like home automation systems, electric vehicle chargers, photovoltaic systems, etc., need a device to connect to AIIDA. Each country may require a different solution, depending on regional regulations, available Smart Meter adapters etc. 
In general, the device works as an interface between the energy collecting systems and the raspberry Pi. The connection can be physical, like f.e. through a raspberry Pi shield with the required functionalities of forwarding the data with a certain protocol, or wireless. Data from all datasources is automatically persisted in the TimescaleDB. Each country specific solution will be described shortly at its own page.