---
title: HTTPS
---

## Definition

<!-- What it is -->

HTTP Secure (HTTPS) is a protocol for secure communication over a computer network, widely used on the Internet. It is an extension of the Hypertext Transfer Protocol (HTTP) with the added layer of security provided by SSL/TLS protocols. HTTPS is designed to ensure the confidentiality and integrity of data exchanged between a client and a server. When HTTPS calls are made, the communication between the client and the server is encrypted, making it significantly more difficult for malicious actors to intercept or tamper with the data being transmitted. This secure communication is particularly crucial for online transactions, sensitive information exchange, and protecting user privacy.

## Relevance

<!-- Where it is used, i.e., in what parts of EDDIE -->

All HTTP calls that are not done over the local network use HTTPS for both client and server software components that are within the scope of EDDIE.

## Motivation

<!-- Why it is used, what are alternatives, why is this preferred compared to alternatives -->

HTTPS is used by the software components that exchange information via HTTP in order to ensure the confidentiality and integrity of the exchanged data.

An alternative to HTTPS is:

- Plain HTTP: For scenarios when security is not a concent, e.g., in trusted environments, HTTP may be sufficient.