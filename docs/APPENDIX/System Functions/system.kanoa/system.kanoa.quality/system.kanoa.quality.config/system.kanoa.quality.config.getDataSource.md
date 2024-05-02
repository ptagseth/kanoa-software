---
id: getDataSource
title: system.kanoa.quality.config.getDataSource
hide_table_of_contents: true
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaQDS</b> module</PurpleBox>
<HeaderBox header="Description">Returns attribute datasources based on the passed parameters in KanoaQDS.</HeaderBox>
<HeaderBox header="Syntax">
    <b>getDataSource(paramsDict)</b>
    <li> Parameters <br />
        <ul>dict paramsDict - Dictionary with optional parameters, e.g., &#123;'assetId': 18, 'enabled': True, 'attributeName': 'some attribute', 'attributeId': 7}</ul>
    </li>
    <li> Returns <br />
        <ul>pyDataset dataSourceData - Dataset containing attribute datasources.</ul>
    </li>
</HeaderBox>

### Code Examples
```python
# Usage example
params = {'assetId': 18, 'enabled': True, 'attributeName': 'some attribute', 'attributeId': 7}
data_source_data = system.kanoa.quality.config.getDataSource(paramsDict=params)

# Accessing data in the dataset
for row in data_source_data:
    print(f"AttributeDataSource ID: {row['attributeDataSourceId']}, Attribute ID: {row['attributeId']}, Asset ID: {row['assetId']}")

