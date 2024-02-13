---
id: delete-attribute-event
title: system.kanoa.attribute.deleteAttributeEvent
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function is part of the <b>kanoaOPS</b> module</PurpleBox>

<HeaderBox header="Description">
  Deletes an attribute event record.
</HeaderBox>

<HeaderBox header="Syntax">
  <b>deleteAttributeEvent(attributeEventId, userId)</b>
  <ul>
    <li>Parameters
      <ul>
        <li>int attributeEventId - Attribute event ID</li>
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
attributeEventId = 23
userId = 123
modifiedRecords = system.kanoa.attribute.deleteAttributeEvent(attributeEventId, userId)
print(modifiedRecords)  # Print the number of modified records
