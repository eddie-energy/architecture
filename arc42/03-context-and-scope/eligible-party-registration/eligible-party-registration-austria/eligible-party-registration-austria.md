---
title: Austria
---

## Eligible Party Registration to the Regional Data-sharing Infrastructure - Austria

### Create Account

The Regional Data-sharing Infrastructure of Austria is operated by [EDA](https://www.eda.at/). EDA follows the [OASIS ebXML Messaging Services](http://docs.oasis-open.org/ebxml-msg/ebms/v3.0/core/ebms_core-3.0-spec.html) specification and implements the [AS4 messaging standard](https://en.wikipedia.org/wiki/AS4) for exchanging data. Every eligible party covering Austria must register with [ebUtilities](https://ebutilities.at/marktpartner) and acquire the Energy Service Provider identifier (e.g. EP100005). This identifier is then used for all interactions with EDA. 

### Accessing Data

For the eligible party to access energy data the following process has to take place:

1. The eligible party gathers information about the consumer and the metering point using a form offered on the eligible party's website.
1. Using this information, the eligible party creates a request for data called [CCM_Request](https://www.ebutilities.at/prozesse/321/marktnachrichten/838).
1. This request is sent to EDA via AS4. EDA then forwards this request to the DSO of the consumer.
1. At this point, the consumer has to log in to the DSO and accept the CCM_Request.
1. The DSO forwards the acceptance to EDA.
1. EDA sends the requested data to the eligible party via AS4.


