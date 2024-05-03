---
id: addMode
title: system.kanoa.asset.addMode
hide_table_of_contents: true
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaOPS</b> module</PurpleBox>
<HeaderBox header="Description">Adds a new mode (kanoaOPS).</HeaderBox>
<HeaderBox header="Syntax">
    <b>addMode(modeInfo, userId)</b>
    <li> Parameters <br />
        <ul>modeInfo (dictionary) - Dictionary containing mode information.</ul>
        <ul>userId (int) - User ID for tracking changes.</ul>
    </li>
    <li> Returns <br />
        <ul>modeId (int).</ul>
    </li>
</HeaderBox>

### Code Examples

```python
# Example Usage:
mode_info = {
    'modeName': 'NewMode',
    'modeTypeId': 1,
    'enabled': True,
    'canSelect': True,
    'canSchedule': False,
    'modeColor': '#00FF00',
    'iconPath': '/path/to/icon'
}
user_id = 5
mode_id = system.kanoa.asset.addMode(mode_info, user_id)

