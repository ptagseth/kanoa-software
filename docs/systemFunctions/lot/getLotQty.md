---
id: getLotQty
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
    <li>Parameters <br />
      <ul>Dictionary paramsDict - Parameters for filtering lot quantity. Valid keys include lotEventId, lotId, lotName, assetId, lotStateId, lotStateName, shiftId, itemId, workOrderId, and workOrderName.</ul>
    </li>
    <li>Returns <br />
      <ul>pyDataset - Total quantity of the lot.</ul>
    </li>
</HeaderBox>

### Code Examples

```python
# Example usage
paramsDict = {'lotId': 1, 'assetId': 1}
lotQty = system.kanoa.lot.getLotQty(paramsDict)
print(lotQty)  # Print the retrieved lot quantity

