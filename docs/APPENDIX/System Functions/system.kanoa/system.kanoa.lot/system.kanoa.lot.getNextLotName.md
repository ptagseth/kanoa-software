---
id: get-next-lot-name
title: system.kanoa.lot.getNextLotName
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function is part of the <b>kanoaOPS</b> module</PurpleBox>

<HeaderBox header="Description">
  Retrieves the next lot name based on the provided work order ID.
</HeaderBox>

<HeaderBox header="Syntax">
  <b>getNextLotName(workOrderId)</b>
    <li>Parameters <br />
      <ul>int workOrderId - Work order ID</ul>
    </li>
    <li>Returns <br />
      <ul>int - Next lot name</ul>
    </li>
</HeaderBox>

### Code Examples

```python
# Example usage
workOrderId = 123
nextLotName = system.kanoa.lot.getNextLotName(workOrderId)
print(nextLotName)  # Print the next lot name

