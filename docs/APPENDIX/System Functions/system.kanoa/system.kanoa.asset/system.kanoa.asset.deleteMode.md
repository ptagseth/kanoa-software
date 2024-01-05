---
id: deleteMode
title: system.kanoa.asset.deleteMode
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaOPS</b> module</PurpleBox>
<HeaderBox header="Description">Delete an asset mode. If the mode has been used, then we must just set the enabled property to False (kanoaOPS).</HeaderBox>
<HeaderBox header="Syntax">
    <b>deleteMode(modeId, userId)</b>
    <li> Parameters <br />
        <ul>modeId (int) - ID of the mode to be deleted.</ul>
        <ul>userId (int) - User ID.</ul>
    </li>
    <li> Returns <br />
        <ul># of records modified (int).</ul>
    </li>
</HeaderBox>

### Code Examples

```python
# Example Usage:
mode_id = 123
user_id = 456
records_modified, message = deleteMode(mode_id, user_id)
