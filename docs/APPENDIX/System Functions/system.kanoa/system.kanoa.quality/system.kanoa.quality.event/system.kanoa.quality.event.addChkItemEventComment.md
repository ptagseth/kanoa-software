---
id: addChkItemEventComment
title: system.kanoa.quality.event.addChkItemEventComment
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaQDS</b> module</PurpleBox>
<HeaderBox header="Description">Adds a comment to a check item event or updates it if chkItemEventId is passed in the chkItemEventInfo in KanoaQDS.</HeaderBox>
<HeaderBox header="Syntax">
    <b>addChkItemEventComment(chkItemEventInfo, userId)</b>
    <li> Parameters <br />
        <ul>
            <li>chkItemEventInfo - Dictionary containing information about the check item event (dictionary).</li>
            <li>userId - ID of the user adding the comment (int).</li>
        </ul>
    </li>
    <li> Returns <br />
        <ul># of records modified - Number of records modified (int).</ul>
    </li>
</HeaderBox>

### Code Example
```python
# Usage example
chk_item_event_info = {'chkItemEventId': 1, 'comment': 'some comment', 'chkItemId': 1, 'itemId': 5, 'measNumber': 1}
user_id = 123
records_modified = system.kanoa.quality.event.addChkItemEventComment(chkItemEventInfo=chk_item_event_info, userId=user_id)

print(records_modified)