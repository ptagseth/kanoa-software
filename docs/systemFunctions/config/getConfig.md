---
id: getConfig
title: system.kanoa.config.getConfig
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaCore</b> module</PurpleBox>
<HeaderBox header="Description">Get the application configuration settings (kanoaCore).</HeaderBox>
<HeaderBox header="Syntax">
    <b>getConfig(paramsDict)</b>
    <li>Parameters <br />
        <ul>paramsDict (Dictionary) - Dictionary containing parameters (e.g., &#123;'project': 'kanoaCore', 'configName': 'backgroundColor'}).</ul>
    </li>
    <li>Returns <br />
        <ul>Dataset - Resulting dataset.</ul>
    </li>
</HeaderBox>

### Code Example

```python
# Example Usage:
configData = system.kanoa.config.getConfig({'project': 'kanoaCore', 'configName': 'backgroundColor'})

```