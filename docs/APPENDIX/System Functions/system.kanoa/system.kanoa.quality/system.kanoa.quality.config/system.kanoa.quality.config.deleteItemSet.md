---
id: deleteItemSet
title: system.kanoa.quality.config.deleteItemSet
hide_table_of_contents: true
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaQDS</b> module</PurpleBox>
<HeaderBox header="Description">Deletes an item set in KanoaQDS.</HeaderBox>
<HeaderBox header="Syntax">
    <b>deleteItemSet(itemSetId, userId)</b>
    <li> Parameters <br />
        <ul>int itemSetId - ID of the item set to be deleted.</ul>
        <ul>int userId - User ID.</ul>
    </li>
    <li> Returns <br />
        <ul>tuple(success: bool, message: str) - Deletion status and message.</ul>
    </li>
</HeaderBox>

### Code Examples
```python
# Usage example
item_set_id_to_delete = 1
user_id = 123
delete_status, delete_message = system.kanoa.quality.config.deleteItemSet(itemSetId=item_set_id_to_delete, userId=user_id)

if delete_status:
    print(delete_message)
else:
    print(f"Deletion failed. Reason: {delete_message}")
