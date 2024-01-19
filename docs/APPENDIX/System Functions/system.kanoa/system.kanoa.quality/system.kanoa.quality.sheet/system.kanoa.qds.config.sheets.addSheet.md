---
id: addSheet
title: system.kanoa.qds.config.sheets.addSheet
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaQDS</b> module</PurpleBox>
<HeaderBox header="Description">Adds a new check sheet in KanoaQDS.</HeaderBox>
<HeaderBox header="Syntax">
    <b>addSheet(chkShtInfo, userId)</b>
    <li> Parameters <br />
        <ul>
            <li>chkShtInfo - Dictionary containing check sheet information:</li>
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
        <ul>chkShtTriggerId - ID of the added check sheet (int).</ul>
    </li>
</HeaderBox>

### Code Example
```python
# Usage example
chk_sht_info = {'chkShtTypeId': 2, 'chkShtName': 'some name', 'procName': None, 'description': None, 'instructions': None, 'enabled': True, 'assetReqd': False, 'itemReqd': False, 'auto': False, 'reTestChkShtId': None, 'reTestMins': None, 'signOffReqd': None, 'durationSeconds': None, 'takenDateChkItemId': None}
chk_sht_trigger_id = system.kanoa.qds.config.sheets.addSheet(chkShtInfo=chk_sht_info, userId=123)

print(chk_sht_trigger_id)
