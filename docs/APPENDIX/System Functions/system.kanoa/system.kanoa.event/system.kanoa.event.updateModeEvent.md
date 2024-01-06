---
id: updateModeEvent
title: system.kanoa.event.updateModeEvent
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaOPS</b> module</PurpleBox>
<HeaderBox header="Description">
    Updates any of the mode event table fields such as modeId, workOrderId, or itemId fields.
</HeaderBox>
<HeaderBox header="Syntax">
    <b>updateModeEvent(field, value, modeSourceId, userId, modeEventId)</b>
    <li>Parameters <br />
        <ul>
            field - Column name.
            value - PyObject.
            modeSourceId - Mode source ID.
            userId - User ID.
            modeEventId - ModeEvent ID.
        </ul>
    </li>
    <li>Returns <br />
        Records modified (int).
    </li>
</HeaderBox>

### Code Example

```python
# Example Usage:
field = 'modeColumn'
value = 'NewModeValue'
modeSourceId = 789
userId = 999
modeEventId = 123
recordsModified = system.kanoa.event.updateModeEvent(field, value, modeSourceId, userId, modeEventId)

