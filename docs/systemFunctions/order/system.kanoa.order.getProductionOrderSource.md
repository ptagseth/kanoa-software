---
id: getProductionOrderSource
title: system.kanoa.order.getProductionOrderSource
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaOps</b> module</PurpleBox>
<HeaderBox header="Description">Returns production order source (kanoaOps).</HeaderBox>
<HeaderBox header="Syntax">
    <b>getProductionOrderSource(paramsDict)</b>
    <li>Parameters <br />
        <ul>paramsDict (Dictionary) - Parameters to filter production order source.</ul>
    </li>
    <li>Returns <br />
        <ul>pyDataset.</ul>
    </li>
</HeaderBox>

### Code Example

```python
# Example Usage:
orderSource = system.kanoa.order.getProductionOrderSource({'enabled': True, 'workOrderSourceId': 1, 'workOrderSourceName': 'ERP'})

