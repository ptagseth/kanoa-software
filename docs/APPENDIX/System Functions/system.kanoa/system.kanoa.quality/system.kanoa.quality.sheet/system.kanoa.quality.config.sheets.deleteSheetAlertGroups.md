---
id: deleteSheetAlertGroups
title: system.kanoa.quality.config.sheets.deleteSheetAlertGroups
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaQDS</b> module</PurpleBox>
<HeaderBox header="Description">Deletes alert group links for a check sheet in KanoaQDS.</HeaderBox>
<HeaderBox header="Syntax">
    <b>deleteSheetAlertGroups(chkShtId, userId)</b>
    <li> Parameters <br />
        <ul>
            <li>chkShtId - ID of the check sheet (int).</li>
            <li>userId - User ID (int).</li>
        </ul>
    </li>
    <li> Returns <br />
        <ul># of records modified - Number of records modified (int).</ul>
    </li>
</HeaderBox>

### Code Example
```python
# Usage example
chk_sht_id = 56
user_id = 123
records_modified = system.kanoa.quality.config.sheets.deleteSheetAlertGroups(chkShtId=chk_sht_id, userId=user_id)

print(records_modified)

