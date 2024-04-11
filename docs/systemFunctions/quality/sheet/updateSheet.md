---
id: updateSheet
title: system.kanoa.quality.config.sheets.updateSheet
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaQDS</b> module</PurpleBox>
<HeaderBox header="Description">Updates a check sheet in KanoaQDS.</HeaderBox>
<HeaderBox header="Syntax">
    <b>updateSheet(chkShtInfo, userId)</b>
    <li> Parameters <br />
        <ul>chkShtInfo - Dictionary containing check sheet information:</ul>
        <ul>  - 'chkShtId': ID of the check sheet (int).</ul>
        <ul>  - 'chkShtTypeId': ID of the check sheet type (int).</ul>
        <ul>  - 'chkShtName': Name of the check sheet (string).</ul>
        <ul>  - 'procName': Process name (string, optional).</ul>
        <ul>  - 'description': Description of the check sheet (string, optional).</ul>
        <ul>  - 'instructions': Instructions for the check sheet (string, optional).</ul>
        <ul>  - 'enabled': True to enable the check sheet (bool).</ul>
        <ul>  - 'assetReqd': True if asset is required (bool).</ul>
        <ul>  - 'itemReqd': True if item is required (bool).</ul>
        <ul>  - 'auto': True if auto (bool).</ul>
        <ul>  - 'reTestChkShtId': ID of the re-test check sheet (int, optional).</ul>
        <ul>  - 'reTestMins': Minutes for re-test (int, optional).</ul>
        <ul>  - 'signOffReqd': True if sign-off is required (bool, optional).</ul>
        <ul>  - 'durationSeconds': Duration in seconds (int, optional).</ul>
        <ul>  - 'takenDateChkItemId': ID of the taken date check item (int, optional).</ul>
        <ul>userId - User ID (int).</ul>
    </li>
    <li> Returns <br />
        <ul># of records modified - Number of records modified (int).</ul>
    </li>
</HeaderBox>

### Code Example
```python
# Usage example
chk_sht_info = {'chkShtId': 56, 'chkShtTypeId': 2, 'chkShtName': 'some name', 'procName': None, 'description': None, 'instructions': None, 'enabled': True, 'assetReqd': False, 'itemReqd': False, 'auto': False, 'reTestChkShtId': None, 'reTestMins': None, 'signOffReqd': None, 'durationSeconds': None, 'takenDateChkItemId': None}
records_modified = system.kanoa.quality.config.sheets.updateSheet(chkShtInfo=chk_sht_info, userId=123)

print(records_modified)
