---
id: deleteAttributeLink
title: system.kanoa.quality.config.deleteAttributeLink
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaQDS</b> module</PurpleBox>
<HeaderBox header="Description">Deletes the attribute Id link for the chkItem if it exists in KanoaQDS.</HeaderBox>
<HeaderBox header="Syntax">
    <b>deleteAttributeLink(chkItemId, userId)</b>
    <li> Parameters <br />
        <ul>int chkItemId - ID of the check item.</ul>
        <ul>int userId - User ID</ul>
    </li>
    <li> Returns <br />
        <ul>int chkItemAttrLinkId - ID of the link deleted.</ul>
    </li>
</HeaderBox>

### Code Examples
```python
# Usage example
chk_item_id = 1
user_id = 123
deleted_link_id = system.kanoa.quality.config.deleteAttributeLink(chkItemId=chk_item_id, userId=user_id)

if deleted_link_id is not None:
    print(f"Successfully deleted link with ID {deleted_link_id}")
