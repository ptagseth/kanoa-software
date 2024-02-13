---
id: get-lot-qty
title: system.kanoa.lot.getLotQty
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function is part of the <b>kanoaOPS</b> module</PurpleBox>

<HeaderBox header="Description">
  Retrieves the total quantity of a lot filtered by the provided parameters.
</HeaderBox>

<HeaderBox header="Syntax">
  <b>getLotQty(paramsDict)</b>
  <ul>
    <li>Parameters
      <ul>
        <li>Dictionary paramsDict - Parameters for filtering lot quantity. Valid keys include lotEventId, lotId, lotName, assetId, lotStateId, lotStateName, shiftId, itemId, workOrderId, and workOrderName.</li>
      </ul>
    </li>
    <li>Returns
      <ul>
        <li>pyDataset - Total quantity of the lot.</li>
      </ul>
    </li>
  </ul>
</HeaderBox>

### Code Examples

```python
# Example usage
paramsDict = {'lotId': 1, 'assetId': 1}
lotQty = system.kanoa.lot.getLotQty(paramsDict)
print(lotQty)  # Print the retrieved lot quantity

