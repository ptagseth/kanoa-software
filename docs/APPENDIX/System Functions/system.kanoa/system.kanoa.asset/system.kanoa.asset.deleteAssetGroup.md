---
id: deleteAssetGroup
title: system.kanoa.asset.deleteAssetGroup
sidebar_position: 2
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaOPS</b> module</PurpleBox>
<HeaderBox header="Description">Deletes an asset group (kanoaOPS).</HeaderBox>
<HeaderBox header="Syntax">
    <b>deleteAssetGroup(assetGroupId, userId)</b>
    <li> Parameters <br />
        <ul>int assetGroupId - The ID of the asset group to be deleted</ul>
        <ul>int userId - User ID</ul>
    </li>
    <li> Returns <br />
        <ul>successFlag (boolean) - Indicates whether the deletion was successful or not</ul>
        <ul>msg (string) - Message providing details about the deletion result</ul>
        <ul>updated (int) - Timestamp of the last update</ul>
    </li>
</HeaderBox>

### Code Examples

```python
# Example Usage:
success, message, timestamp = deleteAssetGroup(123, 456)
if success:
    print(f"Asset group deleted successfully. Message: {message}, Last updated: {timestamp}")
else:
    print(f"Failed to delete asset group. Error: {message}")