---
id: deleteModeEvent
title: system.kanoa.event.deleteModeEvent
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function is part of a class and requires proper class instantiation.</PurpleBox>
<HeaderBox header="Description">
    Deletes the mode event.
</HeaderBox>
<HeaderBox header="Syntax">
    <b>deleteModeEvent(modeEventId, userId)</b>
    <li>Parameters <br />
        <ul>
            modeEventId - ModeEvent ID.
            userId - User ID.
        </ul>
    </li>
    <li>Returns <br />
        Records modified (int).
    </li>
</HeaderBox>

### Code Example

```python
# Example Usage:
modeEventId = 123
userId = 999
recordsModified = system.kanoa.event.deleteModeEvent(modeEventId, userId)

