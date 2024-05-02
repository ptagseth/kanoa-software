---
id: deleteChkShtTrigger
title: system.kanoa.quality.config.deleteChkShtTrigger
hide_table_of_contents: true
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaQDS</b> module</PurpleBox>
<HeaderBox header="Description">Deletes a check sheet trigger in KanoaQDS.</HeaderBox>
<HeaderBox header="Syntax">
    <b>deleteChkShtTrigger(chkShtTriggerId, userId)</b>
    <li> Parameters <br />
        <ul>int chkShtTriggerId - ID of the check sheet trigger to be deleted.</ul>
        <ul>int userId - User ID.</ul>
    </li>
    <li> Returns <br />
        <ul>tuple result - Tuple containing success status (bit) and message (string).</ul>
    </li>
</HeaderBox>

### Code Examples
```python
# Usage example
chk_sht_trigger_id_to_delete = 67
user_id_delete = 123
delete_result = system.kanoa.quality.config.deleteChkShtTrigger(chkShtTriggerId=chk_sht_trigger_id_to_delete, userId=user_id_delete)

print(delete_result)