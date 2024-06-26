---
id: getLotEvents
title: system.kanoa.lot.getLotEvents
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function is part of the <b>kanoaOPS</b> module</PurpleBox>

<HeaderBox header="Description">
  Retrieves lot events filtered by the provided parameters.  Input parameters are inclusive, e.g. an end date is 1/1 at 12:00PM will be included in the results.
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


