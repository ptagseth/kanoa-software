---
id: getSheetTypes
title: system.kanoa.quality.sheet.getSheetTypes
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaQDS</b> module</PurpleBox>
<HeaderBox header="Description">Retrieves check sheet types in KanoaQDS.</HeaderBox>
<HeaderBox header="Syntax">
    <b>getSheetTypes(paramsDict)</b>
    <li> Parameters <br />
        <ul>
            <li>paramsDict - Dictionary containing optional parameters:</li>
            <li>  - 'path': Path of the check sheet type (string).</li>
            <li>  - 'chkShtTypeId': ID of the specific check sheet type (int).</li>
            <li>  - 'parentId': ID of the parent check sheet type (int).</li>
            <li>  - 'enabled': True to filter by enabled check sheet types (bool).</li>
            <li>  - 'chkShtTypeName': Name of the check sheet type (string).</li>
        </ul>
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
