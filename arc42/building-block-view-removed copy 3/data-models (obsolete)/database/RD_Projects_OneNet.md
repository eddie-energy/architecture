---
title: RD Projects OneNet
---

| MarketParticipant | Reactive Power SetPoint contextual | 17-5-2023 | The identification of the party participating in energy market business processes. |
| --- | --- | --- | --- |
| MarketRole | Reactive Power SetPoint contextual | 17-5-2023 | The identification of the intended behaviour of a market participant played within a given business process. |
| Measure\_Unit | Reactive Power SetPoint contextual | 17-5-2023 | The particular quantity, defined and adopted by convention, with which other quantities of the same kind are compared in order to express their magnitudes relative to that quantity. |
| MktPSRType | Reactive Power SetPoint contextual | 17-5-2023 | The type of a power system resource. |
| Point | Reactive Power SetPoint contextual | 17-5-2023 | The identification of the values being addressed within a specific interval of time. |
| Process | Reactive Power SetPoint contextual | 17-5-2023 | The formal identification of the business process in which a flow of information is exchanged. |
| ReactivePower\_TimeSeries | Reactive Power SetPoint contextual | 17-5-2023 | A set of time-ordered quantities being exchanged in relation to a product.In the ESMP profile, the TimeSeries provides not only time-ordered quantities but also time-ordered information. |
| ReactivePowerSetPoint\_MarketDocument | Reactive Power SetPoint contextual | 17-5-2023 | An electronic document containing the information necessary to satisfy the requirements of a given business process. |
| RegisteredResource | Reactive Power SetPoint contextual | 17-5-2023 | A resource that is registered through the market participant registration system. Examples include generating unit, load, and non-physical generator or load. |
| Series\_Period | Reactive Power SetPoint contextual | 17-5-2023 | The identification of the period of time corresponding to a given time interval and resolution. |
| Time\_Period | Reactive Power SetPoint contextual | 17-5-2023 | The identification of a time interval or a duration. |

| Point | Reactive Power SetPoint assembly | 17-5-2023 | The identification of the values being addressed within a specific interval of time. |
| --- | --- | --- | --- |
| ReactivePower\_TimeSeries | Reactive Power SetPoint assembly | 17-5-2023 | A set of time-ordered quantities being exchanged in relation to a product.In the ESMP profile, the TimeSeries provides not only time-ordered quantities but also time-ordered information. |
| ReactivePowerSetPoint\_MarketDocument | Reactive Power SetPoint assembly | 17-5-2023 | An electronic document containing the information necessary to satisfy the requirements of a given business process. |
| Series\_Period | Reactive Power SetPoint assembly | 17-5-2023 | The identification of the period of time corresponding to a given time interval and resolution. |

| AllocationResult\_MarketDocument | AllocationProfile contextual model | 9-5-2023 | An electronic document containing the information necessary to satisfy the requirements of a given business process.There is only one allocation result document per sender and subject party for a given auction identification and bid time interval.In the case where the allocation result document contains all bids and resales that have been validated for processing in the auction in the latest version of bid and resales documents received, this shall include bids and resales that have not been satisfied. In this case the quantity and price amount of the bids and resales that have not been satisfied shall be equal to zero.It is also possible for the allocation result document to contain only the bids that have been allocated capacity transmission rights and resales that have sold capacity transmission rights.A third possibility exists where only the aggregation of the bids that have capacity transmission rights and the aggregation of transmission rights that have been sold are provided. In this case the bid identification shall not be specified.Only one of these possibilities is permitted in a given allocatio nresult document. |
| --- | --- | --- | --- |
| Auction | AllocationProfile contextual model | 9-5-2023 | The identification of a formal specification of an energy product that is offered for sale.The unique identification of the set of specifications that clearly identify the auction to which the bid is addressed. |
| BidDocument\_MarketDocument | AllocationProfile contextual model | 9-5-2023 | An electronic document containing the information necessary to satisfy the requirements of a given business process.Each bid allocated is contained in the bid document sent by the user. |
| BidTimeSeries | AllocationProfile contextual model | 9-5-2023 | The formal specification of specific characteristics related to a bid. |
| Contract\_MarketAgreement | AllocationProfile contextual model | 9-5-2023 | A formal agreement between two parties defining the terms and conditions for a set of services. The specifics of the services are, in turn, defined via one or more service agreements. |
| Domain | AllocationProfile contextual model | 9-5-2023 | A domain covering a number of related objects, such as market balance area, grid area, borders etc. |
| EnergyMarket | AllocationProfile contextual model | 9-5-2023 | Energy and Ancillary Market (e.g. Energy, Spinning Reserve, Non-Spinning Reserve) with a description of the Market operation control parameters. |
| FlowDirection | AllocationProfile contextual model | 9-5-2023 | The coded identification of the direction of energy flow. |
| MarketParticipant | AllocationProfile contextual model | 9-5-2023 | The identification of the party participating in energy market business processes. |
| MarketRole | AllocationProfile contextual model | 9-5-2023 | The identification of the intended behaviour of a market participant played within a given business process. |
| Measure\_Unit | AllocationProfile contextual model | 9-5-2023 | A particular quantity, defined and adopted by convention, with which other quantities of the same kind are compared in order to express their magnitudes relative to that quantity. |
| Point | AllocationProfile contextual model | 9-5-2023 | The identification of the values being addressed within a specific interval of time. |
| Provider\_MarketParticipant | AllocationProfile contextual model | 9-5-2023 | The identification of the party participating in energy market business processes. |
| Series\_Period | AllocationProfile contextual model | 9-5-2023 | The identification of the period of time corresponding to a given time interval and resolution. |
| Time\_Period | AllocationProfile contextual model | 9-5-2023 | The identification of a time interval. |
| TimeSeries | AllocationProfile contextual model | 9-5-2023 | A set of time-ordered quantities being exchanged in relation to a product.For each time series in the document, the identification shall be a unique number assigned by the auction office. |

| AllocationResult\_MarketDocument | AllocationProfile assembly model | 9-5-2023 | An electronic document containing the information necessary to satisfy the requirements of a given business process.There is only one allocation result document per sender and subject party for a given auction identification and bid time interval.In the case where the allocation result document contains all bids and resales that have been validated for processing in the auction in the latest version of bid and resales documents received, this shall include bids and resales that have not been satisfied. In this case the quantity and price amount of the bids and resales that have not been satisfied shall be equal to zero.It is also possible for the allocation result document to contain only the bids that have been allocated capacity transmission rights and resales that have sold capacity transmission rights.A third possibility exists where only the aggregation of the bids that have capacity transmission rights and the aggregation of transmission rights that have been sold are provided. In this case the bid identification shall not be specified.Only one of these possibilities is permitted in a given allocatio nresult document. |
| --- | --- | --- | --- |
| Point | AllocationProfile assembly model | 9-5-2023 | The identification of the values being addressed within a specific interval of time. |
| Series\_Period | AllocationProfile assembly model | 9-5-2023 | The identification of the period of time corresponding to a given time interval and resolution. |
| TimeSeries | AllocationProfile assembly model | 9-5-2023 | A set of time-ordered quantities being exchanged in relation to a product.For each time series in the document, the identification shall be a unique number assigned by the auction office. |

| Balancing\_MarketDocument | BalancingProfile contextual model | 9-5-2023 | An electronic document containing the information necessary to satisfy the requirements of a given business process.The Balancing\_MarketDocument describes a specific situation in the balancing information exchange. |
| --- | --- | --- | --- |
| Domain | BalancingProfile contextual model | 9-5-2023 | A domain covering a number of related objects, such as market balance area, grid area, borders etc. |
| EnergyMarket | BalancingProfile contextual model | 9-5-2023 | Energy and Ancillary Market (e.g. Energy, Spinning Reserve, Non-Spinning Reserve) with a description of the Market operation control parameters. |
| FlowDirection | BalancingProfile contextual model | 9-5-2023 | The coded identification of the direction of energy flow. |
| Imbalance\_Quantity | BalancingProfile contextual model | 9-5-2023 | Description of quantities needed in the data exchange.The type of the quantity is described either by the role of the association or the quantityType attribute.The quality attribute provides the information about the quality of the quantity (measured, estimated, etc.). |
| MarketParticipant | BalancingProfile contextual model | 9-5-2023 | The identification of the party participating in energy market business processes. |
| MarketRole | BalancingProfile contextual model | 9-5-2023 | The identification of the intended behaviour of a market participant played within a given business process. |
| Party\_MarketParticipant | BalancingProfile contextual model | 9-5-2023 | The identification of the party participating in energy market business processes. |
| Point | BalancingProfile contextual model | 9-5-2023 | The identification of the values being addressed within a specific interval of time. |
| Price | BalancingProfile contextual model | 9-5-2023 | The cost corresponding to a specific entity expressed in a currency. |
| Process | BalancingProfile contextual model | 9-5-2023 | The formal identification of the business process in which a flow of information is exchanged. |
| Series\_Period | BalancingProfile contextual model | 9-5-2023 | The identification of the period of time corresponding to a given time interval and resolution. |
| Time\_Period | BalancingProfile contextual model | 9-5-2023 | The identification of a time interval. |
| TimeSeries | BalancingProfile contextual model | 9-5-2023 | A set of time-ordered quantities being exchanged in relation to a product. |

| Balancing\_MarketDocument | BalancingProfile assembly model | 9-5-2023 | An electronic document containing the information necessary to satisfy the requirements of a given business process.The Balancing\_MarketDocument describes a specific situation in the balancing information exchange. |
| --- | --- | --- | --- |
| Point | BalancingProfile assembly model | 9-5-2023 | The identification of the values being addressed within a specific interval of time. |
| Series\_Period | BalancingProfile assembly model | 9-5-2023 | The identification of the period of time corresponding to a given time interval and resolution. |
| TimeSeries | BalancingProfile assembly model | 9-5-2023 | A set of time-ordered quantities being exchanged in relation to a product. |

| Auction | CapacityBidProfile contextual model | 9-5-2023 | The identification of a formal specification of an energy product that is offered for sale. |
| --- | --- | --- | --- |
| Bid\_MarketDocument | CapacityBidProfile contextual model | 9-5-2023 | A bid document contains a set of bids (a bid is represented by a time series). There may be several bids submitted by the sender for the same bid period and subject party.An electronic document containing the information necessary to satisfy the requirements of a given business process. |
| BidTimeSeries | CapacityBidProfile contextual model | 9-5-2023 | The formal specification of specific characteristics related to a bid. |
| Currency\_Unit | CapacityBidProfile contextual model | 9-5-2023 | The code specifying a monetary unit. |
| Domain | CapacityBidProfile contextual model | 9-5-2023 | A domain covering a number of related objects, such as market balance area, grid area, borders etc. |
| MarketParticipant | CapacityBidProfile contextual model | 9-5-2023 | The identification of the party participating in energy market business processes. |
| MarketRole | CapacityBidProfile contextual model | 9-5-2023 | The identification of the intended behaviour of a market participant played within a given business process. |
| Measure\_Unit | CapacityBidProfile contextual model | 9-5-2023 | A particular quantity, defined and adopted by convention, with which other quantities of the same kind are compared in order to express their magnitudes relative to that quantity. |
| Party\_MarketParticipant | CapacityBidProfile contextual model | 9-5-2023 | The identification of the party participating in energy market business processes. |
| Point | CapacityBidProfile contextual model | 9-5-2023 | The quantity that is bid for the interval in question.The identification of the values being addressed within a specific interval of time. |
| Price | CapacityBidProfile contextual model | 9-5-2023 | The cost corresponding to a specific entity expressed in a currency. |
| Quantity | CapacityBidProfile contextual model | 9-5-2023 | Description of quantities needed in the data exchange.The type of the quantity is described either by the role of the association or the quantityType attribute.The quality attribute provides the information about the quality of the quantity (measured, estimated, etc.). |
| Series\_Period | CapacityBidProfile contextual model | 9-5-2023 | The identification of the period of time corresponding to a given time interval and resolution. |
| Time\_Period | CapacityBidProfile contextual model | 9-5-2023 | The identification of a time interval. |

| Bid\_MarketDocument | CapacityBidProfile assembly model | 9-5-2023 | A bid document contains a set of bids (a bid is represented by a time series). There may be several bids submitted by the sender for the same bid period and subject party.An electronic document containing the information necessary to satisfy the requirements of a given business process. |
| --- | --- | --- | --- |
| BidTimeSeries | CapacityBidProfile assembly model | 9-5-2023 | The formal specification of specific characteristics related to a bid. |
| Point | CapacityBidProfile assembly model | 9-5-2023 | The quantity that is bid for the interval in question.The identification of the values being addressed within a specific interval of time. |
| Series\_Period | CapacityBidProfile assembly model | 9-5-2023 | The identification of the period of time corresponding to a given time interval and resolution. |

| Domain | EnergyAccountProfile contextual model | 9-5-2023 | A domain covering a number of related objects, such as market balance area, grid area, borders etc. |
| --- | --- | --- | --- |
| EnergyAccount\_MarketDocument | EnergyAccountProfile contextual model | 9-5-2023 | An energy account report for a given set of time series and a given accounting period Time\_Period class, period.timeInterval attribute) shall have a unique identification assigned by the sender of the document for all transmissions to the receiver.All additions, modifications, or suppressions for the time series and accounting period shall use the same identification.An electronic document containing the information necessary to satisfy the requirements of a given business process. |
| EnergyMarket | EnergyAccountProfile contextual model | 9-5-2023 | Energy and Ancillary Market (e.g. Energy, Spinning Reserve, Non-Spinning Reserve) with a description of the Market operation control parameters. |
| MarketEvaluationPoint | EnergyAccountProfile contextual model | 9-5-2023 | The location where one or more products are measured. This may be a physical or virtual location. |
| MarketParticipant | EnergyAccountProfile contextual model | 9-5-2023 | The identification of the party participating in energy market business processes. |
| MarketRole | EnergyAccountProfile contextual model | 9-5-2023 | The identification of the intended behaviour of a market participant played within a given business process. |
| Measure\_Unit | EnergyAccountProfile contextual model | 9-5-2023 | A particular quantity, defined and adopted by convention, with which other quantities of the same kind are compared in order to express their magnitudes relative to that quantity. |
| Party\_MarketParticipant | EnergyAccountProfile contextual model | 9-5-2023 | The identification of the party participating in energy market business processes. |
| Point | EnergyAccountProfile contextual model | 9-5-2023 | The identification of the values being addressed within a specific interval of time. |
| Process | EnergyAccountProfile contextual model | 9-5-2023 | The formal identification of the business process in which a flow of information is exchanged. |
| Quantity | EnergyAccountProfile contextual model | 9-5-2023 | Description of quantities needed in the data exchange.The type of the quantity is described either by the role of the association or the quantityType attribute.The quality attribute provides the information about the quality of the quantity (measured, estimated, etc.). |
| Reason | EnergyAccountProfile contextual model | 9-5-2023 | The motivation of an act. |
| Series\_Period | EnergyAccountProfile contextual model | 9-5-2023 | The identification of the period of time corresponding to a given time interval and resolution. |
| Time\_Period | EnergyAccountProfile contextual model | 9-5-2023 | The identification of the accounting period.The identification of a time interval. |
| TimeSeries | EnergyAccountProfile contextual model | 9-5-2023 | A set of time-ordered quantities being exchanged in relation to a product. |

| EnergyAccount\_MarketDocument | EnergyAccountProfile assembly model | 9-5-2023 | An energy account report for a given set of time series and a given accounting period Time\_Period class, period.timeInterval attribute) shall have a unique identification assigned by the sender of the document for all transmissions to the receiver.All additions, modifications, or suppressions for the time series and accounting period shall use the same identification.An electronic document containing the information necessary to satisfy the requirements of a given business process. |
| --- | --- | --- | --- |
| Point | EnergyAccountProfile assembly model | 9-5-2023 | The identification of the values being addressed within a specific interval of time. |
| Reason | EnergyAccountProfile assembly model | 9-5-2023 | The motivation of an act. |
| Series\_Period | EnergyAccountProfile assembly model | 9-5-2023 | The identification of the period of time corresponding to a given time interval and resolution. |
| TimeSeries | EnergyAccountProfile assembly model | 9-5-2023 | A set of time-ordered quantities being exchanged in relation to a product. |

| AttributeInstanceComponent | FlexProfile contextual model | 9-5-2023 | A class used to provide information about an attribute. |
| --- | --- | --- | --- |
| ConstraintDuration | FlexProfile contextual model | 9-5-2023 | Duration constraint to activate, to put in operation, to deactivate, ... a given event. |
| CoordinateSystem | FlexProfile contextual model | 9-5-2023 | Coordinate reference system. |
| DateAndOrTime | FlexProfile contextual model | 9-5-2023 | The Date and or the Time. |
| EnergyMarket | FlexProfile contextual model | 9-5-2023 | Energy and Ancillary Market (e.g. Energy, Spinning Reserve, Non-Spinning Reserve) with a description of the Market operation control parameters. |
| FlexibilityServiceProvider\_MarketParticipant | FlexProfile contextual model | 9-5-2023 | The identification of the party participating in energy market business processes. |
| FlowDirection | FlexProfile contextual model | 9-5-2023 | The coded identification of the direction of energy flow. |
| Location | FlexProfile contextual model | 9-5-2023 | The place, scene, or point of something where someone or something has been, is, and/or will be at a given moment in time. It can be defined with one or more position points (coordinates) in a given coordinate system. |
| MarketAgreement | FlexProfile contextual model | 9-5-2023 | A formal agreement between two parties defining the terms and conditions for a set of services. The specifics of the services are, in turn, defined via one or more service agreements. |
| MarketDocument | FlexProfile contextual model | 9-5-2023 | An electronic document containing the information necessary to satisfy the requirements of a given business process. |
| MarketEvaluationPoint | FlexProfile contextual model | 9-5-2023 | The location where one or more products are measured. This may be a physical or virtual location. |
| MarketParticipant | FlexProfile contextual model | 9-5-2023 | The identification of the party participating in energy market business processes. |
| MarketRole | FlexProfile contextual model | 9-5-2023 | The identification of the intended behaviour of a market participant played within a given business process. |
| Measure\_Unit | FlexProfile contextual model | 9-5-2023 | The particular quantity, defined and adopted by convention, with which other quantities of the same kind are compared in order to express their magnitudes relative to that quantity. |
| Party\_MarketParticipant | FlexProfile contextual model | 9-5-2023 | The identification of the party participating in energy market business processes. |
| Reason | FlexProfile contextual model | 9-5-2023 | The motivation of an act. |
| RegisteredResource | FlexProfile contextual model | 9-5-2023 | A resource that is registered through the market participant registration system. Examples include generating unit, load, and non-physical generator or load. |
| Series | FlexProfile contextual model | 9-5-2023 | A set of similar physical or conceptual objects defined for the same period or point of time. |
| Time\_Period | FlexProfile contextual model | 9-5-2023 | The identification of a time interval or a duration. |

| FlexibilityServiceProvider\_MarketParticipant | FlexProfile assembly model | 9-5-2023 | The identification of the party participating in energy market business processes. |
| --- | --- | --- | --- |
| MarketDocument | FlexProfile assembly model | 9-5-2023 | An electronic document containing the information necessary to satisfy the requirements of a given business process. |
| Series | FlexProfile assembly model | 9-5-2023 | A set of similar physical or conceptual objects defined for the same period or point of time. |

| AggregateNode | GridProfile contextual model | 9-5-2023 | An aggregated node can define a typed grouping further defined by the AnodeType enumeration. Types range from System Zone/Regions to Market Energy Regions to Aggregated Loads and Aggregated Generators. |
| --- | --- | --- | --- |
| Analog | GridProfile contextual model | 9-5-2023 | Analog represents an analog Measurement. |
| AnalogValue | GridProfile contextual model | 9-5-2023 | AnalogValue represents an analog MeasurementValue. |
| AttributeInstanceComponent | GridProfile contextual model | 9-5-2023 | A class used to provide information about an attribute. |
| CoordinateSystem | GridProfile contextual model | 9-5-2023 | Coordinate reference system. |
| FlowDirection | GridProfile contextual model | 9-5-2023 | The coded identification of the direction of energy flow. |
| Location | GridProfile contextual model | 9-5-2023 | The place, scene, or point of something where someone or something has been, is, and/or will be at a given moment in time. It can be defined with one or more position points (coordinates) in a given coordinate system. |
| MarketDocument | GridProfile contextual model | 9-5-2023 | An electronic document containing the information necessary to satisfy the requirements of a given business process. |
| MarketEvaluationPoint | GridProfile contextual model | 9-5-2023 | The location where one or more products are measured. This may be a physical or virtual location. |
| MarketObjectStatus | GridProfile contextual model | 9-5-2023 | The condition or position of an object with regard to its standing. |
| MarketParticipant | GridProfile contextual model | 9-5-2023 | The identification of the party participating in energy market business processes. |
| MarketRole | GridProfile contextual model | 9-5-2023 | The identification of the intended behaviour of a market participant played within a given business process. |
| MktPSRType | GridProfile contextual model | 9-5-2023 | The type of a power system resource. |
| Name | GridProfile contextual model | 9-5-2023 | The Name class provides the means to define any number of human readable names for an object. A name is **not** to be used for defining inter-object relationships. For inter-object relationships instead use the object identification 'mRID'. |
| Price | GridProfile contextual model | 9-5-2023 | The cost corresponding to a specific entity expressed in a currency. |
| Quantity | GridProfile contextual model | 9-5-2023 | Description of quantities needed in the data exchange.The type of the quantity is described either by the role of the association or the quantityType attribute.The quality attribute provides the information about the quality of the quantity (measured, estimated, etc.). |
| RegisteredResource | GridProfile contextual model | 9-5-2023 | A resource that is registered through the market participant registration system. Examples include generating unit, load, and non-physical generator or load. |
| ResourceCapacity | GridProfile contextual model | 9-5-2023 | This class model the various capacities of a resource. |
| Series | GridProfile contextual model | 9-5-2023 | A set of similar physical or conceptual objects defined for the same period or point of time. |
| System\_MarketParticipant | GridProfile contextual model | 9-5-2023 | The identification of the party participating in energy market business processes. |
| Time\_Period | GridProfile contextual model | 9-5-2023 | The identification of a time interval or a duration. |

| MarketDocument | GridProfile assembly model | 9-5-2023 | An electronic document containing the information necessary to satisfy the requirements of a given business process. |
| --- | --- | --- | --- |
| Series | GridProfile assembly model | 9-5-2023 | A set of similar physical or conceptual objects defined for the same period or point of time. |

| Auction | ReserveBidProfile contextual model | 9-5-2023 | The identification of a formal specification of an energy product that is offered for sale. |
| --- | --- | --- | --- |
| BidTimeSeries | ReserveBidProfile contextual model | 9-5-2023 | The formal specification of specific characteristics related to a bid. |
| ConstraintDuration | ReserveBidProfile contextual model | 9-5-2023 | Duration constraint to activate, to put in operation, to deactivate, ... a given event. |
| CoordinateSystem | ReserveBidProfile contextual model | 9-5-2023 | Coordinate reference system. |
| Currency\_Unit | ReserveBidProfile contextual model | 9-5-2023 | The code specifying a monetary unit. |
| DateAndOrTime | ReserveBidProfile contextual model | 9-5-2023 | The Date and or the Time. |
| Domain | ReserveBidProfile contextual model | 9-5-2023 | A domain covering a number of related objects, such as market balance area, grid area, borders etc. |
| EnergyMarket | ReserveBidProfile contextual model | 9-5-2023 | Energy and Ancillary Market (e.g. Energy, Spinning Reserve, Non-Spinning Reserve) with a description of the Market operation control parameters. |
| FlowDirection | ReserveBidProfile contextual model | 9-5-2023 | The coded identification of the direction of energy flow. |
| Location | ReserveBidProfile contextual model | 9-5-2023 | The place, scene, or point of something where someone or something has been, is, and/or will be at a given moment in time. It can be defined with one or more position points (coordinates) in a given coordinate system. |
| MarketAgreement | ReserveBidProfile contextual model | 9-5-2023 | A formal agreement between two parties defining the terms and conditions for a set of services. The specifics of the services are, in turn, defined via one or more service agreements. |
| MarketParticipant | ReserveBidProfile contextual model | 9-5-2023 | The identification of the party participating in energy market business processes. |
| MarketProduct | ReserveBidProfile contextual model | 9-5-2023 | MarketProduct describe the product on a market view or bilateral view. |
| MarketRole | ReserveBidProfile contextual model | 9-5-2023 | The identification of the intended behaviour of a market participant played within a given business process. |
| Measure\_Unit | ReserveBidProfile contextual model | 9-5-2023 | A particular quantity, defined and adopted by convention, with which other quantities of the same kind are compared in order to express their magnitudes relative to that quantity. |
| Point | ReserveBidProfile contextual model | 9-5-2023 | The quantity that is bid for the interval in question.The identification of the values being addressed within a specific interval of time. |
| Price | ReserveBidProfile contextual model | 9-5-2023 | The cost corresponding to a specific entity expressed in a currency. |
| Provider\_MarketParticipant | ReserveBidProfile contextual model | 9-5-2023 | The identification of the party participating in energy market business processes. |
| Quantity | ReserveBidProfile contextual model | 9-5-2023 | Description of quantities needed in the data exchange.The type of the quantity is described either by the role of the association or the quantityType attribute.The quality attribute provides the information about the quality of the quantity (measured, estimated, etc.). |
| RegisteredResource | ReserveBidProfile contextual model | 9-5-2023 | A resource that is registered through the market participant registration system. Examples include generating unit, load, and non-physical generator or load. |
| ReserveBid\_MarketDocument | ReserveBidProfile contextual model | 9-5-2023 | A bid document contains a set of bids (a bid is represented by a time series). There may be several bids submitted by the sender for the same bid period and subject party.An electronic document containing the information necessary to satisfy the requirements of a given business process. |
| Series\_Period | ReserveBidProfile contextual model | 9-5-2023 | The identification of the period of time corresponding to a given time interval and resolution. |
| Time\_Period | ReserveBidProfile contextual model | 9-5-2023 | The identification of a time interval. |

| BidTimeSeries | ReserveBidProfile assembly model | 9-5-2023 | The formal specification of specific characteristics related to a bid. |
| --- | --- | --- | --- |
| Point | ReserveBidProfile assembly model | 9-5-2023 | The quantity that is bid for the interval in question.The identification of the values being addressed within a specific interval of time. |
| ReserveBid\_MarketDocument | ReserveBidProfile assembly model | 9-5-2023 | A bid document contains a set of bids (a bid is represented by a time series). There may be several bids submitted by the sender for the same bid period and subject party.An electronic document containing the information necessary to satisfy the requirements of a given business process. |
| Series\_Period | ReserveBidProfile assembly model | 9-5-2023 | The identification of the period of time corresponding to a given time interval and resolution. |

| Domain | Activation\_IEGSA\_MarketDocument\_Contextual | 8-8-2022 | A domain covering a number of related objects, such as market balance area, grid area, borders etc. |
| --- | --- | --- | --- |
| FlowDirection | Activation\_IEGSA\_MarketDocument\_Contextual | 8-8-2022 | The coded identification of the direction of energy flow. |
| MarketDocument | Activation\_IEGSA\_MarketDocument\_Contextual | 8-8-2022 | An electronic document containing the information necessary to satisfy the requirements of a given business process. |
| MarketParticipant | Activation\_IEGSA\_MarketDocument\_Contextual | 8-8-2022 | The identification of the party participating in energy market business processes. |
| MarketRole | Activation\_IEGSA\_MarketDocument\_Contextual | 8-8-2022 | The identification of the intended behaviour of a market participant played within a given business process. |
| Point | Activation\_IEGSA\_MarketDocument\_Contextual | 8-8-2022 | The identification of the values being addressed within a specific interval of time. |
| Reason | Activation\_IEGSA\_MarketDocument\_Contextual | 8-8-2022 | The motivation of an act. |
| Series\_Period | Activation\_IEGSA\_MarketDocument\_Contextual | 8-8-2022 | The identification of the period of time corresponding to a given time interval and resolution. |
| Time\_Period | Activation\_IEGSA\_MarketDocument\_Contextual | 8-8-2022 | The identification of a time interval or a duration. |
| TimeSeries | Activation\_IEGSA\_MarketDocument\_Contextual | 8-8-2022 | A set of time-ordered quantities being exchanged in relation to a product.In the ESMP profile, the TimeSeries provides not only time-ordered quantities but also time-ordered information. |

| ActivationIEGSA\_MarketDocument | Activation\_IEGSA\_MartekDocument\_Assembly | 8-8-2022 | An electronic document containing the information necessary to satisfy the requirements of a given business process. |
| --- | --- | --- | --- |
| MarketDocument | Activation\_IEGSA\_MartekDocument\_Assembly | 8-8-2022 | An electronic document containing the information necessary to satisfy the requirements of a given business process. |
| Point | Activation\_IEGSA\_MartekDocument\_Assembly | 8-8-2022 | The identification of the values being addressed within a specific interval of time. |
| Reason | Activation\_IEGSA\_MartekDocument\_Assembly | 8-8-2022 | The motivation of an act. |
| Series\_Period | Activation\_IEGSA\_MartekDocument\_Assembly | 8-8-2022 | The identification of the period of time corresponding to a given time interval and resolution. |
| TimeSeries | Activation\_IEGSA\_MartekDocument\_Assembly | 8-8-2022 | A set of time-ordered quantities being exchanged in relation to a product.In the ESMP profile, the TimeSeries provides not only time-ordered quantities but also time-ordered information. |

| BidList\_MarketDocument | BidList Contextual | 8-8-2022 | An electronic document containing the information necessary to satisfy the requirements of a given business process. |
| --- | --- | --- | --- |
| FlowDirection | BidList Contextual | 8-8-2022 | The coded identification of the direction of energy flow. |
| MarketEvaluationPoint | BidList Contextual | 8-8-2022 | The location where one or more products are measured. This may be a physical or virtual location. |
| MarketParticipant | BidList Contextual | 8-8-2022 | The identification of the party participating in energy market business processes. |
| MarketProduct | BidList Contextual | 8-8-2022 | MarketProduct describe the product on a market view or bilateral view. |
| MktPSRType | BidList Contextual | 8-8-2022 | The type of a power system resource. |
| PositionPoint | BidList Contextual | 8-8-2022 | Set of spatial coordinates that determine a point, defined in the coordinate system specified in 'Location.CoordinateSystem'. Use a single position point instance to describe a point-oriented location. Use a sequence of position points to describe a line-oriented object (physical location of non-point oriented objects like cables or lines), or area of an object (like a substation or a geographical zone - in this case, have first and last position point with the same values). |
| RegisteredResource | BidList Contextual | 8-8-2022 | A resource that is registered through the market participant registration system. Examples include generating unit, load, and non-physical generator or load. |
| ResourceCapacity | BidList Contextual | 8-8-2022 | This class model the various capacities of a resource. |
| Series\_Period | BidList Contextual | 8-8-2022 | The identification of the period of time corresponding to a given time interval and resolution. |
| Time\_Period | BidList Contextual | 8-8-2022 | The identification of a time interval or a duration. |
| TimeSeries | BidList Contextual | 8-8-2022 | A set of time-ordered quantities being exchanged in relation to a product.In the ESMP profile, the TimeSeries provides not only time-ordered quantities but also time-ordered information. |
| VoltageLevel | BidList Contextual | 8-8-2022 | For a production unit or a generating unit, the high voltage level at the network side.For other network equipment the voltage level. |

| BidList\_MarketDocument | BidList Assembly | 8-8-2022 | An electronic document containing the information necessary to satisfy the requirements of a given business process. |
| --- | --- | --- | --- |
| MarketParticipant | BidList Assembly | 8-8-2022 | The identification of the party participating in energy market business processes. |
| MarketProduct | BidList Assembly | 8-8-2022 | MarketProduct describe the product on a market view or bilateral view. |
| MktPSRType | BidList Assembly | 8-8-2022 | The type of a power system resource. |
| RegisteredResource | BidList Assembly | 8-8-2022 | A resource that is registered through the market participant registration system. Examples include generating unit, load, and non-physical generator or load. |
| ResourceCapacity | BidList Assembly | 8-8-2022 | This class model the various capacities of a resource. |
| Series\_Period | BidList Assembly | 8-8-2022 | The identification of the period of time corresponding to a given time interval and resolution. |
| Time\_Period | BidList Assembly | 8-8-2022 | The identification of a time interval or a duration. |
| TimeSeries | BidList Assembly | 8-8-2022 | A set of time-ordered quantities being exchanged in relation to a product.In the ESMP profile, the TimeSeries provides not only time-ordered quantities but also time-ordered information. |

| ConstraintDuration | ProductQualification Contextual | 8-8-2022 | Duration constraint to activate, to put in operation, to deactivate, ... a given event. |
| --- | --- | --- | --- |
| MarketObjectStatus | ProductQualification Contextual | 8-8-2022 | The condition or position of an object with regard to its standing. |
| MarketParticipant | ProductQualification Contextual | 8-8-2022 | The identification of the party participating in energy market business processes. |
| MarketRole | ProductQualification Contextual | 8-8-2022 | The identification of the intended behaviour of a market participant played within a given business process. |
| Process | ProductQualification Contextual | 8-8-2022 | The formal identification of the business process in which a flow of information is exchanged. |
| Product\_TimeSeries | ProductQualification Contextual | 8-8-2022 | A set of time-ordered quantities being exchanged in relation to a product.In the ESMP profile, the TimeSeries provides not only time-ordered quantities but also time-ordered information. |
| ProductQualification\_MarketDocument | ProductQualification Contextual | 8-8-2022 | An electronic document containing the information necessary to satisfy the requirements of a given business process. |
| Quantity | ProductQualification Contextual | 8-8-2022 | Description of quantities needed in the data exchange.The type of the quantity is described either by the role of the association or the quantityType attribute.The quality attribute provides the information about the quality of the quantity (measured, estimated, etc.). |
| Reason | ProductQualification Contextual | 8-8-2022 | The motivation of an act. |
| RegisteredResource | ProductQualification Contextual | 8-8-2022 | A resource that is registered through the market participant registration system. Examples include generating unit, load, and non-physical generator or load. |
| Time\_Period | ProductQualification Contextual | 8-8-2022 | The identification of a time interval or a duration. |

| Product\_TimeSeries | ProductQualification Assembly | 8-8-2022 | A set of time-ordered quantities being exchanged in relation to a product.In the ESMP profile, the TimeSeries provides not only time-ordered quantities but also time-ordered information. |
| --- | --- | --- | --- |
| ProductQualification\_MarketDocument | ProductQualification Assembly | 8-8-2022 | An electronic document containing the information necessary to satisfy the requirements of a given business process. |
| Quantity | ProductQualification Assembly | 8-8-2022 | Description of quantities needed in the data exchange.The type of the quantity is described either by the role of the association or the quantityType attribute.The quality attribute provides the information about the quality of the quantity (measured, estimated, etc.). |
| Reason | ProductQualification Assembly | 8-8-2022 | The motivation of an act. |
| RegisteredResource | ProductQualification Assembly | 8-8-2022 | A resource that is registered through the market participant registration system. Examples include generating unit, load, and non-physical generator or load. |

| ConstraintDuration | ResourceQualification Contextual | 8-8-2022 | Duration constraint to activate, to put in operation, to deactivate, ... a given event. |
| --- | --- | --- | --- |
| CoordinateSystem | ResourceQualification Contextual | 8-8-2022 | Coordinate reference system. |
| Domain | ResourceQualification Contextual | 8-8-2022 | A domain covering a number of related objects, such as market balance area, grid area, borders etc. |
| Location | ResourceQualification Contextual | 8-8-2022 | The place, scene, or point of something where someone or something has been, is, and/or will be at a given moment in time. It can be defined with one or more position points (coordinates) in a given coordinate system. |
| MarketEvaluationPoint | ResourceQualification Contextual | 8-8-2022 | The location where one or more products are measured. This may be a physical or virtual location. |
| MarketParticipant | ResourceQualification Contextual | 8-8-2022 | The identification of the party participating in energy market business processes. |
| MarketRole | ResourceQualification Contextual | 8-8-2022 | The identification of the intended behaviour of a market participant played within a given business process. |
| MktPSRType | ResourceQualification Contextual | 8-8-2022 | The type of a power system resource. |
| Owner\_MarketParticipant | ResourceQualification Contextual | 8-8-2022 | The identification of the party participating in energy market business processes. |
| PositionPoint | ResourceQualification Contextual | 8-8-2022 | Set of spatial coordinates that determine a point, defined in the coordinate system specified in 'Location.CoordinateSystem'. Use a single position point instance to describe a point-oriented location. Use a sequence of position points to describe a line-oriented object (physical location of non-point oriented objects like cables or lines), or area of an object (like a substation or a geographical zone - in this case, have first and last position point with the same values). |
| Process | ResourceQualification Contextual | 8-8-2022 | The formal identification of the business process in which a flow of information is exchanged. |
| RegisteredResource | ResourceQualification Contextual | 8-8-2022 | A resource that is registered through the market participant registration system. Examples include generating unit, load, and non-physical generator or load. |
| ResourceCapacity | ResourceQualification Contextual | 8-8-2022 | This class model the various capacities of a resource. |
| ResourceQualification\_MarketDocument | ResourceQualification Contextual | 8-8-2022 | An electronic document containing the information necessary to satisfy the requirements of a given business process. |
| ResourceQualification\_TimeSeries | ResourceQualification Contextual | 8-8-2022 | A set of time-ordered quantities being exchanged in relation to a product.In the ESMP profile, the TimeSeries provides not only time-ordered quantities but also time-ordered information. |
| Time\_Period | ResourceQualification Contextual | 8-8-2022 | The identification of a time interval or a duration. |

| ConstraintDuration | ResourceQualification Assembly | 8-8-2022 | Duration constraint to activate, to put in operation, to deactivate, ... a given event. |
| --- | --- | --- | --- |
| Domain | ResourceQualification Assembly | 8-8-2022 | A domain covering a number of related objects, such as market balance area, grid area, borders etc. |
| MktPSRType | ResourceQualification Assembly | 8-8-2022 | The type of a power system resource. |
| Owner\_MarketParticipant | ResourceQualification Assembly | 8-8-2022 | The identification of the party participating in energy market business processes. |
| RegisteredResource | ResourceQualification Assembly | 8-8-2022 | A resource that is registered through the market participant registration system. Examples include generating unit, load, and non-physical generator or load. |
| ResourceCapacity | ResourceQualification Assembly | 8-8-2022 | This class model the various capacities of a resource. |
| ResourceQualification\_MarketDocument | ResourceQualification Assembly | 8-8-2022 | An electronic document containing the information necessary to satisfy the requirements of a given business process. |
| ResourceQualification\_TimeSeries | ResourceQualification Assembly | 8-8-2022 | A set of time-ordered quantities being exchanged in relation to a product.In the ESMP profile, the TimeSeries provides not only time-ordered quantities but also time-ordered information. |
| Time\_Period | ResourceQualification Assembly | 8-8-2022 | The identification of a time interval or a duration. |

| Activation\_MarketDocument | ActivationRequest\_contextual model | 8-8-2022 | An electronic document containing the information necessary to satisfy the requirements of a given business process. |
| --- | --- | --- | --- |
| Point | ActivationRequest\_contextual model | 8-8-2022 | The identification of the values being addressed within a specific interval of time. |
| Reason | ActivationRequest\_contextual model | 8-8-2022 | The motivation of an act. |
| Series\_Period | ActivationRequest\_contextual model | 8-8-2022 | The identification of the period of time corresponding to a given time interval and resolution. |
| TimeSeries | ActivationRequest\_contextual model | 8-8-2022 | A set of time-ordered quantities being exchanged in relation to a product. |

| Activation\_MarketDocument | ActivationRequest\_assembly model | 8-8-2022 | An electronic document containing the information necessary to satisfy the requirements of a given business process. |
| --- | --- | --- | --- |
| Point | ActivationRequest\_assembly model | 8-8-2022 | The identification of the values being addressed within a specific interval of time. |
| Reason | ActivationRequest\_assembly model | 8-8-2022 | The motivation of an act. |
| Series\_Period | ActivationRequest\_assembly model | 8-8-2022 | The identification of the period of time corresponding to a given time interval and resolution. |
| TimeSeries | ActivationRequest\_assembly model | 8-8-2022 | A set of time-ordered quantities being exchanged in relation to a product. |