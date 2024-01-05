---
id: updateItemPeriod
title: system.kanoa.item.updateItemPeriod
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaOPS</b> module</PurpleBox>
<HeaderBox header="Description">Updates the item period (kanoaOPS).</HeaderBox>
<HeaderBox header="Syntax">
    <b>updateItemPeriod(periodInfo, userId)</b>
    <li>Parameters <br />
        <ul>periodInfo (Dictionary) - Dictionary containing updated period information (e.g., &#123;'itemPeriodId': 1, 'itemPeriodName': 'second', 'enabled': True}).</ul>
        <ul>userId (Integer) - User ID.</ul>
    </li>
    <li>Returns <br />
        <ul># of records modified (Integer).</ul>
    </li>
</HeaderBox>

### Code Example

```python
# Example Usage:
modifiedRecords = updateItemPeriod({'itemPeriodId': 1, 'itemPeriodName': 'second', 'enabled': True}, 123)

