---
id: deleteAssetGroup
title: system.kanoa.asset.deleteAssetGroup
hide_table_of_contents: true
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaOPS</b> module</PurpleBox>
<HeaderBox header="Description">Deletes an asset group (kanoaOPS).</HeaderBox>
<HeaderBox header="Syntax">
    <b>deleteAssetGroup(assetGroupId, userId)</b>
    <li> Parameters <br />
        <ul>assetGroupId (int) - ID of the asset group to be deleted.</ul>
        <ul>userId (int) - User ID.</ul>
    </li>
    <li> Returns <br />
        <ul>successFlag (bool) - Boolean indicating the success of the operation.</ul>
        <ul>msg (str) - Status message ('Deleted' or error message).</ul>
    </li>
</HeaderBox>

### Code Examples

```python
# Example Usage:
group_id = 123
user_id = 456
success, message = system.kanoa.asset.deleteAssetGroup(group_id, user_id)
