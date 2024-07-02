---
title: Adapter
---

## Definition

<!-- What it is -->
The [adapter pattern](https://en.wikipedia.org/wiki/Adapter_pattern) is an architectural design pattern employed to facilitate the collaboration of systems with incompatible interfaces. In such scenarios, the adapter acts as a bridge, allowing these systems to work together seamlessly. The core idea is to introduce an adapter component that translates calls of the adapted system into a format compatible with the target system. Implementing multiple adapters also allows for the coexistence of bridge components developed independently. This flexibility is especially valuable in complex software systems where different adapters use diverse interfaces. Thus, the adapter pattern embodies the principle of "making things work together" by providing a standardized interface to customers while accommodating variations in the underlying implementations. It serves as a powerful tool in scenarios where disparate components need to collaborate, fostering code reusability, and simplifying the integration of diverse systems within a cohesive architecture.

## Relevance

<!-- Where it is used, i.e., in what parts of EDDIE -->

This architectural pattern is used for implementing the Regional Connectors. The main role of each Regional Connector is to be the adapter between the Permission Facade and a Regional Data-sharing Infrastructure. Thus, one Regional Connector needs to be implemented for each supported country, serving all the customers of this country.

## Motivation

<!-- Why it is used, what are alternatives, why is this preferred compared to alternatives -->

This architectural pattern is used for connecting the Permission Facade with the Regional Data-sharing Infrastructure. The customer uses the Permission Facade to submit the required information for requesting the customer consent. Subsequently, the Permission Facade needs an adapter that translates this information into requests and formats that can be sent to the Regional Data-sharing Infrastructure. This is exactly the role of the Regional Connectors.

> [!WARNING]
> Plugin isn't an alternative. Each region connector works as an adapter but integrates into the EDDIE Framework as a plugin.

An alternative to the adapter pattern is:

- Plugin Pattern: The Plugin Pattern is primarily focused on making an application or system extensible by allowing the dynamic addition or removal of functionalities (plugins) without modifying the core code. Plugins typically contribute new features, behaviors, or capabilities to the application. Interestingly, by implementing multiple adapters when using the adapter pattern in our case, we make partial use of the plugin pattern, since each adapter adds new capabilities while making the system extensible. However, the adapter pattern is more suited to our case since the main problem that is being solved is to from a bridge to the Regional Data-sharing Infrastructure, and make incompatible interfaces compatible. 
