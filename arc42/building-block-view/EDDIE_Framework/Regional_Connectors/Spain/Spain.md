---
title: Spain
order: 3
---

## Eddie Framework Spain
As mentioned in the section for EDDIE Framework, each country can have a slightly different architecture. For Spain, the Framework looks as follows: 

{% c4 "container-eddieFramework-spain" %}
| Container | Responsibility |
| - | - |
|EDDIE Core| Provides the core functionalities of EDDIE, e.g. handles energy data or meta data that is forwarded to EDDIE, stored in the database or send somewhere else. |
|Regional Connector Spain| The Datadis service provides a Permission Administrator for all DSOs in Spain. The identified issues related to the use of Datadis are documented [here](./issues.md).|
|Database|The Database stores important meta data, e.g. access rights, parameters for data exchange or country specific information.|


## Connector Specifics
Spanish Datadis service provides a Permission Administrator for all Spanish DSOs.
