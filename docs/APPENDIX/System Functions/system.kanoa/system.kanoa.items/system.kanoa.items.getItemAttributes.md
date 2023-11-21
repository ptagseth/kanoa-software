---
id: getItemAttributes
title: system.kanoa.items.getItemAttributes
sidebar_position: 3
---
import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaCore</b> module</PurpleBox>

<HeaderBox header="Description">Returns an item's attributes </HeaderBox>

<HeaderBox header="Syntax">
    <b>getItemAttributes(itemId: PyObject)</b>
    <li> Parameters <br />
        <ul> itemId: PyObject - (int) id of item </ul>
    </li>
    <li> Returns <br />
        <ul> (PyDataset) row of item's attributes  </ul>
    </li>
</HeaderBox>


### Code Examples

```py

# This returns the rows of attributes with itemID 54 

system.kanoa.items.getItemAttributes(54)

```