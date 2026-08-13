---
title: Understanding EDDIE's Role
order: 2
---

## Purpose of this page

This page clarifies what the **EDDIE Framework** is — and, just as importantly, what it is *not* — so that this distinction is used consistently across our documentation, privacy notices, and contractual materials.

## What EDDIE framework is

The distributed EDDIE (European Distributed Data Infrastructure for Energy) framework enables energy-related personal data to be exchanged in a standardized, interoperable way based on customers' consent. EDDIE provides the following:

- A **common interface** so that customers can share their own energy data and manage consent, given the Member State and the Distribution System Operator (DSO) they are connected to are supported.
- **Harmonized data access** across national data sharing infrastructures, so that an Eligible Party does not need to build a separate integration for every country or regional data hub.
- Smart, data-driven energy services — tariff comparison, flexibility/demand-response, consumption insights, and similar offerings — to be built and operated on top of a **Common European Energy Data Space**.
- **Consent-based data flows** between the party that holds the data (a DSO or the customer's own in-house devices via AIIDA) and the eligible party with which the customer has authorized to share their data.

We apply technical and organizational measures, including access control, encryption of data in transit, logging of permission status, and regular testing of systems that connect to Permission Administrators or Metered Data Administrators via [Region Connectors](https://architecture.eddie.energy/framework/1-running/region-connectors/region-connectors.html).

## What EDDIE framework is not

EDDIE does not process, store, or have access to end-customers' data beyond routing it between the source and the party they have authorized. The following is not currently part of EDDIE:

- The EDDIE framework does not sell energy data, hold customer contracts, issue bills, or provide tariffs. Those are provided by **Eligible Parties** — e.g. energy retailers, aggregators, or comparison services — that use the EDDIE Framework to access data.
- EDDIE is neither a data store nor a data hub. The framework does not hold or retain energy consumption data, metering data, or any other personal data. Data continues to reside with its original source (the national DSO, or the customer's in-house devices), and EDDIE facilitates its transmission upon consent.
- EDDIE does not process personal data or analyze any data on behalf of a controller.

## Managing EDDIE permissions

End-customers can grant permission through the EDDIE Framework's consent mechanism (the [Permission Facade](../../crosscutting-concepts/crosscutting-concepts.md#permission-facade)).
Data shared through the EDDIE Framework — including historical consumption and near real-time data — flows only where the end-customer has actively granted permission via the Permission Facade.
EDDIE receives the shared data from the Regional Data-Sharing Infrastructure(s), Metered Data Administrator(s) and/or Permission Administrator(s) operating in the respective country.
End-customers can perform the following actions:

- Grant a one-time or time-limited permission to an Eligible Party (EP).
- View which Eligible Parties currently have an active permission to receive data, and for what scope and duration.
- Revoke a permission to withdraw consent and stop the data flow to the EP.

## Contact us

For any question about the EDDIE framework and documentation, contact us: sail.energy.developers@fh-hagenberg.at