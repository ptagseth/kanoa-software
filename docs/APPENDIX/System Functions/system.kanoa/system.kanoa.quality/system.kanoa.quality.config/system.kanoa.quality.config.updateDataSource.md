---
id: updateDataSource
title: system.kanoa.quality.config.updateDataSource
hide_table_of_contents: true
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaQDS</b> module</PurpleBox>
<HeaderBox header="Description">Updates an attribute datasource in KanoaQDS.</HeaderBox>
<HeaderBox header="Syntax">
    <b>updateDataSource(attrInfo, userId)</b>
    <li> Parameters <br />
        <ul>dict attrInfo - Dictionary, e.g., &#123;'attributeDataSourceId': 67, 'attributeId': 3, 'assetId': 5, 'sourceTagPath': 'some tag path', 'scaleFactor': 1.0, 'ignoreZeroValues': True, 'enabled': True}</ul>
        <ul>int userId - User ID</ul>
    </li>
    <li> Returns <br />
        <ul>int modifiedRecords - Number of records modified during the update.</ul>
        <ul>str msg - Message indicating the result of the update.</ul>
    </li>
</HeaderBox>

### Code Examples
```python
# Usage example
attr_info = {'attributeDataSourceId': 67, 'attributeId': 3, 'assetId': 5, 'sourceTagPath': 'some tag path', 'scaleFactor': 1.0, 'ignoreZeroValues': True, 'enabled': True}
modified_records, update_msg = system.kanoa.quality.config.updateDataSource(attrInfo=attr_info, userId=123)

if modified_records is not None:
    print(f"Successfully updated {modified_records} records")
else:
    print(f"Update failed. Error: {update_msg}")

