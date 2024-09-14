---
title: Runtime View
order: 3
---
<!--
::: warning TO ADD
For each chapter, review the content and check if the following criterias are fullfilled: 

According to arc42 the runtime view describes concrete behavior and interactions of the system’s building blocks in form of scenarios. The scenario should answer the following questions:

- how do building blocks execute important use cases or features?
- how do building blocks cooperate with users and neighbouring systems?
- what happens in case of a launch, start-up, stop of operation and administration
- how could error and exception scenarios look like
  goal:
  You should understand how (instances of) building blocks of your system perform their job and communicate at runtime. You will mainly capture scenarios in your documentation to communicate your architecture to stakeholders that are less willing or able to read and understand the static models (building block view, deployment view).

:::
-->
## Overview

The runtime view focuses on interactions among the system's components. The goal of this section is to describe representative and important workflows that occur during the runtime of the system. These workflows are categorized into sections, as shown below.

| Workflow                           | Section                                                        |
| ---------------------------------- | -------------------------------------------------------------- |
| Collect the customer's information | [Link](./collect-customer-info/collect-customer-info.md)       |
| Request the customer's consent     | [Link](./request-customer-consent/request-customer-consent.md) |
| Access the customer's data         | [Link](./access-customer-data/access-customer-data.md)         |
| Send the data to the services      | [Link](./send-data-to-services/send-data-to-services.md)       |
| Revoke the customer's consent      | [Link](./revoke-customer-consent/revoke-customer-consent.md)   |
