---
id: clearZeroedCountEvents
title: system.kanoa.event.clearZeroedCountEvents
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function is part of a class and requires proper class instantiation.</PurpleBox>
<HeaderBox header="Description">
    Clears zeroed count events for a specific counter ID within a given date range.
</HeaderBox>
<HeaderBox header="Syntax">
    <b>clearZeroedCountEvents(assetId, tStamp, userId)</b>
    <li>Parameters <br />
        <ul>
            assetId - Asset ID.
            tStamp (datetime) - Timestamp.
            userId - User ID.
        </ul>
    </li>
    <li>Returns <br />
        Records deleted (int).
    </li>
</HeaderBox>

### Code Example

```python
# Example Usage:
assetId = 123
tStamp = timestamp
userId = 999
recordsDeleted = system.kanoa.event.clearZeroedCountEvents(assetId, tStamp, userId)
