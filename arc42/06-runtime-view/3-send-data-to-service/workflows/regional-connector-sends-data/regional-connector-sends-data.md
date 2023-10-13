---
title: The Regional/AIIDA Connector Sends Data to a Service
---

## Overview

The following workflow shows the process of the Message Producer sending data either from the Regional/AIIDA Connector to a Service. This process starts when the Message Producer receives the data. The workflow of how the data is sent to the Message Producer is presented [here](../../../2-access-data/2-access-data.md). 

<div align="center"> 
<img src="./figures/reg-connector-sends-data.svg">
</div>


This workflow includes the following steps:
1. Upon creating, the Service creates a new topic at the Streaming Infrastructure.
1. The Service subscribes to this topic at the Streaming Infrastructure. When a customer wants to use a Service (and allows data access), the information about which service each customer uses is stored. TBD
1. When the data of a customer is accessed by the Regional/AIIDA Connector, it is sent to the Message Producer.
1. The Message Producer publishes the data to the topic of the Service that the customer has selected.
1. The Service receives the data from the Streaming Infrastructure via polling.

TBD
These steps may change in the future.