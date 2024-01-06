---
id: getContrastingColor
title: system.kanoa.utilities.getContrastingColor
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function is part of a class and requires proper class instantiation.</PurpleBox>
<HeaderBox header="Description">#Input a string of RGB hex digits with hash sign to compute a complementary contrasting color such as for fonts against a background (kanoaCore).</HeaderBox>
<HeaderBox header="Syntax">
    <b>getContrastingColor(hexColor)</b>
    <li>Parameters <br />
        <ul>hexColor (String) - RGB hex digits with a hash sign (e.g., #FF0000).</ul>
    </li>
    <li>Returns <br />
        <ul>hexColor (String) - The contrasting color.</ul>
    </li>
</HeaderBox>

### Code Example

```python
# Example Usage:
contrasting_color = system.kanoa.utilities.getContrastingColor('#FF0000')

