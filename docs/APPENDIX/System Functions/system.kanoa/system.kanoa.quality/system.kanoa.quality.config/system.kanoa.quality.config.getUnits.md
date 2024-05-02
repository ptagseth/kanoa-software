---
id: getUnits
title: system.kanoa.quality.config.getUnits
hide_table_of_contents: true
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaQDS</b> module</PurpleBox>
<HeaderBox header="Description">Returns engineering units that meet the passed criteria in KanoaQDS.</HeaderBox>
<HeaderBox header="Syntax">
    <b>getUnits(paramsDict)</b>
    <li> Parameters <br />
        <ul>dict paramsDict - Dictionary with optional parameters, e.g., &#123;'engUnitId': 1, 'engUnitName': 'some unit', 'enabled': True}</ul>
    </li>
    <li> Returns <br />
        <ul>pyDataset unitsData - Units data.</ul>
    </li>
</HeaderBox>

### Code Examples
```python
# Usage example
params_dict_units = {'engUnitId': 1, 'engUnitName': 'some unit', 'enabled': True}
units_data = system.kanoa.quality.config.getUnits(paramsDict=params_dict_units)

# Process the retrieved data
for row in units_data:
    print(row['engUnitId'], row['engUnitName'], row['enabled'])

