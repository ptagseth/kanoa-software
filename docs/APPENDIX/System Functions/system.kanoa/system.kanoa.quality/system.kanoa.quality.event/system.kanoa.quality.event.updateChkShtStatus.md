---
id: updateChkShtStatus
title: system.kanoa.quality.event.updateChkShtStatus
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaQDS</b> module</PurpleBox>
<HeaderBox header="Description">Updates a check sheet event status in KanoaQDS.</HeaderBox>
<HeaderBox header="Syntax">
    <b>updateChkShtStatus(chkShtEventId, status, userId)</b>
    <li> Parameters <br />
        <ul>chkShtEventId - ID of the check sheet event to be updated (int).</ul>
        <ul>status - New status for the check sheet event (string).</ul>
        <ul>userId - ID of the user initiating the update (int).</ul>
    </li>
    <li> Returns <br />
        <ul>Number of records modified (int).</ul>
    </li>
</HeaderBox>

### Code Example
```python
# Usage example
chk_sht_event_id = 123
new_status = 'Approved'
user_id = 456
result = system.kanoa.quality.event.updateChkShtStatus(chkShtEventId=chk_sht_event_id, status=new_status, userId=user_id)

print(result)