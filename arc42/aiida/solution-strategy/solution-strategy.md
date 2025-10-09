---
title: Solution Strategy
order: 1
---


## Overview

AIIDA (or Administrative Interface for In-house Data Access) is a software system that includes components running on a device at the customer's site to collect real-time data from energy metering devices (such as smart meters, home automation systems, or other similar assets). To achieve that, AIIDA includes various components such as the AIIDA Embedded App, the AIIDA Region Connector, and the AIIDA Smartphone App.

## Why is AIIDA necessary in the context of EDDIE?

While the EDDIE Framework integrates the functionality to access historical energy data of customers from existing regional data-sharing interfaces, the real-time energy data of customers may not be readily available from public interfaces. For this reason, the EDDIE Framework alone cannot access real-time energy data. To overcome this limitation, AIIDA includes components running at the customer's site in order to access real-time data and provide it to the EDDIE Framework. This way, assuming that energy metering devices at the customer's site are smart, i.e., they provide communication interfaces, AIIDA can utilize these interfaces and access the real-time data. Notably, real-time data can be crucial to services processing energy data using the EDDIE Framework for a variety of reasons. For example, processing real-time energy data may contribute to more efficient management and optimization of energy usage, demand response, and stability.

## Why use an additional in-house device?

An additional device in-house is needed to run components that access the interfaces of the in-house energy metering devices. Existing energy metering devices typically integrate interfaces that can be accessed within limited range, e.g., via DSMR over RJ12. For this reason, an in-house device within limited range is necessary to access these interfaces. Having acquired the real-time data from these interfaces, AIIDA then provides connectivity with the EDDIE Framework. Interestingly, since the interface types of the energy metering devices can vary, especially across different countries, AIIDA needs to be able to connect to various interfaces in order to support many countries.


## How does AIIDA integrate into EDDIE?

One AIIDA instance runs at every customer site. Thus, AIIDA instances serve as sources of real-time energy data. AIIDA instances integrate into the EDDIE Framework by sending the energy data to an AIIDA Region Connector (which is a plugin of the EDDIE Framework). Therefore, from the EDDIE Framework perspective, AIIDA is considered a [Region Connector](../../eddie-framework/solution-strategy/solution-strategy.md).

## Why does AIIDA need a user interface?

The in-house device (hosting components of AIIDA) requires very little input from the customer, and is intended to be a headless device. However, the customer has to interact with AIIDA, in order to configure AIIDA to connect with the EDDIE Framework. To enable such configurations, AIIDA provides user interfaces to be accessed either via a smartphone or a web browser. These interfaces are also important for the customer to manage customer permissions, i.e., to enable/prevent data sharing from AIIDA to the EDDIE Framework. 
    
## Why does AIIDA need the AIIDA Embedded App?

The AIIDA Embedded App is used for accessing the interfaces of in-house energy metering devices and reading the energy data. After getting this data, the AIIDA Embedded App is responsible for forwarding the data to the EDDIE Framework. Furthermore, the AIIDA Embedded App provides configuration options to the customer that are accessible via the user interfaces.

## Deployability

The in-house device hosting the AIIDA Embedded App is based on a Raspberry Pi single-board computer. The Raspberry Pi is chosen for being a widely used and cost-effective device with a large community, supporting several connectivity options and technologies. For example, supporting Docker which enables flexibility and portability is an important advantage. Also, the Raspberry Pi community typically provides its solutions as open-source, which helps with configurations and customizations.
