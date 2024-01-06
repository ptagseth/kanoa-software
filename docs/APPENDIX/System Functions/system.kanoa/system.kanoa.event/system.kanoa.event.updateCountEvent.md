---
id: updateCountEvent
title: system.kanoa.event.updateCountEvent
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaOPS</b> module</PurpleBox>
<HeaderBox header="Description">
    Updates a count value in the counterEvent table. If it can't find a value at the timestamp, it will add a count value.
</HeaderBox>
<HeaderBox header="Syntax">
    <b>updateCountEvent(counterId, deltaValue, tStamp, userId=None)</b>
    <li>Parameters <br />
        <ul>
            counterId - Counter ID.
            deltaValue (float) - Delta value.
            tStamp (datetime) - Timestamp.
            userId (int) - User ID.
        </ul>
    </li>
    <li>Returns <br />
        Records modified (int).
    </li>
</HeaderBox>

### Code Example

```python
# Example Usage:
counterId = 123
deltaValue = 5.0
tStamp = timestamp
userId = 999
system.kanoa.event.updateCountEvent(counterId, deltaValue, tStamp, userId)

