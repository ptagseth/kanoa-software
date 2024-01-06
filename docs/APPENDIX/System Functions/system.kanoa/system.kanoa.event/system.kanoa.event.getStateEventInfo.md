---
id: getStateEventInfo
title: system.kanoa.event.getStateEventInfo
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function is part of a class and requires proper class instantiation.</PurpleBox>
<HeaderBox header="Description">
    Gets stateEventInfo. stateEventInfo stores additional custom information about a state.
</HeaderBox>
<HeaderBox header="Syntax">
    <b>getStateEventInfo(stateEventId, stateEventInfoName=None)</b>
    <li>Parameters <br />
        <ul>
            stateEventId - StateEvent ID.
            stateEventInfoName (optional) - Name of the stateEventInfo.
        </ul>
    </li>
    <li>Returns <br />
        data (pyDataset).
    </li>
</HeaderBox>

### Code Example

```python
# Example Usage:
stateEventId = 123
stateEventInfoName = 'exampleInfo'
data = system.kanoa.event.getStateEventInfo(stateEventId, stateEventInfoName)

