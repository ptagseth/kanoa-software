---
id: getAlertGroups
title: system.kanoa.quality.config.getAlertGroups
hide_table_of_contents: true
---
import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaQDS</b> module</PurpleBox>
<HeaderBox header="Description">Returns alert groups in KanoaQDS.</HeaderBox>
<HeaderBox header="Syntax">
    <b>getAlertGroups(paramsDict)</b>
    <li> Parameters <br />
        <ul>dict paramsDict - Dictionary, e.g., &#123;'enabled': True, 'alertGroupId': 1, 'alertGroupName' : 'Quality'}</ul>
    </li>
    <li> Returns <br />
        <ul>pyDataset data - Dataset containing alert group information.</ul>
    </li>
</HeaderBox>

### Code Examples
```python
# Usage example
params_dict = {'enabled': True, 'alertGroupId': 1, 'alertGroupName': 'Quality'}
alert_groups_data = system.kanoa.quality.config.getAlertGroups(paramsDict=params_dict)

# Accessing data in the dataset
for row in alert_groups_data:
    print(f"Alert Group ID: {row['alertGroupId']}, Name: {row['alertGroupName']}, Enabled: {row['enabled']}")

