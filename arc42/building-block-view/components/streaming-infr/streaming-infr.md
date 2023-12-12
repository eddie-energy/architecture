---
title: Streaming Infrastructure
---

## Overview

The Streaming Infrastructure component distributes the incoming energy data of the customers to the Services of the eligible party. The historical validated data comes from the Message Producer of the Interoperable communication component, while the real-time data comes AIIDA. Since an eligible party can have a large number of customers and Services, the distribution of the data takes place using the publish/subscribe architectural pattern. Consequently, each Service receives only the data of customers who have provided consent for sharing their data with this Service. A component diagram of these components is shown below.

<div align="center">
<img src="./figures/component-diagram-streaming-infr.svg">
</div>

The Streaming Infrastructure component is implemented using Apache Kafka. When the eligible party creates a new Service, a corresponding topic is created in Kafka. The new Service then subscribes to this topic. Afterward, when the customer gives consent for access to their data for a specific Service, this data is published only on the topic of that particular Service. This way, every customer shares data only with the services they want to use. For historical validated data, the Message Producer publishes the data to the Streaming Infrastructure, while for real-time data, AIIDA is responsible for publishing the data. 

## Data Models

> Information about the Streaming Infrastructure data model is provided [here](../../data-models/streaming-infr/streaming-infr.md).
