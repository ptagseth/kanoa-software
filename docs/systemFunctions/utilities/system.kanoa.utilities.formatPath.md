---
id: formatPath
title: system.kanoa.utilities.formatPath
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaCore</b> module</PurpleBox>
<HeaderBox header="Description">Takes a string 'path' and replaces the split key with the delimiter (kanoaCore).</HeaderBox>
<HeaderBox header="Syntax">
    <b>formatPath(path, paramsDict)</b>
    <li>Parameters <br />
        <ul>path (String) - The input path string, e.g., 'Kanoa Industries\\Adelaide Hills'.</ul>
        <ul>paramsDict (Dictionary) - A dictionary containing optional parameters: 'drop', 'splitKey', 'delimiter', 'locale'.</ul>
    </li>
    <li>Returns <br />
        <ul>newPath (String) - The formatted path string.</ul>
    </li>
</HeaderBox>

### Code Example

```python
# Example Usage:
formatted_path = system.kanoa.utilities.formatPath('Kanoa Industries\\Adelaide Hills', {'drop': 'Kanoa Industries', 'splitKey': '\\', 'delimiter': ' > ', 'locale': None})

