---
id: getSheetTypes
title: system.kanoa.quality.sheet.getSheetTypes
hide_table_of_contents: true
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaQDS</b> module</PurpleBox>
<HeaderBox header="Description">Retrieves check sheet types in KanoaQDS.</HeaderBox>
<HeaderBox header="Syntax">
    <b>getSheetTypes(paramsDict)</b>
    <li> Parameters <br />
        <ul>paramsDict - Dictionary containing optional parameters:</ul>
        <ul>  - 'path': Path of the check sheet type (string).</ul>
        <ul>  - 'chkShtTypeId': ID of the specific check sheet type (int).</ul>
        <ul>  - 'parentId': ID of the parent check sheet type (int).</ul>
        <ul>  - 'enabled': True to filter by enabled check sheet types (bool).</ul>
        <ul>  - 'chkShtTypeName': Name of the check sheet type (string).</ul>
    </li>
    <li> Returns <br />
        <ul>data - PyDataset containing check sheet type information.</ul>
    </li>
</HeaderBox>

### Code Examples
```python
# Usage example
params_dict = {'enabled': True, 'chkShtTypeId': 1, 'chkShtTypeName': 'Approved'}
sheet_types_data = system.kanoa.quality.sheet.getSheetTypes(paramsDict=params_dict)

print(sheet_types_data)
