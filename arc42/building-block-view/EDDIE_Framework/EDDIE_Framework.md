---
title: EDDIE Framework
order: 1
---

 ## Eddie Framework
 The EDDIE Framework contains the core functionality of EDDIE. As the Framework (especially the regional connectors and their interaction with other systems) can be different for different countries, each country is shown in its own subsection.

 ### Eddie Framework Austria

 {% c4 "container-eddieFramework-austria" %}
| Container | Responsibility |
| - | - |
|EDDIE Core| Provides the core functionalities of EDDIE, e.g. handles energy data or meta data that is forwarded to EDDIE, stored in the database or send somewhere else.|
|Regional Connector Austria|The Regional Data-sharing Infrastructure of Austria is operated by EDA. Thus, EDA can be considered as the data access provider for historically validated data of customers in Austria. EDA works as a central messaging service for all the DSOs in Austria by implementing the AS4 messaging protocol and using the ebMS3 specification. Hence, instead of an API-based approach, energy data in Austria is exchanged via encrypted XML files. The utilized processes are described at the ebUtilities website. The relevant processes for EDDIE fall under the "Customer Consent Management" category. |
|Database|The Database stores important meta data, e.g. access rights, parameters for data exchange or country specific information.|
|Interfaces|Containers may depend on some specific interfaces regarding permissions, communication or other applications.|

### Eddie Framework France
{% c4 "container-eddieFramework-france" %}
| Container | Responsibility |
| - | - |
|EDDIE Core| Provides the core functionalities of EDDIE, e.g. handles energy data or meta data that is forwarded to EDDIE, stored in the database or send somewhere else. |
|Regional Connector France|The Enedis Datahub is a permission administrator and data access provider for historically validated data in France. Enedis offers various APIs, including the [Data Connect API](https://datahub-enedis.fr/en/data-connect-en/), which is useful for EDDIE to manage data access. Through these APIs, Enedis provides the eligible parties with the means to obtain metering data on behalf of customers in France. The provided APIs are based on HTTP/REST principles and use an OAuth 2.0-based authorization scheme to access the data. The identified issues related to the use of Enedis are documented [here](./issues.md).|
|Database|The Database stores important meta data, e.g. access rights, parameters for data exchange or country specific information.|
|Interfaces|Containers may depend on some specific interfaces regarding permissions, communication or other applications.|
|

### Eddie Framework Spain
{% c4 "container-eddieFramework-spain" %}
| Container | Responsibility |
| - | - |
|EDDIE Core| Provides the core functionalities of EDDIE, e.g. handles energy data or meta data that is forwarded to EDDIE, stored in the database or send somewhere else. |
|Regional Connector Spain| The Datadis service provides a Permission Administrator for all DSOs in Spain. The identified issues related to the use of Datadis are documented [here](./issues.md).|
|Database|The Database stores important meta data, e.g. access rights, parameters for data exchange or country specific information.|
|Interfaces|Containers may depend on some specific interfaces regarding permissions, communication or other applications.|
|
