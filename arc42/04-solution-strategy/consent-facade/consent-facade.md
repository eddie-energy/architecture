---
title: Consent Facade
---

The Consent Facade component is implemented within the EDDIE framework which is under the operation of the eligible party. Upon request from the consumer, this component is responsible for triggering the process that gives the eligible party access to the consumer's energy data (either from the consumer's Permission Administrator or from AIIDA). The figures below describe various aspects of the Consent Facade.

The Consent Facade is linked with various operations of the EDDIE Framework. For this reason, in order to describe the Consent Facade comprehensively, this section provides various details and graphical representations. In general, the acquisition of data from the EDDIE Framework is initiated by the creation of a *Service*. Thus, the eligible party initially has to create a Service and specify certain Service-related attributes such as the data family (e.g., historical validated data, or real-time data) of the required data. The figure below shows an example of a form that has to be filled out by the eligible party in order to create a new Service. 

<div align="center">
<img src="./figures/EACH%20Process%20will%20be%20done%20for%20a%20Service.png" >
</div>

As long as a Service has been created, consumers have to be linked to this Service, so that the Service can process their data. The figure below shows the high-level process of a consumer that gives their consent to an eligible party for data access and processing by a Service. This process includes the following steps:

1. The consumer creates an account on the EP Website.
2. The consumer clicks a button to share their data.
3. The consumer then has to fill out a form with details of the data to be shared and also select their permission administrator (e.g., based on their country).
4. Using the collected information, a request for data access is created and sent to the permission administrator (if the request is for historical data) or AIIDA (if the request is for real-time data).
5. The request for data access is received by the permission administrator.
6. The consumer is redirected to the permissions administrator's website.
7. The consumer accepts (or declines) the request for data access.
8. The EDDIE Framework is informed about the acceptance of the request.
9. The acceptance is forwarded to the Consent Facade.
10. The acceptance is forwarded to the EP Website.
11. A status update of the request is shown.


<div align="center">
<img src="./figures/HIGH-Level%20view%20in%20Proposal.png" >
</div>

To show all the consents given to a particular eligible party, the EDDIE Framework will provide an overview of the consents along with respective details and available actions. An example of this overview is shown in the figure below.

<div align="center">
<img src="./figures/GOAL%20for%20after%20MVP.png" >
</div>

The necessary components to achieve the basic functionality of the Consent Facade are shown in the figure below. On the left-hand side, there is an onboarding process that shows the button *connect my data* that has to be clicked by the consumer. After clicking, there is a popup window with a form that gathers additional information from the consumer. This form requires information, e.g., available countries and permission administrators, which are acquired from the Consent Facade. The filled-out form is sent back to the Consent Facade. The consent facade creates the request for data access and shares this request with the EDDIE Interoperable Communication Layer via a Kafka topic. The Interoperable Communication Layer maintains a state of all requests so that if a state changes, all related components are notified (e.g., the popup window of the consumer on the EP Website). The state can change from the PA Connectors (e.g., PA Connector EDA or PA Connector Enedis in the figure) which communicate with the respective Permissions Administrators (e.g., PA Connector EDA communicates with the Austria Permission Administrator EDA, while Enedis is the French Permission Administrator). 
 
<div align="center">
<img src="./figures/EDDIE%20Framework%20MVP%20Deployment%20Diagram.png" >
</div>

The process discussed so far is also shown below in a sequence diagram. This diagram includes the following steps.

1. This step is to be implemented by the eligible party itself. It needs to be able to identify the customer and create an onboarding flow for its user. Nothing to do from our side (except - probably - documentation).
2. For each data set required, a 'connect my data' button must be placed in the onboarding journey of the user. **[DEV-TASK] <br />1) design such a button graphically, 2) define a CIMExtension / market message as an interface for eligible parties for how they can specify/parameterise the data they need, 3) create a HTML/JS library or code copy&paste for users to easily integrate these buttons on their websites or apps.**
3. The popup should either redirect to a dedicated page or to a popup like in the Figure below. **[DEV-TASK] 1) Design such a popup or redirect page 2)create a JS/HTML library for users to easily integrate and keep in mind that this component needs to draw master data from the Consent Facade run by the EDDIE Framework operator**.
4. Request list of countries and - after a country is selected - a list of the permission administrators in each country from the EDDIE Framework instance. **[TASK] 1) define master data structure, 2) research and generate master data 3) create a REST API for this within the EDDIE Framework / EDDIE Consent Facade 4) on the GUI side, these lists must be displayed properly in the country dropdown and also in the Permission Administrator dropdown.**
5. Return countries and data families.
6. Here the popup will need to download glue HTML code to fill _shortcomings of user flows of data-sharing environments_. **[DEV-TASK] 1) define a way to integrate these glue pieces of information (see screenshot of popup) 2) API functionality of Consent Facade will be needed.**
7. Return shortcomings.
8. If _cancel_ is clicked on the popup, the user should be redirected back to the onboarding workflow.
9. Send a standardised [CIMConsentRequest] message to the PA Portal to preset consent information (see Implementing Act Procedure 2.3). **[DEV-TASK] 1) standardise how such a message must look like, extend CIM, 2) implement generation of such a message.**
10. Forward the message in MS format and within MS data exchange environment **[DEV-TASK] 1) translage CIM message to national format 2) use interoperability layer to integrate with different means of communication (e.g. log in to hub, send market message, etc.) using the onboarding details stored in the _country setup_.**
11. Redirect the customer to the PA Portal. **[DEV-TASK] 1) foresee a redirect link in PA Master Data that can take parameters like ConsentID or ConnectionPointID etc. 2) Redirect from Consent Popup to PA Portal.**
12. User logs in to PA Portal.
13. User closes portal or is redirected to _EP App Onboarding Workflow_. **[DEV_TASK] for e.g. OAuth-based authentication on the PA Portal, such _redirect links in case of error_ must be supported. [TASK_FOR_BPRT] Data-sharing infrastructures must support backlinks in case the consent is not given to allow for effective user flows also in this case.**
14 Ideally - but depending on the support by the data-sharing infrastructure - the customer should then be redirected on login to the respective consent request, so that he must only say _accept_ or _reject_. **[TASK_FOR_BPRT] Emphasize support for this step by all data-sharing infrastructures.**
15. Send negative Status update in MS format to Interop Layer. **[DEV-TASK] Support the reception of this information in MS format and with MS procedures. (Region Connector)**
16. Translate MS format to CIM Format and forward to Service. **[DEV-TASK] 1) Support the MarketMessage in CIM Extension, 2) Write translator for national formats.**
17. Close portal or redirect user. **[DEV-TASK] support the redirect back, check whether Consent has been accepted or rejected and show GUI accordingly. [TASK_FOR_BPRT] Emphasize support for _direct redirect after accept/reject_ in PA Portals.**
18. PA informs MDA about established consent (within MS environment).
19. Set up the transfer of data. NB: If data is directly awailable and we are in PUSH environments, it is directly transferred to _EP Service_ or when it gets available. In PULL environments, the data becomes _pullable_.
20. MS MarketMessage to InteroperableCommunicationLayer that the consent request has been accepted. **[DEV-TASK] 1) Prepare Interoperability layer for this interaction 2) RegionConnectors must be prepared to receive this type of interaction. [TASK_FOR_BPRT] Data-sharing infrastructures must support this type of action.
21. Forward MarketMessage about consent acceptance in CIM format to EP Service. **[DEV-TASK] 1) extend CIM standard to allow for such a message 2) write translator from national format to common format 3) update consent process object and log information**.
22. EP Service can update its customer account information.
23. Close portal or redirect user. **[DEV-TASK] support the redirect back, check whether Consent has been accepted or rejected and show GUI accordingly. [TASK_FOR_BPRT] Emphasize support for _direct redirect after accept/reject_ in PA Portals.**
24. If other data families are needed, the EP Application in its onboarding process can request it.
25. Data is sent to the EP Service as a MS format MarketMessage to the Interoperability layer. NB: Note that in PULL scenarios this _sending_ needs to be emulated by polling smartly. **[DEV-TASK] 1) prepare interoperability layer to receive data 2) write emularions for message-based, rest, soap and streaming scenarios 3) interfaces for region connectors to dock in 4) write region connectors that integrate and receive these messages.**
26. Data is translated to common CIM MarketMessage and forwarded to EP Service through EDDIE Data Streaming infrastructure. **[DEV-TASK] 1) Extend CIM to support MarketMessage(s) 2) write translators within RegionConnector towards CIM MarketMessage.**

<div align="center">
<img src="./figures/SEQUENCE.png" >
</div>

The consent for data access may be revoked at any time. If the revocation is triggered by the Meter Data Administrator, then the Permission Administrator is notified, and in turn, the EDDIE Framework (through the Interoperable Communication Layer). This process is shown in the figure below. 

<div align="center">
<img src="./figures/REVOKE%20PROCESS.png" >
</div>

If the Service is terminated by the eligible party, then a termination request is sent from the EDDIE Framework to the Permission Administrator and then to the Meter Data Administrator. This process is shown in the figure below.

<div align="center">
<img src="./figures/TERMINATE%20PROCESS.png" >
</div>

The popup window that is shown to the consumer upon clicking the *connect my data* button, needs to collect the necessary information for acquiring the consumer's data. An example of such a window is shown in the figure below, including two cases: Spain on the left-hand side and Austria on the right-hand side. Both cases need information about the selected country and Permission Administrator as well as the data family, granularity and period. In addition, the popup window may require specific information based on the selected Permission Administrator. For example, for Datadis in Spain, the Shared Metering Point ID is needed, while for Netze Burgenland, the Generated ConsentID is needed. After filling out this window, the consumer clicks *Proceed* and is redirected to the Permission Administrator Website.

<div align="center">
<img src="./figures/Popup%20initiating%20Consent%20process(es).png" >
</div>

The overall consent management process is shown in the figure below. This process starts with a new consent request (shown on the right-hand side of the figure). For this request, a process state object is created including a process ID, creation date, corresponding Service, region, etc, and is given the state *CREATED*. Then, this object is examined by the corresponding Region Connector to make sure that all the mandatory fields are filled in. If something is missing, the state is changed to *INVALID*, and the process ends. Otherwise, the state is changed to *VALIDATED*. If the state is *VALIDATED*, then the object is transformed into a PA message that is structured based on what is needed by the corresponding Permission Administrator. If something goes wrong during the transformation process, the state changes to *INVALID* and the process ends. Otherwise, the state is changed to *VALID_PA*. At this point, is where the consumer is redirected to the Permission Administrator Website to accept the request. When the consumer accepts, the EDDIE Framework is notified, and the state is changed to *CONSENT_ESTABLISHED*. In this state, the EDDIE Framework has acquired the consumer's consent, and is able to request the energy data. If the Service is terminated by the eligible party, the process ends and the state is changed to *CONSENT_TERMINATED*. If the consent is revoked, e.g., by the Permission Administrator, the process also ends, and the state is changed to *CONSENT_TERMINATED*.

<div align="center">
<img src="./figures/Reference%20consent%20Management%20PROCESS%20proposal.png" >
</div>

After establishing the consent, the data is sent to the EDDIE Framework through the Interoperable Communication Layer. This process is shown in the figure below and includes the following steps:

1. The requested data is collected and sent to the Interoperable Communication Layer.
2. Future data is also collected and sent.
3. The data is received by the Interoperable Communication Layer.
4. The data is transformed into a common format. This is important because data from different countries may be received in different formats.
5. The data is sent to a Service for processing.
6. The data is received by the Service.
7. The data is transformed to be used by the internal algorithms of the Service, and is further processed. 

<div align="center">
<img src="./figures/HIGH-Level%20view%20in%20Proposal2.png" >
</div>

When the data is received by the Interoperable Communication Layer, this data is transformed into a [CIM](../../08-crosscut-concepts/domain-models/cim/cim.md) representation. Then, the data is enriched with additional information that is used internally in the EDDIE Framework (e.g., Service ID, ConsentID, etc.). Finally, the enriched CIM representation of the data is sent to the Service via a Kafka topic. This process is also shown in the figure below.

<div align="center">
<img src="./figures/Reference%20TRANSFER%20DATA%20PROCESS%20PROPOSAL.png" >
</div>

The figure below shows the process from the perspective of the consumer. Specifically, this figure includes examples of graphical interfaces that collect the response of the consumer, e.g., to provide consent, accept a request for data access, etc.

<div align="center">
<img src="./figures/Consent%20Fa%C3%A7ade%20-%20User%20Flow.jpg" >
</div>

Finally, the following figure shows a domain model which includes the necessary variables and methods that need to be implemented in the EDDIE Framework for efficient integration and interactions with the Permissions Administrators.

<div align="center">
<img src="./figures/Consent%20Fa%C3%A7ade%20%E2%80%93%20conceptual%20domain%20model.png" >
</div>


