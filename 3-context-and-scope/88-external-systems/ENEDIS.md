---
title: ENEDIS
tags: MVP-1
---

The ENEDIS Datahub is a permission administrator and data access provider for historically validated data in France.
They offer some APIs from which we only consider the [Data Connect API](https://datahub-enedis.fr/en/data-connect-en/).
It provides means to authorize a customer and obtain metering data on behalf of this customer for providing additional
services.

This API is based on HTTP/REST principles and uses an OAuth 2.0 based authorization scheme to access that data.

## Authorization
The current authorization API [Jeton v3](https://datahub-enedis.fr/services-api/data-connect/documentation/jeton/) is based on OAuth 2.0. This
is the API ENEDIS offers to fulfill it's role as a permission administrator.

TBD.: Find out which kind of OAuth grant may be used, e.g.:
- [RFC 6749: Authorization Code Grant](https://www.rfc-editor.org/rfc/rfc6749#section-4.1)
- [RFC 6749: Resource Owner Password Credentials Grant](https://www.rfc-editor.org/rfc/rfc6749#section-4.3)
- [RFC 6749: Client Credentials Grant](https://www.rfc-editor.org/rfc/rfc6749#section-4.4)

A description  of various authorization flows can be found in the auth0 documentation, see
[Authentication and Authorization Flows](https://auth0.com/docs/get-started/authentication-and-authorization-flow).

## Metering Data

[Metering v5 – consommation 30 minutes](https://datahub-enedis.fr/services-api/data-connect/documentation/metering-v5-consommation-30-minutes/)

## Links to ENEDIS Datahub
- [Services providers presentation](https://datahub-enedis.fr/en/services-providers-presentation/): presentation of APIs for service providers
- [Services API](https://datahub-enedis.fr/services-api/):  description of the available APIs _in French_
- [État des services](https://datahub-enedis.fr/services-api/etat-des-services/): current status of the ENEDIS services _in French_
- [Data Connect](https://datahub-enedis.fr/en/data-connect-en/)
- [Data Connect API documentation](https://datahub-enedis.fr/services-api/data-connect/documentation/): swagger API documentation _in French_
