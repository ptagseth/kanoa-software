---
id: getConfigField
title: system.kanoa.security.getConfigField
sidebar_position: 7
---
import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';


<PurpleBox>This function requires <b>KanoaCore</b> module</PurpleBox>

<HeaderBox header="Description">Returns a single value for the security config as described by the paramsDict </HeaderBox>

<HeaderBox header="Syntax">
    <b>getConfigField(field: PyObject, paramsDict: PyDictionary) </b>
    <li> Parameters <br />
        <ul>field: PyObject (String) the name of the security configuration's field/column name <br /> </ul>
        <ul>paramsDict: PyDictionary (Dictionary) i.e &#123;'configId': 1, 'configName': 'allowGuest'} </ul>
    </li>
    <li> Returns <br />
        <ul>(PyObject) value of the security configuration's field name <br /> </ul>
    </li>
</HeaderBox>


### Code Examples

```py
#This returns the Configfield value for security configuration that allows guests

system.kanoa.security.getConfigField('configId', {'configName': 'allowGuest'})
```