---
id: getRoleFunctions
title: system.kanoa.security.getRoleFunctions
sidebar_position: 9
---
import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';


<PurpleBox>This function requires <b>KanoaCore</b> module</PurpleBox>

<HeaderBox header="Description">Returns all function names associated to a role  </HeaderBox>

<HeaderBox header="Syntax">
    <b>getRoleFunctions(roleId: PyObject) </b>
    <li> Parameters <br />
        <ul>roleId: PyObject (int) id of role <br /> </ul>
    </li>
    <li> Returns <br />
        <ul>(List) all function names associated to the role <br /> </ul>
    </li>
</HeaderBox>


### Code Examples

```py
#This returs the list of role functions for roleId 1

roleId = 1
system.kanoa.security.getRoleFunctions(roleId)

```