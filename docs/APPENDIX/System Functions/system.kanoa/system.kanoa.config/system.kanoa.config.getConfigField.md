---
id: getConfigField
title: system.kanoa.config.getConfigField
sidebar_position: 3
---
import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';


getConfigField(     field: PyObject     paramsDict: PyDictionary )
Method on Ignition.kanoa.config
Returns a single value for the config as described by the paramsDict 
Returns:
(PyObject) value of the project configuration column/field
Parameters
field: PyObject 
(String) name of the project configuration column/field
paramsDict: PyDictionary 
(Dictionary) i.e {'project': 'kanoaCore', 'configName': 'backgroundColor'})



<PurpleBox>This function requires <b>KanoaCore</b> module</PurpleBox>

<HeaderBox header="Description">Returns a single value for the config as described by the paramsDict </HeaderBox>

<HeaderBox header="Syntax">
    <b>getConfigField </b>
    <li> Parameters <br />
        <ul>(Dictionary) i.e &#123;'project': 'kanoaCore', 'configName': 'backgroundColor'} </ul>
        <ul>field: PyObject (String) name of the project configuration column/field </ul>
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