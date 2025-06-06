---
title: Architectural Decisions
order: 6
---
This section outlines key architectural decisions made for the EDDIE Framework.

::: warning TODO
- Follow structure of other architectural decisions sections (Marketplace)

**Document**
- Modularized frontend instead of a monolithic one; @Markus
- Monolith over (micro-)service deployment
- Event-driven permission process model -> We switched from a state machine that was hard to work with; @Florian

**Consider documenting**
- Deployment of a database for storing the internal state of the EDDIE Framework -> Did we really consider going stateless / moving this to the EP?
- Separate Postgres database required -> Prevents us from using an embedded database and deploying a single JAR; @Florian
- Plugin architecture with in/out facing plugins -> Was there really another option?
:::

## Publish/subscribe mechanism for sending data from the EDDIE Framework to the Services

> [!CAUTION] OUTDATED
> Bring up to date with region and outbound connector concepts. 


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

## Region Connectors Architecture

The region connectors need an internal architecture, since they are all structured similarly.
A common architecture has to be found, to ease development, reuse components between region connectors and implement them in a consistent manner.

### Decision

As internal architecture the event sourcing pattern is used.
This requires an eventbus, which can be either an external application, like Apache Kafak, or an internal software component, like Project Reactor's Sinks, an event store, in this case PostgreSQL with append-only tables, and an outbox, which guarantees that only persisted events are emitted to the eventbus.
As eventbus a Project Reactor implementation was chosen, since no external service is required.

The append-only tables are then used to create the permission request, called the aggregate, from these events.
The aggregate has one ID, which groups all events related to the aggregate, in this case, the ID is the permission ID.
A view is created that uses PostgreSQL window functions, which parititions the event table accoding to the permission ID.
The view then aggregates each column of the event table to one single row, which creates the permission request.

### Consequences

Positive consequences:

- Flexible implementations possible
- Increased traceability, what happend when to a specific permission request

Negative consequences:

- Reduced transparency in some cases

### Alternative

The EDDIE framework historically used two different architectures to manage permission requests in the region connectors.
The first appraoch was to use state machines to represent permission requests and manage changes.
This proved to be very inflexible, small features required changes at many different points in the code base, while not improving readability of the code.

## Database

The EDDIE framework needs to persist data to a database.
The data contains information about permission requests, meter reading metadata, etc.
Furthermore, the database is used to create the permission requests from its corresponding events as described in the [region connectors architecture](#region-connectors-architecture).

### Decision

The decision was made to only support and utilize PostgreSQL instead of multiple databases.
The reason for this is that PostgreSQL is free and open source, supports a wide array of functionality and can be extended with plugins if additional functionality is needed.
Furthermore, it can be easily started in development, on-premise, and cloud environments.
This allows fast and reliable interactions with the database.

### Consequences

Positive consequences:

- PostgreSQL-only features can be used, such as window functions
- Interactins between EDDIE and PostgreSQL are very reliable, since it is used during development and in production environments
- Improved reliability, since PostgreSQL is a proven technology

Negative consequences:

- Migrating to a different database can be challenging

### Alternative

Alternatively, multiple databases could be supported by EDDIE.
This allows the eligible party to reuse any SQL database they already provisioned.
But it is impossible to test each and every supported database for any issues.
This can introduce bugs, performance issues, or reliability issues, since developers use one database for testing and eligible parties use another one.
It dramatically increases the workload, where each SQL script has to be tested for every database in multiple configurations.

## Outbound Connectors

EDDIE needs to provide means to the eligible party to receive the requested energy data as well as status updates for permission requests.
For that EDDIE has a number of different documents.

### Decision

In order to support as many different setups as possible on the eligible party's side it was decided to use an abstract approach to which systems and protocols are supported by EDDIE.
The outbound connectors are inspired by [hexagonal architecture](https://en.wikipedia.org/wiki/Hexagonal_architecture_(software)), where it doesn't matter what the ingoing and outgoing protocols are, because the application itself is protocol agnostic.
The following outbound connectors need to be included:

- Apache Kafka
- AMQP 1.0
- REST


### Consequences

Positive consequences:

- Adding new protocols is easy and doesn't interfere with existing outbound connectors
- Eligible parties only need to activate outbound connectors they require
- Eligible parties can decide what protocol they want to use
- Possibility to reuse components between outbound connectors

Negative consequences:

- Initial creation of outbound connectors can take a bit more planning time


### Alternatives

The alternative would be to strongly couple EDDIE to the protocols, such as Apache Kafka.
This would make the application very inflexible and impossible to use for eligible parties that can't or won't use Apache Kafka.

## No internal communication with Apache Kafka
