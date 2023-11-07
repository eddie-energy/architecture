---
title: SASL - TLS
---

## Definition

The Simple Authentication and Security Layer (SASL) is a framework that provides a standardized way for network protocols to add authentication support. In Apache Kafka, SASL is employed as an authentication mechanism to enhance the security of the messaging system. SASL allows clients and servers to negotiate a suitable authentication mechanism, facilitating the secure exchange of credentials during connection establishment. By supporting various authentication mechanisms such as PLAIN, SCRAM (Salted Challenge Response Authentication Mechanism), and others, SASL enables Kafka to integrate with a variety of authentication systems, including username/password-based authentication or more advanced methods like Kerberos. This extensibility makes SASL a versatile and widely adopted component for strengthening the authentication layer in diverse networked applications, including distributed systems like Kafka.

Transport Layer Security (TLS) is a cryptographic protocol that ensures secure communication over a computer network, commonly used to safeguard data exchanged between a client and a server on the Internet. TLS operates at the transport layer, providing encryption, authentication, and integrity checks for the data in transit. It establishes a secure connection by employing asymmetric and symmetric cryptography, where public and private keys are used to negotiate a shared secret key for encrypting the actual data transmission. In Apache Kafka, TLS is used to secure the communication channels between Kafka brokers and clients. As a result, Kafka provides a robust security layer that protects against eavesdropping and tampering, particularly important to ensure data privacy and integrity.

## Relevance

SASL and TLS are used by Apache Kafka which is the streaming framework of choice for the implementation of the Streaming Infrastructure component of the EDDIE Framework.


## Motivation

SASL and TLS are used by the Streaming Infrastructure component to guarantee the privacy and integrity of the data that is transferred to/from the EDDIE Framework.

At the moment, these are the widely utilized security mechanisms of Apache Kafka. While others may exist in experimental stages, they are not considered as plausible alternatives.