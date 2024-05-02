---
id: updateShift
title: system.kanoa.shift.updateShift
hide_table_of_contents: true
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaOps</b> module</PurpleBox>
<HeaderBox header="Description">Updates a shift (kanoaOps).</HeaderBox>
<HeaderBox header="Syntax">
    <b>updateShift(shiftInfo, userId)</b>
    <li>Parameters <br />
        <ul>shiftInfo (Dictionary) - Shift information.</ul>
        <ul>userId (Integer) - User ID.</ul>
    </li>
    <li>Returns <br />
        <ul># of records modified.</ul>
    </li>
</HeaderBox>

### Code Example

```python
# Example Usage:
modifiedRecords = system.kanoa.shift.updateShift({'shiftId': 1, 'shiftNameId': 2, 'assetId': 18, 'shiftColor': '#00FF00'}, 123)
