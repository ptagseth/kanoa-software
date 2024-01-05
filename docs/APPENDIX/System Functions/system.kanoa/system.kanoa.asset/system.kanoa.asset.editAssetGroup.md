---
id: editAssetGroup
title: system.kanoa.asset.editAssetGroup
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaOPS</b> module</PurpleBox>
<HeaderBox header="Description">Edits an asset group (kanoaOPS).</HeaderBox>
<HeaderBox header="Syntax">
    <b>editAssetGroup(assetGroupName, assetGroupId, userId)</b>
    <li> Parameters <br />
        <ul>assetGroupName (str) - Name to update for the asset group.</ul>
        <ul>assetGroupId (int) - ID of the asset group to be edited.</ul>
        <ul>userId (int) - User ID.</ul>
    </li>
    <li> Returns <br />
        <ul>records updated (int).</ul>
    </li>
</HeaderBox>

### Code Examples

```python
# Example Usage:
group_name = 'NewAssetGroup'
group_id = 123
user_id = 456
updated_records = editAssetGroup(group_name, group_id, user_id)
