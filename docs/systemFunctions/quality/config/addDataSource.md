---
id: addDataSource
title: system.kanoa.quality.config.addDataSource
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaQDS</b> module</PurpleBox>
<HeaderBox header="Description">Adds a new attribute datasource in KanoaQDS. Catches the Java exception if this datasource already exists for this attributeId/assetId combo.</HeaderBox>
<HeaderBox header="Syntax">
    <b>addDataSource(attrInfo, userId)</b>
    <li> Parameters <br />
        <ul>dict attrInfo - Dictionary, e.g., &#123;'attributeId': 3, 'assetId': 5, 'sourceTagPath': 'some tag path', 'scaleFactor': 1.0, 'ignoreZeroValues': True, 'enabled': True}</ul>
        <ul>int userId - User ID</ul>
    </li>
    <li> Returns <br />
        <ul>int attributeDataSourceId - ID of the added attribute datasource.</ul>
        <ul>str msg - Message indicating the result of the addition.</ul>
    </li>
</HeaderBox>

### Code Examples
```python
# Usage example
attr_info = {'attributeId': 3, 'assetId': 5, 'sourceTagPath': 'some tag path', 'scaleFactor': 1.0, 'ignoreZeroValues': True, 'enabled': True}
added_attr_datasource_id, add_msg = system.kanoa.quality.config.addDataSource(attrInfo=attr_info, userId=123)

if added_attr_datasource_id is not None:
    print(f"Successfully added attribute datasource with ID {added_attr_datasource_id}")
else:
    print(f"Addition failed. Error: {add_msg}")

