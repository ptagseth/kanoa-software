---
id: addDataType
title: system.kanoa.quality.config.addDataType
hide_table_of_contents: true
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaQDS</b> module</PurpleBox>
<HeaderBox header="Description">Adds a new data type in KanoaQDS.</HeaderBox>
<HeaderBox header="Syntax">
    <b>addDataType(dataTypeInfo, userId)</b>
    <li> Parameters <br />
        <ul>dict dataTypeInfo - Dictionary, e.g., &#123;'dataTypeName': 'Special Bool', 'enabled': True,'isNumeric': True,'pickListEnabled':True}</ul>
        <ul>int userId - User ID</ul>
    </li>
    <li> Returns <br />
        <ul>int dataTypeId - ID of the newly added data type.</ul>
    </li>
</HeaderBox>

### Code Examples
```python
# Usage example
data_type_info = {'dataTypeName': 'Special Bool', 'enabled': True,'isNumeric': True,'pickListEnabled':True}
user_id = 123
data_type_id = system.kanoa.quality.config.addDataType(dataTypeInfo=data_type_info, userId=user_id)

if data_type_id:
    print(f"Successfully added data type. New ID: {data_type_id}")
else:
    print("Addition failed.")