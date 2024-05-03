---
id: deleteAttributeWithHistory
title: system.kanoa.quality.config.deleteAttributeWithHistory
hide_table_of_contents: true
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaQDS</b> module</PurpleBox>
<HeaderBox header="Description">Deletes an attribute that has history by removing any event data associated with this attribute in KanoaQDS.</HeaderBox>
<HeaderBox header="Syntax">
    <b>deleteAttributeWithHistory(attributeId, userId)</b>
    <li> Parameters <br />
        <ul>int attributeId - ID of the attribute to be deleted.</ul>
        <ul>int userId - User ID</ul>
    </li>
    <li> Returns <br />
        <ul>int modifiedRecords - Number of records modified during the deletion.</ul>
    </li>
</HeaderBox>

### Code Examples
```python
# Usage example
modified_records = system.kanoa.quality.config.deleteAttributeWithHistory(attributeId=1, userId=123)

if modified_records is not None:
    print(f"Successfully deleted {modified_records} records")

