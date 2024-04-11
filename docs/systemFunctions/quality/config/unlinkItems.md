---
id: unlinkItems
title: system.kanoa.quality.config.unlinkItems
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaQDS</b> module</PurpleBox>
<HeaderBox header="Description">Unlinks items from itemsets in KanoaQDS.</HeaderBox>
<HeaderBox header="Syntax">
    <b>unlinkItems(itemSetIdList, userId)</b>
    <li> Parameters <br />
        <ul>list itemSetIdList - List of itemSet IDs to be unlinked.</ul>
        <ul>int userId - User ID.</ul>
    </li>
    <li> Returns <br />
        <ul>int recordsModified - Number of records modified.</ul>
    </li>
</HeaderBox>

### Code Examples
```python
# Usage example
item_set_id_list_to_unlink = [1, 2, 3]
user_id = 123
modified_records_unlink = system.kanoa.quality.config.unlinkItems(itemSetIdList=item_set_id_list_to_unlink, userId=user_id)

print(f"Unlinked {modified_records_unlink} records.")
