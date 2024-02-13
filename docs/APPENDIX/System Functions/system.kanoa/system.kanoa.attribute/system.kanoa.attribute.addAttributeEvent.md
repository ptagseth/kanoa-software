---
id: add-attribute-event
title: system.kanoa.attribute.addAttributeEvent
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function is part of the <b>kanoaOPS</b> module</PurpleBox>

<HeaderBox header="Description">
  Adds an attribute event record.
</HeaderBox>

<HeaderBox header="Syntax">
  <b>addAttributeEvent(attributeEventInfo, userId)</b>
    <li>Parameters <br />
      <ul>dictionary attributeEventInfo - &#123;'attributeAssetLinkId': 18, 'value': 'sausages', 'tStamp': somedate}</ul>
      <ul>int userId - User ID</ul>
    </li>
    <li>Returns <br />
      <ul>int attributeEventId - Newly created attribute event ID</ul>
    </li>
</HeaderBox>

### Code Examples

```python
# Example usage
attributeEventInfo = {
  'attributeAssetLinkId': 18,
  'value': 'sausages',
  'tStamp': somedate
}
userId = 123
attributeEventId = system.kanoa.attribute.addAttributeEvent(attributeEventInfo, userId)
print(attributeEventId)  # Print the attribute event ID

