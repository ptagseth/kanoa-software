---
id: updateStateEventInfo
title: system.kanoa.event.updateStateEventInfo
hide_table_of_contents: true
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaOPS</b> module</PurpleBox>
<HeaderBox header="Description">
    Adds, inserts, or updates an entry in the stateEventInfo table. This can be used to hold metadata about any stateEvent. We use it to store whether a part was required for a downtime event.
</HeaderBox>
<HeaderBox header="Syntax">
    <b>updateStateEventInfo(stateEventId, stateEventInfoName, value, userId=None)</b>
    <li>Parameters <br />
        <ul>stateEventId - StateEvent ID.</ul>
        <ul>stateEventInfoName - Name of the stateEventInfo.</ul>
        <ul>value - Value to be updated or inserted.</ul>
        <ul>userId (optional) - User ID. Default is None.</ul>
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

