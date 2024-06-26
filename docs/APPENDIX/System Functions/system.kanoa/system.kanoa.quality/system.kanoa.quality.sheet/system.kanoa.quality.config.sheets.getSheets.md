---
id: getSheets
title: system.kanoa.quality.config.sheets.getSheets
hide_table_of_contents: true
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaQDS</b> module</PurpleBox>
<HeaderBox header="Description">Returns all unique check sheets based on the provided criteria.</HeaderBox>
<HeaderBox header="Syntax">
    <b>getSheets(paramsDict)</b>
    <li> Parameters <br />
        <ul>paramsDict - Dictionary containing optional parameters:</ul>
        <ul>  - 'enabled': True to filter by enabled check sheets (bool).</ul>
        <ul>  - 'chkShtTypeId': ID of the check sheet type (int).</ul>
        <ul>  - 'chkShtId': ID of the check sheet (int).</ul>
        <ul>  - 'chkShtName': Name of the check sheet (string).</ul>
        <ul>  - 'chkShtTypeName': Name of the check sheet type (string).</ul>
        <ul>  - 'path': Path of the check sheet (string).</ul>
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

