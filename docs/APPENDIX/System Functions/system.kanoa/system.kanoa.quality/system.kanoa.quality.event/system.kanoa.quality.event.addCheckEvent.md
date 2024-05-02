---
id: addCheckEvent
title: system.kanoa.quality.event.addCheckEvent
hide_table_of_contents: true
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaQDS</b> module</PurpleBox>
<HeaderBox header="Description">Adds a new check sheet event in KanoaQDS.</HeaderBox>
<HeaderBox header="Syntax">
    <b>addCheckEvent(chkEventInfo, userId)</b>
    <li> Parameters <br />
        <ul>chkEventInfo - Dictionary containing information about the check sheet event (dictionary).</ul>
        <ul>userId - ID of the user adding the check sheet event (int).</ul>
    </li>
    <li> Returns <br />
        <ul>chkShtEventId - ID of the newly added check sheet event (int).</ul>
    </li>
</HeaderBox>

### Code Example
```python
# Usage example
chk_event_info = {'chkShtId': 1, 'assetId': 18, 'shiftNameId': 1, 'itemId': 5, 'chkShtTriggerId': 3, 'chkShtStateId': 8, 'comment': None, 'scheduledDate': somedate}
user_id = 123
chk_sht_event_id = system.kanoa.quality.event.addCheckEvent(chkEventInfo=chk_event_info, userId=user_id)

print(chk_sht_event_id)