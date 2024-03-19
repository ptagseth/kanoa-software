---
id: resetCountEvents
title: system.kanoa.event.resetCountEvents
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaOPS</b> module</PurpleBox>
<HeaderBox header="Description">
    Adds calculated counts that will calculate infeed, outfeed, and waste if no entry exists.
</HeaderBox>
<HeaderBox header="Syntax">
    <b>resetCountEvents(assetId, tStamp, userId)</b>
    <li>Parameters <br />
        <ul>assetId - Asset ID.</ul>
        <ul>tStamp (datetime) - Timestamp.</ul>
        <ul>userId - User ID.</ul>
    </li>
    <li>Returns <br />
        None.
    </li>
</HeaderBox>

### Code Example

```python
# Example Usage:
assetId = 123
tStamp = timestamp
userId = 999
system.kanoa.event.resetCountEvents(assetId, tStamp, userId)

