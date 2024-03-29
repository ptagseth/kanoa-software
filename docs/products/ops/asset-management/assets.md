---
id: assets
title: Assets
sidebar_position: 1
hide_table_of_contents: true 
---

import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';

The Asset Editor page at **Ops > Configuration > Asset Management > Assets** is to create and manage your assets.  A flexible architecture allows to configure assets in any hierarchy desired structure.

## Asset Types
The different asset types are:
 - Enterprise
 - Region
 - Site 
 - Area
 - Line
 - Cell

Cells can be grouped in Cell Groups and Lines can be configured to have Sub-Lines.

Logged in users can see the Asset management screen, but privileges are needed to add, modify or delete assets.  The necessary privileges can be set at the Security pages.


## Asset Modification

### Create an Asset

To create an asset - click the <AddIcon fontSize="small" /> icon on the Asset Management page - and next click the <AddIcon fontSize="small" /> icon on the Asset Editor to clear the form.  Select the asset parent in the editor - and enter the asset information as needed.  Save the asset.

![Asset Manager](/img/AssetsCreateAsset.png)


When an asset is configured as ‘OEE_Enabled’, a lineOEE tag UDT instance is created that can then be connected to a data source with either a plc from an OPC-UA source or with a MQTT reference tag.

When an asset is configured as ‘OEE_Calculated’, the OEE for this asset will be calculated. Code stubs are provided for custom OEE calculations. This should be used for assets/production lines that comprise multiple operations with significant latency. An example of this would be a Bakery line that may consist of several in-line operations such as batching, baking and packaging. Trying to figure out OEE for a line of this magnitude can have significant issues for shift KPIs, so the 'OEE_Calculated' provides a method for creating your own custom calculation.
Default values for OEE calculations provided as "starter values" when OEE Enabled and can be customized.


### Modify an Asset

Modify an Asset is just a variation of Create an Asset.  Select the asset to be modified and click the <EditIcon fontSize="small" /> icon.  Make the  necessary changes and Save.


### Delete an Asset

To Delete and Asset - select the asset to delete and click the <DeleteIcon fontSize="small" /> icon

![Asset Manager](/img/AssetsDeleteAsset.png)

