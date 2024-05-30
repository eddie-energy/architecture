---
title: EDDIE Framework
order: 1
---

 ## Eddie Framework
 The EDDIE Framework contains the core functionality of EDDIE. The Framework (especially the regional connectors and their interaction with other systems) can be different for different countries. As an example, we show Austria in this section. The Framework architectures for the other countries are shown in the corresponding section for the Regional Connectors.

 ### Eddie Framework Austria

 <C4 diagram="container-eddieFramework-austria" />
| Container | Responsibility |
| - | - |
|EDDIE Core| Provides the core functionalities of EDDIE, e.g. handles energy data or meta data that is forwarded to EDDIE, stored in the database or send somewhere else.|
|Regional Connector Austria|The Regional Data-sharing Infrastructure of Austria is operated by EDA. Thus, EDA can be considered as the data access provider for historically validated data of customers in Austria. EDA works as a central messaging service for all the DSOs in Austria by implementing the AS4 messaging protocol and using the ebMS3 specification. Hence, instead of an API-based approach, energy data in Austria is exchanged via encrypted XML files. The utilized processes are described at the ebUtilities website. The relevant processes for EDDIE fall under the "Customer Consent Management" category. More information about the regional connector for Austria is described [here](Regional_Connectors/Austria/Austria.md)|
|Database|The Database stores important meta data, e.g. access rights, parameters for data exchange or country specific information.|


For a better overview all regional connectors inside EDDIE Framework are shown in the following picture:
 <C4 diagram="container-regional-connectors" />

