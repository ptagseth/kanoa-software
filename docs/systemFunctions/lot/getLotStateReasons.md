---
id: getLotStateReasons
title: system.kanoa.lot.getLotStateReasons
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function is part of the <b>kanoaOPS</b> module</PurpleBox>

<HeaderBox header="Description">
  Retrieves lot state reasons filtered by the provided parameters.
</HeaderBox>

<HeaderBox header="Syntax">
  <b>getLotStateReasons(paramsDict)</b>
    <li>Parameters <br />
      <ul>Dictionary paramsDict - Parameters for filtering lot state reasons. Valid keys include lotStateReasonId, lotStateReasonName, and enabled.</ul>
    </li>
    <li>Returns <br />
      <ul>pyDataset - Lot state reasons dataset</ul>
    </li>
</HeaderBox>

### Code Examples

```python
# Example usage
paramsDict = {'lotStateReasonId': 4, 'lotStateReasonName': 'Color', 'enabled': True}
lotStateReasons = system.kanoa.lot.getLotStateReasons(paramsDict)
print(lotStateReasons)  # Print the retrieved lot state reasons

