---
title: Streaming Infrastructure
order: 4
---

## Overview

The Streaming Infrastructure component is implemented using Apache Kafka. Kafka is agnostic of data models. This means that whatever data is published on a topic, the same data will be received by a subscriber. Nevertheless, the EDDIE Framework converts data from country-specific formats to a unified CIM-compliant model before publishing it to the Streaming Infrastructure. This data model is presented [here](../../data-models/meter-data-portal/meter-data-portal.md)