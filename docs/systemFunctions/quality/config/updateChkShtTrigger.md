---
id: updateChkShtTrigger
title: system.kanoa.quality.config.updateChkShtTrigger
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaQDS</b> module</PurpleBox>
<HeaderBox header="Description">Updates a check sheet trigger in KanoaQDS.</HeaderBox>
<HeaderBox header="Syntax">
    <b>updateChkShtTrigger(triggerInfo, userId)</b>
    <li> Parameters <br />
        <ul>dict triggerInfo - Dictionary with trigger details, e.g., &#123;'chkShtTriggerId': 67,'chkShtId': 4,'triggerTypeId':2, 'modeId': None, 'shiftNameId': None, 'intervalMins': 10, 'delayMins': 5, 'productionCount': None, 'comingDueMins': 5, 'overDueMins': 5, 'graceMins': 10, 'enabled': True, 'modifier': None}</ul>
        <ul>int userId - User ID.</ul>
    </li>
    <li> Returns <br />
        <ul>int recordsModified - Number of records modified.</ul>
    </li>
</HeaderBox>

### Code Examples
```python
# Usage example
trigger_info_update = {'chkShtTriggerId': 67,'chkShtId': 4,'triggerTypeId':2, 'modeId': None, 'shiftNameId': None, 'intervalMins': 10, 'delayMins': 5, 'productionCount': None, 'comingDueMins': 5, 'overDueMins': 5, 'graceMins': 10, 'enabled': True, 'modifier': None}
user_id_update = 123
modified_records_update = system.kanoa.quality.config.updateChkShtTrigger(triggerInfo=trigger_info_update, userId=user_id_update)

print(f"Updated {modified_records_update} records.")
