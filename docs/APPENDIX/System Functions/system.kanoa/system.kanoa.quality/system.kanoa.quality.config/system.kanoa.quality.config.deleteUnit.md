---
id: deleteUnit
title: system.kanoa.quality.config.deleteUnit
hide_table_of_contents: true
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaQDS</b> module</PurpleBox>
<HeaderBox header="Description">Deletes an engineering unit in KanoaQDS.</HeaderBox>
<HeaderBox header="Syntax">
    <b>deleteUnit(engUnitId, userId)</b>
    <li> Parameters <br />
        <ul>int engUnitId - ID of the engineering unit to be deleted.</ul>
        <ul>int userId - User ID.</ul>
    </li>
    <li> Returns <br />
        <ul>tuple result - Tuple containing success status (bit) and message (string).</ul>
    </li>
</HeaderBox>

### Code Examples
```python
# Usage example
eng_unit_id_to_delete = 1
user_id_delete = 123
delete_result = system.kanoa.quality.config.deleteUnit(engUnitId=eng_unit_id_to_delete, userId=user_id_delete)

print(delete_result)
