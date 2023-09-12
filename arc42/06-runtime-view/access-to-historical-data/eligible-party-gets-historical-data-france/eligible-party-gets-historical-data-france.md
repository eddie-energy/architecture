---
title: France 
---

## The Consumer Gives Consent to Eligible Party for Access to Historical Data

This chapter describes the workflow of a consumer giving consent to an eligible party to access their historical smart meter data.
In France, the Eligible Party must be registered with ENEDIS and create an Application for every Service that processes data. By doing so, a unique ClientID and ClientSecret are created for each Application. A detailed description of this registration can be found in the Chapter [Prerequsites](../../../03-context-and-scope/prerequisites/access-to-historical-data/eligible-party-registration-france/eligible-party-registration-france.md).



The workflow of a consumer that provides their consent to an eligible party for access to historical data from a Meter Data Portal is shown below:

<div align="center"> 
<img src="./figures/get-historical-data-france.svg">
</div>


The workflow consists of the following steps. Please note that Steps 1-8 are identical to other countries as they represent the general workflow of the consumer interacting with the EDDIE framework.

1.	The consumer visits the website of an eligible party and logs in to their account (upon registration if necessary).
2.	The consumer clicks the button "Connect my data".
3.	A request is sent from the website to the Consent Facade to create a list of the countries (and respective consent admin portals) that the eligible party operates in.
4.	The list of countries and Consent Admin Portals is sent back to the website. To find the countries and respective consent admin portals, the consent facade searches the framework's database. The available countries are stored in the database during the eligible party registration.
5.	The list is shown to the consumer.
6.	The consumer selects their country and Consent Admin Portal.
7.	The selected Consent Admin Portal is sent to the Consent Facade.
8.	The Consent Facade asks the Interoperable Communication to set up a consent request in the selected Consent Admin Portal. <!-- How is the button created?Normally it would be created in the EP Application --> 
9.	The Consent Button, that is unique to the EP Application in ENEDIS is forwarded to the EP Website.
10.	The button is shown to the consumer on the EP Website.
11.	 When clicking on the button, the consumer is redirected to the Log-In Page of the ENEDIS Website.
12.	The consumer logs in to their personal account at the ENEDIS Website and can accept or reject the data request. If the request is rejected, the sequence stops.
13.	Consumer accepts the data request from the specific EP Application.
14.	 After acceptance, information like the smart meter ID is forwarded from the Personal Account to the EP-Application on the ENEDIS Website.
 <!-- further explanation needed about the jump to the interoperable communication -->
15.	 The Interoperable Communication requests the ClientID and ClientSecret from the EP Application on the ENEDIS Website.
16.	The ClientID and ClientSecret are sent to the Interoperable Communication
17.	With these unique identifiers, the Interoperable Communication can start the process of the energy data request. With ENEDIS this is a two-step process including an authentication process and the data transfer. If you are unfamiliar with this process, please check the [Prerequisites](../../../03-context-and-scope/prerequisites/access-to-historical-data/eligible-party-registration-france/eligible-party-registration-france.md). To authenticate, the specific ClientID and ClientSecret are forwarded to the Jeton API.
18.	After the ClientID and ClientSecret have been validated, a specific Token is generated and returned to the Interoperable Communication.
19.	The Interoperable Communication requests the energy data using this Token.
20.	If the Token is valid, energy data of all consumers that have given their consent is sent to the Interoperable Communication.


> After the data has been received by the EDDIE Framework, another internal workflow takes place to send the data to a service. This workflow is shown [here](../eddie-framework-offers-data-to-service/eddie-framework-offers-data-to-service.md).