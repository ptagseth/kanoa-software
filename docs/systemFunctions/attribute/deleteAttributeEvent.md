---
id: deleteAttributeEvent
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
    <li>Parameters <br />
        <ul>int attributeEventId - Attribute event ID</ul>
        <ul>int userId - User ID</ul>
    </li>
    <li>Returns <br />
      <ul>int - Number of records modified</ul>
    </li>
</HeaderBox>

### Code Examples

```python
# Example usage
attributeEventId = 23
userId = 123
modifiedRecords = system.kanoa.attribute.deleteAttributeEvent(attributeEventId, userId)
print(modifiedRecords)  # Print the number of modified records
