---
title: AIIDA Regional Connector
order: 3
---

To connect with the EDDIE Framework, the AIIDA system requires an AIIDA [Regional Connector](../../../eddie-framework/solution-strategy/solution-strategy.md) plugin.

## Functionality

The AIIDA Regional Connector offers a range of functionalities. Initially, it is responsible for obtaining customer permission through the EP Website. In line with the Regional Connector approach, it then presents the EDDIE Popup to the customer via the EP Website, collecting the necessary customer information required for the EDDIE Framework. Also, if the permission is revoked, e.g., from the EP Website, the AIIDA Regional Connector is notified and initiates the permission revocation that is propagated to AIIDA. When a customer permission is established, the AIIDA Regional Connector receives the energy data from the AIIDA Embedded App, and makes it available to the EDDIE Framework and its internal processes. The connection between the AIIDA Regional Connector and the AIIDA Embedded App is established via MQTT. 

There is a dedicated topic per AIIDA instance and permission for the near real-time data and connection status messages. The authentication of the user ensures that only the permitted AIIDA instance may publish/subscribe to these topics.


## MQTT Connection

The AIIDA Regional Connector communicates with the AIIDA Embedded App via MQTT. To achieve this communication, an EMQX MQTT Broker and an EMQX IAM DB are used (these are also shown in the [Deployment View](../../deployment-view/deployment-view.md)). When an AIIDA Embedded App instance first sends energy data to the MQTT Broker, the AIIDA Regional Connector creates a new user for this instance at the IAM DB, and sends back to the AIIDA Embedded App the user credentials. With these credentials, each AIIDA Embedded App has its own user for authentication and authorization. After that, the AIIDA Embedded App streams data to the MQTT Broker, and the AIIDA Regional Connector receives it and can authenticate the user. Users and Access Control Lists (ACLs) are created to ensure that the AIIDA instances only publish/subscribe to authorized topics at the MQTT Broker.
