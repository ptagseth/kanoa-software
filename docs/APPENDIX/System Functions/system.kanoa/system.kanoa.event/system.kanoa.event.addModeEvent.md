---
id: addModeEvent
title: system.kanoa.event.addModeEvent
hide_table_of_contents: true
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaOPS</b> module</PurpleBox>
<HeaderBox header="Description">
    Adds a new modeEvent record with a single value to the specified mode event table column.
</HeaderBox>
<HeaderBox header="Syntax">
    <b>addModeEvent(assetId, field, value, tStamp, modeSourceId, userId)</b>
    <li>Parameters <br />
        <ul>assetId - Asset ID.</ul>
        <ul>field - Column name.</ul>
        <ul>value - PyObject.</ul>
        <ul>tStamp (datetime) - Timestamp.</ul>
        <ul>modeSourceId - Mode source ID.</ul>
        <ul>userId - User ID.</ul>
    </li>
    <li>Returns <br />
        ModeEvent ID (int).
    </li>
</HeaderBox>

### Code Example

```python
# Example Usage:
assetId = 123
field = 'modeColumn'
value = 'ModeValue'
tStamp = timestamp
modeSourceId = 456
userId = 999
modeEventId = system.kanoa.event.addModeEvent(assetId, field, value, tStamp, modeSourceId, userId)

