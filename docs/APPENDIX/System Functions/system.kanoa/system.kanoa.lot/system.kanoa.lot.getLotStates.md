---
id: get-lot-states
title: system.kanoa.lot.getLotStates
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function is part of the <b>kanoaOPS</b> module</PurpleBox>

<HeaderBox header="Description">
  Retrieves lot states filtered by the provided parameters.
</HeaderBox>

<HeaderBox header="Syntax">
  <b>getLotStates(paramsDict)</b>
  <ul>
    <li>Parameters
      <ul>
        <li>Dictionary paramsDict - Parameters for filtering lot states. Valid keys include lotStateId, lotStateName, and enabled.</li>
      </ul>
    </li>
    <li>Returns
      <ul>
        <li>pyDataset - Lot states dataset</li>
      </ul>
    </li>
  </ul>
</HeaderBox>

### Code Examples

```python
# Example usage
paramsDict = {'lotStateId': 4, 'enabled': True}
lotStates = system.kanoa.lot.getLotStates(paramsDict)
print(lotStates)  # Print the retrieved lot states


