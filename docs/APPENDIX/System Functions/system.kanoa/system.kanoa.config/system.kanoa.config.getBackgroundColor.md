---
id: getBackgroundColor
title: system.kanoa.config.getBackgroundColor
sidebar_position: 1
---
import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaCore</b> module</PurpleBox>

<HeaderBox header="Description">Gets the background color from the database </HeaderBox>

<HeaderBox header="Syntax">
    <b>getBackgroundColor </b>
    <li> Parameters <br />
        <ul>(String) name of theme, either 'light' or 'dark' </ul>
    </li>
    <li> Returns <br />
        <ul>(String) background color based on the theme </ul>
    </li>
</HeaderBox>


### Code Examples

```py
#This returns the hex background color defined for dark mode

theme = 'dark'
system.kanoa.config.getBackgroundColor(theme)

```