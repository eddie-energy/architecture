---
title: Building Block View
order: 2
---

::: warning SIMPLIFY THIS CONTENT
Here it makes more sense to generally show a C4 diagram showing the different parts of EDDIE Framework and mainly use this page as a TOC to link to the various sub pages.
These sub-pages should be:
- EDDIE Core
- Region Connectors:
- Outbound Connectors (mention the admin console outbound connector and link to the admin console)
- Admin Console (explain the difference between admin console as outbound connector and web application)
- Monitoring
- Data Needs API (**TODO**: rename this section)

As we are describing the architecture of the system, we should not describe individual countries on this level of documentation.
:::

## Eddie Framework

The EDDIE Framework contains the core functionality of EDDIE. The Framework (especially the regional connectors and their interaction with other systems) can be different for different countries. As an example, we show Austria in this section. The Framework architectures for the other countries are shown in the corresponding section for the Regional Connectors.

::: warning EXAMPLE
This C4 diagrams are mainly put here for reference, they should show the building block view of the system.
:::

<C4 diagram="container-eddieFramework-austria" />
<C4 diagram="container-regional-connectors" />

::: warning CONTENT MOVED
A lot of the content that has been here, should be moved to the framework documentation. 
:::


<!--
====== this is just here for reference, please delete it once working on the page =======


### Eddie Framework Austria

 <C4 diagram="container-eddieFramework-austria" />
 
| Container | Responsibility |
| - | - |
|EDDIE Core| Provides the core functionalities of EDDIE, e.g. handles energy data or meta data that is forwarded to EDDIE, stored in the database or send somewhere else.|
|Regional Connector Austria|The Regional Data-sharing Infrastructure of Austria is operated by EDA. Thus, EDA can be considered as the data access provider for historically validated data of customers in Austria. EDA works as a central messaging service for all the DSOs in Austria by implementing the AS4 messaging protocol and using the ebMS3 specification. Hence, instead of an API-based approach, energy data in Austria is exchanged via encrypted XML files. The utilized processes are described at the ebUtilities website. The relevant processes for EDDIE fall under the "Customer Consent Management" category. More information about the regional connector for Austria is described [here](Regional_Connectors/Austria/Austria.md)|
|Database|The Database stores important meta data, e.g. access rights, parameters for data exchange or country specific information.|

For a better overview all regional connectors inside EDDIE Framework are shown in the following picture:

-->