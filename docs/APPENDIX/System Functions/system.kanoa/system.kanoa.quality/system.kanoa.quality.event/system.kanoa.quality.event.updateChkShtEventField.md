---
id: updateChkShtEventField
title: system.kanoa.quality.event.updateChkShtEventField
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaQDS</b> module</PurpleBox>
<HeaderBox header="Description">Updates any field in a check sheet event in KanoaQDS.</HeaderBox>
<HeaderBox header="Syntax">
    <b>updateChkShtEventField(chkShtEventId, field, value, userId)</b>
    <li> Parameters <br />
        <ul>
            <li>chkShtEventId - ID of the check sheet event to be updated (int).</li>
            <li>field - Name of the column to change (string).</li>
            <li>value - New value for the field (pyObject).</li>
            <li>userId - ID of the user initiating the update (int).</li>
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
field_name = 'description'
new_value = 'Updated description'
user_id = 456
result = system.kanoa.quality.event.updateChkShtEventField(chkShtEventId=chk_sht_event_id, field=field_name, value=new_value, userId=user_id)

print(result)