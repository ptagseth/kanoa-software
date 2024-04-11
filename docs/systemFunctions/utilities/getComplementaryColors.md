---
id: getComplementaryColors
title: system.kanoa.utilities.getComplementaryColors
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaCore</b> module</PurpleBox>
<HeaderBox header="Description">This function will return a list of ordered colors which are tetradic complements of the provided RGB value (kanoaCore).</HeaderBox>
<HeaderBox header="Syntax">
    <b>getComplementaryColors(count, r, g, b)</b>
    <li>Parameters <br />
        <ul>count (Int) - The number of colors to be returned.</ul>
        <ul>r (Int) - Source color red component.</ul>
        <ul>g (Int) - Source color green component.</ul>
        <ul>b (Int) - Source color blue component.</ul>
    </li>
    <li>Returns <br />
        <ul>colors (List) - List of complementary colors.</ul>
    </li>
</HeaderBox>

### Code Example

```python
# Example Usage:
complementary_colors = system.kanoa.utilities.getComplementaryColors(5, 255, 0, 0)

