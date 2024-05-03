---
id: getPreviousModeEvent
title: system.kanoa.event.getPreviousModeEvent
hide_table_of_contents: true
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaOPS</b> module</PurpleBox>
<HeaderBox header="Description">
    Returns the modeEvent table entry prior to the passed-in timestamp.
</HeaderBox>
<HeaderBox header="Syntax">
    <b>getPreviousModeEvent(assetId, tStamp)</b>
    <li>Parameters <br />
        <ul>assetId - Asset ID.</ul>
        <ul>tStamp (datetime) - Timestamp.</ul>
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
previousModeEvent = system.kanoa.event.getPreviousModeEvent(assetId, tStamp)

