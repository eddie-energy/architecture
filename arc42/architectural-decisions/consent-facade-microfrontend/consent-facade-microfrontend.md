---
title: Implement the Permission Facade as a Microfrontend
---

> [!WARNING]
> The permission facade doesn't exist as a component in the architecture but it's spread across the EDDIE core and region connectors. As such it can be embedded as a microfrontend but consists itself of multiple ones. HTML custom elements should be mentioned.

## Context

The Permission Facade is the component that handles the process of acquiring the consent of the customer for access to their historical and real-time data. This component needs to be accessible from the EP Website so that customers can give their consent to the eligible party. 

## Decision

To make the Permission Facade accessible from the EP Website, the Permission Facade is implemented as a microfrontend. This way the EP Website can load the Permission Facade and show the customer all the necessary frontend elements to request the customer's consent. 

## Consequences

Positive consequences: 
- Simple integration of the Permission Facade in the EP Website
- All the EP Websites request the consent of the customer in an identical way, providing a uniform experience for all the customers.

Negative consequences:
- Microfrontends have their own independent development cycle, thus potentially creating additional overhead.

## Alternatives

Alternatives:
- Provide the Permission Facade as an independent website that is operated and maintained by each eligible party.
