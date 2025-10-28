---
title: Shelly Devices
order: 5
collapsed: true
---

> [!WARNING]
> When not using the official smart meter data, measurement accuracy may vary, and billing-relevant values cannot be guaranteed

[Shelly](https://shelly.com/) devices are a range of smart home products for various purposes, including switching, dimming, and metering energy and power usage.
They are known for their simple installation and seamless integration into various home automation systems.

## Connection to Metering Devices

> [!WARNING]
> The Shelly devices must be installed by a qualified person.

The Shelly data source allows the integration of energy systems that do not use an AIIDA-supported smart meter adapter.
It supports both single-phase and three-phase Shelly energy meters.

These devices measure energy either via contactless current transformer (CT) clamps or by being directly integrated into the electrical circuit.
They connect to smart home ecosystems via Wi-Fi, providing real-time monitoring capabilities.

## Connection to AIIDA

Shelly devices can be configured through the mobile Shelly App or the built-in web interface.
Within these interfaces, the device can be set up to transmit real-time energy data to AIIDA via MQTT.
