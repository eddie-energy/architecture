---
title: Authorized Data Access
order: 1
---

## Context

The EDDIE Framework may collect data from many customers while running many Services. Each Service needs to have access only to the data of the customers that have agreed to use this Service. No Service should be able to access data of customers that have not give consent for data access to this particular Service. 

## Stimulus
A Service attempts to access consumption data of a customer that has not given consent, e.g., by subscribing to a topic of another Service at the Streaming Infrastructure.   

## Response
The Service receives an error messages that it is not authorized to access this data.
