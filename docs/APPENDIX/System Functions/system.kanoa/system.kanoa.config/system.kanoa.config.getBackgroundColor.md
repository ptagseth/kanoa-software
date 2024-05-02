---
id: getBackgroundColor
title: system.kanoa.config.getBackgroundColor
hide_table_of_contents: true
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaCore</b> module</PurpleBox>
<HeaderBox header="Description">Get the background color from the database (kanoaCore).</HeaderBox>
<HeaderBox header="Syntax">
    <b>getBackgroundColor(theme)</b>
    <li>Parameters <br />
        <ul>theme (String) - Theme name (e.g., 'dark').</ul>
    </li>
    <li>Returns <br />
        <ul>The color stored in the database (String).</ul>
    </li>
</HeaderBox>

### Code Example

```python
# Example Usage:
bgColor = system.kanoa.config.getBackgroundColor('light')