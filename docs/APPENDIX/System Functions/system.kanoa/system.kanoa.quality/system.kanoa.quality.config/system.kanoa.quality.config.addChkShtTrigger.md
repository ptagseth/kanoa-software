---
id: addChkShtTrigger
title: system.kanoa.quality.config.addChkShtTrigger
hide_table_of_contents: true
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaQDS</b> module</PurpleBox>
<HeaderBox header="Description">Adds a check sheet trigger in KanoaQDS.</HeaderBox>
<HeaderBox header="Syntax">
    <b>addChkShtTrigger(triggerInfo, userId)</b>
    <li> Parameters <br />
        <ul>dict triggerInfo - Dictionary with trigger details, e.g., &#123;'chkShtId': 4,'triggerTypeId':2, 'modeId': None, 'shiftNameId': None, 'intervalMins': 10, 'delayMins': 5, 'productionCount': None, 'comingDueMins': 5, 'overDueMins': 5, 'graceMins': 10, 'enabled': True, 'modifier': None}</ul>
        <ul>int userId - User ID.</ul>
    </li>
    <li> Returns <br />
        <ul>int chkShtTriggerId - ID of the added check sheet trigger.</ul>
    </li>
</HeaderBox>

### Code Examples
```python
# Usage example
trigger_info = {'chkShtId': 4,'triggerTypeId':2, 'modeId': None, 'shiftNameId': None, 'intervalMins': 10, 'delayMins': 5, 'productionCount': None, 'comingDueMins': 5, 'overDueMins': 5, 'graceMins': 10, 'enabled': True, 'modifier': None}
user_id = 123
added_chk_sht_trigger_id = system.kanoa.quality.config.addChkShtTrigger(triggerInfo=trigger_info, userId=user_id)

print(f"Added check sheet trigger with ID: {added_chk_sht_trigger_id}")

