---
id: updateGroup
title: system.kanoa.quality.config.updateGroup
hide_table_of_contents: true
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaQDS</b> module</PurpleBox>
<HeaderBox header="Description">Updates a check item group in KanoaQDS.</HeaderBox>
<HeaderBox header="Syntax">
    <b>updateGroup(grpInfo, userId)</b>
    <li> Parameters <br />
        <ul>dict grpInfo - Dictionary, e.g., &#123;'chkItemGroupId': 3, 'chkShtId': 1,'chkItemGroupName': 'Some name','sortOrder':3}</ul>
        <ul>int userId - User ID</ul>
    </li>
    <li> Returns <br />
        <ul>int chkItemGroupId - ID of the updated check item group.</ul>
    </li>
</HeaderBox>

### Code Examples
```python
# Usage example
group_info = {'chkItemGroupId': 3, 'chkShtId': 1, 'chkItemGroupName': 'Updated Group', 'sortOrder': 5}
user_id = 123
updated_chk_item_group_id = system.kanoa.quality.config.updateGroup(grpInfo=group_info, userId=user_id)

if updated_chk_item_group_id:
    print(f"Successfully updated check item group. ID: {updated_chk_item_group_id}")
else:
    print("Update failed.")
    