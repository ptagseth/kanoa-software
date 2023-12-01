---
id: getConfigField
title: system.kanoa.config.getConfigField
sidebar_position: 3
---
import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';


<PurpleBox>This function requires <b>KanoaCore</b> module</PurpleBox>

<HeaderBox header="Description">Returns a single value for the config as described by the paramsDict </HeaderBox>

<HeaderBox header="Syntax">
    <b>getConfigField(field, paramsDict) </b>
    <li> Parameters <br />
        <ul>field: PyObject (String) name of the project configuration column/field </ul>
        <ul>paramsDict (Dictionary) i.e &#123;'project': 'kanoaCore', 'configName': 'backgroundColor'} </ul>
    </li>
    <li> Returns <br />
        <ul>(PyObject) value of the project configuration column/field</ul>
    </li>
</HeaderBox>


### Code Examples

```py
# This returns the configuration value of the field requested for the kanoaCore projet

field = '?????'
paramsDict = {'project': 'kanoaCore'}
system.kanoa.config.getConfigField(field, paramsDict)

```