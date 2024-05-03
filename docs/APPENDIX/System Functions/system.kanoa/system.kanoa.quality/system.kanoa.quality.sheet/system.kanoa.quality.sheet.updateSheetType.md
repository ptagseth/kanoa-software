---
id: updateSheetType
title: system.kanoa.quality.sheet.updateSheetType
hide_table_of_contents: true
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaQDS</b> module</PurpleBox>
<HeaderBox header="Description">
Updates the sheetType associated with a check sheet. 
Think of a sheet type essentially as a folder where checks sheets of different types can be stored. Initially implemented as a type field,
it has now become the parentId of the check sheet allowing types to be nested.</HeaderBox>
<HeaderBox header="Syntax">
    <b>updateSheetType(shtTypeInfo, userId)</b>
    <li> Parameters <br />
        <ul>shtTypeInfo - Dictionary containing sheet type information:</ul>
        <ul>  - 'chkShtTypeId': ID of the sheet type to update (int).</ul>
        <ul>  - 'chkShtTypeName': Name of the sheet type (string).</ul>
        <ul>  - 'parentId': ID of the parent sheet type (int).</ul>
        <ul>  - 'description': Description of the sheet type (string, optional).</ul>
        <ul>  - 'enabled': True to enable the sheet type (bool).</ul>
        <ul>userId - User ID (int).</ul>
    </li>
    <li> Returns <br />
        <ul>chkShtTypeId - ID of the updated sheet type (int).</ul>
    </li>
</HeaderBox>

### Code Example
```python
# Usage example
sht_type_info = {'chkShtTypeId': 4, 'chkShtTypeName': 'Quality', 'parentId': 1, 'description': None, 'enabled': True}
user_id = 123
chk_sht_type_id = system.kanoa.quality.sheet.updateSheetType(shtTypeInfo=sht_type_info, userId=user_id)

print(chk_sht_type_id)
