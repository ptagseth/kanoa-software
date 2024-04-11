---
id: updateCheckField
title: system.kanoa.quality.config.updateCheckField
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaQDS</b> module</PurpleBox>
<HeaderBox header="Description">Updates a check item field value in KanoaQDS.</HeaderBox>
<HeaderBox header="Syntax">
    <b>updateCheckField(field, value, chkItemId, userId)</b>
    <li> Parameters <br />
        <ul>str field - Name of column to change, e.g., 'chkItemId', 'chkItemGroupId', 'chkShtId', dataTypeId, 'engUnitId','chkItemName','chkItemTypeId','chkItemTriggerId','measCount','instructions','pickListId','pickListValues','calculation','required','enabled','dynamic','sortOrder','format','attributeId'</ul>
        <ul>pyObject value - Value to store</ul>
        <ul>int chkItemId - ID of the check item</ul>
        <ul>int userId - User ID</ul>
    </li>
    <li> Returns <br />
        <ul>int modifiedRecords - Number of records modified during the update.</ul>
    </li>
</HeaderBox>

### Code Examples
```python
# Usage example
field_name = 'chkItemName'
new_value = 'New Check Name'
chk_item_id = 3
user_id = 123
modified_records = system.kanoa.quality.config.updateCheckField(field=field_name, value=new_value, chkItemId=chk_item_id, userId=user_id)

if modified_records is not None:
    print(f"Successfully updated {modified_records} records")
else:
    print("Update failed.")
    