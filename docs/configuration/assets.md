---
id: assets
title: Asset Management
sidebar_position: 1
hide_table_of_contents: true 
---


This section outlines the process of managing assets, including how to filter, add, edit, duplicate, and delete assets. 
Assets are managed via the Asset Management page. Users with the appropriate roles can define the hierarchy, type, group, and OEE parameters.
***
### Asset Hierarchy

An asset is any entity that needs tracking or summarizing within the operational environment. 
Assets represent different physical or logical elements within a manufacturing setup and may refer to a specific machine, a manufacturing line, or an entire factory. 
Assets are organized in a hierarchical structure.

![assets](/img/assetConfig/asset-hierarchy.png)

#### ISA-95 Equipment Hierarchy
ISA-95 defines a strict hierarchy for your plant equipment consisting of Enterprise > Site > Area > Line > Cell or Cell Group. 
You can create an ISA-95 compliant equipment hierarchy, but we don't force you to follow that model if it doesn't fit your needs.
Our model allows you to create a multi-enterprise asset tree and organize your assets by region or division or department or however you want to.
At a minimum, we still need sites somewhere in the hierarchy to associate timezone information to assets. After that it's up to you.
***

### Asset Configuration

![assets](/img/assetConfig/asset-table-config.png)

#### Add or Edit an Asset
You can add an asset anywhere in the asset hierarchy by selecting a row in the asset table and clicking the 'Add' button. 
To edit an existing asset, click on the edit button after selecting the asset.

![assets](/img/assetConfig/asset-editor.png)

* **Asset Name**<br/>
The name of the asset. Asset names must be unique within the parent.

* **Asset Types**<br/>
Used for defining the type of an assets, akin to the ISA 95 hierarchy (e.g. enterprise, site, region).
To configure asset types, use the edit button next to the 'Filter by type' dropdown at the top of the page.

* **Asset Groups**<br/>
An asset can be associated a group such as 'shredders'. Grouping allows for analysis of assets that may not be in the same hierarchical area but need to be reported similarly. 
For instance, Assets like 'box formers' across different lines can be grouped under a single Asset group for consolidated reporting.
To add an asset to a group, simply select the group from the dropdown. If the group doesn't exist, start typing the name of the group into the dropdown and select 'create'.

* **Sort Order**<br/>
Determines the asset's position relative to others.<br />

* **OEE Type**<br/>
One of the primary uses of an asset in Kanoa Ops is enabling it for OEE tracking. An OEE_Enabled Asset refers to any physical piece of equipment such as a production line, vessel reactor or process cell where operational data such as counts and equipment can be obtained and needs to be monitored. 
If an asset is set to OEE_Enabled, thresholds can be set for performance, availability, quality, and overall threshold. These are the objectives and warning thresholds dislayed to users
when an asset is in production. When an asset is configured as OEE_Enabled, an instance of the assetOEE tag UDT is created in the 'Kanoa' tag provider that follows the same hierarchy as the asset.

* **Custom Attributes**<br/>
Meta data about an asset can be stored against an asset in the custom attribute tabs. We use '_tz' to store timezone information about a site, but you may want to store
information such as the ERP name for asset or the path to a custom setup screen for a specific asset. whatever the use case, you can create whatever you want by typing in the
name of the attribute and selecting 'create'.Once an attribute has been created, it will become available for any asset of the same type.

#### Duplicate Asset
Select an asset from the hierarchy and click the 'Duplicate' button to make a copy of the asset. The entire configuration for the asset is duplicated including
child assets, custom attributes, mode, state and item links.

#### Delete Asset
Remove assets from your hierarchy. If there are child assets or event history associated with any part of the asset hierarchy, the user will be warned that 'deleting
this asset will also remove historical data'. This action cannot be undone.

#### Import/Export Asset

:bulb: **Note: **<font color="red">New feature in kanoaOPS 1.3.9</font>

An asset hierarchy can be exported and imported to another gateway using the import/export buttons. This utility works the same as the 'Duplicate Asset' in that 
the entire configuration for the asset will be exported.