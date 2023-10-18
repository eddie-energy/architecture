---
title: Microfrontends
---

## Definition

<!-- What it is -->

[Microfrontends](https://en.wikipedia.org/wiki/Microfrontend) is an architectural pattern for building websites in which the user interface is divided into smaller, self-contained parts. Each part, called a microfrontend, handles a specific function or feature. These microfrontends can be developed and deployed independently, using different technologies and frameworks. This architectural pattern allows multiple teams to work concurrently on different parts of the user interface, while seamlessly integrating them into a cohesive and coherent frontend application. By treating each frontend part as a standalone application, with its own lifecycle and development stack, microfrontends enable independent scaling, testing, and deployment, enhancing reusability in complex and rapidly evolving frontend applications.

## Relevance

<!-- Where it is used, i.e., in what parts of EDDIE -->

This architectural pattern is used for the development of the Permission Facade. The Permission Facade is a frontend application offered by the eligible party to the customer. The prime role of the Consent Facade is to collect the required information from the customer, and then use this information to request the customer consent from the Regional Data-sharing Infrastructure. 


## Motivation

<!-- Why it is used, what are alternatives, why is this preferred compared to alternatives -->

To request the customer consent, the Permission Facade needs to be able to interact with the Regional Data-sharing Infrastructure of different countries, while each country may require different information to establish the customer consent. To achieve this, the Permission Facade uses a different microfrontend for every country. Therefore, the Permission Facade is a frontend application in which the customer selects their country, and the Permission Facade loads the corresponding microfrontend of this country. Each microfrontend shows a form that collects from the customer the required information based on the regulation of the corresponding country. This allows for a homogeneous user experience for all the customers regardless of their country, while also managing to cope with the potentially diverse information required from the consumers based on their country.

Alternatives to the microfrontends are:

- Monolithic Frontend: The entire frontend application is developed and deployed as a single unit. This approach is simpler to implement and requires less overhead in terms of deployment and communication between components. However, it can become challenging to maintain and scale as the application grows larger and more complex.
