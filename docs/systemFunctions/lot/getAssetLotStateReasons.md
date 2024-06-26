---
id: getAssetLotStateReasons
title: system.kanoa.lot.getAssetLotStateReasons
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function is part of the <b>kanoaOPS</b> module</PurpleBox>

<HeaderBox header="Description">
  Retrieves asset lot state reasons filtered by the provided parameters.
</HeaderBox>

<HeaderBox header="Syntax">
  <b>getAssetLotStateReasons(paramsDict)</b>
    <li>Parameters <br />
      <ul>Dictionary paramsDict - Parameters for filtering asset lot state reasons. Valid keys include lotStateReasonAssetLinkId, lotStateReasonEnabled, linkEnabled, assetPath, assetId, assetIdList, lotStateId, lotStateName, lotStateReasonId, and lotStateReasonName.</ul>
    </li>
    <li>Returns <br />
      <ul>pyDataset - Asset lot state reasons dataset</ul>
    </li>
</HeaderBox>

### Code Examples

```python
# Example usage
paramsDict = {'lotStateReasonAssetLinkId': 4, 'lotStateReasonEnabled': True, 'lotStateName': 'Scrap', 'lotStateId': 1, 'linkEnabled': True, 'assetPath': 'Kanoa Industries%', 'assetId': 1, 'scrapReasonId': 1, 'scrapReasonName': 'Color'}
assetLotStateReasons = system.kanoa.lot.getAssetLotStateReasons(paramsDict)
print(assetLotStateReasons)  # Print the retrieved asset lot state reasons

