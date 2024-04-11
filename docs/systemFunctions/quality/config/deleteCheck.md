---
id: deleteCheck
title: system.kanoa.quality.config.deleteCheck
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaQDS</b> module</PurpleBox>
<HeaderBox header="Description">Deletes a check item in KanoaQDS. FK constraints will prevent deleting a check that is being used.</HeaderBox>
<HeaderBox header="Syntax">
    <b>deleteCheck(chkItemId, userId)</b>
    <li> Parameters <br />
        <ul>int chkItemId - ID of the check item to be deleted.</ul>
        <ul>int userId - User ID</ul>
    </li>
    <li> Returns <br />
        <ul>bool successFlag - Boolean indicating whether the deletion was successful.</ul>
        <ul>str message - Deletion status message.</ul>
    </li>
</HeaderBox>

### Code Examples
```python
# Usage example
chk_item_id = 3
user_id = 123
success_flag, message = system.kanoa.quality.config.deleteCheck(chkItemId=chk_item_id, userId=user_id)

if success_flag:
    print(f"Successfully deleted check item. {message}")
else:
    print(f"Deletion failed. {message}")
