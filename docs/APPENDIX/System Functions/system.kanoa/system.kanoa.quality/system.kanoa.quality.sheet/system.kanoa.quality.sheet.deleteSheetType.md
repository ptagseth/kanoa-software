---
id: deleteSheetType
title: system.kanoa.quality.sheet.deleteSheetType
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaQDS</b> module</PurpleBox>
<HeaderBox header="Description">Deletes a sheet type in KanoaQDS.</HeaderBox>
<HeaderBox header="Syntax">
    <b>deleteSheetType(chkShtTypeId, userId)</b>
    <li> Parameters <br />
        <ul>
            <li>chkShtTypeId - ID of the sheet type to delete (int).</li>
            <li>userId - User ID (int).</li>
        </ul>
    </li>
    <li> Returns <br />
        <ul>
            <li>success - Bit indicating success (bool).</li>
            <li>message - String containing a success or error message.</li>
        </ul>
    </li>
</HeaderBox>

### Code Example
```python
# Usage example
chk_sht_type_id = 4
user_id = 123
success, message = system.kanoa.quality.sheet.deleteSheetType(chkShtTypeId=chk_sht_type_id, userId=user_id)

print(success, message)