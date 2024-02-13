---
id: update-attribute-event
title: system.kanoa.attribute.updateAttributeEvent
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function is part of the <b>kanoaOPS</b> module</PurpleBox>

<HeaderBox header="Description">
  Updates an attribute event record.
</HeaderBox>

<HeaderBox header="Syntax">
  <b>updateAttributeEvent(attributeEventInfo, userId)</b>
  <ul>
    <li>Parameters
      <ul>
        <li>dictionary attributeEventInfo - &#123;'attributeEventId': 23, 'attributeAssetLinkId': 18, 'value': 'sausages', 'tStamp': somedate}</li>
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
attributeEventInfo = {
  'attributeEventId': 23,
  'attributeAssetLinkId': 18,
  'value': 'sausages',
  'tStamp': somedate
}
userId = 123
modifiedRecords = system.kanoa.attribute.updateAttributeEvent(attributeEventInfo, userId)
print(modifiedRecords)  # Print the number of modified records


