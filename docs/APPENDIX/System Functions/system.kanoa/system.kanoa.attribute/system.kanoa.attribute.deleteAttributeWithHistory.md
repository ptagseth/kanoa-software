---
id: delete-attribute-with-history
title: system.kanoa.attribute.deleteAttributeWithHistory
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function is part of the <b>kanoaOPS</b> module</PurpleBox>

<HeaderBox header="Description">
  Deletes an attribute that has history by removing any event data associated with this attribute.
</HeaderBox>

<HeaderBox header="Syntax">
  <b>deleteAttributeWithHistory(attributeId, userId)</b>
  <ul>
    <li>Parameters
      <ul>
        <li>int attributeId - Attribute ID</li>
        <li>int userId - User ID</li>
      </ul>
    </li>
    <li>Returns
      <ul>
        <li>int - Number of records modified</li>
      </ul>
    </li>
  </ul>
</HeaderBox>

### Code Examples

```python
# Example usage
attributeId = 1
userId = 123
modifiedRecords, message = system.kanoa.attribute.deleteAttributeWithHistory(attributeId, userId)
print(modifiedRecords, message)  # Print the number of modified records and message

