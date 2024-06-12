---
id: updateAssetField
title: system.kanoa.asset.updateAssetField
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaOPS</b> module</PurpleBox>
<HeaderBox header="Description">Updates the field with the passed value for the assetId (kanoaOPS).</HeaderBox>
<HeaderBox header="Syntax">
    <b>updateAssetField(assetId, field, value, ...)</b>
    <li> Parameters <br />
        <ul>assetId (int) - Asset ID.</ul>
        <ul>field (string) - field.</ul>
        <ul>value (string) - value.</ul>
    </li>
    <li> Returns <br />
        <ul>records modified (int).</ul>
        <ul>message (string).</ul>
    </li>
</HeaderBox>

### Code Examples

```python
# Example Usage:
asset_id = 12
field = "Name"
value = "RedBox"
records_modified, message = system.kanoa.asset.updateAsset(asset_id, field, value)

