---
id: addItemClasses
title: system.kanoa.qds.config.sheets.addItemClasses
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaQDS</b> module</PurpleBox>
<HeaderBox header="Description">Adds links between a check sheet and a list of item classes in KanoaQDS.</HeaderBox>
<HeaderBox header="Syntax">
    <b>addItemClasses(chkShtId, itemClassIdList, userId)</b>
    <li> Parameters <br />
        <ul>
            <li>chkShtId - ID of the check sheet (int).</li>
            <li>itemClassIdList - List of item class IDs (list of int).</li>
            <li>userId - User ID (int).</li>
        </ul>
    </li>
    <li> Returns <br />
        <ul># of records created - Number of records created (int).</ul>
    </li>
</HeaderBox>

### Code Example
```python
# Usage example
chk_sht_id = 56
item_class_id_list = [1, 2, 3]
user_id = 123
records_created = system.kanoa.qds.config.sheets.addItemClasses(chkShtId=chk_sht_id, itemClassIdList=item_class_id_list, userId=user_id)

print(records_created)
