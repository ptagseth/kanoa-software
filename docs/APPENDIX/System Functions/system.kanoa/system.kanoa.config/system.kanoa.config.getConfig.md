---
id: getConfig
title: system.kanoa.config.getConfig
sidebar_position: 2
---
import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaCore</b> module</PurpleBox>

<HeaderBox header="Description">Get the application configuration settings </HeaderBox>

<HeaderBox header="Syntax">
    <b>getConfig </b>
    <li> Parameters <br />
        <ul>(Dictionary) i.e &#123;'project': 'kanoaCore', 'configName': 'backgroundColor'} </ul>
    </li>
    <li> Returns <br />
        <ul>(PyDataset) the resultant query </ul>
    </li>
</HeaderBox>


### Code Examples

```py
# This returns a list of the configuration parameters for the KanoaCore project

paramsDict = {'project': 'kanoaCore'}
system.kanoa.config.getConfig(paramsDict)

```