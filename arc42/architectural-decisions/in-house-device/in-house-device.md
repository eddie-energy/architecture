---
title: Dedicated In-house Device
---

> [!WARNING]
> Interesting question but needs re-evaluation of the alternatives, e.g. cloud-AIIDA connecting to a [Smart Meter Adapter from oesterreichs energie](https://oesterreichsenergie.at/aktuelles/neuigkeiten/detailseite/die-smart-booster)

## Context

The goal of the EDDIE Framework is to provide historical and real-time energy data to the Services. Notably, energy consumption data needs to be validated before being considered as accurate and credible data. When the EDDIE Framework acquires historical data from the Regional Data-sharing Infrastructure, this data is already validated. However, the Regional Data-sharing Infrastructure may not offer access to real-time validated data because the validation might incur additional delays. Thus, while access to historical validated data is achieved through the Regional Data-sharing Infrastructure, access to real-time validated data cannot be guaranteed in a similar way.

## Decision

To access real-time energy consumption data, the EDDIE Framework relies on a dedicated in-house device that connects to the smart meter and monitors the energy consumption in real time. This device hosts AIIDA which reads the real-time data and sends it to the EDDIE Framework.

## Consequences

Positive consequences: 
- Access to energy consumption data straight from the smart meter with very little delay (e.g., small transmission, propagation and queuing delay).

Negative consequences: 
- The real-time energy consumption data accessed via the in-house device is not validated.

## Alternatives

Alternatives:
- Access near real-time data from the Regional Data-sharing Infrastructure as soon as (and if) it is available. In this case, the data might be validated, although considerable delay may be introduced thus jeopardizing the sense of real time.
