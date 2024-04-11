---
id: deleteAssets
title: system.kanoa.quality.config.sheets.deleteAssets
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaQDS</b> module</PurpleBox>
<HeaderBox header="Description">Deletes asset links for a check sheet in KanoaQDS.</HeaderBox>
<HeaderBox header="Syntax">
    <b>deleteAssets(chkShtId, assetIdList, userId)</b>
    <li> Parameters <br />
        <ul>chkShtId - ID of the check sheet (int).</ul>
        <ul>assetIdList - List of asset IDs (list of int).</ul>
        <ul>userId - User ID (int).</ul>
    </li>
    <li> Returns <br />
        <ul># of records modified - Number of records modified (int).</ul>
    </li>
</HeaderBox>

### Code Example
```python
# Usage example
chk_sht_id = 56
asset_id_list = [1, 2, 3]
user_id = 123
records_modified = system.kanoa.quality.config.sheets.deleteAssets(chkShtId=chk_sht_id, assetIdList=asset_id_list, userId=user_id)

print(records_modified)
