workspace "EDDIE" "Architecture Overview of the EDDIE Project" {
    model {
        ep_website = softwareSystem "EP Website" {
            description "Website representing the EP"
            tags "outofscope"
        }

        ep_service = softwareSystem "EP Service" {
            description "Energy service provided by the eligible party"
            tags "outofscope"
        }

        customer = person "Customer" {
            description "User of energy services"
        }

        eligible_party = person "Eligible Party" {
            description "Person or organization providing energy services."
        }

        gaia_x_framework = softwareSystem "Gaia-X" {
            description "Provider of compliance services"
            tags "outofscope"
        }

        marketplace = softwareSystem "Marketplace" {
            description "Catalog of energy services and AIIDA instances"

            mplace_customerapp = container "Customer Mobile App" {
                description "Interface for customers to create an account, browse energy services, and give permission for data sharing"
            }

            mplace_webapp = container "EP Web App" {
                description "Interface for eligible parties to create an account and submit energy services"
            }

            mplace_backend = container "Marketplace Application" {
                description "Implements the marketplace workflows (e.g., to search for energy services and AIIDA instances)"
            }

            mplace_database = container "Database" {
                description "Stores customer and eligible party information"
                tags "Database"
            }

            mplace_iamkey = container "IAM" {
                description "Manages the authentication and the authorization of customers and eligible parties"
            }
        }

        other_dataspace = softwareSystem "External Energy Data Space" {
            description "External EU Energy Data Space, e.g., Omega-X, OneNet"
            tags "outofscope"
        }

        regional_data_sharing_infrastructure = softwareSystem "Regional Data-sharing Infrastructure" {
            description "Country-specific system providing historical energy data of customers"
            tags "outofscope"
        }

        eddie_framework = softwareSystem "EDDIE Framework" {
            description "Manages customer data and permissions"

            eddie_application = container "EDDIE Application" {
                description "Monolithic core of the EDDIE Framework"

                eddie_popup = component "EDDIE Popup" {
                    description "User interface for permission requests"
                }

                eddie_core = component "EDDIE Core" {
                    description "Implements core workflows"
                }

                eddie_data_needs_api = component "Data Needs API" {
                    description "Interface to manage data needs"
                }

                eddie_master_data_api = component "Master Data API" {
                    description "Data on business entities like permission administrators"
                }

                eddie_outbound_connectors = component "Outbound Connectors" {
                    description "Interface between eligible party and EDDIE Framework"
                }

                eddie_region_connectors = component "Region Connectors" {
                    description "Connect a specific energy data provider"
                }

                eddie_region_connectors_group = group "Region Connectors" {
                    eddie_region_connector_aiida = component "AIIDA Region Connector" {
                        description "Connects AIIDA to the EDDIE Framework"
                    }
                }
            }

            eddie_admin_console = container "Admin Console" {
                description "Manage permissions and view the system state"
            }

            eddie_database = container "Database" {
                description "Stores system state and configuration"
                tags "Database"
            }

            eddie_auth = container "Authentication Management" {
                description "Manages and authorizes users on behalf of the eligible party"
            }

            eddie_system_monitoring = container "System Monitoring" {
                description "Logging and visualization of system information"
            }
        }

        aiida = softwareSystem "AIIDA" {
            description "Manages permission and access to near real-time energy data"

            aiida_embedded_app = container "AIIDA Embedded App" {
                description "Implements permission management and data streaming"

                streamer = component "Streamer" {
                    description "Streams energy data"
                }
                permission_manager = component "Permission Manager" {
                    description "Handles customer permission and data access"
                }
                aggregator = component "Aggregator" {
                    description "Collects near real-time energy data"
                }

                error_handler = component "Error Handler" {
                    description "Logs processes and error messages"
                }

                aiida_frontend = component "AIIDA Frontend" {
                    description "Web interface for the customer"
                }
            }

            timescale_db = container "Timescale DB" {
                description "Database to store energy data, connections, and permissions"
                tags "Database"
            }

            Data_Source = container "Data Source"{
                description "Connects AIIDA to the Metering Device"
            }

            aiida_app = container "AIIDA Smartphone App" {
                description "Smartphone interface for the customer"
            }
        }

        smartMeter = softwareSystem "Metering Device" {
            description "In-house device that collects energy data, e.g., a smart meter"
            tags "outofscope"
        }

        gaia_x_framework -> eddie_framework "Offers compliance services" "HTTP"
        gaia_x_framework -> other_dataspace "Offers compliance services" "HTTP"

        eddie_framework -> other_dataspace "Data exchange based on IDSA" "HTTP/Kafka"

        other_dataspace -> eddie_framework "Data exchange based on IDSA" "HTTP/Kafka"
        eddie_framework -> regional_data_sharing_infrastructure "Accesses historical energy data" "HTTP/AS4"

        customer -> ep_website "Fills out EDDIE Popup"
        ep_website -> eddie_popup "Embeds EDDIE Popup" "HTTP"

        customer -> aiida_frontend "Provides permission for near real-time data sharing"
        customer -> aiida_app "Interacts with (scans QR Code)"
        customer -> marketplace "Browses energy services"

        eligible_party -> marketplace "Submits energy services"
        mplace_backend -> aiida_embedded_app "Searches energy data" "HTTP"
        eligible_party -> mplace_iamkey "Creates account"
        customer -> mplace_iamkey "Creates account"
        customer -> mplace_customerapp "Browses energy services"
        eligible_party -> mplace_webapp "Submits energy services"
        mplace_webapp -> mplace_backend "Submits energy services, searches AIIDA instances" "HTTP"
        mplace_customerapp -> mplace_backend "Searches energy services, registers AIIDA instance" "HTTP"
        mplace_backend -> mplace_database "Searches customer and eligible party information" "SQL"

        eddie_application -> eddie_database "Store system state"
        eddie_system_monitoring -> eddie_application "Aggregate logs and retrieve system information"
        eddie_admin_console -> eddie_auth "Authorize users"
        eddie_admin_console -> eddie_application "Collect permission information and metrics"
        eddie_admin_console -> eddie_data_needs_api "Manage data needs"

        eddie_popup -> eddie_core "Retrieve region connector metadata" "HTTP"
        eddie_popup -> eddie_master_data_api "Retrieve permission administrators" "HTTP"
        eddie_popup -> eddie_region_connectors "Retrieve microfrontends" "HTTP"
        eddie_core -> eddie_region_connectors "Forward instructions from the eligible party" "Flux"
        eddie_core -> eddie_outbound_connectors "Stream energy data from region connectors" "Flux"
        eddie_core -> eddie_data_needs_api "Retrieve data needs"
        eddie_data_needs_api -> eddie_database "Store data needs"
        eddie_region_connectors -> eddie_database "Store permission state"
        eddie_region_connectors -> regional_data_sharing_infrastructure "Accesses historical energy data"
        eddie_region_connectors -> eddie_core "Stream permission events and energy data" "Flux"
        eddie_outbound_connectors -> eddie_core "Stream instructions from the eligible party" "Flux"
        eddie_outbound_connectors -> ep_service "Stream energy data" "Kafka/AMQP/HTTP"
        ep_service -> eddie_outbound_connectors "Send instructions" "Kafka/AMQP/HTTP"

        aiida_app ->  permission_manager "Configures permissions and connections" "HTTP"
        aggregator -> timescale_db "Stores energy data" "SQL"
        permission_manager -> error_handler "Forwards status and error messages"
        permission_manager -> streamer "Provides permission to stream data"
        aiida_frontend -> permission_manager "Configures permissions and connections" "HTTP"
        aggregator -> streamer "Forwards energy data"

        Data_Source -> aggregator  "Sends near real-time energy data" "MQTT"
        Data_Source -> smartMeter "Accesses near real-time energy data" "DSMR"

        streamer -> eddie_region_connectors  "Streams near real-time energy data" "MQTT"
        eddie_region_connector_aiida -> eddie_core "Streams near real-time energy data" "MQTT"
    }

    views {
        branding {
            logo "./assets/eddie.png"
        }

        systemLandscape eddie {
            title "EDDIE System Landscape"
            include *
            autoLayout tb
        }

        container eddie_framework "container-eddie-framework" {
            include *
            autoLayout tb
        }

        component eddie_application "component-eddie-application" {
            include *
            exclude eddie_region_connectors_group
            autoLayout tb
        }

        container aiida "container-aiida" {
            include *
            autoLayout tb
        }

        container aiida "container-regional-devices" {
            include aiida_embedded_app
            autoLayout tb
        }

        component aiida_embedded_app "aiida-embedded-app" {
            include *
            autoLayout tb
        }

        container marketplace "marketplace" {
            include *
            autolayout tb
        }

        theme default

        styles {
            relationship todo {
                color #ff0000
            }

            element todo {
                background #ff0000
                stroke #ff0000
                color #ff0000
            }

            element "Company" {
                shape RoundedBox
            }

            element "outofscope" {
                background #999999
            }

            element "Database" {
                shape cylinder
            }

            element "Policy" {
                shape Folder
                background #E4080A
            }

            element "Web Application" {
                shape WebBrowser
            }

            element "Mobile Application" {
                shape MobileDevicePortrait
            }

            element "Kafka Cluster" {
                shape Hexagon
            }

            element "Reused Existing Item" {
                background #1b4f1f
                shape Box
            }
        }
    }
}
