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
        <ul>paramsDict - Dictionary containing optional parameters:</ul>
        <ul>  - 'enabled': True to filter by enabled check sheets (bool).</ul>
        <ul>  - 'triggerTypeId': ID of the trigger type (int).</ul>
        <ul>  - 'modeId': ID of the mode (int).</ul>
        <ul>  - 'shiftNameId': ID of the shift name (int).</ul>
        <ul>  - 'toolingId': ID of the tooling (int).</ul>
        <ul>  - 'chkShtTypeId': ID of the check sheet type (int).</ul>
        <ul>  - 'chkShtId': ID of the check sheet (int).</ul>
        <ul>  - 'assetReqd': True if asset is required (bool).</ul>
        <ul>  - 'assetId': ID of the asset (int).</ul>
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

