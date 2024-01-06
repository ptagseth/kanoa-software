---
id: getUserFunctions
title: system.kanoa.security.getUserFunctions
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaConfig</b> module</PurpleBox>
<HeaderBox header="Description">Returns user functions filtered by key values passed in the paramsDict.</HeaderBox>
<HeaderBox header="Syntax">
    <b>getUserFunctions(paramsDict)</b>
    <li>Parameters <br />
        <ul>paramsDict (Dictionary) - Dictionary with keys such as functionName, label, functionId, enabled, and category.</ul>
    </li>
    <li>Returns <br />
        <ul>PyDataSet.</ul>
    </li>
</HeaderBox>

### Code Example

```python
# Example Usage:
userFunctionData = system.kanoa.security.getUserFunctions({'functionName': 'configureAssets', 'label': 'Configure Assets', 'functionId': 7, 'enabled': True})

