---
title: Implement the Consent Facade as a Microfrontend
---

## Context

The Consent Facade is the component that handles the process of acquiring the consent of the customer for access to their historical and real-time data. This component needs to be accessible from the EP Website so that customers can give their consent to the eligible party. 

## Decision

To make the Consent Facade accessible from the EP Website, the Consent Facade is implemented as a microfrontend. This way the EP Website can load the Consent Facade and show to the customer all the necessary frontend elements to request the customer consent. 

## Consequences

Positive consequences: 
- Simple integration of the Consent Facade in the EP Website
- All the EP Websites request the consent of the customer in an identical way, providing a uniform experience for all the customers.

Negative consequences: 
- Microfrontends have their own independent development cycle, thus potentially creating additional overhead.

## Alternatives

Alternatives:
- Provide the Consent Facade as an independent website that is operated and maintained by each eligible party.
