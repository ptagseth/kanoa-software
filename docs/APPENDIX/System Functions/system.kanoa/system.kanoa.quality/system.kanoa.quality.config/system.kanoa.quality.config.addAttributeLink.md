---
id: addAttributeLink
title: system.kanoa.quality.config.addAttributeLink
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaQDS</b> module</PurpleBox>
<HeaderBox header="Description">Links the attributeId to the chkItemId in KanoaQDS.</HeaderBox>
<HeaderBox header="Syntax">
    <b>addAttributeLink(chkItemId, attributeId, userId)</b>
    <li> Parameters <br />
        <ul>int chkItemId - ID of the check item.</ul>
        <ul>int attributeId - ID of the attribute to be linked.</ul>
        <ul>int userId - User ID</ul>
    </li>
    <li> Returns <br />
        <ul>int chkItemAttrLinkId - ID of the link created.</ul>
    </li>
</HeaderBox>

### Code Examples
```python
# Usage example
chk_item_id = 1
attribute_id = 2
user_id = 123
link_id = system.kanoa.quality.config.addAttributeLink(chkItemId=chk_item_id, attributeId=attribute_id, userId=user_id)

if link_id is not None:
    print(f"Successfully linked attribute with ID {attribute_id} to check item with ID {chk_item_id}")

