---
title: Access Energy Data
order: 2
---

## Context

The goal of the EDDIE Framework is to access the historical and real-time data of customers and send it to the Services of the eligible party. Regarding access to historical data, the EDDIE Framework needs to access this data from the Regional Data-sharing Infrastructure of the customers. Notably, this data is already validated (i.e., it can be considered accurate and credible). Regarding access to real-time data, the EDDIE Framework needs to access this data from AIIDA because real-time data may not be available from the Regional Data-sharing Infrastructure.

## Stimulus
Regarding historical validated data, the customer fills out a form (at the EP Website) with the necessary information (e.g., country of residence, metering point number) to provide their consent. After that the EDDIE Framework uses this information to access the APIs of the Regional Data-sharing Infrastructure and request the historical validated data of the customer. Regarding access to real-time data, the customer fills out a form (at the EP Website) with the necessary information to provider their consent. After that, the EDDIE Framework communicates and AIIDA connect, so that the real-time data is send from AIIDA to the EDDIE Framework.    

## Response
The historical validated data and the real-time data of the customer is sent to the EDDIE Framework.
