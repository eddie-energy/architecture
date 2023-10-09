---
title: Micro Frontends
---

## Definition

<!-- What it is -->

Micro frontends is an architectural pattern for building websites or applications in which the user interface is divided into smaller, self-contained parts. Each part, called a micro frontend, handles a specific function or feature. These micro frontends can be developed and deployed independently, using different technologies and frameworks. This architectural pattern allows multiple teams to work concurrently on different parts of the user interface, while seamlessly integrating them into a cohesive and coherent frontend application. By treating each frontend component as a standalone application, with its own lifecycle and development stack, micro frontends enable independent scaling, testing, and deployment, enhancing reusability in complex and rapidly evolving frontend applications.

## Relevance

<!-- Where it is used, i.e., in what parts of EDDIE -->

This architectural pattern is used for the development of the Permission Facade which provides the necessary frontend elements to the EP Website based on the country of the consumer.

## Motivation

<!-- Why it is used, what are alternatives, why is this preferred compared to alternatives -->

The Permission Facade needs to be able to connect to the Regional Data-sharing Infrastructure of different countries, with each country potentially implementing different procedures and mechanisms. For this reason, the micro frontends pattern is used for offering to the consumer one frontend application which uses a different micro frontend for every country. This allows for a homogeneous user experience for all the consumers, while also managing to cope with the potentially diverse information required from the consumers based on their origin country.

Alternatives to the micro frontends are:

- Monolithic Frontend: The entire frontend application is developed and deployed as a single unit. This approach is simpler to implement and requires less overhead in terms of deployment and communication between components. However, it can become challenging to maintain and scale as the application grows larger and more complex.
