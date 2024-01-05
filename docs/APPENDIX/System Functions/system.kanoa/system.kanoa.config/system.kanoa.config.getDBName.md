---
id: getDBName
title: system.kanoa.config.getDBName
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaCore</b> module</PurpleBox>
<HeaderBox header="Description">Get the database name source (kanoaCore).</HeaderBox>
<HeaderBox header="Syntax">
    <b>getDBName(app)</b>
    <li>Parameters <br />
        <ul>app (String) - Application name (e.g., 'core', 'mes', 'qds').</ul>
    </li>
    <li>Returns <br />
        <ul>Database Name (String).</ul>
    </li>
</HeaderBox>

### Code Example

```python
# Example Usage:
dbName = getDBName('core')