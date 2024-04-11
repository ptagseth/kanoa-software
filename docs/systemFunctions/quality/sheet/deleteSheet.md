---
id: deleteSheet
title: system.kanoa.quality.config.sheets.deleteSheet
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaQDS</b> module</PurpleBox>
<HeaderBox header="Description">Deletes a check sheet and its associated data from KanoaQDS.</HeaderBox>
<HeaderBox header="Syntax">
    <b>deleteSheet(chkShtId, userId)</b>
    <li> Parameters <br />
        <ul>chkShtId - ID of the check sheet to delete (int).</ul>
        <ul>userId - User ID (int).</ul>
    </li>
    <li> Returns <br />
        <ul>success - True if the check sheet is deleted successfully (bool).</ul>
        <ul>message - A message indicating the result (string).</ul>
    </li>
</HeaderBox>

### Code Example
```python
# Usage example
chk_sht_id = 56
user_id = 123
success, message = system.kanoa.quality.config.sheets.deleteSheet(chkShtId=chk_sht_id, userId=user_id)

print(success, message)

