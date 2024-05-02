---
id: get-lots
title: system.kanoa.lot.getLots
hide_table_of_contents: true
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function is part of the <b>kanoaOPS</b> module</PurpleBox>

<HeaderBox header="Description">
  Retrieves lots filtered by the provided parameters.
</HeaderBox>

<HeaderBox header="Syntax">
  <b>getLots(paramsDict)</b>
    <li>Parameters <br />
      <ul>Dictionary paramsDict - Parameters for filtering lots. Valid keys include lotId, lotName, itemId, and itemName.</ul>
    </li>
    <li>Returns <br />
      <ul>pyDataset - Lots dataset.</ul>
    </li>
</HeaderBox>

### Code Examples

```python
# Example usage
paramsDict = {'lotId': 1, 'itemId': 45}
lots = system.kanoa.lot.getLots(paramsDict)
print(lots)  # Print the retrieved lots

