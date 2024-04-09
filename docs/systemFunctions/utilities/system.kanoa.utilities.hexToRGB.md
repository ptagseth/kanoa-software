---
id: hexToRGB
title: system.kanoa.utilities.hexToRGB
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaCore</b> module</PurpleBox>
<HeaderBox header="Description">Converts HEX value to RGB color value (kanoaCore).</HeaderBox>
<HeaderBox header="Syntax">
    <b>hexToRGB(hexNumber)</b>
    <li>Parameters <br />
        <ul>hexNumber (String) - The HEX color value.</ul>
    </li>
    <li>Returns <br />
        <ul>rgb (Tuple) - A tuple representing the RGB color values.</ul>
    </li>
</HeaderBox>

### Code Example

```python
# Example Usage:
rgb_values = system.kanoa.utilities.hexToRGB('#FF0000')

