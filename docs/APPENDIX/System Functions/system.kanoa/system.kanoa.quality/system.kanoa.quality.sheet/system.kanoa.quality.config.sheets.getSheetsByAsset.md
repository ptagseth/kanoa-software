---
id: getSheetsByAsset
title: system.kanoa.quality.config.sheets.getSheetsByAsset
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaQDS</b> module</PurpleBox>
<HeaderBox header="Description">Returns all unique check sheets linked to assets based on the provided criteria.</HeaderBox>
<HeaderBox header="Syntax">
    <b>getSheetsByAsset(paramsDict)</b>
    <li> Parameters <br />
        <ul>
            <li>paramsDict - Dictionary containing optional parameters:</li>
            <li>  - 'enabled': True to filter by enabled check sheets (bool).</li>
            <li>  - 'chkShtTypeId': ID of the check sheet type (int).</li>
            <li>  - 'assetPath': Path of the asset (string).</li>
        </ul>
    </li>
    <li> Returns <br />
        <ul>data - PyDataset containing unique check sheet information.</ul>
    </li>
</HeaderBox>

### Code Example
```python
# Usage example
params_dict = {'enabled': True, 'chkShtStateId': 1, 'chkShtStateName': 'Approved'}
sheets_data = system.kanoa.quality.config.sheets.getSheetsByAsset(paramsDict=params_dict)

print(sheets_data)
