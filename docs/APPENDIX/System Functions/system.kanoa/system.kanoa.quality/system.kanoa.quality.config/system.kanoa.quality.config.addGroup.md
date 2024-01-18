---
id: addGroup
title: system.kanoa.quality.config.addGroup
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaQDS</b> module</PurpleBox>
<HeaderBox header="Description">Adds a new check item group to the check sheet in KanoaQDS if it doesn't already exist.</HeaderBox>
<HeaderBox header="Syntax">
    <b>addGroup(grpInfo, userId)</b>
    <li> Parameters <br />
        <ul>dict grpInfo - Dictionary, e.g., &#123;'chkShtId': 1,'chkItemGroupName': 'Some name','sortOrder':3}</ul>
        <ul>int userId - User ID</ul>
    </li>
    <li> Returns <br />
        <ul>int chkItemGroupId - ID of the newly added check item group.</ul>
    </li>
</HeaderBox>

### Code Examples
```python
# Usage example
group_info = {'chkShtId': 1, 'chkItemGroupName': 'Group 1', 'sortOrder': 3}
user_id = 123
chk_item_group_id = system.kanoa.quality.config.addGroup(grpInfo=group_info, userId=user_id)

if chk_item_group_id:
    print(f"Successfully added check item group. New ID: {chk_item_group_id}")
else:
    print("Addition failed.")

