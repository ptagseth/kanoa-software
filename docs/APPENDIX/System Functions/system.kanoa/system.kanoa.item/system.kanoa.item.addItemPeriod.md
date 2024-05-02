---
id: addItemPeriod
title: system.kanoa.item.addItemPeriod
hide_table_of_contents: true
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaOPS</b> module</PurpleBox>
<HeaderBox header="Description">Adds the period if it doesn't already exist (kanoaOPS).</HeaderBox>
<HeaderBox header="Syntax">
    <b>addItemPeriod(periodInfo, userId)</b>
    <li>Parameters <br />
        <ul>periodInfo (Dictionary) - Dictionary containing period information (e.g., &#123;'itemPeriodName': 'second', 'enabled': True}).</ul>
        <ul>userId (Integer) - User ID.</ul>
    </li>
    <li>Returns <br />
        <ul>itemPeriodId (Integer) - ID of the added item period.</ul>
    </li>
</HeaderBox>

### Code Examples

```python
# Example Usage:
newItemPeriodId = system.kanoa.item.addItemPeriod({'itemPeriodName': 'second', 'enabled': True}, 123)
