---
id: updateModeEvent
title: system.kanoa.event.updateModeEvent
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaOPS</b> module</PurpleBox>
<HeaderBox header="Description">
    Updates any of the mode event table fields such as modeId, workOrderId, itemId or comment fields.
</HeaderBox>
<HeaderBox header="Syntax">
    <b>updateModeEvent(field, value, modeSourceId, userId, modeEventId)</b>
    <li>Parameters <br />
        <ul>
            field - string colName i.e. 'modeCode', 'workOrderId', 'itemId', 'tStamp', 'comment'<br />
            value - PyObject<br />
            modeSourceId - int<br />
            userId - int<br />
            modeEventId - int<br />
        </ul>
    </li>
    <li>Returns <br />
        Records modified (int).
    </li>
</HeaderBox>

### Code Example

```python
# Example Usage:
modeSourceId = 789
userId = 5
modeEventId = 123
recordsModified = system.kanoa.event.updateModeEvent('comment', 'we just added a comment', modeSourceId, userId, modeEventId)

