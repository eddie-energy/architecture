---
title: EDA (Austria)
---
The EDA Region Connector integrates the EDDIE Framework with the Austrian data infrastructure operated by ebUtilities.  
It connects to the Austrian Permission Administrators and Metered Data Administrators through the PontonXP Messenger, which implements the AS4 protocol required in Austria.

The Region Connector enables Eligible Parties to request and manage customer permissions, and to retrieve validated consumption and metering point data once consent has been granted.

## Prerequisites

- Registration as a service provider at [ebUtilities.at](https://www.ebutilities.at/) to obtain a company identification number (e.g., `EP100129`).  
- A licensed instance of PontonXP Messenger installed and configured. This is the middleware required for AS4-based communication with Austrian DSOs.  

## Configuration

The EDA Region Connector requires a set of configuration values to operate correctly.  
These include:

| Configuration Key | Description |
|-------------------|-------------|
| `region-connector.at.eda.eligibleparty.id` | Company ID obtained from ebUtilities. |
| `region-connector.at.eda.ponton.messenger.adapter.id` | Adapter ID configured in PontonXP Messenger. |
| `region-connector.at.eda.ponton.messenger.hostname` | Hostname or IP of the PontonXP Messenger instance. |
| `region-connector.at.eda.ponton.messenger.port` | Port of the PontonXP Messenger (default: `2600`). |
| `region-connector.at.eda.ponton.messenger.api.endpoint` | REST API endpoint of PontonXP Messenger. |
| `region-connector.at.eda.retry` | Retry configuration using Spring cron syntax. |

Configuration can be supplied as Spring properties or as environment variables.  
For details, see the [Operation Manual](https://eddie-web.projekte.fh-hagenberg.at/framework/1-running/region-connectors/region-connector-at-eda.html).

## Running the Region Connector

When correctly configured, the EDA Region Connector appears in the list of available connectors in the EDDIE Framework.  
It then handles the end-to-end process of:

1. Receiving permission requests from the Eligible Party via EDDIE.  
2. Forwarding and validating the request with the Permission Administrator (through PontonXP Messenger).  
3. Allowing the customer to approve or reject the request in their DSO portal.  
4. Retrieving validated metering and consumption data from the Metered Data Administrator once consent is confirmed.  

## Notes

- Multiple Eligible Parties can share one PontonXP Messenger instance by configuring separate adapters per Eligible Party ID.  
- For advanced setup (e.g., routing to multiple adapters or customizing agreement templates), refer to the [PontonXP Messenger configuration guide](https://eddie-web.projekte.fh-hagenberg.at/framework/1-running/region-connectors/region-connector-at-eda.html).  

<!-- 
> [!note] TODO
> - What should each RC page contain -> shared structure?
> - How much technical detail?
>
> **Arch docs** -> stakeholders and developers
> - Internal architecture
> - Sequence Diagrams
> - Component diagrams
> - Class diagrams (if complex and stable enough)
> - Link to operation manual
>
> **Operation manual** -> eligible parties
> - Setup / Prerequisites
> - Configuration
> - Sketch + Screencast
> - Supported features
> - Regional coverage (what countries/regions/companies)
> - Onboarding help
> - How to test the RC manually
>
> Not everything will fit neatly into the "building block view"

[Onboarding and configuration](https://eddie-web.projekte.fh-hagenberg.at/framework/1-running/region-connectors/region-connector-at-eda.html)

> [!note] TODO: Copied from our wiki. Please review. -->