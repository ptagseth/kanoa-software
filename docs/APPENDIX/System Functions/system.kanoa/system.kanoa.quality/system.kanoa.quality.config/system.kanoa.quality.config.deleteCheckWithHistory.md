---
id: deleteCheckWithHistory
title: system.kanoa.quality.config.deleteCheckWithHistory
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaQDS</b> module</PurpleBox>
<HeaderBox header="Description">Deletes a check item along with any associated checkEvent data in KanoaQDS.</HeaderBox>
<HeaderBox header="Syntax">
    <b>deleteCheckWithHistory(chkItemId, userId)</b>
    <li> Parameters <br />
        <ul>int chkItemId - ID of the check item to be deleted.</ul>
        <ul>int userId - User ID</ul>
    </li>
    <li> Returns <br />
        <ul>int modifiedRecords - Number of records modified during the deletion.</ul>
    </li>
</HeaderBox>

### Code Examples
```python
# Usage example
chk_item_id = 3
user_id = 123
modified_records = system.kanoa.quality.config.deleteCheckWithHistory(chkItemId=chk_item_id, userId=user_id)

if modified_records is not None:
    print(f"Successfully deleted {modified_records} records")
else:
    print("Deletion failed.")
