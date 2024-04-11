---
id: RGBtoHex
title: system.kanoa.utilities.RGBtoHex
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaCore</b> module</PurpleBox>
<HeaderBox header="Description">Converts RGB color value to HEX value (kanoaCore).</HeaderBox>
<HeaderBox header="Syntax">
    <b>RGBtoHex(red, green, blue)</b>
    <li>Parameters <br />
        <ul>red (Int) - The red component of the RGB color.</ul>
        <ul>green (Int) - The green component of the RGB color.</ul>
        <ul>blue (Int) - The blue component of the RGB color.</ul>
    </li>
    <li>Returns <br />
        <ul>hexColor (String) - The HEX color value.</ul>
    </li>
</HeaderBox>

### Code Example

```python
# Example Usage:
hex_color = system.kanoa.utilities.RGBtoHex(255, 0, 0)

