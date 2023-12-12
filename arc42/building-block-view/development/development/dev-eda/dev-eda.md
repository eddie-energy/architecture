---
title: EDA-AT
tags: [MVP-1,Austria]
---

EDA can be thought of as the data access provider for historically validated data in Austria. 
It works as a central messaging service for all the DSOs in Austria by implementing the [AS4 messaging protocol](https://www.codit.eu/blog/as4-for-dummies-part-ii-messaging-overview/) and using the [ebMS3 specification](http://docs.oasis-open.org/ebxml-msg/ebms/v3.0/core/ebms_core-3.0-spec.html).

So instead of an API based approach, Austria exchanges energy data via encrypted XML files.

How it works and relevant processes can be found at [ebUtilities](https://www.ebutilities.at/prozesse). The relevant processes for EDDIE fall unter the "Customer Consent Management" category.

## Requesting Data

Requesting data works according to the [[CM_REQ_ONL] Consent Management - Datenfreigabe Online](https://www.ebutilities.at/prozesse/321) process.

It requires the following steps:
1. Create a [CCM_Request](https://www.ebutilities.at/prozesse/321/marktnachrichten/838) for a use.
2. Send it via AS4 messaging to EDA => EDA will deliver it to the corresponding DSO.
3. Now the user needs to log into his DSO portal and accept the CCM_Request.
4. DSO sends answer to EDA => EDA will deliver the answer to us.
5. If the user has given permission to his data, the DSO will send the requested data (as a [ConsumptionRecord](https://www.ebutilities.at/schemas/133)) , when it is available, to us (via EDA).

As this process shows, Austria uses a push based model for historical validated data.

## Setup/ Onboarding

For the AS4 communication with EDA we use a [Ponton X/P Messenger](https://www.ponton.de/ponton-xp).

So for MVP1, the region connector for Austria uses the Ponton X/P Messenger to communicate with the DSOs.

The communication with the Ponton X/P Messenger itself works via their Java API which uses a Websocket connection in the background.

In the future we might consider implementing the AS4 protocol by ourselves or look into available open source implementations.

## Example Files

* ANFORDERUNG_CCMO
* NEXT_FILE
* ..

## Issues

| No. | Title | Description | Reported at | Resolved at |
|-----|-------------------|-----------------------------------------------|-----------|------------|
| 1 | No response to request | ... | 2023-04-18 | - |
| 2 | Manual setup of communication partner needed|  | 2023-04-18 |  |

## Links to ebUtilities
- [ebUtilities](https://ebutilities.at/)
- [Processes](https://ebutilities.at/prozesse)
- [Schemas](https://ebutilities.at/schemas)
