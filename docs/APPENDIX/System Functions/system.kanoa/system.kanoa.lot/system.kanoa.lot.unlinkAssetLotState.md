---
id: unlink-asset-lot-state
title: system.kanoa.lot.unlinkAssetLotState
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function is part of the <b>kanoaOPS</b> module</PurpleBox>

<HeaderBox header="Description">
  Checks if a lot state reason has been stored in the stateEvent table and disables it if found; otherwise, deletes it.
</HeaderBox>

<HeaderBox header="Syntax">
  <b>unlinkAssetLotState(lotStateReasonAssetLinkId, userId)</b>
  <ul>
    <li>Parameters
      <ul>
        <li>int lotStateReasonAssetLinkId - Lot state reason asset link ID</li>
        <li>int userId - User ID</li>
      </ul>
    </li>
    <li>Returns
      <ul>
        <li>int - Number of records modified</li>
        <li>string - Message indicating whether the link was deleted or disabled</li>
      </ul>
    </li>
  </ul>
</HeaderBox>

### Code Examples

```python
# Example usage
lotStateReasonAssetLinkId = 1
userId = 123
recordsModified, msg = system.kanoa.lot.unlinkAssetLotState(lotStateReasonAssetLinkId, userId)
print(recordsModified)  # Print the number of records modified
print(msg)  # Print the message indicating whether the link was deleted or disabled

