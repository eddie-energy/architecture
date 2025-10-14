---
title: Region Connectors
---

A Region Connector is a building block of the EDDIE Framework that integrates with the Permission Administrators and Metered Data Administrators of a specific region. Its main responsibility is to implement the permission process of that region and to provide access to validated energy data on behalf of the Eligible Party.

### Purpose and Responsibilities

- Connect to the Permission Administrator to manage permission requests.  
- Forward permission requests from the Eligible Party to the Permission Administrator for validation.  
- Receive notifications from the Permission Administrator about the decision of the final customer.  
- Connect to the Metered Data Administrator to access validated energy data, once consent is granted.  
- Support multiple Permission Administrators and Metered Data Administrators in a single region, with one Region Connector implementation per unique process.  

### Context

- Eligible Party: Creates permission requests and consumes the data retrieved by the Region Connector.  
- Permission Administrator: Validates permission requests, presents them to the final customer, and communicates the customer’s decision.  
- Final Customer: An entity with one or more metering points (electricity, gas, etc.) that can approve or deny requests.  
- Metered Data Administrator: Provides validated historical or accounting point data after verifying the customer’s consent with the Permission Administrator.  

### Variability Across Regions

Since each country or region may define its own processes for managing permissions and accessing data, multiple Region Connector implementations exist:
- If multiple Permission Administrators or Metered Data Administrators follow the same process and data formats, they can be covered by a single Region Connector.  
- If processes differ, separate Region Connectors are required.  

### Interfaces

- Inbound: Accepts permission requests from the Eligible Party (via the EDDIE Core).  
- Outbound: Communicates with external Permission Administrator and Metered Data Administrator APIs (e.g., REST, AS4 messaging).  

### Constraints

- Region Connectors must comply with the regulatory and technical specifications of the respective Permission Administrator and Metered Data Administrator.  
- Eligible Parties must be registered with the Permission Administrator and Metered Data Administrator to use the interfaces.  
- Sensitive information is only accessed once explicit consent has been confirmed by the Permission Administrator. 

The EDDIE Framework uses several Region Connectors, each implementing the permission and data access processes of their respective infrastructures. More information about all the supported connectors can be found in [Region Connectors](https://eddie-web.projekte.fh-hagenberg.at/framework/1-running/region-connectors/region-connectors.html).

<!-- > [!note] TODO
> - Describe shared APIs and similarities between region connectors
>   - Implement common interface
>   - Specify metadata
>   - Provide custom element
> - Add pages for EDA and AIIDA
>   - EDA is a good starting point because we know a lot about it and its architecture is stable
>   - AIIDA is particularly relevant as the interface between AIIDA and the EDDIE Framework
>     - Move page from AIIDA system

The [building block view](../building-block-view.md) looks at region connectors as a block-box component.
In reality, each region connector is specifically tailored towards its respective data sharing infrastructure.
This page documents shared concepts and interfaces while the following pages document the individual region connectors.

- [EDA (Austria)](./at-eda.md)
- [AIIDA](./aiida.md) -->