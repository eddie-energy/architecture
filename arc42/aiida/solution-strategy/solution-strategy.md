---
title: Solution Strategy
order: 1
---

## Overview

AIIDA (or Administrative Interface for In-house Data Access) is a software system that includes components running on a device at the customer's site to collect near real-time data from energy metering devices (such as smart meters, home automation systems, or other similar assets). 

To achieve that, AIIDA includes various components operating both at the edge and at the EP level. On the edge, the system includes the AIIDA application, Keycloak, TimescaleDB, and EMQX. At the EP, the AIIDA Region Connector together with EMQX ensures the integration into the EDDIE framework.

## Why is AIIDA necessary in the context of EDDIE?

While the EDDIE Framework integrates the functionality to access historical energy data of customers from existing regional data-sharing interfaces, the near real-time energy data of customers may not be readily available from public interfaces. For this reason, the EDDIE Framework alone cannot access near real-time energy data. To overcome this limitation, AIIDA includes components running at the customer's site in order to access near real-time data and provide it to the EDDIE Framework. This way, assuming that energy metering devices at the customer's site are smart, i.e., they provide communication interfaces, AIIDA can utilize these interfaces and access the near real-time data. Notably, near real-time data can be crucial to services processing energy data using the EDDIE Framework for a variety of reasons. For example, processing near real-time energy data may contribute to more efficient management and optimization of energy usage, demand response, and stability.

## Why use an additional in-house device?

An additional device in-house is needed to run components that access the interfaces of the in-house energy metering devices. Existing energy metering devices typically integrate interfaces that can be accessed within limited range, e.g., via DSMR over RJ12. The near real-time data obtained from these interfaces usually has high resolution and can be filtered or aggregated for specific purposes at the edge. Keeping the data locally in the customer’s environment enhances security.

For these reasons, an in-house device within limited range is necessary to access these interfaces. Having acquired the near real-time data from these interfaces, AIIDA then provides connectivity with the EDDIE Framework. Since the interface types of the energy metering devices can vary, especially across different countries, AIIDA needs to be able to connect to various interfaces in order to support many countries.

## How does AIIDA integrate into EDDIE?

One AIIDA instance runs at every customer site. Thus, AIIDA instances serve as sources of near real-time energy data. AIIDA instances integrate into the EDDIE Framework by sending the energy data to an AIIDA Region Connector (which is a plugin of the EDDIE Framework). Therefore, from the EDDIE Framework perspective, AIIDA is considered a [Region Connector](../../eddie-framework/solution-strategy/solution-strategy.md).

## Why does AIIDA need a user interface?

To create data sources and manage permissions (e.g., accept or reject requests), users interact directly with the AIIDA application. AIIDA provides a web-based user interface that allows these configurations and enables customers to control data sharing between AIIDA and the EDDIE Framework.    

## What does the AIIDA application do?

The AIIDA application is used for accessing the interfaces of in-house energy metering devices and reading the energy data. After getting this data, the AIIDA application is responsible for forwarding the data to the EDDIE Framework. Furthermore, the AIIDA application provides configuration options to the customer that are accessible via the user interfaces.

## Deployability

The in-house device hosting the AIIDA application is based on a Raspberry Pi single-board computer. The Raspberry Pi is chosen for being a widely used and cost-effective device with a large community, supporting several connectivity options and technologies. For example, supporting Docker which enables flexibility and portability is an important advantage. Also, the Raspberry Pi community typically provides its solutions as open-source, which helps with configurations and customizations.
