---
title: Dataspaces
---

## Definition

<!-- What it is -->

The concept of a dataspace describes a federated system where organizations can access and share data while following the principles of data sovereignty. Dataspaces enable data exchange across various domains based on trust, security, and interoperability. There are two prime initiatives that drive the adopting of dataspaces: IDSA (International Data Spaces Association) which focuses on defining specifications and standards for sharing sovereign data over dataspaces, and Gaia-X that focuses on compliance among different dataspaces. Therefore, a dataspace is a system that includes multiple software components for exchanging data between different organizations.

## Relevance

<!-- Where it is used, i.e., in what parts of EDDIE -->

The concept of a dataspace is used by the Dataspace Connector that is part of the Interoperable Communication component of the EDDIE Framework.

## Motivation

<!-- Why it is used, what are alternatives, why is this preferred compared to alternatives -->

The Dataspace Connector aims at extending the functionality of the EDDIE Framework beyond collecting energy consumption data. The Dataspace Connector can have two main features: 

1. Collect additional data: While the Services may produce valuable results by processing energy consumption data, combining these results with additional data can create even more value. For example, the Services may process the energy consumption data in combination with data regarding weather conditions and forecasts. The Dataspace Connector may offer the functionality of accessing weather data from a weather dataspace and offering it to the Services through the existing mechanisms of the EDDIE Framework (e.g., through the Streaming Infrastructure component).
2. Provide existing data: The EDDIE Framework acquires the energy consumption data which is offered only to the Services. However, there may be cases when there is benefit from providing this data to other entities as well. For example, an eligible party my offer customer data to another eligible party that also has the customer permission. To enable this, the Dataspace Connector exposes an public API for receiving requests for data access. 

An alternative to dataspaces is:
- Dataset repositories: There are dataset repositories which allow access to data using specific APIs and instructions. These repositories operate independently, and may not provide any guarantees regarding the credibility of the data. Dataspaces on the other hand, aim at providing uniform data from multiple domains while also enable trust and credibility.