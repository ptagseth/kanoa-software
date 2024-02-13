---
id: get-attribute-events
title: system.kanoa.attribute.getAttributeEvents
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function is part of the <b>kanoaOPS</b> module</PurpleBox>

<HeaderBox header="Description">
  Returns attribute events for the given parameters.
</HeaderBox>

<HeaderBox header="Syntax">
  <b>getAttributeEvents(paramsDict)</b>
  <ul>
    <li>Parameters
      <ul>
        <li>dictionary paramsDict - &#123;'attributeId': 5}. Valid keys are assetPath, startDate, endDate, assetId, attributeName, attributePath, attributeAssetLinkId</li>
      </ul>
    </li>
    <li>Returns
      <ul>
        <li>data - pyDataset</li>
      </ul>
    </li>
  </ul>
</HeaderBox>

### Code Examples

```python
# Example usage
paramsDict = {
  'attributeId': 5
}
data = system.kanoa.attribute.getAttributeEvents(paramsDict)
print(data)  # Print the attribute events data

