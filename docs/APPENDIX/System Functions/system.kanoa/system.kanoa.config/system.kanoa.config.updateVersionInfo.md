---
id: updateVersionInfo
title: system.kanoa.config.updateVersionInfo
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaCore</b> module</PurpleBox>
<HeaderBox header="Description">
    This function updates version information such as database, project, or tag version number.
</HeaderBox>
<HeaderBox header="Syntax">
    <b>updateVersionInfo(versionInfo, userId)</b>
    <li>Parameters:<br />
        <ul>versionInfo: dict - Information about the version including type, name, element, and versionNumber.
            <ul>
                <ul></ul>
                <ul>'type' (str): Type of version information ('database', 'project', 'tag')</ul>
                <ul>'name' (str): Name of the database, project, or tag</ul>
                <ul>'element' (str): Specific to the type, for database, this could be the schema, can be null</ul>
                <ul>'versionNumber' (str): Version number</ul>
            </ul>
            <ul>userId: int - User ID</ul>
        </ul>
    </li>
    <li>Returns: int - App Version ID</li>
</HeaderBox>

### Code Example

```python
# Example Usage:
app_version_id = system.kanoa.config.updateVersionInfo(versionInfo, userId)

