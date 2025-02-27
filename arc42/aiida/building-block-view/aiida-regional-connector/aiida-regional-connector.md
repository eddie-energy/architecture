---
title: Regional Connector
order: 3
---
To connect with EDDIE, the AIIDA system also requires a connector, that is of the same type as the regional connectors that establish a connection with the regional data hubs.

## Functionality
The connector is mainly needed to request a permission for data access. If the permission was granted by the customer, their AIIDA instance will send data and status messages to separate topics on the MQTT broker, which is described below. All messages are sent directly from AIIDA to this broker, nothing is routed through the regional connector.

The connector also subscribes to the status message topic and updates the internal status of a permission when such a message is received. When a permission of this regional connector should be terminated (e.g., because the customer revoked a permission) the connector publishes a special message on the termination topic of the specific permission. The AIIDA instance is subscribed to this topic and will therefore receive and honor the termination request.

There is a dedicated topic per AIIDA instance and permission for the near real-time data and connection status messages. The authentication of the user ensures that only the permitted AIIDA instance may publish/subscribe to these topics.

As mentioned in the chapter for the [deployment view](../../deployment-view/deployment-view.md), the AIIDA regional connector runs at the EDDIE Framework site. There it appears in the list of available regional connectors if it has been configured correctly.

## MQTT broker interface
The AIIDA region connector requires a MQTT broker together with an EMQX database to properly function. AIIDA instances will send their data messages to this MQTT broker to communicate with the connector. The connector will create a user with a random password for each permission and the AIIDA instance can fetch these credentials only once from the regional connector. 

Access control lists (ACLs) for the user are created, to ensure that the AIIDA instance may only publish/subscribe to authorized topics. The credentials of the user are stored in the PostgreSQL-based EMQX IAM database used by EDDIE core, in the aiida schema. The MQTT broker has its own user with read only access for authentication and authorization.

