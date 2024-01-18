---
id: getAttributes
title: system.kanoa.quality.config.getAttributes
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaQDS</b> module</PurpleBox>
<HeaderBox header="Description">Returns attributes based on the passed parameters in KanoaQDS.</HeaderBox>
<HeaderBox header="Syntax">
    <b>getAttributes(paramsDict)</b>
    <li> Parameters <br />
        <ul>dict paramsDict - Dictionary, e.g., &#123;'path': 'somePath', 'enabled': True, 'attributeName': 'some attribute name', &#123;'attributeId': 1, 'parentId': 6}</ul>
    </li>
    <li> Returns <br />
        <ul>pyDataset data - Dataset containing attribute information.</ul>
    </li>
</HeaderBox>

### Code Examples
```python
# Usage example
attributes_params = {'path': 'somePath', 'enabled': True, 'attributeName': 'some attribute name', 'attributeId': 1, 'parentId': 6}
attributes_data = system.kanoa.quality.config.getAttributes(paramsDict=attributes_params)

# Accessing data in the dataset
for row in attributes_data:
    print(f"Attribute ID: {row['attributeId']}, Name: {row['attributeName']}, Enabled: {row['enabled']}")

