---
id: get-attributes
title: system.kanoa.attribute.getAttributes
hide_table_of_contents: true
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function is part of the <b>kanoaOPS</b> module</PurpleBox>

<HeaderBox header="Description">
  Returns attribute based on the passed parameters.
</HeaderBox>

<HeaderBox header="Syntax">
  <b>getAttributes(paramsDict)</b>
    <li>Parameters <br />
      <ul>dictionary paramsDict - &#123;'path': 'somePath', 'enabled': True, 'attributeName': 'some attribute name', 'attributeId': 1, 'parentId': 6}</ul>
    </li>
    <li>Returns <br />
      <ul>pyDataset data - Dataset containing attributes</ul>
    </li>

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