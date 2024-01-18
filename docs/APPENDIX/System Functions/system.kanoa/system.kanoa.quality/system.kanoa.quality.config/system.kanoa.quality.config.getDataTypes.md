---
id: getDataTypes
title: system.kanoa.quality.config.getDataTypes
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaQDS</b> module</PurpleBox>
<HeaderBox header="Description">Returns data types in KanoaQDS.</HeaderBox>
<HeaderBox header="Syntax">
    <b>getDataTypes(paramsDict)</b>
    <li> Parameters <br />
        <ul>dict paramsDict - Dictionary with optional parameters, e.g., &#123;'dataTypeId': 1, 'dataTypeName': 'Special Bool', 'enabled': True}</ul>
    </li>
    <li> Returns <br />
        <ul>pyDataset dataTypeData - Data type data.</ul>
    </li>
</HeaderBox>

### Code Examples
```python
# Usage example
params_dict = {'dataTypeId': 1, 'dataTypeName': 'Special Bool', 'enabled': True}
data_type_data = system.kanoa.quality.config.getDataTypes(paramsDict=params_dict)

# Process the retrieved data
for row in data_type_data:
    print(row['dataTypeId'], row['dataTypeName'], row['enabled'], row['isNumeric'], row['pickListEnabled'], row['isTriggerType'])

