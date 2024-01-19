---
id: updateSheet
title: system.kanoa.qds.config.sheets.updateSheet
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaQDS</b> module</PurpleBox>
<HeaderBox header="Description">Updates a check sheet in KanoaQDS.</HeaderBox>
<HeaderBox header="Syntax">
    <b>updateSheet(chkShtInfo, userId)</b>
    <li> Parameters <br />
        <ul>
            <li>chkShtInfo - Dictionary containing check sheet information:</li>
            <li>  - 'chkShtId': ID of the check sheet (int).</li>
            <li>  - 'chkShtTypeId': ID of the check sheet type (int).</li>
            <li>  - 'chkShtName': Name of the check sheet (string).</li>
            <li>  - 'procName': Process name (string, optional).</li>
            <li>  - 'description': Description of the check sheet (string, optional).</li>
            <li>  - 'instructions': Instructions for the check sheet (string, optional).</li>
            <li>  - 'enabled': True to enable the check sheet (bool).</li>
            <li>  - 'assetReqd': True if asset is required (bool).</li>
            <li>  - 'itemReqd': True if item is required (bool).</li>
            <li>  - 'auto': True if auto (bool).</li>
            <li>  - 'reTestChkShtId': ID of the re-test check sheet (int, optional).</li>
            <li>  - 'reTestMins': Minutes for re-test (int, optional).</li>
            <li>  - 'signOffReqd': True if sign-off is required (bool, optional).</li>
            <li>  - 'durationSeconds': Duration in seconds (int, optional).</li>
            <li>  - 'takenDateChkItemId': ID of the taken date check item (int, optional).</li>
            <li>userId - User ID (int).</li>
        </ul>
    </li>
    <li> Returns <br />
        <ul># of records modified - Number of records modified (int).</ul>
    </li>
</HeaderBox>

### Code Example
```python
# Usage example
chk_sht_info = {'chkShtId': 56, 'chkShtTypeId': 2, 'chkShtName': 'some name', 'procName': None, 'description': None, 'instructions': None, 'enabled': True, 'assetReqd': False, 'itemReqd': False, 'auto': False, 'reTestChkShtId': None, 'reTestMins': None, 'signOffReqd': None, 'durationSeconds': None, 'takenDateChkItemId': None}
records_modified = system.kanoa.qds.config.sheets.updateSheet(chkShtInfo=chk_sht_info, userId=123)

print(records_modified)
