---
id: deleteAssetsWithForce
title: system.kanoa.asset.deleteAssetsWithForce
hide_table_of_contents: true
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaOPS</b> module</PurpleBox>
<HeaderBox header="Description">Stored procedure that will forcibly delete an asset including child assets and any entries in mode, start, shift, and quality tables (kanoaOPS).</HeaderBox>
<HeaderBox header="Syntax">
    <b>deleteAssetsWithForce(assetId, userId)</b>
    <li> Parameters <br />
        <ul>assetId (int) - ID of the asset to be forcibly deleted.</ul>
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
asset_id = 123
user_id = 456
success, message = system.kanoa.asset.deleteAssetsWithForce(asset_id, user_id)

