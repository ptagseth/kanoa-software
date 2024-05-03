---
id: deleteAssetAttribute
title: system.kanoa.asset.deleteAssetAttribute
hide_table_of_contents: true
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaOPS</b> module</PurpleBox>
<HeaderBox header="Description">Deletes an asset attribute value (kanoaOPS).</HeaderBox>
<HeaderBox header="Syntax">
    <b>deleteAssetAttribute(assetAttrId, userId)</b>
    <li> Parameters <br />
        <ul>assetAttrId (int) - The ID of the asset attribute value to be deleted.</ul>
        <ul>userId (int) - User ID.</ul>
    </li>
    <li> Returns <br />
        <ul>records modified (int).</ul>
    </li>
</HeaderBox>

### Code Examples

```python
# Example Usage:
modified_records = system.kanoa.asset.deleteAssetAttribute(123, 456)
