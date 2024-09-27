---
title: Regional Connectors
order: 2
---

::: info DESIRED CONTENT
At this level we will mainly describe the general behavior of regional connectors.
This means the

- process model
- permission facade
- architectural structure regarding the embedding of the micro frontends

Here we can reuse a lot of Markus' diagrams and designs as well as the process model diagram.
:::

::: info Country-Specific Regional Connectors
In these subsections we will describe country-specific information that deviates from the general regional connectors as well as the unique architectural properties of certain areas as well as how permissions and data forwarding are handled there.
:::

As mentioned at [EDDIE Framework](../../eddie_framework.md), the architecture for the country specific regional connectors can have diffenerent architectures, due to f.e. legal constraints, energy data hubs, data models etc. Therefore EDDIE has to be able to handle generic requests for different types of connectors. This section should describe the main particularities of the connector for each country separately. In general, the regional connector provides the main connection for the customer / EP to interact with the system (via an interface), to forward that information to EDDIE core and to the database eventually, as well as to handle historic energy data from regional data hubs.
