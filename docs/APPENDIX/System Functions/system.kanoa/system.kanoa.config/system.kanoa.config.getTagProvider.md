---
id: getTagProvider
title: system.kanoa.config.getTagProvider
sidebar_position: 5
---
import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaCore</b> module</PurpleBox>

<HeaderBox header="Description">Returns the tag provider name, based on a project name</HeaderBox>

<HeaderBox header="Syntax">
    <b>getTagProvider(app)</b>
    <li> Parameters <br />
        <ul> (String)name of the project, to find the tag provider name of </ul>
    </li>
    <li> Returns <br />
        <ul> (String) tag provider of the project </ul>
    </li>
</HeaderBox>

### Code Examples

```py
# This returns the Tag provider for project 'core'

app='core'
system.kanoa.config.getTagProvider(app)
```