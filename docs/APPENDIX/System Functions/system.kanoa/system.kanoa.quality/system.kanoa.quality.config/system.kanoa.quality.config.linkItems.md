---
id: linkItems
title: system.kanoa.quality.config.linkItems
hide_table_of_contents: true
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaQDS</b> module</PurpleBox>
<HeaderBox header="Description">Adds links between an itemSet and a list of items in KanoaQDS.</HeaderBox>
<HeaderBox header="Syntax">
    <b>linkItems(itemSetId, itemList, enabled, userId)</b>
    <li> Parameters <br />
        <ul>int itemSetId - ID of the item set.</ul>
        <ul>list itemList - List of item IDs.</ul>
        <ul>bit enabled - Enable/disable the links.</ul>
        <ul>int userId - User ID.</ul>
    </li>
    <li> Returns <br />
        <ul>int recordsModified - Number of records modified.</ul>
    </li>
</HeaderBox>

### Code Examples
```python
# Usage example
item_set_id_to_link = 1
item_list_to_link = [2, 3, 4]
enable_links = True
user_id = 123
modified_records = system.kanoa.quality.config.linkItems(itemSetId=item_set_id_to_link, itemList=item_list_to_link, enabled=enable_links, userId=user_id)

print(f"Modified {modified_records} records.")

