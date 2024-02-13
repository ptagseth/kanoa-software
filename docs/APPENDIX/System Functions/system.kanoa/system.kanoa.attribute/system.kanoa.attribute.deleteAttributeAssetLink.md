---
id: delete-attribute-asset-link
title: system.kanoa.attribute.deleteAttributeAssetLink
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function is part of the <b>kanoaOPS</b> module</PurpleBox>

<HeaderBox header="Description">
  Deletes an attribute asset link.
</HeaderBox>

<HeaderBox header="Syntax">
  <b>deleteAttributeAssetLink(attributeAssetLinkId, userId)</b>
  <ul>
    <li>Parameters
      <ul>
        <li>int attributeAssetLinkId - Attribute asset link ID</li>
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
attributeAssetLinkId = 67
userId = 123
modifiedRecords, msg = system.kanoa.attribute.deleteAttributeAssetLink(attributeAssetLinkId, userId)
print(modifiedRecords, msg)  # Print the number of modified records and message
