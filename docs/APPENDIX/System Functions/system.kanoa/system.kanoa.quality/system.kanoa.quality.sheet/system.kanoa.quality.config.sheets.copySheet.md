---
id: copySheet
title: system.kanoa.quality.config.sheets.copySheet
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaQDS</b> module</PurpleBox>
<HeaderBox header="Description">Creates a copy of a check sheet in KanoaQDS.</HeaderBox>
<HeaderBox header="Syntax">
    <b>copySheet(chkShtId, userId)</b>
    <li> Parameters <br />
        <ul>
            <li>chkShtId - ID of the check sheet to copy (int).</li>
            <li>userId - User ID (int).</li>
        </ul>
    </li>
    <li> Returns <br />
        <ul>
            <li>success - True if the check sheet is copied successfully (bool).</li>
            <li>message - A message indicating the result (string).</li>
        </ul>
    </li>
</HeaderBox>

### Code Example
```python
# Usage example
chk_sht_id = 56
user_id = 123
success, message = system.kanoa.quality.config.sheets.copySheet(chkShtId=chk_sht_id, userId=user_id)

print(success, message)
