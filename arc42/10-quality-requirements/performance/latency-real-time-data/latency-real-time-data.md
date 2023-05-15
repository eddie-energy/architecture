---
title: Latency of Real-time Data
---

## Context
Every AIIDA instance collects energy data in real time and generates a data stream. Data streams from one or more AIIDA instances are then sent to an eligible party, i.e., to an instance of the Framework. The Framework uses a message broker to distribute the different streams to different services. Each service implements logic to perform specific computations on the data.

## Stimulus
A new consumption value is collected by AIIDA from an energy data source, e.g., a smart meter. 

## Response
The response of the system is that this value is propagated to one or more services of one or more eligible parties. The latency from the time a value is collected until the time the last service receives it shall be less than 5 seconds.
