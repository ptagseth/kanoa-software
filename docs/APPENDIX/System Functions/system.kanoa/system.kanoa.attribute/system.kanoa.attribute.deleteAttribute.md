---
id: delete-attribute
title: system.kanoa.attribute.deleteAttribute
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function is part of the <b>kanoaOPS</b> module</PurpleBox>

<HeaderBox header="Description">
  Deletes an attribute.
</HeaderBox>

<HeaderBox header="Syntax">
  <b>deleteAttribute(attributeId, userId)</b>
  <ul>
    <li>Parameters
      <ul>
        <li>int attributeId - Attribute ID</li>
        <li>int userId - User ID</li>
      </ul>
    </li>
    <li>Returns
      <ul>
        <li>bit success - Success flag</li>
        <li>string message - Message indicating the result</li>
      </ul>
    </li>
  </ul>
</HeaderBox>

### Code Examples

```python
# Example usage
attributeId = 1
userId = 123
success, message = system.kanoa.attribute.deleteAttribute(attributeId, userId)
print(success, message)  # Print the success flag and message
