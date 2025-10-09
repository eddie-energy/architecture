---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "EDDIE Architecture"
  text: "Software Architecture of the EDDIE Project"
  tagline: According to the Arc42 architecture template
  image: figures/Lego-Eddie.png
  actions:
    - theme: brand
      text: Start Reading
      link: /introduction-and-goals/introduction-and-goals
    - theme: alt
      text: System Scope and Context
      link: /system-scope-and-context/system-scope-and-context

features:
  - title: EDDIE Framework
    details: Providing core functionality of EDDIE
    link: /eddie-framework/eddie-framework
  - title: AIIDA
    details: Enabling in-house data access
    link: /aiida/aiida
  - title: Marketplace
    details: Discover datasets and services based on EDDIE
    link: /marketplace/marketplace
---
This website hosts the software architecture of EDDIE (European Distributed Data Infrastructure for Energy) which has been documented based on [arc42](https://arc42.org/). EDDIE is a research project co-funded by the European Union's Horizon Innovation Actions under grant agreement No. 101069510.

## Structure

This document is organized as follows:

1. [Introduction and goals](./introduction-and-goals/introduction-and-goals.md). Includes the background, business goals, essential requirements and roles. 
1. [Architectural Constraints](./architectural-constraints/architectural-constraints.md). Includes the political and business constraints.
1. [Context & Scope](./system-scope-and-context/system-scope-and-context.md). Includes the business scope, technical scope and prerequisites.
1. [EDDIE Framework](/eddie-framework/eddie-framework). Provides core functionality of the system.
1. [AIIDA](/aiida/aiida). Enables in-house data access.
1. [EDDIE Marketplace](/marketplace/marketplace). Provides discovery of datasets and services of the system.
1. [Deployment View](/deployment-view/deployment-view.md). Maps the building blocks of the system.
1. [Crosscutting Concepts](./crosscutting-concepts/crosscutting-concepts.md). Includes information about important concepts used in the system.
1. [Architectural Decisions](./architectural-decisions/architectural-decisions.md). Includes architectural decisions that affect the system.
1. [Development Process and Guidelines](./development-process-and-guidelines/development-process-and-guidelines.md). Describes development workflow, CI/CD, testing, and coding guidelines.
1. [Quality Requirements](./quality-requirements/quality-requirements.md). Includes requirements that need to be satisfied by the system.
1. [Risks & Technical Debt](./risks-and-technical-debt/risks-and-technical-debt.md). Includes known risks and unimplemented aspects of the system.
1. [Glossary](./glossary/glossary.md). Includes domain terms and acronyms.
1. [Appendix](./appendix/appendix.md). Contains information that is relevant to the architecture but is not part of the arc42 template.
<!-- 4. [Solution Strategy](./04-solution-strategy/04-solution-strategy.md). Includes elaborate guidelines for achieving complex goals. -->


<!-- {{ collections.all | eleventyNavigation: "/" | eleventyNavigationToHtml: navigationOptions }} -->

## Other Interesting links:

- [EDDIE Website](https://eddie.energy/)
- [EDDIE Linkedin](https://www.linkedin.com/company/eddie-energy/)
- [EDDIE GitHub](https://github.com/eddie-energy)
- [EDDIE Zenodo](https://zenodo.org/communities/eddie/)
- [EDDIE CORDIS](https://cordis.europa.eu/project/id/101069510)
