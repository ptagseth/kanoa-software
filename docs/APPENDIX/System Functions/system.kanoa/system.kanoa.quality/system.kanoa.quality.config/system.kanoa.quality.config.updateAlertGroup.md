---
id: updateAlertGroup
title: system.kanoa.quality.config.updateAlertGroup
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaQDS</b> module</PurpleBox>
<HeaderBox header="Description">Updates an alert group in KanoaQDS.</HeaderBox>
<HeaderBox header="Syntax">
    <b>updateAlertGroup(grpInfo, userId)</b>
    <li> Parameters <br />
        <ul>dict grpInfo - Dictionary, e.g., &#123;'alertGroupId: 1, 'alertGroupName' : 'Quality', 'emailList': ['quality@kanoa.com', 'operations@kanoa.com'], 'enabled': True}</ul>
        <ul>int userId - User ID</ul>
    </li>
    <li> Returns <br />
        <ul>int alertGroupId - ID of the updated alert group.</ul>
    </li>
</HeaderBox>

### Code Examples
```python
# Usage example
group_info = {'alertGroupId': 1, 'alertGroupName': 'Quality', 'emailList': ['quality@kanoa.com', 'operations@kanoa.com'], 'enabled': True}
updated_alert_group_id = system.kanoa.quality.config.updateAlertGroup(grpInfo=group_info, userId=123)

if updated_alert_group_id is not None:
    print(f"Successfully updated alert group with ID: {updated_alert_group_id}")

