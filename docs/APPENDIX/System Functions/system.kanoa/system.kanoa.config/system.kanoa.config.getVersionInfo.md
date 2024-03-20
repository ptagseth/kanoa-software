---
id: getVersionInfo
title: system.kanoa.config.getVersionInfo
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaCore</b> module</PurpleBox>
<HeaderBox header="Description">
    This function retrieves application version information such as database, project, or tag version numbers.
</HeaderBox>
<HeaderBox header="Syntax">
    <b>getVersionInfo(paramsDict)</b>
    <li>Parameters:<br />
        <ul>paramsDict: dict - Parameters for querying version information.
            <ul>
            <ul></ul>
                <ul>'type' (str, optional): Type of version information to query ('database', 'project', 'tag')</ul>
                <ul>'name' (str, optional): Name of the database, project, or tag</ul>
                <ul>'element' (str, optional): Specific to the type, for database, this could be the schema</ul>
            </ul>
        </ul>
    </li>
    <li>Returns: dataset - Version data</li>
</HeaderBox>

### Code Example

```python
# Example Usage:
version_data = system.kanoa.config.getVersionInfo(paramsDict)

