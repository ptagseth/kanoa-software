---
id: addTolerance
title: system.kanoa.quality.config.addTolerance
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaQDS</b> module</PurpleBox>
<HeaderBox header="Description">Adds an attribute tolerance in KanoaQDS.</HeaderBox>
<HeaderBox header="Syntax">
    <b>addTolerance(attrInfo, userId)</b>
    <li> Parameters <br />
        <ul>dict attrInfo - Dictionary, e.g., &#123;'attributeId': 2, 'assetId': None, 'itemId': None, 'itemClassId': None, 'itemSetId': None, 'uel': 10.0, 'udl': None, 'usl': 9.0, 'ucl': 8.0, 'tgt': 5, 'lcl': 3, 'lsl': 2, 'ldl': None, 'lel': 0, 'enabled': True}</ul>
        <ul>int userId - User ID</ul>
    </li>
    <li> Returns <br />
        <ul>int attributeToleranceId - ID of the added attribute tolerance.</ul>
    </li>
</HeaderBox>

### Code Examples
```python
# Usage example
tolerance_info = {'attributeId': 2, 'assetId': None, 'itemId': None, 'itemClassId': None, 'itemSetId': None, 'uel': 10.0, 'udl': None, 'usl': 9.0, 'ucl': 8.0, 'tgt': 5, 'lcl': 3, 'lsl': 2, 'ldl': None, 'lel': 0, 'enabled': True}
added_tolerance_id = system.kanoa.quality.config.addTolerance(attrInfo=tolerance_info, userId=123)

if added_tolerance_id is not None:
    print(f"Successfully added attribute tolerance with ID {added_tolerance_id}")

