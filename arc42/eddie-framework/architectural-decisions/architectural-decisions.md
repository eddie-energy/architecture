---
title: Architectural Decisions
order: 6
---
This section outlines key architectural decisions made for the EDDIE Framework system:
- [Publish/subscribe mechanism for sending data from the EDDIE Framework to the Services](./architectural-decisions.md#publish-subscribe-mechanism-for-sending-data-from-the-eddie-framework-to-the-services)
- [Implement the Permission Facade as a Microfrontend](./architectural-decisions.md#implement-the-permission-facade-as-a-microfrontend)
- [Deployment of a database for storing the internal state of the EDDIE Framework](./architectural-decisions.md#deployment-of-a-database-for-storing-the-internal-state-of-the-eddie-framework)

::: warning NOT FINISHED
This section has to be re-worked.

Moved from overall architectural decisions:
> #### EDDIE Online / multi-tenant use of EDDIE FW
> - Why Kafka pub/sub isn't suitable for EDDIE Online
>
> #### Framework
> - Plugin architecture with in/out facing plugins
> - Monolithic vs. (micro-) service style deployment
> - Modularized frontend instead of a monolithic one
> - Use HTML custom elements for integration in the EP app
:::

> ## General Decisions
> - Why Kafka pub/sub isn't suitable for EDDIE Online
>
> - Plugin architecture with in/out facing plugins
> - Monolithic vs. (micro-) service style deployment
> - Modularized frontend instead of a monolithic one
> - Use HTML custom elements for integration in the EP app
>

## Publish/subscribe mechanism for sending data from the EDDIE Framework to the Services

> [!CAUTION]
> Kafka is used, but we limit permissions inside Kafka in a way to prevent Kafka's pub/sub features altogether.


The EDDIE Framework gathers historical validated data from the Regional Data-sharing Infrastructure and real-time data from AIIDA, which has to be sent to the Services. Each eligible party can have multiple customers, each one using one or more Services. For this reason, distributing the customer data to the Services may become complicated, especially considering that the real-time data has to be sent with minimum delay.

### Decision

To distribute the customer data to the Services, the EDDIE Framework uses a publish/subscribe mechanism. This way, every Service becomes a subscriber to a particular topic. When the EDDIE Framework acquires data, this data is published to the topics of the Services that the customer wants to use. This publish/subscribe mechanism is implemented using the Apache Kafka Framework.

### Consequences

Positive consequences: 
- Scalable and uncomplicated way to distribute data from many customers to many Services.
- Keep the customer data within the EDDIE Framework only temporarily.

Negative consequences: 
- Additional overhead of deploying and running a publish/subscribe framework.

### Alternatives

Alternatives:
- Send the data of each customer directly to the Services that the customer wants to use, e.g., via HTTP. While this way may work well with few customers and Services, a large number of customers and Services may create bottlenecks and induce additional delay.

## Implement the Permission Facade as a Microfrontend

> [!WARNING]
> The permission facade doesn't exist as a component in the architecture but it's spread across the EDDIE core and region connectors. As such it can be embedded as a microfrontend but consists itself of multiple ones. HTML custom elements should be mentioned.

### Context
The Permission Facade is the component that handles the process of acquiring the consent of the customer for access to their historical and real-time data. This component needs to be accessible from the EP Website so that customers can give their consent to the eligible party. 

### Decision

To make the Permission Facade accessible from the EP Website, the Permission Facade is implemented as a microfrontend. This way the EP Website can load the Permission Facade and show the customer all the necessary frontend elements to request the customer's consent. 

### Consequences

Positive consequences: 
- Simple integration of the Permission Facade in the EP Website
- All the EP Websites request the consent of the customer in an identical way, providing a uniform experience for all the customers.

Negative consequences:
- Microfrontends have their own independent development cycle, thus potentially creating additional overhead.

### Alternatives

Alternatives:
- Provide the Permission Facade as an independent website that is operated and maintained by each eligible party.

## Deployment of a database for storing the internal state of the EDDIE Framework

## Embed the EDDIE Button as a Custom Element

The Permission Facade is initiated by embedding the EDDIE button.

There are two opposing approaches for how the button opens the Permission Facade:

- **Embedded** inside the EDDIE button
- **Standalone** in a new window or iframe

### Embedded

Embedding the application can be achieved by loading it as a custom element.
This allows the eligible party to contain it as a dialog inside their own website.
To embed the whole application as a custom element it has to be loaded from the button itself.

Most popular web frameworks support exporting an application or singular components as a custom element.
The application can be developed in isolation and exported for embedding.

**Advantages**

- No page change for the customer
- Button can load before the customer interacts with it
- Button can be easily configured through attributes

#### Thoughts on loading times

The Permission Facade application should only be loaded once, asynchronously and deferred.
This can be done inside the EDDIE button, which will then create the application instance.

This minimizes the impact of loading the initial EDDIE button on the eligible party's website and allows the application to load in the background. 
To reduce the size of the application itself, region connector elements can be loaded as separate custom elements.

### Standalone

Embedding the application as an inline frame is also considered standalone for this context, 
as the rendering is not done by the website embedding it.

**Advantages**

- Supports server-side rendering (SSR)
- Supports partial hydration (lazy-load core logic) → allows the use of larger frameworks
- Can run separately from the website of the eligible party
- Avoids issues with cross-origin resource sharing (CORS)

#### Thoughts on running in separation

The user might want to interact with the permission facade without first navigating through the website of the eligible party. 
For example, to check the status of their permission request on a separate page.

As the application runs in isolation, the eligible party does not have to load it into their website, 
and the EDDIE button will simply link to its location.

Running in isolation might also improve the developer experience, 
as the application can be developed and tested in the same environment it will be deployed in.

### Conclusion

The ability to embed the button comes with its implementation as a web component. 
This approach is already present for the region connector elements and requires minimal effort.

The button is thereby implemented as a web component to be embedded into the website of the eligible party. 
This might change in the future if the benefits of a separate web application become relevant.

## Separate System Monitoring and Admin Console

The Grant Agreement includes "logging, debugging, and analysis" as features of the Admin Console.

This functionality is better handled by specialized tools like [OpenTelemetry](https://opentelemetry.io/) or [Grafana](https://grafana.com/).
Such a setup would include the following features originally attributed to the Admin Console:

- *Exceptions Page*: Where exceptions from run-through processes are automatically displayed and from where corrective actions can be triggered (in a later stage).
- *Logging*: Make logging available at system, service and permission process level.

The Admin Console should still allow the eligible party to analyze domain entities like permissions, data packages, and data needs.
A discussion on potential monitoring tools is documented in [this GitHub issue](https://github.com/eddie-energy/eddie/issues/774).
