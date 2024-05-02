---
id: deleteDataSource
title: system.kanoa.quality.config.deleteDataSource
hide_table_of_contents: true
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaQDS</b> module</PurpleBox>
<HeaderBox header="Description">Deletes an attribute datasource in KanoaQDS. Foreign key constraints should prevent deleting an attribute datasource that is being used.</HeaderBox>
<HeaderBox header="Syntax">
    <b>deleteDataSource(attributeDataSourceId, userId)</b>
    <li> Parameters <br />
        <ul>int attributeDataSourceId - ID of the attribute datasource to be deleted.</ul>
        <ul>int userId - User ID</ul>
    </li>
    <li> Returns <br />
        <ul>bool successFlag - Boolean indicating the success of the deletion.</ul>
        <ul>str msg - Message indicating the result of the deletion.</ul>
    </li>
</HeaderBox>

### Code Examples
```python
# Usage example
delete_success, delete_msg = system.kanoa.quality.config.deleteDataSource(attributeDataSourceId=67, userId=123)

if delete_success:
    print(f"Successfully deleted attribute datasource: {delete_msg}")
else:
    print(f"Deletion failed. Error: {delete_msg}")