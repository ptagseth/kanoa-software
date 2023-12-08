---
id: getDBName
title: system.kanoa.config.getDBName
sidebar_position: 3
---
import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaCore</b> module</PurpleBox>

<HeaderBox header="Description">Returns the database name, based on a project name </HeaderBox>

<HeaderBox header="Syntax">
    <b>getDBName(app)</b>
    <li> Parameters <br />
        <ul> (String) name of the project, to find the database name of </ul>
    </li>
    <li> Returns <br />
        <ul> (String) database name of the project </ul>
    </li>
</HeaderBox>


### Code Examples

```py
#This returns the DB name of project 'core'

app='core'
system.kanoa.config.getDBName(app)
```