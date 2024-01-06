---
id: getStateCategory
title: system.kanoa.asset.getStateCategory
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaOPS</b> module</PurpleBox>
<HeaderBox header="Description">Gets State category data (kanoaOPS).</HeaderBox>
<HeaderBox header="Syntax">
    <b>getStateCategory(paramsDict)</b>
    <li> Parameters <br />
        <ul>paramsDict (dict) - Dictionary containing filter parameters.</ul>
    </li>
    <li> Returns <br />
        <ul>data (pyDataset).</ul>
    </li>
</HeaderBox>

### Code Examples

```python
# Example Usage:
parameters = {
    'enabled': True,
    'stateCategoryId': 1,
    'stateCategoryName': 'Electrical'
}
state_category_data = system.kanoa.asset.getStateCategory(parameters)
