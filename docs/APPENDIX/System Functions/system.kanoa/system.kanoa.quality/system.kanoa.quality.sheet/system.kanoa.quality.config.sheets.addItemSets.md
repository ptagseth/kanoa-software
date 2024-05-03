---
id: addItemSets
title: system.kanoa.quality.config.sheets.addItemSets
hide_table_of_contents: true
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaQDS</b> module</PurpleBox>
<HeaderBox header="Description">Adds links between a check sheet and a list of item sets in KanoaQDS.</HeaderBox>
<HeaderBox header="Syntax">
    <b>addItemSets(chkShtId, itemSetIdList, userId)</b>
    <li> Parameters <br />
        <ul>chkShtId - ID of the check sheet (int).</ul>
        <ul>itemSetIdList - List of item set IDs (list of int).</ul>
        <ul>userId - User ID (int).</ul>
    </li>
    <li> Returns <br />
        <ul># of records created - Number of records created (int).</ul>
    </li>
</HeaderBox>

### Code Example
```python
# Usage example
chk_sht_id = 56
item_set_id_list = [1, 2, 3]
user_id = 123
records_created = system.kanoa.quality.config.sheets.addItemSets(chkShtId=chk_sht_id, itemSetIdList=item_set_id_list, userId=user_id)

print(records_created)