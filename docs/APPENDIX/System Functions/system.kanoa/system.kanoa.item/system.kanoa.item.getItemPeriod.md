---
id: getItemPeriod
title: system.kanoa.item.getItemPeriod
hide_table_of_contents: true
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaOPS</b> module</PurpleBox>
<HeaderBox header="Description">Returns itemPeriod for the given parameters (kanoaOPS).</HeaderBox>
<HeaderBox header="Syntax">
    <b>getItemPeriod(paramsDict)</b>
    <li>Parameters <br />
        <ul>paramsDict (Dictionary) - Dictionary containing parameters (e.g., &#123;'itemPeriodId': 1, 'itemPeriodName': 'Hour'}). </ul>
    </li>
    <li>Returns <br />
        <ul>data (pyDatset) - Resulting dataset.</ul>
    </li>
</HeaderBox>

### Code Examples

```python
# Example Usage:
itemPeriodData = system.kanoa.item.getItemPeriod({'itemPeriodId': 1, 'itemPeriodName': 'Hour'})
