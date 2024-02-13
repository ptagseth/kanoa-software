---
id: get-attribute-asset-links
title: system.kanoa.attribute.getAttributeAssetLinks
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function is part of the <b>kanoaOPS</b> module</PurpleBox>

<HeaderBox header="Description">
  Returns attribute asset links based on the passed parameters.
</HeaderBox>

<HeaderBox header="Syntax">
  <b>getAttributeAssetLinks(paramsDict)</b>
    <li>Parameters <br />
      <ul>dictionary paramsDict - &#123;'assetId': 18, 'enabled': True, 'attributeName': 'some attribute', 'attributeId': 7, 'attributePath': 'some path'}</ul>
    </li>
    <li>Returns <br />
      <ul>dataSource data - pyDataset</ul>
    </li>
</HeaderBox>

### Code Examples

```python
# Example usage
paramsDict = {
  'assetId': 18,
  'enabled': True,
  'attributeName': 'some attribute',
  'attributeId': 7,
  'attributePath': 'some path'
}
data = system.kanoa.attribute.getAttributeAssetLinks(paramsDict)
print(data)  # Print the attribute asset links data

