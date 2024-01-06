---
id: updateStateEventInfo
title: system.kanoa.event.updateStateEventInfo
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaOPS</b> module</PurpleBox>
<HeaderBox header="Description">
    Adds, inserts, or updates an entry in the stateEventInfo table. This can be used to hold metadata about any stateEvent.
</HeaderBox>
<HeaderBox header="Syntax">
    <b>updateStateEventInfo(stateEventId, stateEventInfoName, value, userId=None)</b>
    <li>Parameters <br />
        <ul>
            stateEventId - StateEvent ID.
            stateEventInfoName - Name of the stateEventInfo.
            value - Value to be updated or inserted.
            userId (optional) - User ID. Default is None.
        </ul>
    </li>
    <li>Returns <br />
        stateEventInfoId (int) if value is deleted, else None.
    </li>
</HeaderBox>

### Code Example

```python
# Example Usage:
stateEventId = 123
stateEventInfoName = 'exampleInfo'
value = 'exampleValue'
userId = 999
stateEventInfoId = system.kanoa.event.updateStateEventInfo(stateEventId, stateEventInfoName, value, userId)

