---
id: clearZeroedCountEvents
title: system.kanoa.event.clearZeroedCountEvents
hide_table_of_contents: true
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaOPS</b> module</PurpleBox>
<HeaderBox header="Description">
    Clears zeroed count events for a specific counter ID within a given date range.
</HeaderBox>
<HeaderBox header="Syntax">
    <b>clearZeroedCountEvents(assetId, tStamp, userId)</b>
    <li>Parameters <br />
        <ul>assetId - Asset ID.</ul>
        <ul>tStamp (datetime) - Timestamp.</ul>
        <ul>userId - User ID.</ul>
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
