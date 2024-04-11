---
id: addCheck
title: system.kanoa.quality.config.addCheck
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaQDS</b> module</PurpleBox>
<HeaderBox header="Description">Adds a check item to a check sheet in KanoaQDS.</HeaderBox>
<HeaderBox header="Syntax">
    <b>addCheck(chkItemInfo, userId)</b>
    <li> Parameters <br />
        <ul>dict chkItemInfo - Dictionary, e.g., &#123;'chkItemGroupId': 1,'chkShtId': 2,'dataTypeId':3,'engUnitId':None,'chkItemName': 'Check 1','chkItemTypeId':1,'chkItemTriggerId':4,'measCount': 1,'instructions': None,'pickListId': 4,'pickListValues': None,'calculation': None,'required': True,'enabled': True, 'dynamic': False,'sortOrder':0,'format': '#,##0.#', 'attributeId': None}</ul>
        <ul>int userId - User ID</ul>
    </li>
    <li> Returns <br />
        <ul>int chkItemId - ID of the added check item.</ul>
    </li>
</HeaderBox>

### Code Examples
```python
# Usage example
chk_item_info = {'chkItemGroupId': 1,'chkShtId': 2,'dataTypeId':3,'engUnitId':None,'chkItemName': 'Check 1','chkItemTypeId':1,'chkItemTriggerId':4,'measCount': 1,'instructions': None,'pickListId': 4,'pickListValues': None,'calculation': None,'required': True,'enabled': True, 'dynamic': False,'sortOrder':0,'format': '#,##0.#', 'attributeId': None}
added_chk_item_id = system.kanoa.quality.config.addCheck(chkItemInfo=chk_item_info, userId=123)

if added_chk_item_id:
    print(f"Successfully added check item with ID {added_chk_item_id}")
else:
    print("Addition failed.")
