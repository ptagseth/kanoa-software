---
id: deleteChkEvent
title: system.kanoa.quality.event.deleteChkEvent
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaQDS</b> module</PurpleBox>
<HeaderBox header="Description">Deletes a check sheet event in KanoaQDS. Foreign keys will cascade deletions down to the chkItemEvent table.</HeaderBox>
<HeaderBox header="Syntax">
    <b>deleteChkEvent(chkShtEventId, userId)</b>
    <li> Parameters <br />
        <ul>
            <li>chkShtEventId - ID of the check sheet event to be deleted (int).</li>
            <li>userId - ID of the user initiating the deletion (int).</li>
        </ul>
    </li>
    <li> Returns <br />
        <ul>Number of records modified (int).</ul>
    </li>
</HeaderBox>

### Code Example
```python
# Usage example
chk_sht_event_id = 123
user_id = 456
result = system.kanoa.quality.event.deleteChkEvent(chkShtEventId=chk_sht_event_id, userId=user_id)

print(result)