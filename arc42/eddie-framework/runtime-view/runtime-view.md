---
title: Runtime View
order: 3
---

The runtime view describes the behavior of EDDIE Framework and the interaction between its building blocks for important workflows.

This section hides the behavior of individual region connectors and outbound connectors.
Specific documentation can found on the [respective building block pages](../building-block-view/regional-connectors/regional-connectors.md).

## EDDIE Popup

```mermaid
sequenceDiagram
	autonumber
	actor Customer
	participant Popup as EDDIE Popup
	participant Core
	participant RC as Regional Connector

	Popup->>Core: Fetch Data Need
	Popup->>Core: Fetch Permission Administrators
	Popup->>Core: Fetch RC Metadata
	Customer->>Popup: Click EDDIE Button
	Customer->>Popup: Confirm Data Need
	Customer->>Popup: Select country and PA
	Popup->>RC: Fetch RC element
	Customer->>Popup: Interact with RC element
	Note over Customer,RC: Interaction varies by RC element
	Popup->>RC: Send permission request based on user interaction
	Popup->>Core: Subscribe to permission status
```

## Permission Process Model

::: info TODO
- Reference Aya's paper once published.
- Check if this should be on the domain concepts page.
:::

![BPRT diagram showing the permission request process](../figures/permission-process-model.svg)

The [Operation Manual](https://eddie-web.projekte.fh-hagenberg.at/framework/2-integrating/integrating.html#permission-process-model) provides details on how to interpret and handle specific states.

## Use-Cases                          
### Collect the customer's information
### Request the customer's consent    
### Access the customer's data        
### Send the data to the services     
### Revoke the customer's consent     
