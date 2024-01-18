---
id: addAlertGroup
title: system.kanoa.quality.config.addAlertGroup
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaQDS</b> module</PurpleBox>
<HeaderBox header="Description">Adds a new alert group in KanoaQDS.</HeaderBox>
<HeaderBox header="Syntax">
    <b>addAlertGroup(grpInfo, userId)</b>
    <li> Parameters <br />
        <ul>dict grpInfo - Dictionary, e.g., &#123;'alertGroupName' : 'Quality', 'emailList': ['quality@kanoa.com', 'operations@kanoa.com'], 'enabled': True}</ul>
        <ul>int userId - User ID</ul>
    </li>
    <li> Returns <br />
        <ul>int alertGroupId - ID of the newly added alert group.</ul>
    </li>
</HeaderBox>

### Code Examples
```python
# Usage example
group_info = {'alertGroupName': 'Quality', 'emailList': ['quality@kanoa.com', 'operations@kanoa.com'], 'enabled': True}
new_alert_group_id = system.kanoa.quality.config.addAlertGroup(grpInfo=group_info, userId=123)

if new_alert_group_id is not None:
    print(f"Successfully added alert group with ID: {new_alert_group_id}")

