---
id: updateGroupField
title: system.kanoa.quality.config.updateGroupField
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaQDS</b> module</PurpleBox>
<HeaderBox header="Description">Updates a check item group field value in KanoaQDS.</HeaderBox>
<HeaderBox header="Syntax">
    <b>updateGroupField(field, value, chkItemGroupId, userId)</b>
    <li> Parameters <br />
        <ul>str field - Name of the column to change, e.g., 'chkItemId', 'chkItemGroupName', 'sortOrder'</ul>
        <ul>pyObject value - Value to store</ul>
        <ul>int chkItemGroupId - ID of the check item group</ul>
        <ul>int userId - User ID</ul>
    </li>
    <li> Returns <br />
        <ul>int modified_records_count - Number of records modified.</ul>
    </li>
</HeaderBox>

### Code Examples
```python
# Usage example
field_to_update = 'chkItemGroupName'
new_value = 'Updated Group Name'
chk_item_group_id = 3
user_id = 123
modified_records_count = system.kanoa.quality.config.updateGroupField(field=field_to_update, value=new_value, chkItemGroupId=chk_item_group_id, userId=user_id)

print(f"Modified {modified_records_count} records.")

