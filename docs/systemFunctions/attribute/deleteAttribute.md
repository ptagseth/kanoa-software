---
id: deleteAttribute
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
    <li>Parameters <br />
      <ul>int attributeId - Attribute ID</ul>
      <ul>int userId - User ID</ul>
    </li>
    <li>Returns <br />
      <ul>bit success - Success flag</ul>
      <ul>string message - Message indicating the result</ul>
    </li>
</HeaderBox>

### Code Examples

```python
# Example usage
attributeId = 1
userId = 123
success, message = system.kanoa.attribute.deleteAttribute(attributeId, userId)
print(success, message)  # Print the success flag and message
