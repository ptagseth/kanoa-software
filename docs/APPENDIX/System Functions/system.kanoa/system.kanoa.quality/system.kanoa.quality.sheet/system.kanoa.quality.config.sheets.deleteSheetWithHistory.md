---
id: deleteSheetWithHistory
title: system.kanoa.quality.config.sheets.deleteSheetWithHistory
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaQDS</b> module</PurpleBox>
<HeaderBox header="Description">Deletes a check sheet and its associated check event data from KanoaQDS.</HeaderBox>
<HeaderBox header="Syntax">
    <b>deleteSheetWithHistory(chkShtId, userId)</b>
    <li> Parameters <br />
        <ul>
            <li>chkShtId - ID of the check sheet to delete (int).</li>
            <li>userId - User ID (int).</li>
        </ul>
    </li>
    <li> Returns <br />
        <ul>success - True if the check sheet and associated data are deleted successfully (bool).</ul>
    </li>
</HeaderBox>

### Code Example
```python
# Usage example
chk_sht_id = 56
user_id = 123
success = system.kanoa.quality.config.sheets.deleteSheetWithHistory(chkShtId=chk_sht_id, userId=user_id)

print(success)

