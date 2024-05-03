---
id: saveChkItemEvent
title: system.kanoa.quality.event.saveChkItemEvent
hide_table_of_contents: true
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaQDS</b> module</PurpleBox>
<HeaderBox header="Description">Saves a check item event's value in KanoaQDS.</HeaderBox>
<HeaderBox header="Syntax">
    <b>saveChkItemEvent(chkItemEventInfo, userId)</b>
    <li> Parameters <br />
        <ul>chkItemEventInfo - Dictionary containing information about the check item event (dictionary).</ul>
        <ul>userId - ID of the user saving the check item event (int).</ul>
    </li>
    <li> Returns <br />
        <ul># of records modified - Number of records modified (int).</ul>
    </li>
</HeaderBox>

### Code Example
```python
# Usage example
chk_item_event_info = {'chkItemEventId': 1, 'chkShtEventId': 3, 'chkItemId': 1, 'measNumber': 1, 'chkItemValue': 'sausages', 'chkItemStateId': 2}
user_id = 123
records_modified = system.kanoa.quality.event.saveChkItemEvent(chkItemEventInfo=chk_item_event_info, userId=user_id)

print(records_modified)