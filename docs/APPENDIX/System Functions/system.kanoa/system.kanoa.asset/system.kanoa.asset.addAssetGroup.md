---
id: addAssetGroup
title: system.kanoa.asset.addAssetGroup
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaOPS</b> module</PurpleBox>
<HeaderBox header="Description">Adds a new asset group if the group doesn't already exist (kanoaOPS).</HeaderBox>
<HeaderBox header="Syntax">
    <b>addAssetGroup(assetGroupName, userId)</b>
    <li> Parameters <br />
        <ul>assetGroupName (string) - Name of the asset group.</ul>
        <ul>userId (int) - User ID for tracking changes.</ul>
    </li>
    <li> Returns <br />
        <ul>assetGroupId (int).</ul>
    </li>
</HeaderBox>

### Code Examples

```python
# Example Usage:
group_name = 'Group1'
user_id = 5
asset_group_id = system.kanoa.asset.addAssetGroup(group_name, user_id)

