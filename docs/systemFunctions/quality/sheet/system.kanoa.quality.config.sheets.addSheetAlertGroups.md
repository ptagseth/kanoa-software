---
id: addSheetAlertGroups
title: system.kanoa.quality.config.sheets.addSheetAlertGroups
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaQDS</b> module</PurpleBox>
<HeaderBox header="Description">Adds links between a check sheet and a list of alert groups in KanoaQDS.</HeaderBox>
<HeaderBox header="Syntax">
    <b>addSheetAlertGroups(chkShtId, alertGroupIdList, userId)</b>
    <li> Parameters <br />
        <ul>chkShtId - ID of the check sheet (int).</ul>
        <ul>alertGroupIdList - List of alert group IDs (list of int).</ul>
        <ul>userId - User ID (int).</ul>
    </li>
    <li> Returns <br />
        <ul># of records created - Number of records created (int).</ul>
    </li>
</HeaderBox>

### Code Example
```python
# Usage example
chk_sht_id = 56
alert_group_id_list = [1, 2, 3]
user_id = 123
records_created = system.kanoa.quality.config.sheets.addSheetAlertGroups(chkShtId=chk_sht_id, alertGroupIdList=alert_group_id_list, userId=user_id)

print(records_created)
