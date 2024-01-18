---
id: updateUnit
title: system.kanoa.quality.config.updateUnit
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaQDS</b> module</PurpleBox>
<HeaderBox header="Description">Updates an engineering unit in KanoaQDS.</HeaderBox>
<HeaderBox header="Syntax">
    <b>updateUnit(unitInfo, userId)</b>
    <li> Parameters <br />
        <ul>dict unitInfo - Dictionary with unit details, e.g., &#123;'engUnitId': 1, 'engUnitName': 'some unit', 'enabled': True}</ul>
        <ul>int userId - User ID.</ul>
    </li>
    <li> Returns <br />
        <ul>int recordsModified - Number of records modified.</ul>
    </li>
</HeaderBox>

### Code Examples
```python
# Usage example
unit_info_update = {'engUnitId': 1, 'engUnitName': 'some unit', 'enabled': True}
user_id_update = 123
modified_records_update = system.kanoa.quality.config.updateUnit(unitInfo=unit_info_update, userId=user_id_update)

print(f"Updated {modified_records_update} records.")