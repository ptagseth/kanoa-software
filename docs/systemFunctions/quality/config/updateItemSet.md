---
id: updateItemSet
title: system.kanoa.quality.config.updateItemSet
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaQDS</b> module</PurpleBox>
<HeaderBox header="Description">Updates an item set in KanoaQDS.</HeaderBox>
<HeaderBox header="Syntax">
    <b>updateItemSet(itemSetInfo, userId)</b>
    <li> Parameters <br />
        <ul>dict itemSetInfo - Dictionary, e.g., &#123;'itemSetId': 1, 'itemSetName': 'Set 1', 'itemSetDescription': 'Description 1', 'sortOrder': 3, 'enabled': True}</ul>
        <ul>int userId - User ID.</ul>
    </li>
    <li> Returns <br />
        <ul>tuple(itemSetId: int, message: str) - ID of the updated item set and a message.</ul>
    </li>
</HeaderBox>

### Code Examples
```python
# Usage example
item_set_info_update = {'itemSetId': 1, 'itemSetName': 'Updated Set', 'itemSetDescription': 'Updated Description', 'sortOrder': 3, 'enabled': True}
user_id = 123
updated_item_set_id, update_message = system.kanoa.quality.config.updateItemSet(itemSetInfo=item_set_info_update, userId=user_id)

if updated_item_set_id:
    print(f"Successfully updated item set. ID: {updated_item_set_id}")
else:
    print("Update failed. Reason:", update_message)

