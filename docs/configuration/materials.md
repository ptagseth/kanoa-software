---
id: materials
title: Materials
sidebar_position: 4
hide_table_of_contents: true
---

The Materials Management page allows you to manage the materials used in the production of your products. Primarily, it is used to define the materials or products
that can be produced by your assets and the expected rate at which they should be produced. It can also be used to manage the raw materials that are consumed
in the production of sub-assemblies and finished goods.

:bulb: **Note: **<font color="green">We tend to call materials 'items' in our application. They are synonymous. If you see item classes throughout our scripts or documentation, we are referring to materials.</font><br/>

![Material Management](/img/itemconfig/item-table-config.png)

#### Item Classes
Item Classes are a way of categorizing items (or materials). Consider it a folder structure. Important thing to note is categorizing items can be important particularly
with Kanoa Quality as it provides a way to set specifications for an entire item class rather than each individual item.

To edit Item Classes, click the 'Edit Item Classes' button.

#### Item Attributes
Meta data about an item can be stored against an item in the custom attribute tabs. This provides a method for storing any type of data against that item.
You can create whatever you want by typing in the name of the attribute and selecting 'create'.Once an attribute has been created, it will become available for other items.

The 'Show Item Attributes' checkbox will add columns to the Attributes table.
***

### Configuring Items

#### Adding & Edit Items

![Material Management](/img/itemconfig/item-config.png)

* **Item Class Name**: Select the Item Class this item belongs to.
* **Item Name**: Name of the Item. Item name must be unique
* **Description**: add a description about this item. Optional
* **Enabled**: Indicates if the state is active and available for use in the system.
* **Color**: Select a color for this item. Optional. If no color is selected, the item class color will be shown

#### Deleting Item
You can delete materials directly from this page. If an item is associated to asset or historical data is associated to an item, it cannot be deleted and will be disabled instead.
***

### Input Materials

***
### Production Rates

![Material Configuration](/img/ops-config-materials1.png)

### Editing Production Rates
1. After linking a material to an asset, click on the 'Edit Rate Info' button.
2. Input the following details:
   - **Standard Rate**: Ideal rate at which the material can run on the asset.
   - **Scheduled Rate**: The rate at which you plan to run the material on the asset.
   - **Period**: The timeframe for the rate.
   - **Infeed/Outfeed/Waste Units**: Units designation for infeed, outfeed, and waste.
   - **Package Count**: Converts infeed units to outfeed units (default is 1). Infeed Units = Package Count x Outfeed Units
