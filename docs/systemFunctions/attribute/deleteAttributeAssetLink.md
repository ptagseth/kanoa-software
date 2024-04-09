---
id: deleteAttributeAssetLink
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
    <li>Parameters <br />
      <ul>int attributeAssetLinkId - Attribute asset link ID</ul>
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
attributeAssetLinkId = 67
userId = 123
modifiedRecords, msg = system.kanoa.attribute.deleteAttributeAssetLink(attributeAssetLinkId, userId)
print(modifiedRecords, msg)  # Print the number of modified records and message
