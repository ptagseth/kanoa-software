---
id: deleteItem
title: system.kanoa.item.deleteItem
hide_table_of_contents: true
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaOPS</b> module</PurpleBox>
<HeaderBox header="Description">Deletes an item (kanoaOPS).</HeaderBox>
<HeaderBox header="Syntax">
    <b>deleteItem(itemId, userId)</b>
    <li>Parameters <br />
        <ul>itemId (Integer) - ID of the item to delete.</ul>
        <ul>userId (Integer) - User ID.</ul>
    </li>
    <li>Returns <br />
        <ul>success (Boolean) - True if deletion is successful, False otherwise.</ul>
        <ul>errorMsg (String) - Error message if deletion fails.</ul>
    </li>
</HeaderBox>

### Code Examples

```python
# Example Usage:
deleted, errorMsg = system.kanoa.item.deleteItem(1, 123)
