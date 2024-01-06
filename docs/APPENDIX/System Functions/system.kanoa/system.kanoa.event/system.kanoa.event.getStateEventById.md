---
id: getStateEventById
title: system.kanoa.event.getStateEventById
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function is part of a class and requires proper class instantiation.</PurpleBox>
<HeaderBox header="Description">
    Gets a stateEvent record by stateEventId.
</HeaderBox>
<HeaderBox header="Syntax">
    <b>getStateEventById(stateEventId)</b>
    <li>Parameters <br />
        <ul>
            stateEventId - StateEvent ID.
        </ul>
    </li>
    <li>Returns <br />
        data (dataset).
    </li>
</HeaderBox>

### Code Example

```python
# Example Usage:
stateEventId = 123
data = system.kanoa.event.getStateEventById(stateEventId)

