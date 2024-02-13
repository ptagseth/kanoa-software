---
id: link-asset-lot-states
title: system.kanoa.lot.linkAssetLotStates
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function is part of the <b>kanoaOPS</b> module</PurpleBox>

<HeaderBox header="Description">
  Links a list of asset IDs with a list of lot state reason IDs.
</HeaderBox>

<HeaderBox header="Syntax">
  <b>linkAssetLotStates(assetIdList, lotStateReasonIdList, userId)</b>
  <ul>
    <li>Parameters
      <ul>
        <li>list assetIdList - List of asset IDs</li>
        <li>list lotStateReasonIdList - List of lot state reason IDs</li>
        <li>int userId - User ID</li>
      </ul>
    </li>
    <li>Returns
      <ul>
        <li>int - Number of records created</li>
      </ul>
    </li>
  </ul>
</HeaderBox>

### Code Examples

```python
# Example usage
assetIdList = [1, 2, 3]
lotStateReasonIdList = [4, 5, 6]
userId = 123
recordsCreated = system.kanoa.lot.linkAssetLotStates(assetIdList, lotStateReasonIdList, userId)
print(recordsCreated)  # Print the number of records created

