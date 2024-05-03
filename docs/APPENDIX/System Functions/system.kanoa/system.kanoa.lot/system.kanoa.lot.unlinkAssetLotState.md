---
id: unlink-asset-lot-state
title: system.kanoa.lot.unlinkAssetLotState
hide_table_of_contents: true
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function is part of the <b>kanoaOPS</b> module</PurpleBox>

<HeaderBox header="Description">
  Checks if a lot state reason has been stored in the stateEvent table and disables it if found; otherwise, deletes it.
</HeaderBox>

<HeaderBox header="Syntax">
  <b>unlinkAssetLotState(lotStateReasonAssetLinkId, userId)</b>
    <li>Parameters <br />
      <ul>int lotStateReasonAssetLinkId - Lot state reason asset link ID</ul>
      <ul>int userId - User ID</ul>
    </li>
    <li>Returns <br />
      <ul>int - Number of records modified</ul>
      <ul>string - Message indicating whether the link was deleted or disabled</ul>
    </li>
</HeaderBox>

### Code Examples

```python
# Example usage
lotStateReasonAssetLinkId = 1
userId = 123
recordsModified, msg = system.kanoa.lot.unlinkAssetLotState(lotStateReasonAssetLinkId, userId)
print(recordsModified)  # Print the number of records modified
print(msg)  # Print the message indicating whether the link was deleted or disabled

