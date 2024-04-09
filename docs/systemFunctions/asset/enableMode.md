---
id: enableMode
title: system.kanoa.asset.enableMode
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaOPS</b> module</PurpleBox>
<HeaderBox header="Description">Change the enabled mode of a mode (kanoaOPS).</HeaderBox>
<HeaderBox header="Syntax">
    <b>enableMode(modeId, enabled)</b>
    <li> Parameters <br />
        <ul>modeId (int) - ID of the mode.</ul>
        <ul>enabled (bool) - Boolean indicating whether the mode should be enabled or disabled.</ul>
    </li>
    <li> Returns <br />
        <ul># of records modified (int).</ul>
    </li>
</HeaderBox>

### Code Examples

```python
# Example Usage:
mode_id = 123
enabled = True
records_modified = system.kanoa.asset.enableMode(mode_id, enabled)
