---
id: getItemAttributes
title: system.kanoa.item.getItemAttributes
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaOPS</b> module</PurpleBox>
<HeaderBox header="Description">Returns the item attribute data (kanoaOPS).</HeaderBox>
<HeaderBox header="Syntax">
    <b>getItemAttributes(paramsDict)</b>
    <li>Parameters <br />
        <ul>paramsDict (Dictionary) - Dictionary containing filter parameters (e.g., &#123;'itemAttrName': 'weight', 'itemId': 1}).</ul>
    </li>
    <li>Returns <br />
        <ul>data (pyDataset) - Item attribute data.</ul>
    </li>
</HeaderBox>

### Code Examples

```python
# Example Usage:
attributesData = getItemAttributes({'itemAttrName': 'weight', 'itemId': 1})

