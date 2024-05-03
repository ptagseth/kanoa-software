---
id: deleteAlertGroup
title: system.kanoa.quality.config.deleteAlertGroup
hide_table_of_contents: true
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaQDS</b> module</PurpleBox>
<HeaderBox header="Description">Deletes an alert group in KanoaQDS.</HeaderBox>
<HeaderBox header="Syntax">
    <b>deleteAlertGroup(alertGroupId, userId)</b>
    <li> Parameters <br />
        <ul>int alertGroupId - ID of the alert group to be deleted.</ul>
        <ul>int userId - User ID</ul>
    </li>
    <li> Returns <br />
        <ul>bool successFlag - Boolean indicating the success of the deletion.</ul>
        <ul>str msg - Message indicating the result of the deletion.</ul>
    </li>
</HeaderBox>

### Code Examples
```python
# Usage example
delete_success, delete_msg = system.kanoa.quality.config.deleteAlertGroup(alertGroupId=1, userId=123)

if delete_success:
    print(f"Successfully deleted alert group: {delete_msg}")
else:
    print(f"Deletion failed: {delete_msg}")

