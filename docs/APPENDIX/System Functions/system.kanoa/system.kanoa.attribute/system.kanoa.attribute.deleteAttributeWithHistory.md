---
id: delete-attribute-with-history
title: system.kanoa.attribute.deleteAttributeWithHistory
hide_table_of_contents: true
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function is part of the <b>kanoaOPS</b> module</PurpleBox>

<HeaderBox header="Description">
  Deletes an attribute that has history by removing any event data associated with this attribute.
</HeaderBox>

<HeaderBox header="Syntax">
  <b>deleteAttributeWithHistory(attributeId, userId)</b>
    <li>Parameters <br />
        <ul>int attributeId - Attribute ID</ul>
        <ul>int userId - User ID</ul>
    </li>
    <li>Returns <br />
      <ul>int - Number of records modified</ul>
    </li>
</HeaderBox>

### Code Examples

```python
# Example usage
attributeId = 1
userId = 123
modifiedRecords, message = system.kanoa.attribute.deleteAttributeWithHistory(attributeId, userId)
print(modifiedRecords, message)  # Print the number of modified records and message

