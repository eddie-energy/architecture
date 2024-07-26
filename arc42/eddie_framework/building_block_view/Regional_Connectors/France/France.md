---
title: France
order: 4
---

::: warning TO ADD
More detailed explanation
:::

## Eddie Framework France

As mentioned in the section for EDDIE Framework, each country can have a slightly different architecture. For France, the Framework looks as follows:

<C4 diagram="container-eddieFramework-france" />
| Container | Responsibility |
| - | - |
|EDDIE Core| Provides the core functionalities of EDDIE, e.g. handles energy data or meta data that is forwarded to EDDIE, stored in the database or send somewhere else. |
|Regional Connector France|The Enedis Datahub is a permission administrator and data access provider for historically validated data in France. Enedis offers various APIs, including the [Data Connect API](https://datahub-enedis.fr/en/data-connect-en/), which is useful for EDDIE to manage data access. Through these APIs, Enedis provides the eligible parties with the means to obtain metering data on behalf of customers in France. The provided APIs are based on HTTP/REST principles and use an OAuth 2.0-based authorization scheme to access the data. The identified issues related to the use of Enedis are summarized as a Table [BPRT_Infra_IssueList.xlsx](https://hartnerconsultingcom.sharepoint.com/:x:/r/sites/EuropeanDataAccess/Freigegebene%20Dokumente/WPs/WP5_RegionConnectors/T5.1_BPRT_Infrastructure/BPRT_Infra_IssueList.xlsx?d=w583708fb62a9480399a50c52d11afa4d&csf=1&web=1&e=M3A4cx).|
|Database|The Database stores important meta data, e.g. access rights, parameters for data exchange or country specific information.|

## Connector Specifics

|The ENEDIS Datahub is a permission administrator and data access provider for historically validated data in France.
They offer some APIs from which we only consider the [Data Connect API](https://datahub-enedis.fr/en/data-connect-en/).
It provides means to authorize a customer and obtain metering data on behalf of this customer for providing additional
services.

This API is based on HTTP/REST principles and uses an OAuth 2.0 based authorization scheme to access that data.

### Authorization

The current authorization API [Jeton v3](https://datahub-enedis.fr/services-api/data-connect/documentation/jeton/) is based on OAuth 2.0. This
is the API ENEDIS offers to fulfill it's role as a permission administrator.

ENEDIS implements the [Client Credentials Grant Flow](https://auth0.com/docs/get-started/authentication-and-authorization-flow/client-credentials-flow), i.e. we provide the credentials
of our ENEDIS application to the [Jeton v3](https://datahub-enedis.fr/services-api/data-connect/documentation/jeton/) API which will return a JWT bearer token. The token needs to be provided
to the other APIs when requesting data e.g. consumption data like daily consumption or a load curve. With the token we can request data for all usage points (metering points) for which we have been granted access.

Access to a usage point (metering point) is granted by a user via the [Authorization v1](https://datahub-enedis.fr/services-api/data-connect/documentation/autorisation-v1/) API. This API redirects the user to an ENEDIS page on which they can grant access to their usage points.

RFCs for OAUTH grants:

- [RFC 6749: Authorization Code Grant](https://www.rfc-editor.org/rfc/rfc6749#section-4.1)
- [RFC 6749: Resource Owner Password Credentials Grant](https://www.rfc-editor.org/rfc/rfc6749#section-4.3)
- [RFC 6749: Client Credentials Grant](https://www.rfc-editor.org/rfc/rfc6749#section-4.4)

A description of various authorization flows can be found in the auth0 documentation, see
[Authentication and Authorization Flows](https://auth0.com/docs/get-started/authentication-and-authorization-flow).

### Metering Data

- [Metering v5 – consommation 30 minutes](https://datahub-enedis.fr/services-api/data-connect/documentation/metering-v5-consommation-30-minutes/)
- [Metering v5 – daily consumption](https://datahub-enedis.fr/services-api/data-connect/documentation/metering-v5-consommation-quotidienne/)

### Links to ENEDIS Datahub

- [Services providers presentation](https://datahub-enedis.fr/en/services-providers-presentation/): presentation of APIs for service providers
- [Services API](https://datahub-enedis.fr/services-api/): description of the available APIs _in French_
- [État des services](https://datahub-enedis.fr/services-api/etat-des-services/): current status of the ENEDIS services _in French_
- [Data Connect](https://datahub-enedis.fr/en/data-connect-en/)
- [Data Connect API documentation](https://datahub-enedis.fr/services-api/data-connect/documentation/): swagger API documentation _in French_

_Note:_

- Most links to ENEDIS require the creation of a user account. An account can be created by logging in with an email that has no account associatated (yes very obvious...).
- Use the French documentation as reference and translate with e.g. a browser plugin, as the english version is outdated.
