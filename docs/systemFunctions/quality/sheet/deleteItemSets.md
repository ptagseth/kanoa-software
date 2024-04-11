---
id: deleteItemSets
title: system.kanoa.quality.config.sheets.deleteItemSets
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaQDS</b> module</PurpleBox>
<HeaderBox header="Description">Deletes item set links for a check sheet in KanoaQDS.</HeaderBox>
<HeaderBox header="Syntax">
    <b>deleteItemSets(chkShtId, userId)</b>
    <li> Parameters <br />
        <ul>chkShtId - ID of the check sheet (int).</ul>
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
user_id = 123
records_modified = system.kanoa.quality.config.sheets.deleteItemSets(chkShtId=chk_sht_id, userId=user_id)

print(records_modified)
