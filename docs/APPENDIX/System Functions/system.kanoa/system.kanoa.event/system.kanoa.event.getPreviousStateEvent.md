---
id: getPreviousStateEvent
title: system.kanoa.event.getPreviousStateEvent
hide_table_of_contents: true
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaOPS</b> module</PurpleBox>
<HeaderBox header="Description">
    Gets the previous stateEvent entry for the assetId and tStamp passed.
</HeaderBox>
<HeaderBox header="Syntax">
    <b>getPreviousStateEvent(assetId, tStamp)</b>
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
data = system.kanoa.event.getPreviousStateEvent(assetId, tStamp)


