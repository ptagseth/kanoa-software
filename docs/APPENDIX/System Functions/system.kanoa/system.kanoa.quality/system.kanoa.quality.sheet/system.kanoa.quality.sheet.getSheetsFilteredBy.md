---
id: getSheetsFilteredBy
title: system.kanoa.quality.sheet.getSheetsFilteredBy
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaQDS</b> module</PurpleBox>
<HeaderBox header="Description">Returns all check sheets that meet the passed criteria in KanoaQDS.</HeaderBox>
<HeaderBox header="Syntax">
    <b>getSheetsFilteredBy(paramsDict)</b>
    <li> Parameters <br />
        <ul>
            <li>paramsDict - Dictionary containing optional parameters:</li>
            <li>  - 'enabled': True to filter by enabled check sheets (bool).</li>
            <li>  - 'triggerTypeId': ID of the trigger type (int).</li>
            <li>  - 'modeId': ID of the mode (int).</li>
            <li>  - 'shiftNameId': ID of the shift name (int).</li>
            <li>  - 'toolingId': ID of the tooling (int).</li>
            <li>  - 'chkShtTypeId': ID of the check sheet type (int).</li>
            <li>  - 'chkShtId': ID of the check sheet (int).</li>
            <li>  - 'assetReqd': True if asset is required (bool).</li>
            <li>  - 'assetId': ID of the asset (int).</li>
        </ul>
    </li>
    <li> Returns <br />
        <ul>data - PyDataset containing check sheet information.</ul>
    </li>
</HeaderBox>

### Code Example
```python
# Usage example
params_dict = {'enabled': True, 'triggerTypeId': 1, 'modeId': 2, 'shiftNameId': 3, 'toolingId': 6, 'chkShtTypeId': 7, 'chkShtId': 2, 'assetReqd': True, 'assetId': 56}
sheets_data = system.kanoa.quality.sheet.getSheetsFilteredBy(paramsDict=params_dict)

print(sheets_data)

