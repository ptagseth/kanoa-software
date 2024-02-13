---
id: get-attributes
title: system.kanoa.attribute.getAttributes
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function is part of the <b>kanoaOPS</b> module</PurpleBox>

<HeaderBox header="Description">
  Returns attribute based on the passed parameters.
</HeaderBox>

<HeaderBox header="Syntax">
  <b>getAttributes(paramsDict)</b>
  <ul>
    <li>Parameters
      <ul>
        <li>dictionary paramsDict - &#123;'path': 'somePath', 'enabled': True, 'attributeName': 'some attribute name', 'attributeId': 1, 'parentId': 6}</li>
      </ul>
    </li>
    <li>Returns
      <ul>
        <li>pyDataset data - Dataset containing attributes</li>
      </ul>
    </li>
  </ul>
</HeaderBox>

### Code Examples

```python
# Example usage
paramsDict = {
  'path': 'somePath',
  'enabled': True,
  'attributeName': 'some attribute name',
  'attributeId': 1,
  'parentId': 6
}
result = system.kanoa.attribute.getAttributes(paramsDict)
print(result)  # Print the dataset containing attributes