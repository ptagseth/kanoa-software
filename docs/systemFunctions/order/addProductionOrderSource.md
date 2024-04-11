---
id: addProductionOrderSource
title: system.kanoa.order.addProductionOrderSource
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaOPS</b> module</PurpleBox>
<HeaderBox header="Description">Adds a production order source (kanoaOPS).</HeaderBox>
<HeaderBox header="Syntax">
    <b>addProductionOrderSource(workOrderSourceName, userId)</b>
    <li>Parameters <br />
        <ul>workOrderSourceName (String) - Production order source name.</ul>
        <ul>userId (Integer) - User ID.</ul>
    </li>
    <li>Returns <br />
        <ul>Work Order Source ID (Integer).</ul>
    </li>
</HeaderBox>

### Code Example

```python
# Example Usage:
sourceId = system.kanoa.order.addProductionOrderSource('ERP', 123)
