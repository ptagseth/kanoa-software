---
id: addSheetType
title: system.kanoa.quality.sheet.addSheetType
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaQDS</b> module</PurpleBox>
<HeaderBox header="Description">Adds a new sheet type in KanoaQDS.</HeaderBox>
<HeaderBox header="Syntax">
    <b>addSheetType(shtTypeInfo, userId)</b>
    <li> Parameters <br />
        <ul>
            <li>shtTypeInfo - Dictionary containing sheet type information:</li>
            <li>  - 'chkShtTypeName': Name of the sheet type (string).</li>
            <li>  - 'parentId': ID of the parent sheet type (int).</li>
            <li>  - 'description': Description of the sheet type (string, optional).</li>
            <li>  - 'enabled': True to enable the sheet type (bool).</li>
            <li>userId - User ID (int).</li>
        </ul>
    </li>
    <li> Returns <br />
        <ul>chkShtTypeId - ID of the added sheet type (int).</ul>
    </li>
</HeaderBox>

### Code Example
```python
# Usage example
sht_type_info = {'chkShtTypeName': 'Quality', 'parentId': 1, 'description': None, 'enabled': True}
user_id = 123
chk_sht_type_id = system.kanoa.quality.sheet.addSheetType(shtTypeInfo=sht_type_info, userId=user_id)

print(chk_sht_type_id)
