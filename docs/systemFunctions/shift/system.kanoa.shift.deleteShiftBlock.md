---
id: deleteShiftBlock
title: system.kanoa.shift.deleteShiftBlock
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaOps</b> module</PurpleBox>
<HeaderBox header="Description">Deletes a shift block (kanoaOps).</HeaderBox>
<HeaderBox header="Syntax">
    <b>deleteShiftBlock(shiftBlockId, userId)</b>
    <li>Parameters <br />
        <ul>shiftBlockId (Integer) - Shift Block ID.</ul>
        <ul>userId (Integer) - User ID.</ul>
    </li>
    <li>Returns <br />
        <ul># of records modified.</ul>
    </li>
</HeaderBox>

### Code Example

```python
# Example Usage:
system.kanoa.shift.deletedRecords = deleteShiftBlock(1, 123)
