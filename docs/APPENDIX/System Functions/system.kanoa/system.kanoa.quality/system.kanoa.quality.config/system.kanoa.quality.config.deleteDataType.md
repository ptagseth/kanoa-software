---
id: deleteDataType
title: system.kanoa.quality.config.deleteDataType
hide_table_of_contents: true
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaQDS</b> module</PurpleBox>
<HeaderBox header="Description">Deletes a data type in KanoaQDS.</HeaderBox>
<HeaderBox header="Syntax">
    <b>deleteDataType(dataTypeId, userId)</b>
    <li> Parameters <br />
        <ul>int dataTypeId - ID of the data type to be deleted.</ul>
        <ul>int userId - User ID</ul>
    </li>
    <li> Returns <br />
        <ul>tuple(success: bool, message: str) - Deletion status and message.</ul>
    </li>
</HeaderBox>

### Code Examples
```python
# Usage example
data_type_id_to_delete = 1
user_id = 123
delete_status, delete_message = system.kanoa.quality.config.deleteDataType(dataTypeId=data_type_id_to_delete, userId=user_id)

if delete_status:
    print(delete_message)
else:
    print(f"Deletion failed. Reason: {delete_message}")
