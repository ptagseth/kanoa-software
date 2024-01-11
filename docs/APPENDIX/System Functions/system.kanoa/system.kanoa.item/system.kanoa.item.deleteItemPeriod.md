---
id: deleteItemPeriod
title: system.kanoa.item.deleteItemPeriod
---
import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaOPS</b> module</PurpleBox>
<HeaderBox header="Description">Deletes an item period in KanoaOPS.</HeaderBox>
<HeaderBox header="Syntax">
    <b>deleteItemPeriod(itemPeriodId, userId)</b>
    <li> Parameters <br />
        <ul>int itemPeriodId - The ID of the item period to be deleted.</ul>
        <ul>int userId - The ID of the user making the deletion.</ul>
    </li>
    <li> Returns <br />
        <ul>(int) Number of records modified</ul>
        <ul>(str) Error message if deletion fails</ul>
    </li>
</HeaderBox>
### Code Examples
```python
# Usage example
records_modified, error_msg = system.kanoa.item.deleteItemPeriod(itemPeriodId=123, userId=456)

if error_msg:
    print(f"Deletion failed: {error_msg}")
else:
    print(f"Successfully deleted {records_modified} records.")