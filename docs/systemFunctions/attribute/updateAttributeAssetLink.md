---
id: updateAttributeAssetLink
title: system.kanoa.attribute.updateAttributeAssetLink
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function is part of the <b>kanoaOPS</b> module</PurpleBox>

<HeaderBox header="Description">
  Updates an existing attribute asset link.
</HeaderBox>

<HeaderBox header="Syntax">
  <b>updateAttributeAssetLink(attrAssetInfo, userId)</b>
    <li>Parameters <br />
      <ul>dictionary attrAssetInfo - &#123;'attributeAssetLinkId': 67, 'attributeId': 3, 'assetId': 5, 'sourceTagPath': 'some tag path', 'scaleFactor': 1.0, 'ignoreZeroValues': True, 'enabled': True}</ul>
      <ul>int userId - User ID</ul>
    </li>
    <li>Returns <br />
      <ul>int - Number of records modified</ul>
      <ul>string msg - Message indicating the result</ul>
    </li>
</HeaderBox>

### Code Examples

```python
# Example usage
attrAssetInfo = {
  'attributeAssetLinkId': 67,
  'attributeId': 3,
  'assetId': 5,
  'sourceTagPath': 'some tag path',
  'scaleFactor': 1.0,
  'ignoreZeroValues': True,
  'enabled': True
}
userId = 123
modifiedRecords, msg = system.kanoa.attribute.updateAttributeAssetLink(attrAssetInfo, userId)
print(modifiedRecords, msg)  # Print the number of modified records and message

