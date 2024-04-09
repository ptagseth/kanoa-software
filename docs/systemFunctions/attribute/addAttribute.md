---
id: addAttribute
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
    <li>Parameters <br />
      <ul>dictionary attrInfo - &#123;'attributeName': 'some attribute name', 'attributeDescription': 'some description', 'parentId': 6, 'enabled': True}</ul>
      <ul>int userId - User ID</ul>
    </li>
    <li>Returns <br />
      <ul>int attributeId - Newly created attribute ID</ul>
    </li>
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


