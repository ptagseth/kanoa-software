---
id: getOEEColors
title: system.kanoa.event.getOEEColors
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function is part of a class and requires proper class instantiation.</PurpleBox>
<HeaderBox header="Description">
    Returns colors for OEE, Availability, Performance, and Quality based on the asset and OEE values.
</HeaderBox>
<HeaderBox header="Syntax">
    <b>getOEEColors(paramsDict, oee, availability, performance, quality)</b>
    <li>Parameters <br />
        <ul>
            paramsDict (dict) - Dictionary, e.g., &#123;'assetId': 18} or &#123;'assetPath': 'Kanoa Industries\Adelaide Hills\Packaging\Line 1'}.
            oee (float) - OEE value.
            availability (float) - Availability value.
            performance (float) - Performance value.
            quality (float) - Quality value.
        </ul>
    </li>
    <li>Returns <br />
        oeeColor, aColor, pColor, qColor (tuple of string values for colors).
    </li>
</HeaderBox>

### Code Example

```python
# Example Usage:
colors = system.kanoa.event.getOEEColors(paramsDict={'assetId': 18}, oee=80.0, availability=90.0, performance=85.0, quality=95.0)

