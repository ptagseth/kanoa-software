---
id: addAttribute
title: system.kanoa.quality.config.addAttribute
hide_table_of_contents: true
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaQDS</b> module</PurpleBox>
<HeaderBox header="Description">Adds a new attribute in KanoaQDS.</HeaderBox>
<HeaderBox header="Syntax">
    <b>addAttribute(attrInfo, userId)</b>
    <li> Parameters <br />
        <ul>dict attrInfo - Dictionary, e.g., &#123;'attributeName': 'some attribute name', 'attributeDescription': 'some description', 'parentId': 6, 'enabled': True}</ul>
        <ul>int userId - User ID</ul>
    </li>
    <li> Returns <br />
        <ul>int attributeId - ID of the newly added attribute.</ul>
    </li>
</HeaderBox>

### Code Examples
```python
# Usage example
attribute_info = {'attributeName': 'some attribute name', 'attributeDescription': 'some description', 'parentId': 6, 'enabled': True}
new_attribute_id = system.kanoa.quality.config.addAttribute(attrInfo=attribute_info, userId=123)

if new_attribute_id is not None:
    print(f"Successfully added attribute with ID: {new_attribute_id}")

