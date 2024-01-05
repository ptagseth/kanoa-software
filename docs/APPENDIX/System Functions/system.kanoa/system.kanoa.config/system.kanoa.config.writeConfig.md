---
id: writeConfig
title: system.kanoa.config.writeConfig
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaCore</b> module</PurpleBox>
<HeaderBox header="Description">Get the application configuration settings (kanoaCore).</HeaderBox>
<HeaderBox header="Syntax">
    <b>writeConfig(project, configName, configValue)</b>
    <li>Parameters <br />
        <ul>project (String) - Name of the associated project.</ul>
        <ul>configName (String) - Name of the configuration parameter.</ul>
        <ul>configValue (String) - Value of the parameter.</ul>
    </li>
    <li>Returns <br />
        <ul>Record ID (Integer).</ul>
    </li>
</HeaderBox>

### Code Example

```python
# Example Usage:
recordId = writeConfig('kanoaCore', 'backgroundColor', '#FFFFFF')
