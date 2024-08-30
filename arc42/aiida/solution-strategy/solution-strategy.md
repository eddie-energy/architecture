---
title: Solution Strategy
order: 1
---


## Overview

AIIDA (or Administrative Interface for In-house Data Access) is a software system that includes components running on a device at the customer's site to collect real-time data of energy metering devices (such as smart meters, home-automation system, or other similar assets). To achieve that, AIIDA includes various components such as the AIIDA Embedded App, the AIIDA Regional Connector, and the AIIDA Smartphone App.

## Why is AIIDA necessary in the context of EDDIE?

While the EDDIE Framework integrates the functionality to access historical energy data of customers from existing interfaces, the real-time energy data of customers may not be readily available from an existing public interface. For this reason, the EDDIE Framework alone cannot access real-time energy data. To overcome this limitation, AIIDA includes components running at the customer's site in order to access real-time data and provide it to the EDDIE Framework. This way, assuming that energy metering devices at the customer's site are smart, i.e., they provide communication interfaces, AIIDA can utilize these interfaces and access the real-time data. Notably, real-time data can be crucial to services processing energy data using the EDDIE Framework for a variety of reasons. For example, processing real-time energy data may contribute to more efficient management and optimization of energy usage, demand response, and stability.

## Why use an additional in-house device?

An additional device in-house is needed to run components that access the interfaces of the in-house energy metering devices (or assets). Existing energy metering devices typically integrate interfaces that can be accessed within limited range, e.g., via WiFi, USB, or power-line communication. For this reason, an in-house device within limited range is necessaty to access these interfaces. Having acquired the real-time data from these interfaces, AIIDA then provides connectivity with the EDDIE Framework. Interestingly, since the type of interface of the energy metering devices can vary, AIIDA needs to be able to connect to various interfaces in order to support many different energy metering devices in-house.


## How does AIIDA integrate into EDDIE?
One AIIDA instance runs at every cutomer's site. Thus, AIIDA instances play the role of the data sources of real-time data. AIIDA instances integrate into the EDDIE Framework via a publish/subscribe mechanism, i.e., AIIDA instnances publish the real-time data, and the EDDIE Framework has subscribed to receive this data. From the EDDIE Framework perspective, AIIDA is considered a [Regional Connector](../../eddie_framework/solution-strategy/solution-strategy.md).

## Why does AIIDA need a user Interface?
The in-house device hosting components of AIIDA requires very little input from the customer, and is intended to be a headless devices. However, the customer has to interact with AIIDA, in order to configure AIIDA to connect with the EDDIE Framework. To enable these configurations, AIIDA provides a user interface to be accessed either via a smartphone. This interface is also important for the customer to manage the customer permission, i.e., to allow/prevent AIIDA from sharing data with the EDDIE Framework. 
    
## Why does AIIDA need the Embedded app?
The AIIDA Embedded app is used for accessing the interfaces of in-house energy metering devices and receiving the energy data. After getting the data, the AIIDA Embedded app is responsible for forwarding this data to the EDDIE Framework. Furthermore, the Embedded app provides the configuration interface to the customer.

## Deployability // (Regarding Open Sourceness/Raspberry Pi and compatibility to other hardware/software)
    - As the in-house device hosting the AIIDA Embedded app, we use a Raspberry Pi single-board computer. The Raspberry Pi is chosen for being a widely used and cost effective device with large community, supporting several connectivity options and technologies. For example, supporting Docker which enables flexibility and portability is a very big advantage.
