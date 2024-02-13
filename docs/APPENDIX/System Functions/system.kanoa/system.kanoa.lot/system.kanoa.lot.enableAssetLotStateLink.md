---
id: enable-asset-lot-state-link
title: system.kanoa.lot.enableAssetLotStateLink
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function is part of the <b>kanoaOPS</b> module</PurpleBox>

<HeaderBox header="Description">
  Updates the enabled state of a lot state reason asset link.
</HeaderBox>

<HeaderBox header="Syntax">
  <b>enableAssetLotStateLink(lotStateReasonAssetLinkId, enabled)</b>
  <ul>
    <li>Parameters
      <ul>
        <li>int lotStateReasonAssetLinkId - Lot state reason asset link ID</li>
        <li>boolean enabled - New enabled state</li>
      </ul>
    </li>
    <li>Returns
      <ul>
        <li>int - Number of records modified</li>
      </ul>
    </li>
  </ul>
</HeaderBox>

### Code Examples

```python
# Example usage
lotStateReasonAssetLinkId = 1
enabled = True
recordsModified = system.kanoa.lot.enableAssetLotStateLink(lotStateReasonAssetLinkId, enabled)
print(recordsModified)  # Print the number of records modified
