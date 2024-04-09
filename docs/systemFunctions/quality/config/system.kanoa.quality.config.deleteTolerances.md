---
id: deleteTolerances
title: system.kanoa.quality.config.deleteTolerances
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaQDS</b> module</PurpleBox>
<HeaderBox header="Description">Deletes all tolerances for an attribute in KanoaQDS.</HeaderBox>
<HeaderBox header="Syntax">
    <b>deleteTolerances(attributeId, userId)</b>
    <li> Parameters <br />
        <ul>int attributeId - ID of the attribute for which tolerances should be deleted.</ul>
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
delete_success, delete_msg = system.kanoa.quality.config.deleteTolerances(attributeId=1, userId=123)

if delete_success:
    print(f"Successfully deleted tolerances for attribute: {delete_msg}")
else:
    print(f"Deletion failed. Error: {delete_msg}")
