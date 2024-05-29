---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "EDDIE Architecture"
  text: "Software Architecture for the EDDIE Project"
  tagline: European Distributed Data Infrastructure For Energy
  image: https://eddie.energy/files/layout/eddie_logo.png
  actions:
    - theme: brand
      text: Building Block View
      link: /building-block-view/building-block-view
    - theme: alt
      text: Introduction and Goals
      link: /introduction-and-goals/introduction-and-goals

features:
  - title: EDDIE Framework
    details: Providing core functionality of EDDIE
  - title: AIIDA
  - title: EDDIE Marketplace
---
This website hosts the software architecture of EDDIE (European Distributed Data Infrastructure for Energy) which has been documented based on [arc42](https://arc42.org/). EDDIE is a research project co-funded by the European Union's Horizon Innovation Actions under grant agreement No. 101069510.

## Structure

This document is organized as follows:

1. [Introduction and goals](./introduction-and-goals/introduction-and-goals.md). Includes the background, business goals, essential requirements and roles. 
1. [Architectural Constraints](./architectural-constraints/architectural-constraints.md). Includes the political and business constraints.
1. [Context & Scope](./system-scope-and-context/system-scope-and-context.md). Includes the business scope, technical scope and prerequisites.
1. [Building Block View](./building-block-view/building-block-view.md). Includes high-level views and data models of the system.
1. [Runtime View](./runtime-view/runtime-view.md). Includes behavioral views of the system and its components.
1. [Deployment View](./deployment-view/deployment-view.md). Includes information about the infrastructure that can host the system.
1. [Crosscutting Concepts](./crosscutting-concepts/crosscutting-concepts.md). Includes information about important concepts used in the system.
1. [Architectural Decisions](./architectural-decisions/architectural-decisions.md). Includes architectural decisions that affect the system.
1. [Quality Requirements](./quality-requirements/quality-requirements.md). Includes requirements that need to be satisfied by the system.
1. [Risks & Technical Debt](./risks-and-technical-debt/risks-and-technical-debt.md). Includes known risks and unimplemented aspects of the system.
1. [Glossary](./glossary/glossary.md). Includes domain terms and acronyms.
<!-- 4. [Solution Strategy](./04-solution-strategy/04-solution-strategy.md). Includes elaborate guidelines for achieving complex goals. -->


<!-- {{ collections.all | eleventyNavigation: "/" | eleventyNavigationToHtml: navigationOptions }} -->

## Other Interesting links:

- [EDDIE Website](https://eddie.energy/)
- [EDDIE Linkedin](https://www.linkedin.com/company/eddie-energy/)
- [EDDIE GitHub](https://github.com/eddie-energy)
- [EDDIE Zenodo](https://zenodo.org/communities/eddie/)
- [EDDIE CORDIS](https://cordis.europa.eu/project/id/101069510)
