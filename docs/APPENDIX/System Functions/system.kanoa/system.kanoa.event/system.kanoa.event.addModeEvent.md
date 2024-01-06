---
id: addModeEvent
title: system.kanoa.event.addModeEvent
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function is part of a class and requires proper class instantiation.</PurpleBox>
<HeaderBox header="Description">
    Adds a new modeEvent record with a single value to the specified mode event table column.
</HeaderBox>
<HeaderBox header="Syntax">
    <b>addModeEvent(assetId, field, value, tStamp, modeSourceId, userId)</b>
    <li>Parameters <br />
        <ul>
            assetId - Asset ID.
            field - Column name.
            value - PyObject.
            tStamp (datetime) - Timestamp.
            modeSourceId - Mode source ID.
            userId - User ID.
        </ul>
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

