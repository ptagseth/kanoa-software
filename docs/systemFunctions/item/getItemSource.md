---
id: getItemSource
title: system.kanoa.item.getItemSource
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaCore</b> module</PurpleBox>
<HeaderBox header="Description">Item source filtered by the given parameters (kanoaCore).</HeaderBox>
<HeaderBox header="Syntax">
    <b>getItems(paramsDict)</b>
    <li>Parameters <br />
        <ul>paramsDict (Dictionary) i.e.  &#123;'itemSourceId':1, 'itemSourceName': input', 'enabled': True}.</ul>
    </li>
    <li>Returns <br />
        <ul>data (pyDataset).</ul>
    </li>
</HeaderBox>

### Code Examples

```python
# Example Usage:
parameters = {
    'itemSourceId':1,
    'itemSourceName': input',
    'enabled': True
}
itemSource = system.kanoa.item.getItemSource(parameters)
