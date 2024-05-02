---
id: deleteChkShtItemEvents
title: system.kanoa.quality.event.deleteChkShtItemEvents
hide_table_of_contents: true
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaQDS</b> module</PurpleBox>
<HeaderBox header="Description">Deletes check items from a check sheet in KanoaQDS.</HeaderBox>
<HeaderBox header="Syntax">
    <b>deleteChkShtItemEvents(chkShtItemEventInfo, userId)</b>
    <li> Parameters <br />
        <ul>chkShtItemEventInfo - Dictionary containing information about check sheet items (dictionary).</ul>
        <ul>userId - ID of the user initiating the deletion (int).</ul>
    </li>
    <li> Returns <br />
        <ul>Success or failure of the deletion operation (boolean).</ul>
    </li>
</HeaderBox>

### Code Example
```python
# Usage example
chk_sht_item_event_info = {'chkShtEventId': 1}
user_id = 123
result = system.kanoa.quality.event.deleteChkShtItemEvents(chkShtItemEventInfo=chk_sht_item_event_info, userId=user_id)

print(result)