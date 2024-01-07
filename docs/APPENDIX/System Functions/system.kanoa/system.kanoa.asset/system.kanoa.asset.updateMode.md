---
id: updateMode
title: system.kanoa.asset.updateMode
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaOPS</b> module</PurpleBox>
<HeaderBox header="Description">Updates the mode and also updates the enabled bit for any asset mode links in case the enabled mode has changed (kanoaOPS).</HeaderBox>
<HeaderBox header="Syntax">
    <b>updateMode(modeInfo, userId)</b>
    <li> Parameters <br />
        <ul>modeInfo (dict) - A dictionary containing mode information with the following keys:<br />
            - 'modeName' (str): Name of the mode.<br />
            - 'modeTypeId' (int): ID of the mode type.<br />
            - 'enabled' (bool): Enabled status of the mode.<br />
            - 'canSelect' (bool): Whether mode can be selected.<br />
            - 'canSchedule' (bool): Whether mode can be scheduled.<br />
            - 'modeColor' (str): Color code for the mode.<br />
            - 'iconPath' (str): Path to the mode's icon.<br />
            - 'modeId' (int): ID of the mode to be updated.<br />
        </ul>
        <ul>userId (int) - ID of the user performing the update.</ul>
    </li>
    <li> Returns <br />
        <ul>modeId (int) - ID of the updated mode.</ul>
    </li>
</HeaderBox>

### Code Examples

```python
# Example Usage:
mode_info = {
    'modeName': 'Updated Mode',
    'modeTypeId': 2,
    'enabled': True,
    'canSelect': True,
    'canSchedule': False,
    'modeColor': '#FF0000',
    'iconPath': '/path/to/icon.png',
    'modeId': 10
}
user_id = 123
updated_mode_id = system.kanoa.asset.updateMode(mode_info, user_id)