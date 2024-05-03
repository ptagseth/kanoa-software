---
id: getConfig
title: system.kanoa.security.getConfig
hide_table_of_contents: true
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaCore</b> module</PurpleBox>
<HeaderBox header="Description">Returns security configuration based on the provided parameters.</HeaderBox>
<HeaderBox header="Syntax">
    <b>getConfig(paramsDict)</b>
    <li>Parameters <br />
        <ul>paramsDict (Dictionary) - Dictionary with keys such as configId and configName.</ul>
    </li>
    <li>Returns <br />
        <ul>PyDataSet.</ul>
    </li>
</HeaderBox>

### Code Example

```python
# Example Usage:
configData = system.kanoa.security.getConfig({'configId': 1, 'configName': 'SecurityConfig'})
