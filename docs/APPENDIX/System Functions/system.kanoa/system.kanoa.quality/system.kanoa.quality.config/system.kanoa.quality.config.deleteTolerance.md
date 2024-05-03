---
id: deleteTolerance
title: system.kanoa.quality.config.deleteTolerance
hide_table_of_contents: true
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaQDS</b> module</PurpleBox>
<HeaderBox header="Description">Deletes an attribute tolerance in KanoaQDS.</HeaderBox>
<HeaderBox header="Syntax">
    <b>deleteTolerance(attributeToleranceId, userId)</b>
    <li> Parameters <br />
        <ul>int attributeToleranceId - ID of the attribute tolerance to be deleted.</ul>
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
delete_success, delete_msg = system.kanoa.quality.config.deleteTolerance(attributeToleranceId=1, userId=123)

if delete_success:
    print(f"Successfully deleted attribute tolerance: {delete_msg}")
else:
    print(f"Deletion failed. Error: {delete_msg}")

