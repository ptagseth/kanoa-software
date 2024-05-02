---
id: updateModeEvent
title: system.kanoa.event.updateModeEvent
hide_table_of_contents: true
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
        <ul>field - string colName i.e. 'modeCode', 'workOrderId', 'itemId', 'tStamp', 'comment'</ul>
        <ul>value - PyObject</ul>
        <ul>modeSourceId - int</ul>
        <ul>userId - int</ul>
        <ul>modeEventId - int</ul>
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

