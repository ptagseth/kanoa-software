---
id: deleteState
title: system.kanoa.asset.deleteState
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaOPS</b> module</PurpleBox>
<HeaderBox header="Description">Deletes an asset state. If the state has been used, it sets the enabled property to False (kanoaOPS).</HeaderBox>
<HeaderBox header="Syntax">
    <b>deleteState(stateId)</b>
    <li> Parameters <br />
        <ul>stateId (int) - ID of the asset state to be deleted.</ul>
    </li>
    <li> Returns <br />
        <ul>records modified (int) - Number of records modified.</ul>
        <ul>msg (str) - Status message ('Deleted' or 'Disabled').</ul>
    </li>
</HeaderBox>

### Code Examples

```python
# Example Usage:
state_id = 1
records_modified, status_msg = system.kanoa.asset.deleteState(state_id)
