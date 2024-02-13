---
id: update-attribute
title: system.kanoa.attribute.updateAttribute
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function is part of the <b>kanoaOPS</b> module</PurpleBox>

<HeaderBox header="Description">
  Updates an existing attribute.
</HeaderBox>

<HeaderBox header="Syntax">
  <b>updateAttribute(attrInfo, userId)</b>
    <li>Parameters <br />
      <ul>dictionary attrInfo - &#123;'attributeId': 1, 'attributeName': 'attributeDescription': 'some desription', 'some attribute name', 'parentId': 6, 'enabled': True}</ul>
      <ul>int userId - User ID</ul>
    </li>
    <li>Returns <br />
      <ul>int - Number of records modified</ul>
    </li>
</HeaderBox>

### Code Examples

```python
# Example usage
attrInfo = {
  'attributeId': 1,
  'attributeName': 'some attribute name',
  'attributeDescription': 'some description',
  'parentId': 6,
  'enabled': True
}
userId = 123
modifiedRecords = system.kanoa.attribute.updateAttribute(attrInfo, userId)
print(modifiedRecords)  # Print the number of modified records

