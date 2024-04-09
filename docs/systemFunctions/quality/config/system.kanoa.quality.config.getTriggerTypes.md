---
id: getTriggerTypes
title: system.kanoa.quality.config.getTriggerTypes
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaQDS</b> module</PurpleBox>
<HeaderBox header="Description">Returns all check sheets triggers that meet the passed criteria in KanoaQDS.</HeaderBox>
<HeaderBox header="Syntax">
    <b>getTriggerTypes(paramsDict)</b>
    <li> Parameters <br />
        <ul>dict paramsDict - Dictionary with optional parameters, e.g., &#123;'triggerTypeId': 1, 'triggerTypeName': 'some trigger', 'enabled': True}</ul>
    </li>
    <li> Returns <br />
        <ul>pyDataset triggerTypesData - Trigger types data.</ul>
    </li>
</HeaderBox>

### Code Examples
```python
# Usage example
params_dict_trigger_types = {'triggerTypeId': 1, 'triggerTypeName': 'some trigger', 'enabled': True}
trigger_types_data = system.kanoa.quality.config.getTriggerTypes(paramsDict=params_dict_trigger_types)

# Process the retrieved data
for row in trigger_types_data:
    print(row['triggerTypeId'], row['triggerTypeName'], row['enabled'])

