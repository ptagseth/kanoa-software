---
id: addUnit
title: system.kanoa.quality.config.addUnit
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaQDS</b> module</PurpleBox>
<HeaderBox header="Description">Adds a new engineering unit in KanoaQDS.</HeaderBox>
<HeaderBox header="Syntax">
    <b>addUnit(unitInfo, userId)</b>
    <li> Parameters <br />
        <ul>dict unitInfo - Dictionary with unit details, e.g., &#123;'engUnitName': 'some unit', 'enabled': True}</ul>
        <ul>int userId - User ID.</ul>
    </li>
    <li> Returns <br />
        <ul>int engUnitId - ID of the added engineering unit.</ul>
    </li>
</HeaderBox>

### Code Examples
```python
# Usage example
unit_info_add = {'engUnitName': 'some unit', 'enabled': True}
user_id_add = 123
added_eng_unit_id = system.kanoa.quality.config.addUnit(unitInfo=unit_info_add, userId=user_id_add)

print(f"Added engineering unit with ID: {added_eng_unit_id}")
