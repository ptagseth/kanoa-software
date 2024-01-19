---
id: getSheets
title: system.kanoa.quality.config.sheets.getSheets
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaQDS</b> module</PurpleBox>
<HeaderBox header="Description">Returns all unique check sheets based on the provided criteria.</HeaderBox>
<HeaderBox header="Syntax">
    <b>getSheets(paramsDict)</b>
    <li> Parameters <br />
        <ul>
            <li>paramsDict - Dictionary containing optional parameters:</li>
            <li>  - 'enabled': True to filter by enabled check sheets (bool).</li>
            <li>  - 'chkShtTypeId': ID of the check sheet type (int).</li>
            <li>  - 'chkShtId': ID of the check sheet (int).</li>
            <li>  - 'chkShtName': Name of the check sheet (string).</li>
            <li>  - 'chkShtTypeName': Name of the check sheet type (string).</li>
            <li>  - 'path': Path of the check sheet (string).</li>
        </ul>
    </li>
    <li> Returns <br />
        <ul>data - PyDataset containing unique check sheet information.</ul>
    </li>
</HeaderBox>

### Code Example
```python
# Usage example
params_dict = {'enabled': True, 'chkShtTypeId': 1, 'chkShtId': 2, 'chkShtName': 'QA Check 1', 'chkShtTypeName': 'QA Checks', 'path': 'QA Checks\QA Check%'}
sheets_data = system.kanoa.quality.config.sheets.getSheets(paramsDict=params_dict)

print(sheets_data)

