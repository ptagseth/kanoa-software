---
id: check-if-item-checked-this-shift
title: system.kanoa.quality.schedule.checkIfItemCheckedThisShift
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function is part of the <b>kanoaQDS</b> module</PurpleBox>

<HeaderBox header="Description">
  Used to check if a check of this type has already been performed on this item for this shift in the KanoaQDS (Quality Data System).
</HeaderBox>

<HeaderBox header="Syntax">
  <b>checkIfItemCheckedThisShift(chkShtId, assetId, shiftId, itemId)</b>
  <ul>
    <li>Parameters<br />
      <ul>
        <li>int chkShtId - Checksheet ID</li>
        <li>int assetId - Asset ID</li>
        <li>int shiftId - Shift ID</li>
        <li>int itemId - Item ID</li>
      </ul>
    </li>
    <li>Returns<br />
      <ul>
        <li>int count - Number of checks performed</li>
      </ul>
    </li>
  </ul>
</HeaderBox>

### Code Examples

```python
# Example usage
chkShtId = 1
assetId = 18
shiftId = 1
itemId = 1

result = system.kanoa.quality.schedule.checkIfItemCheckedThisShift(chkShtId, assetId, shiftId, itemId)
print(f"Number of checks performed: {result}")