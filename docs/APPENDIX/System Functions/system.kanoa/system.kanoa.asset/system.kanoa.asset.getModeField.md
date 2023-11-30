---
id: getModeField
title: system.kanoa.asset.getModeField
sidebar_position: 9
---
import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';


<PurpleBox>This function requires <b>KanoaCore</b> module</PurpleBox>

<HeaderBox header="Description">Returns a single value for the mode as described by the paramsDict  </HeaderBox>

<HeaderBox header="Syntax">
    <b>getModeField(field: PyObject, paramsDict: PyDictionary) </b>
    <li> Parameters <br />
        <ul>field: PyObject (String) the name of the mode's field/column name  <br /> </ul>
        <ul> paramsDict: PyDictionary - Dictionary i.e. &#123;'enabled':True, 'modeName': 'Production', 'modeId': 1, 'modeTypeId':1, 'modeTypeName':'Production', 'canSelect':True, 'canSchedule':True} </ul>
    </li>
    <li> Returns <br />
        <ul>(PyObject) the value of the mode's field <br /> </ul>
    </li>
</HeaderBox>

### Code Examples

```py
# This returns the value of the configuration field for the modeID requested

field = '????'
paramsDict = {'modeId': 1}
system.kanoa.asset.getModeField(field, paramsDict)

```