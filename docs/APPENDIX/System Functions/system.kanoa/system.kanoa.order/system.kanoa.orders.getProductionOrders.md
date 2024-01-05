---
id: getProductionOrders
title: system.kanoa.order.getProductionOrders
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaCore</b> module</PurpleBox>
<HeaderBox header="Description">Returns production orders linked to assets for given parameters (kanoaCore).</HeaderBox>
<HeaderBox header="Syntax">
    <b>getProductionOrders(paramsDict)</b>
    <li>Parameters <br />
        <ul>paramsDict (Dictionary) - Parameters to filter production orders.</ul>
    </li>
    <li>Returns <br />
        <ul>Basic Dataset.</ul>
    </li>
</HeaderBox>

### Code Example

```python
# Example Usage:
productionOrders = getProductionOrders({'enabled': True, 'assetPath': 'Kanoa Industries%', ...})

