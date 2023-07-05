---
title: Product Management
sidebar_position: 9
---
Products can be created in this screen or pulled via web service call or middleware tables from an ERP system.  

![Mode Editor](/img/21.png)

Product items can be categorized in classes and sub-classes of product if required.  

![Mode Editor](/img/22.png)

Custom Attributes can be added to a product if required.

## Configuring Asset Production Rates
Any asset that has been configured with ‘OEE_Enabled’ can have a production rate information configured for it.

![Mode Editor](/img/23.png)  

Standard Rate: Theoretical speed at which the asset should be able to process material at.

Schedule rate: Likely speed at which the asset will run based on historical OEE data.

Period: Period for which the standard and schedule rate applies to.

Units: Units for the infeed, outfeed and reject counts.

Package Count: The number of infeed units that equate to the outfeed units. Used to calculate OEE values when no infeed count exists.