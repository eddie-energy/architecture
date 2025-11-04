---
title: REST Outbound Connector
---

The EDDIE Framework produces a number of messages that need to be delivered to the Eligible Party.
The REST Outbound Connector delivers these messages via an REST API to the Eligible Party.
Furthermore, it is possible for the Eligible Party to send messages to the EDDIE Framework via the REST API.
The messages are described in detail in the [Messages and Documents](https://architecture.eddie.energy/framework/2-integrating/messages/messages.html) section of the EDDIE Framework docs.
See the [Outbound Connector Building Blocks](./outbound-connectors.md) for more information.

The REST Outbound Connector offers two distinct interfaces to interact with it.
Either via HTTP Requests, such as GET and POST, or via [Server Sent Events](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events) (SSE).
For SSEs, there will be no inbound messages available due to the nature of SSEs.

## Persistence

The Persistence component persists and queries documents and messages.
It interacts via SQL with the database.

## Connectors

This component manages outbound messages, sent by the EDDIE Framework to the Eligible Party, and inbound messages, sent to the EDDIE Framework from the Eligible Party.

## Tasks

The Tasks have multiple responsibilities.
First, to persist messages coming from the EDDIE Core once they arrive.
Second, to delete data after a certain retention period.

To achieve this it gets the messages from the Connectors and persists them using the Persistence component.

## Web Controllers

The Web Controllers are responsible for managing the REST API.
They stream the incoming messages from the Connectors via Server Sent Events.
Messages sent by the Eligible Party are sent back to the EDDIE Core using the Connectors.
Furthermore, they implement traditional REST APIs for the Eligible Party to request data via GET requests.
The Web Controllers use the Persistence component to serve historical data that is not streamed.

The EDDIE Core component interacts with the Web Controller Interface to host the REST API via its web server.

## Security Chain

Access to the Web Controller Interface and the REST API is managed by the Security Chain.
It verifies that entities sending REST requests are authenticated and have the correct role using an OAuth 2.0 Server.

