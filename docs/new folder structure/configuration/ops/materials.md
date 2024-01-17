---
id: materials
title: Materials
sidebar_position: 4
hide_table_of_contents: true
---
Products can be created in this screen or pulled via web service call or middleware tables from an ERP system.  

![Mode Editor](/img/MaterialsManagementMaterialsOverview.png)

Product items can be categorized in classes and sub-classes of product if required.  
Custom Attributes can be added to a product if required.

![Mode Editor](/img/MaterialsManagementMaterialsEditor.png)


## Configuring Asset Production Rates
Any asset that has been configured with ‘OEE_Enabled’ can have a production rate information configured for it.

![Mode Editor](/img/MaterialsManagementProdRatesOverview.png)


Manage the Production Rates using the Editor

![Mode Editor](/img/MaterialsManagementProdRatesEditor.png)


- **Std Rate** – Theoretical speed at which the asset should be able to process material at.

- **Sch Rate** – Likely speed at which the asset will run based on historical OEE data.

- **Period** – Period for which the standard and schedule rate applies to.

- **Infeed Units** – Units for the infeed.

- **Outfeed Units** – Units for the outfeed.

- **Waste** – Units for calculated rejects.

- **Package Count:** - The number of infeed units that equate to the outfeed units. Used to calculate OEE values when no infeed count exists.