---
title: Outbound Connectors
---

An Outbound Connector is a building block of the EDDIE Framework that provides an interface to a software or protocol.
Its main responsibility is to serve documents created by the EDDIE Framework and receive messages produced by the Eligible Party.

For a detailed documentation of the documents produced by the EDDIE Framework see the [Messages and Documents](https://architecture.eddie.energy/framework/2-integrating/messages/messages.html) section in the EDDIE Framework docs.

## Purpose and Responsibilities

- Offer an interface in a specific protocol and format
- Publish messages produced by the EDDIE Framework
- Receive Messages from the Eligible Party

## Context

- EDDIE Framework: The EDDIE Framework contains multiple Region Connectors, Outbound Connectors, and the EDDIE Core
- EDDIE Core: Routes messages between Region Connectors and Outbound Connectors
- Region Connector: Produces messages relating to permissions and energy data

## Interfaces

- Inbound: Accepts messages from the Eligible Party, such as Termination Documents.
- Outbound: Produces messages received from the EDDIE Core.

## Constraints

- The Outbound Connector must support all the messages that can be produced by either the Eligible Party or EDDIE Core.

The EDDIE Framework implements several Outbound Connectors, each implementing a different protocol.
More information about all the supported connectors can be found in [Outbound Connectors](https://architecture.eddie.energy/framework/1-running/region-connectors/region-connectors.html).

## Shared Component

There are components that all Outbound Connectors have in common.

### Connector for Outbound Messages

Each Outbound Connector has a connector for outbound message that are received from the EDDIE Core and need to be delivered to the Eligible Party.

### Connector for Inbound Messages

Each Outbound Connector has a connector for inbound message that are received from the Eligible Party and need to be delivered to the EDDIE Core.
