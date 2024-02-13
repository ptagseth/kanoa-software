---
id: update-attribute-asset-link
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
  <ul>
    <li>Parameters
      <ul>
        <li>dictionary attrAssetInfo - &#123;'attributeAssetLinkId': 67, 'attributeId': 3, 'assetId': 5, 'sourceTagPath': 'some tag path', 'scaleFactor': 1.0, 'ignoreZeroValues': True, 'enabled': True}</li>
        <li>int userId - User ID</li>
      </ul>
    </li>
    <li>Returns
      <ul>
        <li>int - Number of records modified</li>
        <li>string msg - Message indicating the result</li>
      </ul>
    </li>
  </ul>
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

