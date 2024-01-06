---
id: checkforDuplicateModeEvents
title: system.kanoa.event.checkforDuplicateModeEvents
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function is part of a class and requires proper class instantiation.</PurpleBox>
<HeaderBox header="Description">
    Checks for duplicate contiguous modeEvent entries and removes them.
</HeaderBox>
<HeaderBox header="Syntax">
    <b>checkforDuplicateModeEvents(assetId, fromDate, toDate)</b>
    <li>Parameters <br />
        <ul>
            assetId - Asset ID.
            fromDate (datetime) - Start timestamp.
            toDate (datetime) - End timestamp.
        </ul>
    </li>
    <li>Returns <br />
        Records modified (int).
    </li>
</HeaderBox>

### Code Example

```python
# Example Usage:
assetId = 123
fromDate = timestamp1
toDate = timestamp2
recordsModified = system.kanoa.event.checkforDuplicateModeEvents(assetId, fromDate, toDate)

