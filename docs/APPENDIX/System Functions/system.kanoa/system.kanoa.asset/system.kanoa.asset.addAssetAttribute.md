---
id: addAssetAttribute
title: system.kanoa.asset.addAssetAttribute
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaOPS</b> module</PurpleBox>
<HeaderBox header="Description">Adds an attribute value for the asset (kanoaOPS).</HeaderBox>
<HeaderBox header="Syntax">
    <b>addAssetAttribute(assetId, attrName, attrValue, userId)</b>
    <li> Parameters <br />
        <ul>assetId (int) - ID of the asset.</ul>
        <ul>attrName (str) - Name of the attribute to be added.</ul>
        <ul>attrValue (str) - Value of the attribute to be added.</ul>
        <ul>userId (int) - User ID.</ul>
    </li>
    <li> Returns <br />
        <ul>attributId (int) - ID of the added attribute.</ul>
        <ul>msg (str) - Status message ('Added' or 'Updated').</ul>
    </li>
</HeaderBox>

### Code Examples

```python
# Example Usage:
asset_id = 123
attr_name = 'Attribute1'
attr_value = 'Value1'
user_id = 456
attribute_id, message = system.kanoa.asset.addAssetAttribute(asset_id, attr_name, attr_value, user_id)

