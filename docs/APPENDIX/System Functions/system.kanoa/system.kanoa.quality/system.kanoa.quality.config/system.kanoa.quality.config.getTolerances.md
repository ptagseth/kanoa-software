---
id: getTolerances
title: system.kanoa.quality.config.getTolerances
hide_table_of_contents: true
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaQDS</b> module</PurpleBox>
<HeaderBox header="Description">Returns attribute tolerances based on the passed parameters in KanoaQDS.</HeaderBox>
<HeaderBox header="Syntax">
    <b>getTolerances(paramsDict)</b>
    <li> Parameters <br />
        <ul>dict paramsDict - Dictionary, e.g., &#123;'enabled': True, 'attributeId': 1, 'attributeName': 'ph', 'path': 'Chemical Tanks\ph', 'attributeToleranceId': 3, 'assetId': 2, 'itemId':54, 'itemClassId': 34, 'itemSetId':6}</ul>
    </li>
    <li> Returns <br />
        <ul>pyDataset data - Dataset containing attribute tolerance information.</ul>
    </li>
</HeaderBox>

### Code Examples
```python
# Usage example
tolerance_params = {'enabled': True, 'attributeId': 1, 'attributeName': 'ph', 'path': 'Chemical Tanks\ph', 'attributeToleranceId': 3, 'assetId': 2, 'itemId': 54, 'itemClassId': 34, 'itemSetId': 6}
tolerance_data = system.kanoa.quality.config.getTolerances(paramsDict=tolerance_params)

# Accessing data in the dataset
for row in tolerance_data:
    print(f"Attribute Tolerance ID: {row['attributeToleranceId']}, Attribute Name: {row['attributeName']}, Path: {row['path']}, Enabled: {row['enabled']}")

