---
id: getModeSourceId
title: system.kanoa.asset.getModeSourceId
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaOPS</b> module</PurpleBox>
<HeaderBox header="Description">Returns the modeSourceId for a given modeSourceName. Used to store info on who set the modeEvent i.e. Operator, schedule, plc, etc. (kanoaOPS)</HeaderBox>
<HeaderBox header="Syntax">
    <b>getModeSourceId(modeSourceName)</b>
    <li> Parameters <br />
        <ul>modeSourceName (string) - The name of the mode source</ul>
    </li>
    <li> Returns <br />
        <ul>modeSourceId (int) - The ID corresponding to the modeSourceName</ul>
    </li>
</HeaderBox>

### Code Examples

```python
# Example Usage:
mode_source_id = system.kanoa.asset.getModeSourceId('Operator')
print(f"The modeSourceId for 'Operator' is {mode_source_id}.")

