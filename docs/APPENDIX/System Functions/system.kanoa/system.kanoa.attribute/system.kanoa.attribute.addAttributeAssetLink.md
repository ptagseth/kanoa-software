---
id: add-attribute-asset-link
title: system.kanoa.attribute.addAttributeAssetLink
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function is part of the <b>kanoaOPS</b> module</PurpleBox>

<HeaderBox header="Description">
  Adds a new attribute asset link.
</HeaderBox>

<HeaderBox header="Syntax">
  <b>addAttributeAssetLink(attrAssetInfo, userId)</b>
    <li>Parameters <br />
      <ul>dictionary attrAssetInfo - &#123;'attributeId': 3, 'assetId': 5, 'sourceTagPath': 'some tag path', 'scaleFactor': 1.0, 'ignoreZeroValues': True, 'enabled': True}</ul>
      <ul>int userId - User ID</ul>
    </li>
    <li>Returns <br />
      <ul>int attributeAssetLinkId - Newly created attribute asset link ID</ul>
      <ul>string msg - Message indicating the result</ul>
    </li>
</HeaderBox>

### Code Examples

```python
# Example usage
attrAssetInfo = {
  'attributeId': 3,
  'assetId': 5,
  'sourceTagPath': 'some tag path',
  'scaleFactor': 1.0,
  'ignoreZeroValues': True,
  'enabled': True
}
userId = 123
attributeAssetLinkId, msg = system.kanoa.attribute.addAttributeAssetLink(attrAssetInfo, userId)
print(attributeAssetLinkId, msg)  # Print the attribute asset link ID and message

