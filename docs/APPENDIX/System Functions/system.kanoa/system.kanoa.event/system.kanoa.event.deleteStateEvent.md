---
id: deleteStateEvent
title: system.kanoa.event.deleteStateEvent
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function is part of a class and requires proper class instantiation.</PurpleBox>
<HeaderBox header="Description">
    Deletes a stateEvent record.
</HeaderBox>
<HeaderBox header="Syntax">
    <b>deleteStateEvent(stateEventId, userId)</b>
    <li>Parameters <br />
        <ul>
            stateEventId - StateEvent ID.
            userId - User ID.
        </ul>
    </li>
    <li>Returns <br />
        # of records modified (int).
    </li>
</HeaderBox>

### Code Example

```python
# Example Usage:
stateEventId = 123
userId = 999
recordsModified = system.kanoa.event.deleteStateEvent(stateEventId, userId)

