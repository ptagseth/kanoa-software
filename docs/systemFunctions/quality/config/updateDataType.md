---
id: updateDataType
title: system.kanoa.quality.config.updateDataType
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaQDS</b> module</PurpleBox>
<HeaderBox header="Description">Updates a data type in KanoaQDS.</HeaderBox>
<HeaderBox header="Syntax">
    <b>updateDataType(dataTypeInfo, userId)</b>
    <li> Parameters <br />
        <ul>dict dataTypeInfo - Dictionary, e.g., &#123;'dataTypeName': 1,'enabled': 2,'isNumeric':3,'pickListEnabled':True}</ul>
        <ul>int userId - User ID</ul>
    </li>
    <li> Returns <br />
        <ul>int dataTypeId - ID of the updated data type.</ul>
    </li>
</HeaderBox>

### Code Examples
```python
# Usage example
data_type_info = {'dataTypeId': 1, 'dataTypeName': 'Special Bool', 'enabled': True,'isNumeric': True,'pickListEnabled':True}
user_id = 123
updated_data_type_id = system.kanoa.quality.config.updateDataType(dataTypeInfo=data_type_info, userId=user_id)

if updated_data_type_id:
    print(f"Successfully updated data type. ID: {updated_data_type_id}")
else:
    print("Update failed.")
