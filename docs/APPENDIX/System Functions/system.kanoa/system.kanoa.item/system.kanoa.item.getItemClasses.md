---
id: getItemClasses
title: system.kanoa.item.getItemClasses
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaCore</b> module</PurpleBox>
<HeaderBox header="Description">Returns itemClass info for given parameters (kanoaCore).</HeaderBox>
<HeaderBox header="Syntax">
    <b>getItemClasses(paramsDict)</b>
    <li>Parameters <br />
        <ul>paramsDict (Dictionary) - Dictionary containing filter parameters.</ul>
    </li>
    <li>Returns <br />
        <ul>pyDataset.</ul>
    </li>
</HeaderBox>

### Code Examples

```python
# Example Usage:
parameters = {
    'enabled': True,
    'itemClassName': 'FG',
    'itemClassPath': 'FG\Bread%',
    'itemClassId': 1,
    'itemClassIdList': [1, 2, 3]
}
itemClassesData = getItemClasses(parameters)