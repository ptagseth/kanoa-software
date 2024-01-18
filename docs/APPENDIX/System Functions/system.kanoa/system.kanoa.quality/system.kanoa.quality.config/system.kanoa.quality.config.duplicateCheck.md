---
id: duplicateCheck
title: system.kanoa.quality.config.duplicateCheck
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaQDS</b> module</PurpleBox>
<HeaderBox header="Description">Creates a copy of the passed-in check item ID in KanoaQDS.</HeaderBox>
<HeaderBox header="Syntax">
    <b>duplicateCheck(chkItemId, chkItemName, userId)</b>
    <li> Parameters <br />
        <ul>int chkItemId - ID of the check item to be duplicated.</ul>
        <ul>str chkItemName - Name of the new check item.</ul>
        <ul>int userId - User ID</ul>
    </li>
    <li> Returns <br />
        <ul>int newChkItemId - ID of the newly created check item.</ul>
    </li>
</HeaderBox>

### Code Examples
```python
# Usage example
original_chk_item_id = 123
new_chk_item_name = 'Copy of Check 1'
user_id = 456
new_chk_item_id = system.kanoa.quality.config.duplicateCheck(chkItemId=original_chk_item_id, chkItemName=new_chk_item_name, userId=user_id)

if new_chk_item_id:
    print(f"Successfully duplicated check item. New ID: {new_chk_item_id}")
else:
    print("Duplication failed.")
