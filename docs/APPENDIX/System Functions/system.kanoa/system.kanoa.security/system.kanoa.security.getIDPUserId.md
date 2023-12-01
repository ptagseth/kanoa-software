---
id: getIDPUserId
title: system.kanoa.security.getIDPUserId
sidebar_position: 8
---
import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';


<PurpleBox>This function requires <b>KanoaCore</b> module</PurpleBox>

<HeaderBox header="Description">We are now using ints for recording changedBy and createdBy fields in all our tables. Whenever a user updates a table, we'll grab our user tables id and store that as the user. If the client is not using our security implementation, then we'll trap the sql error and return -1 to indicate that we need to use the session roles instead of the table roles  </HeaderBox>

<HeaderBox header="Syntax">
    <b>getIDPUserId(user: PyObject) </b>
    <li> Parameters <br />
        <ul>user: PyObject (Dictionary) user session object <br /> </ul>
        <ul> </ul>
    </li>
    <li> Returns <br />
        <ul>(int) database user ID <br /> </ul>
    </li>
</HeaderBox>


### Code Examples

```py


```