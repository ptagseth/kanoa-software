---
id: checkIsGatewayAdmin
title: system.kanoa.security.checkIsGatewayAdmin
sidebar_position: 3
---
import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';


<PurpleBox>This function requires <b>KanoaCore</b> module</PurpleBox>

<HeaderBox header="Description">Checks to see if a user is a Gateway Admin  </HeaderBox>

<HeaderBox header="Syntax">
    <b>checkIsGatewayAdmin(userId: PyObject) </b>
    <li> Parameters <br />
        <ul>userId: PyObject (int) id of user <br /> </ul>
    </li>
    <li> Returns <br />
        <ul>(boolean) True if user is Gateway Admin, False if not <br /> </ul>
    </li>
</HeaderBox>


### Code Examples

```py
#This will return a true value if user is Gateway admin or false if not for the requested userId 

userId = 7
system.kanoa.security.checkIsGatewayAdmin(userId)

```