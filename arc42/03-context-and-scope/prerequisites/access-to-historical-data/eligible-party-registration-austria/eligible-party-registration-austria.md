---
title: Austria
---

## Eligible Party Access to the Regional Data-sharing Infrastructure - Austria

### Create Account

The Regional Data-sharing Infrastructure of Austria is operated by [EDA](https://www.eda.at/). EDA follows the [OASIS ebXML Messaging Services](http://docs.oasis-open.org/ebxml-msg/ebms/v3.0/core/ebms_core-3.0-spec.html) specification and implements the [AS4 messaging standard](https://en.wikipedia.org/wiki/AS4) for exchanging data. Every eligible party covering Austria must register with [ebUtilities](https://ebutilities.at/marktpartner) and acquire the Energy Service Provider identifier (e.g. EP100005). This identifier is then used for all interactions with EDA. 

### Access Data

For the eligible party to access the historical validated energy consumption data of a customer the following process has to take place:

1. The eligible party gathers information about the customer (e.g., the metering point ID) using a form offered on the eligible party's website.
1. Using this information, the eligible party creates a Customer Consent Management (CCM) request ([CM_REQ](https://www.ebutilities.at/prozesse)) for access to the customer's energy data.
1. The eligible party sends this request to the interface of the Regional Data-sharing Infrastructure, i.e., EDA, via the AS4 protocol.
1. EDA forwards the request to the DSO (Ditribution System Operator) of the customer.
1. At this point, the consumer has to log in to the DSO website and accept the CCM request.
1. The DSO forwards the acceptance to EDA, and EDA sends a status update to the eligible party via AS4.
1. The DSO sends the requested data to EDA.
1. EDA sends the data (as a [ConsumptionRecord](https://www.ebutilities.at/schemas/133)) to the eligible party via AS4.


