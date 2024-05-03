---
id: buildShiftEvents
title: system.kanoa.shift.buildShiftEvents
hide_table_of_contents: true
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaOps</b> module</PurpleBox>
<HeaderBox header="Description">Builds the shiftEvent table for shift analysis and sets shiftId and shiftName tags on assetOEE and qdsAssetInfo UDTS (kanoaOps).</HeaderBox>
<HeaderBox header="Syntax">
    <b>buildShiftEvents(assetId, rangeStart, rangeEnd)</b>
    <li>Parameters <br />
        <ul>assetId (Integer) - Asset ID.</ul>
        <ul>rangeStart (Datetime) - Start date of the range.</ul>
        <ul>rangeEnd (Datetime) - End date of the range.</ul>
    </li>
    <li>Returns <br />
        <ul>None.</ul>
    </li>
</HeaderBox>

### Code Example

```python
# Example Usage:
system.kanoa.shift.buildShiftEvents(1, someStartDate, someEndDate)
