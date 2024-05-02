---
id: updateAttribute
title: system.kanoa.quality.config.updateAttribute
hide_table_of_contents: true
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaQDS</b> module</PurpleBox>
<HeaderBox header="Description">Updates an attribute in KanoaQDS.</HeaderBox>
<HeaderBox header="Syntax">
    <b>updateAttribute(attrInfo, userId)</b>
    <li> Parameters <br />
        <ul>dict attrInfo - Dictionary, e.g., &#123;'attributeId': 1, 'attributeName': 'some attribute name', 'attributeDescription': 'some description', 'parentId': 6, 'enabled': True}</ul>
        <ul>int userId - User ID</ul>
    </li>
    <li> Returns <br />
        <ul>int modifiedRecords - Number of records modified during the update.</ul>
    </li>
</HeaderBox>

### Code Examples
```python
# Usage example
attribute_info = {'attributeId': 1, 'attributeName': 'some attribute name', 'attributeDescription': 'some description', 'parentId': 6, 'enabled': True}
modified_records = system.kanoa.quality.config.updateAttribute(attrInfo=attribute_info, userId=123)

if modified_records is not None:
    print(f"Successfully updated {modified_records} records")

