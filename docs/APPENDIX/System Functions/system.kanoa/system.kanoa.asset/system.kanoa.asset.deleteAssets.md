---
id: deleteAssets
title: system.kanoa.asset.deleteAssets
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaOPS</b> module</PurpleBox>
<HeaderBox header="Description">Deletes the asset and all children underneath using SQL cascade function (kanoaOPS).</HeaderBox>
<HeaderBox header="Syntax">
    <b>deleteAssets(assetId, userId)</b>
    <li> Parameters <br />
        <ul>assetId (int) - ID of the asset to be deleted.</ul>
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
success, message = deleteAssets(asset_id, user_id)
