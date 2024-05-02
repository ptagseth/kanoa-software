---
id: deleteGroup
title: system.kanoa.quality.config.deleteGroup
hide_table_of_contents: true
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaQDS</b> module</PurpleBox>
<HeaderBox header="Description">Deletes a check item group in KanoaQDS.</HeaderBox>
<HeaderBox header="Syntax">
    <b>deleteGroup(chkItemGroupId, chkShtId, userId)</b>
    <li> Parameters <br />
        <ul>int chkItemGroupId - ID of the check item group to be deleted.</ul>
        <ul>int chkShtId - ID of the associated check sheet.</ul>
        <ul>int userId - User ID</ul>
    </li>
    <li> Returns <br />
        <ul>tuple(success: bool, message: str) - Deletion status and message.</ul>
    </li>
</HeaderBox>

### Code Examples
```python
# Usage example
chk_item_group_id_to_delete = 1
chk_sht_id = 2
user_id = 123
delete_status, delete_message = system.kanoa.quality.config.deleteGroup(chkItemGroupId=chk_item_group_id_to_delete, chkShtId=chk_sht_id, userId=user_id)

if delete_status:
    print(delete_message)
else:
    print(f"Deletion failed. Reason: {delete_message}")

