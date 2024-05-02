---
id: updateAsset
title: system.kanoa.asset.updateAsset
hide_table_of_contents: true
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaOPS</b> module</PurpleBox>
<HeaderBox header="Description">Updates an asset (kanoaOPS).</HeaderBox>
<HeaderBox header="Syntax">
    <b>updateAsset(assetInfo, userId)</b>
    <li> Parameters <br />
        <ul>assetInfo (dict) - Dictionary containing asset information to be updated.</ul>
        <ul>userId (int) - User ID.</ul>
    </li>
    <li> Returns <br />
        <ul>records modified (int).</ul>
    </li>
</HeaderBox>

### Code Examples

```python
# Example Usage:
asset_info = {
    'assetName': 'UpdatedAsset',
    'parentId': 123,
    'assetTypeId': 456,
    'assetGroupId': 789,
    'oee': 0.85,
    'a': 0.7,
    'p': 0.9,
    'q': 0.95,
    'targetThreshold': 0.8,
    'oeeType': 'OEE_Enabled',
    'sortOrder': 10,
    'enabled': True,
    'assetId': 1234
}
user_id = 456
records_modified = system.kanoa.asset.updateAsset(asset_info, user_id)

