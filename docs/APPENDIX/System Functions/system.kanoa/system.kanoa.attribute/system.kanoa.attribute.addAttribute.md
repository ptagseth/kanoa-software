---
id: add-attribute
title: system.kanoa.attribute.addAttribute
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function is part of the <b>kanoaOPS</b> module</PurpleBox>

<HeaderBox header="Description">
  Adds a new attribute.
</HeaderBox>

<HeaderBox header="Syntax">
  <b>addAttribute(attrInfo, userId)</b>
  <ul>
    <li>Parameters
      <ul>
        <li>dictionary attrInfo - &#123;'attributeName': 'some attribute name', 'attributeDescription': 'some description', 'parentId': 6, 'enabled': True}</li>
        <li>int userId - User ID</li>
      </ul>
    </li>
    <li>Returns
      <ul>
        <li>int attributeId - Newly created attribute ID</li>
      </ul>
    </li>
  </ul>
</HeaderBox>

### Code Examples

```python
# Example usage
attrInfo = {
  'attributeName': 'some attribute name',
  'attributeDescription': 'some description',
  'parentId': 6,
  'enabled': True
}
userId = 123
attributeId = system.kanoa.attribute.addAttribute(attrInfo, userId)
print(attributeId)  # Print the newly created attribute ID


