---
id: deleteAssetType
title: system.kanoa.asset.deleteAssetType
hide_table_of_contents: true
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaOPS</b> module</PurpleBox>
<HeaderBox header="Description">Deletes the assetType and all assetTypes underneath. SQL Cascade should handle deleting children. It should also prevent us from deleting assetTypes if they are currently in use (kanoaOPS).</HeaderBox>
<HeaderBox header="Syntax">
    <b>deleteAssetType(assetTypeID, userId)</b>
    <li> Parameters <br />
        <ul>assetTypeID (int) - ID of the asset type to be deleted.</ul>
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
asset_type_id = 123
user_id = 456
success, message = system.kanoa.asset.deleteAssetType(asset_type_id, user_id)

