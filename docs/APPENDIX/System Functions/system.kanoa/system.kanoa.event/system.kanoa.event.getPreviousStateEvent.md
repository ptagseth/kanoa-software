---
id: getPreviousStateEvent
title: system.kanoa.event.getPreviousStateEvent
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function is part of a class and requires proper class instantiation.</PurpleBox>
<HeaderBox header="Description">
    Gets the previous stateEvent entry for the assetId and tStamp passed.
</HeaderBox>
<HeaderBox header="Syntax">
    <b>getPreviousStateEvent(assetId, tStamp)</b>
    <li>Parameters <br />
        <ul>
            assetId - Asset ID.
            tStamp (datetime) - Timestamp.
        </ul>
    </li>
    <li>Returns <br />
        data (pyDataset).
    </li>
</HeaderBox>

### Code Example

```python
# Example Usage:
assetId = 123
tStamp = timestamp
data = system.kanoa.event.getPreviousStateEvent(assetId, tStamp)


