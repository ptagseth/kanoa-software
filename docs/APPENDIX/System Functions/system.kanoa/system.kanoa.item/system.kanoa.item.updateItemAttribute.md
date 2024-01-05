---
id: updateItemAttribute
title: system.kanoa.item.updateItemAttribute
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaOPS</b> module</PurpleBox>
<HeaderBox header="Description">Updates an item attribute (kanoaOPS).</HeaderBox>
<HeaderBox header="Syntax">
    <b>updateItemAttribute(itemInfo, userId)</b>
    <li>Parameters <br />
        <ul>itemInfo (Dictionary) - Dictionary containing updated item attribute information (e.g., &#123;'itemAttrId': 56, 'itemAttrName': 'weight', 'itemId': 1, 'itemAttrValue': 57.4}).</ul>
        <ul>userId (Integer) - User ID.</ul>
    </li>
    <li>Returns <br />
        <ul># of records modified (Integer).</ul>
    </li>
</HeaderBox>

### Code Examples

```python
# Example Usage:
modifiedRecords = updateItemAttribute({'itemAttrId': 56, 'itemAttrName': 'weight', 'itemId': 1, 'itemAttrValue': 60}, 123)
