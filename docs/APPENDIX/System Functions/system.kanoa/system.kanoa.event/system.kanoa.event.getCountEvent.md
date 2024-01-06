---
id: getCountEvent
title: system.kanoa.event.getCountEvent
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function is part of a class and requires proper class instantiation.</PurpleBox>
<HeaderBox header="Description">
    Returns the count event for a specific timestamp.
</HeaderBox>
<HeaderBox header="Syntax">
    <b>getCountEvent(counterId, tStamp)</b>
    <li>Parameters <br />
        <ul>
            counterId - Counter ID.
            tStamp (datetime) - Timestamp.
        </ul>
    </li>
    <li>Returns <br />
        countEvent (dataset).
    </li>
</HeaderBox>

### Code Example

```python
# Example Usage:
counterId = 123
tStamp = timestamp
countEvent = system.kanoa.event.getCountEvent(counterId, tStamp)

