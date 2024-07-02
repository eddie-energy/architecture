---
title: Microfrontend
---

> [!WARNING]
> Microfrontends are used as a structuring mechanism also within the EDDIE Framework. And the "Permission Facade" doesn't exist as such.

## Definition

<!-- What it is -->

[Microfrontend](https://en.wikipedia.org/wiki/Microfrontend) is an architectural pattern for building websites in which the user interface is divided into smaller, self-contained parts. Each part, called a microfrontend, handles a specific function or feature. These microfrontends can be developed and deployed independently, using different technologies and frameworks. This architectural pattern allows multiple teams to work concurrently on different parts of the user interface, while seamlessly integrating them into a cohesive and coherent frontend application. By treating each microfrontend as a standalone application, with its own lifecycle and development stack, microfrontends enable independent scaling, testing, and deployment, enhancing reusability in complex and rapidly evolving frontend applications.

## Relevance

<!-- Where it is used, i.e., in what parts of EDDIE -->

This architectural pattern is used for the development of the Permission Facade. The Permission Facade is a microfrontend offered by the EDDIE Framework to the EP Website. The prime role of the Permission Facade is to provide a form for collecting the required information of the customer, and then use this information to request the customer consent from the Regional Data-sharing Infrastructure. 


## Motivation

<!-- Why it is used, what are alternatives, why is this preferred compared to alternatives -->

By implementing the Permission Facade as a microfrontend, all eligible parties can integrate it easily into their EP Website. As a result, the eligible parties do not need to put any effort into implementing forms for collecting the customer consent based on the regulations of each country, because this is offered by the Permission Facade and the EDDIE Framework. Another advantage is that all customers receive a homogeneous user experience by filling out the same consent form regardless of their eligible party, and their country of residence.

An alternative to the microfrontend pattern is:

- Monolithic Frontend: The entire frontend application is developed and deployed as a single unit. This approach is simpler to implement and requires less overhead in terms of deployment and communication between components. However, it can become challenging to maintain and scale as the application grows larger and more complex.
