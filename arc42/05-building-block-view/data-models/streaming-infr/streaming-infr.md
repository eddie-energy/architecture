---
title: Streaming Infr.
---

The Streaming Infrastructure component is implemented using [Apache Kafka](../../../08-crosscut-concepts/architectural-patterns/publish-subscribe/publish-subscribe.md). Kafka is agnostic of data models. This means that whatever data is published on a topic, the exact same data will be received by a subscriber.