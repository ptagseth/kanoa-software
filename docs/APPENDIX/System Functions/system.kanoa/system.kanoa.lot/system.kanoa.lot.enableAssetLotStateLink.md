---
id: enable-asset-lot-state-link
title: system.kanoa.lot.enableAssetLotStateLink
hide_table_of_contents: true
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function is part of the <b>kanoaOPS</b> module</PurpleBox>

<HeaderBox header="Description">
  Updates the enabled state of a lot state reason asset link.
</HeaderBox>

<HeaderBox header="Syntax">
  <b>enableAssetLotStateLink(lotStateReasonAssetLinkId, enabled)</b>
    <li>Parameters <br />
      <ul>int lotStateReasonAssetLinkId - Lot state reason asset link ID</ul>
      <ul>boolean enabled - New enabled state</ul>
    </li>
    <li>Returns <br />
      <ul>int - Number of records modified</ul>
    </li>
</HeaderBox>

### Code Examples

```python
# Example usage
lotStateReasonAssetLinkId = 1
enabled = True
recordsModified = system.kanoa.lot.enableAssetLotStateLink(lotStateReasonAssetLinkId, enabled)
print(recordsModified)  # Print the number of records modified
