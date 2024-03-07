---
id: materials
title: Materials
sidebar_position: 4
hide_table_of_contents: true
---
# Kanoa Ops Materials Configuration

## Overview

The Materials Configuration screen in Kanoa Ops is an essential tool for managing materials within the system. It consists of the Item Class Editor, Material Definition Editor, and the Production Rates Association Screen. This documentation will guide you through the functionalities of each section.

## Screen Layout
**Material Definition Editor**: Central section for adding, editing, and deleting materials.<br />
**Production Rates Association Screen**: Top tabs switch between materials and production rates.

![Materials Edit](/img/ops-config-materials2.png)

## Managing Item Classes
### Item Class Editor
**Access**: Click the 'Edit Item Classes' button.<br />
**Functionality**: Allows you to modify the folder hierarchy. You can add, delete, or save new material classes.<br />
**Creating a Class**: Assign a class name, enable it, and optionally assign a color.

## Managing Materials
### Filtering Materials
The **Show Item Attributes** checkbox will add columns to the Attributes table for additional properties.<br />
The **Filter Table** field allows users to filter Attribute table contents based on a text filter.

### Adding a New Material
1. Click the 'Add Item' button.
2. Select the appropriate item class folder for the new material.
3. Enter the material's name, description, enable it, and optionally choose a color.

### Editing Existing Materials
Click on the 'Edit' button next to a material to modify material details as needed.

### Deleting Materials
You can delete materials directly from this screen.

## Production Rates

![Material Configuration](/img/ops-config-materials1.png)

### Viewing Production Rates
Click on the 'Production Rates' tab to display a list of all materials and their associated production rates.

### Filtering and Associating Materials
**Filtering**: Use the filter table or the asset selector button to narrow down materials.<br />
**Associating with Assets**: Link materials to assets by selecting an asset and a material and clicking 'Link'.

### Editing Production Rates
1. After linking a material to an asset, click on the 'Edit Rate Info' button.
2. Input the following details:
   - **Standard Rate**: Ideal rate at which the material can run on the asset.
   - **Scheduled Rate**: The rate at which you plan to run the material on the asset.
   - **Period**: The timeframe for the rate.
   - **Infeed/Outfeed/Waste Units**: Units designation for infeed, outfeed, and waste.
   - **Package Count**: Converts infeed units to outfeed units (default is 1). Infeed Units = Package Count x Outfeed Units

## Summary
This guide provides an overview of the Materials Configuration screen in Kanoa Ops, detailing the process of managing item classes, materials, and their production rates. This functionality is critical for efficient material management and scheduling in the manufacturing process.

