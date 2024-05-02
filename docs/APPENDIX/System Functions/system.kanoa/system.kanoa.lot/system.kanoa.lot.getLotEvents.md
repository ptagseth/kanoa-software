---
id: get-lot-events
title: system.kanoa.lot.getLotEvents
hide_table_of_contents: true
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function is part of the <b>kanoaOPS</b> module</PurpleBox>

<HeaderBox header="Description">
  Retrieves lot events filtered by the provided parameters.
</HeaderBox>

<HeaderBox header="Syntax">
  <b>getLotEvents(paramsDict)</b>
    <li>Parameters <br />
      <ul>Dictionary paramsDict - Parameters for filtering lot events. Valid keys include lotEventId, lotId, lotName, assetId, lotStateId, lotStateName, lotStateReasonId, shiftId, itemId, counterId, counterTypeId, workOrderId, workOrderName, startDate, and endDate.</ul>
    </li>
    <li>Returns <br />
      <ul>pyDataset - Lot events dataset.</ul>
    </li>
</HeaderBox>

### Code Examples

```python
# Example usage
paramsDict = {'lotId': 1, 'assetId': 1}
lotEvents = system.kanoa.lot.getLotEvents(paramsDict)
print(lotEvents)  # Print the retrieved lot events


