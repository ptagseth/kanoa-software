---
id: checkforDuplicateModeEvents
title: system.kanoa.event.checkforDuplicateModeEvents
hide_table_of_contents: true
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaOPS</b> module</PurpleBox>
<HeaderBox header="Description">
    Checks for duplicate contiguous modeEvent entries and removes them.
</HeaderBox>
<HeaderBox header="Syntax">
    <b>checkforDuplicateModeEvents(assetId, fromDate, toDate)</b>
    <li>Parameters <br />
        <ul>assetId - Asset ID.</ul>
        <ul>fromDate (datetime) - Start timestamp.</ul>
        <ul>toDate (datetime) - End timestamp.</ul>
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

