---
id: addAssetType
title: system.kanoa.asset.addAssetType
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaOPS</b> module</PurpleBox>
<HeaderBox header="Description">Adds a new asset type (kanoaOPS).</HeaderBox>
<HeaderBox header="Syntax">
    <b>addAssetType(assetTypeInfo, userId)</b>
    <li> Parameters <br />
        <ul>assetTypeInfo (dict) - Dictionary containing asset type information.</ul>
        <ul>userId (int) - User ID for tracking changes.</ul>
    </li>
    <li> Returns <br />
        <ul>assetTypeId (int).</ul>
    </li>
</HeaderBox>

### Code Examples

```python
# Example Usage:
type_info = {
    'assetTypeName': 'Type1',
    'parentId': 1,
    'enabled': True,
    'iconPath': '/path/to/icon'
}
user_id = 5
asset_type_id = system.kanoa.asset.addAssetType(type_info, user_id)
