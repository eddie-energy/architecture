---
title: EDA (Austria)
---

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

> [!note] TODO: Copied from our wiki. Please review.

```mermaid
sequenceDiagram
    autonumber

Actor Customer
participant EP Service
participant ConsentPopup
participant ConsentFacade
participant ICL
participant DSOPortal

Note over Customer, DSOPortal: TODO: Alternative paths, failures, options etc.

ConsentPopup-->>ConsentFacade: request list of regions
ConsentFacade-->>ConsentPopup: answer with MS list
Customer->>+ConsentPopup: select AT
ConsentPopup-->>ConsentFacade: request list of PAs in AT
ConsentFacade-->>ConsentPopup: list with 139 Austrian DSOs is returned
ConsentPopup-->>ConsentFacade: load glue HTML (field MeteringPointId, generate and paste CMRequestId)
ConsentPopup-->>Customer: show description for how to find out meteringpoint id
ConsentPopup-->>Customer: click on _blank link to open DSO Portal
alt CMRequest with MeteringPointId
opt Customer needs to find MeteringPointId from DSO Portal
Customer-->>DSOPortal:find MeteringPointId
DSOPortal-->>Customer: copy MeteringPointId
end
Customer-->>ConsentPopup: paste MeteringPointId
else
Customer-->Customer: selects MeteringPoint in DSOPortal when accepting request
end
Customer->>ConsentPopup: hit connect data button
ConsentPopup->>ConsentFacade: submit form
ConsentFacade->>+ICL: [MSConsentRequestAT]
ICL->>ICL: create process
ICL->>EP Service:[CIMRequestUpdate]
ICL->>+DSOPortal: [ATConsentRequest]
alt invalid request
DSOPortal->>ICL: [ATCMRequestUpdate]
ICL->>EP Service: [CIMRequestUpdate]
ICL->>ConsentFacade:[CIMRequestUpdate]
ConsentFacade->ConsentPopup: [CIMRequestUpdate]
else valid request
DSOPortal->>ICL: [ATConsentStatusUpdate] (accepted/rejected)
ICL->>EP Service: [CIMConsentStatusUpdate]
Customer->>DSOPortal:login
Customer->>DSOPortal: search for CMRequest (optionally by Id)
Customer->>DSOPortal: accept request
DSOPortal->>ICL: [ATConsentStatusUpdate] ACCEPTED
ICL->>-EP Service: [CIMConsentStatusUpdate] ACCEPTED
DSOPortal->>-Customer: close DSO portal and/or redirect
Customer->>ConsentPopup: close popup and show status update
ConsentPopup->>-Customer: redirect to EP Website/App Onboarding
end   
```
