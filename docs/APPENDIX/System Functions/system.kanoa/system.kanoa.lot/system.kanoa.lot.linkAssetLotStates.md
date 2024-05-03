---
id: link-asset-lot-states
title: system.kanoa.lot.linkAssetLotStates
hide_table_of_contents: true
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function is part of the <b>kanoaOPS</b> module</PurpleBox>

<HeaderBox header="Description">
  Links a list of asset IDs with a list of lot state reason IDs.
</HeaderBox>

<HeaderBox header="Syntax">
  <b>linkAssetLotStates(assetIdList, lotStateReasonIdList, userId)</b>
    <li>Parameters <br />
      <ul>list assetIdList - List of asset IDs</ul>
      <ul>list lotStateReasonIdList - List of lot state reason IDs</ul>
      <ul>int userId - User ID</ul>
    </li>
    <li>Returns <br />
      <ul>int - Number of records created</ul>
    </li>
</HeaderBox>

### Code Examples

```python
# Example usage
assetIdList = [1, 2, 3]
lotStateReasonIdList = [4, 5, 6]
userId = 123
recordsCreated = system.kanoa.lot.linkAssetLotStates(assetIdList, lotStateReasonIdList, userId)
print(recordsCreated)  # Print the number of records created

