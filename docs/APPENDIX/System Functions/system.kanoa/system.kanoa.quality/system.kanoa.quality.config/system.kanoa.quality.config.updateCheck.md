---
id: updateCheck
title: system.kanoa.quality.config.updateCheck
hide_table_of_contents: true
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaQDS</b> module</PurpleBox>
<HeaderBox header="Description">Updates a check item in KanoaQDS.</HeaderBox>
<HeaderBox header="Syntax">
    <b>updateCheck(chkItemInfo, userId)</b>
    <li> Parameters <br />
        <ul>dict chkItemInfo - Dictionary, e.g., &#123;'chkItemId': 3, 'chkItemGroupId': 1,'chkShtId': 2,'dataTypeId':3,'engUnitId':None,'chkItemName': 'Check 1','chkItemTypeId':1,'chkItemTriggerId':4,'measCount': 1,'instructions': None,'pickListId': 4,'pickListValues': None,'calculation': None,'required': True,'enabled': True, 'dynamic': False,'sortOrder':0,'format': '#,##0.#', 'attributeId': None}</ul>
        <ul>int userId - User ID</ul>
    </li>
    <li> Returns <br />
        <ul>int modifiedRecords - Number of records modified during the update.</ul>
    </li>
</HeaderBox>

### Code Examples
```python
# Usage example
chk_item_info = {'chkItemId': 3, 'chkItemGroupId': 1,'chkShtId': 2,'dataTypeId':3,'engUnitId':None,'chkItemName': 'Check 1','chkItemTypeId':1,'chkItemTriggerId':4,'measCount': 1,'instructions': None,'pickListId': 4,'pickListValues': None,'calculation': None,'required': True,'enabled': True, 'dynamic': False,'sortOrder':0,'format': '#,##0.#', 'attributeId': None}
modified_records = system.kanoa.quality.config.updateCheck(chkItemInfo=chk_item_info, userId=123)

if modified_records is not None:
    print(f"Successfully updated {modified_records} records")
else:
    print("Update failed.")

