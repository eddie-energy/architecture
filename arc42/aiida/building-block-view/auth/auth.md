---
title: Authentication
order: 2
---

Authentication is not handled by the AIIDA Application itself but delegated to Keycloak.
Keycloak is an open-source Identity and Access Management (IAM) solution for modern applications and services. 
It offers features such as Single Sign-On (SSO), user federation, identity brokering, and social login. 
Supporting standard protocols like OAuth2, OpenID Connect, and SAML 2.0, Keycloak ensures compatibility with a wide range of applications.

AIIDA can be configured to use either a central cloud-based Keycloak instance or a locally deployed one.
When AIIDA runs in the cloud, the role of Keycloak becomes even more significant - allowing the same user accounts and authentication system to seamlessly access multiple AIIDA instances or other EDDIE applications.