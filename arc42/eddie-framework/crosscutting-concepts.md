---
title: Crosscutting Concepts
order: 5
---

## Shoelace for EDDIE Button and RC Elements

The [Shoelace](https://shoelace.style/) library provides a set of common components and styles and is used to ensure a consistent user experience across EDDIE components.

![Visualization of how Shoelace components are used throughout EDDIE contexts](./figures/shoelace.svg)

Shoelace also supports [theming](https://shoelace.style/getting-started/themes) through CSS variables and [localization](https://shoelace.style/getting-started/localization).

As the EDDIE project matures, custom components can be developed to gradually replace the Shoelace library.

Relevant Shoelace components are loaded from a Content Delivery Network (CDN) at run-time, effectively eliminating the need for a separate build step.

**Advantages**

- The use of an existing component library reduces development time.
- Component libraries ensure a uniform look and feel across elements, thereby enhancing the overall user experience.

**Disadvantages**

- The button has to load styles and components of the library.
- Specific styling that might not fit EDDIE.