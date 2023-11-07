---
title: Service
---

## Overview

Each eligible party can use Services for processing the historical and/or real-time data retrieved by the EDDIE Framework. The eligible party is responsible for the deployment and operation of the Services. However, it is not the goal of the EDDIE project to focus on developing Services. To connect with the EDDIE Framework and access the data, every Service needs to subscribe to the [Streaming Infrastructure](../streaming-infr/streaming-infr.md). The Streaming Infrastructure is a [publish/subscribe](../../../08-crosscut-concepts/architectural-patterns/publish-subscribe/publish-subscribe.md) messaging system that is implemented using Apache Kafka to offer to the Services the energy data in a [CIM](../../../08-crosscut-concepts/domain-models/cim/cim.md)-compliant model that is discussed [here](../../data-models/meter-data-portal/meter-data-portal.md). A diagram of these components is shown below.

<div align="center">
<img src="../ep-website/figures/component-diagram-ep-website.svg">
</div>
