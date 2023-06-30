---
title: Configuring Assets
sidebar_position: 1
---
The Asset Editor page under Production > Configuration can be used to create and manage your assets. It follows the ISA equipment hierarchy model and provides support for multi-enterprises and lines within lines (sub-lines).
![Flow Chart](/img/1.png)
![Assets](/img/2.png)
Anyone can view this screen, but you must login to be able to make changes. Security of who can edit assets can be set in the security screen.
![Asset Editor](/img/3.png)
When an asset is configured as ‘OEE_Enabled’, a lineOEE tag UDT instance is created that can then be connected to a data source either plc from an OPC-UA source or MQTT reference tag.  
When an asset is configured as ‘OEE_Calculated’, the OEE for this asset will be calculated. Code stubs are provided for custom OEE calculations. This should be used for assets/production lines that comprise multiple operations with significant latency. An example of this would be a Bakery line that may consist of several in-line operations such as batching, baking and packaging. Trying to figure out OEE for a line of this magnitude can have significant issues for shift KPIs, so the 'OEE_Calculated' provides a method for creating your own custom calculation.