---
id: updateTolerance
title: system.kanoa.quality.config.updateTolerance
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaQDS</b> module</PurpleBox>
<HeaderBox header="Description">Updates an attribute tolerance in KanoaQDS.</HeaderBox>
<HeaderBox header="Syntax">
    <b>updateTolerance(attrInfo, userId)</b>
    <li> Parameters <br />
        <ul>dict attrInfo - Dictionary, e.g., &#123;'attributeToleranceId': 1, 'attributeId': 2, 'assetId': None, 'itemId': None, 'itemClassId': None, 'itemSetId': None, 'uel': 10.0, 'udl': None, 'usl': 9.0, 'ucl': 8.0, 'tgt': 5, 'lcl': 3, 'lsl': 2, 'ldl': None, 'lel': 0, 'enabled': True}</ul>
        <ul>int userId - User ID</ul>
    </li>
    <li> Returns <br />
        <ul>int modifiedRecords - Number of records modified during the update.</ul>
    </li>
</HeaderBox>

### Code Examples
```python
# Usage example
tolerance_info = {'attributeToleranceId': 1, 'attributeId': 2, 'assetId': None, 'itemId': None, 'itemClassId': None, 'itemSetId': None, 'uel': 10.0, 'udl': None, 'usl': 9.0, 'ucl': 8.0, 'tgt': 5, 'lcl': 3, 'lsl': 2, 'ldl': None, 'lel': 0, 'enabled': True}
modified_records = system.kanoa.quality.config.updateTolerance(attrInfo=tolerance_info, userId=123)

if modified_records is not None:
    print(f"Successfully updated {modified_records} records")

