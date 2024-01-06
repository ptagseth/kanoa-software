---
id: getTagProvider
title: system.kanoa.config.getTagProvider
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaCore</b> module</PurpleBox>
<HeaderBox header="Description">Get the tag provider name (kanoaCore).</HeaderBox>
<HeaderBox header="Syntax">
    <b>getTagProvider(app)</b>
    <li>Parameters <br />
        <ul>app (String) - Application name (e.g., 'core', 'mes', 'qds').</ul>
    </li>
    <li>Returns <br />
        <ul>Tag Provider Name (String).</ul>
    </li>
</HeaderBox>

### Code Example

```python
# Example Usage:
tagProvider = system.kanoa.config.getTagProvider('core')