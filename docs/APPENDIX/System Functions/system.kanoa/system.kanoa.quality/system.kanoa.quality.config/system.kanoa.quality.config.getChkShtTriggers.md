---
id: getChkShtTriggers
title: system.kanoa.quality.config.getChkShtTriggers
hide_table_of_contents: true
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaQDS</b> module</PurpleBox>
<HeaderBox header="Description">Returns all check sheet triggers that meet the passed criteria in KanoaQDS.</HeaderBox>
<HeaderBox header="Syntax">
    <b>getChkShtTriggers(paramsDict)</b>
    <li> Parameters <br />
        <ul>dict paramsDict - Dictionary with optional parameters, e.g., &#123;'chkShtTriggerId': 1, 'triggerTypeName': 'some trigger', 'chkShtId': 4, 'chkShtName': 'some check sheet', 'enabled': True, 'shiftName': 'Shift 1', 'shiftNameId': 4}</ul>
    </li>
    <li> Returns <br />
        <ul>pyDataset chkShtTriggersData - Check sheet triggers data.</ul>
    </li>
</HeaderBox>

### Code Examples
```python
# Usage example
params_dict_chk_sht_triggers = {'chkShtTriggerId': 1, 'triggerTypeName': 'some trigger', 'chkShtId': 4, 'chkShtName': 'some check sheet', 'enabled': True, 'shiftName': 'Shift 1', 'shiftNameId': 4}
chk_sht_triggers_data = system.kanoa.quality.config.getChkShtTriggers(paramsDict=params_dict_chk_sht_triggers)

# Process the retrieved data
for row in chk_sht_triggers_data:
    print(row['chkShtTriggerId'], row['chkShtId'], row['triggerTypeId'], row['triggerTypeName'], row['shiftName'])

