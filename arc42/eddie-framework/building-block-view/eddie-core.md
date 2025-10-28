---
title: EDDIE Core
---

This section describes the building block view of the EDDIE Core.
The EDDIE Core is the entrypoint for all the other components running in the EDDIE Framework.
It runs the webserver, security filters, provisions the infrastructure for communication between region connectors and outbound connectors, and provisions the start up of the components themselves.

## Start Up Sequence

The EDDIE Core provisions a number of components, which depend on each other or are not needed depending on the configuration done by the Eligible Party.
This leads to a complex start up sequence.
The following should help understand the start up sequence:

0. Start the EDDIE Framework.
1. Find Security Configurations for Region Connectors.
2. Find Security Configurations for Outbound Connectors.
3. Load EDDIE Core Spring Context (the parent context) and all security configurations.
    Loading all security configurations together with the parent Spring Context is essential to [load the filters into the filter chain](https://docs.spring.io/spring-security/reference/servlet/architecture.html).
4. Load Region Connector and Outbound Connector definitions, but do not initialize them yet.
    They will be initialized at the very end, as they have the lowest priority.
    The reason for this is, that they depend on other components, which will be initialized first.
    The definitions will be used by some of those components.
5. Run SQL migrations for Region Connectors and Outbound Connectors.
6. Initialize the Data Needs API, which runs in its own Spring Context.
7. Initialize the European Master Data API, which runs in its own Spring Context.
8. Initialize Region Connectors and Outbound Connectors.
