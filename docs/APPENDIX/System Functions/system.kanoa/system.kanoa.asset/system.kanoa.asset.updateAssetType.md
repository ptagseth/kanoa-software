---
id: updateAssetType
title: system.kanoa.asset.updateAssetType
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaOPS</b> module</PurpleBox>
<HeaderBox header="Description">Updates an asset type (kanoaOPS).</HeaderBox>
<HeaderBox header="Syntax">
    <b>updateAssetType(assetTypeInfo, userId)</b>
    <li> Parameters <br />
        <ul>assetTypeInfo (dict) - Dictionary containing asset type information to be updated.</ul>
        <ul>userId (int) - User ID.</ul>
    </li>
    <li> Returns <br />
        <ul>records modified (int).</ul>
    </li>
</HeaderBox>

### Code Examples

```python
# Example Usage:
asset_type_info = {
    'assetTypeName': 'UpdatedType',
    'parentId': 123,
    'enabled': True,
    'iconPath': 'path/to/icon',
    'assetTypeId': 456
}
user_id = 456
records_modified = system.kanoa.asset.updateAssetType(asset_type_info, user_id)

