---
id: importAsset
title: system.kanoa.asset.importAsset
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaOPS</b> module</PurpleBox>
<HeaderBox header="Description">Imports all config info includes child assets, links to modes, states, items and attributes (kanoaOPS).</HeaderBox>
<HeaderBox header="Syntax">
    <b>importAsset(exportInfo, userId, createModes, createStates, createItems)</b>
    <li> Parameters <br />
        <ul>exportInfo (dict) - asset dictionary to be imported</ul> 
        <ul>userId (int)</ul>
        <ul>createModes (bool) - should the modes be created?</ul>
        <ul>createStates (bool) - should the states be created?</ul>
        <ul>createItems (bool) - should the items be created?</ul>
    </li>
    <li> Returns <br />
        <ul>success (bit)</ul>
        <ul>msg (string)</ul>
    </li>
</HeaderBox>

### Code Examples

```python
# Example Usage:

export_data = dict
userId = 55
createModes = 'True'
createStates = 'True'
createItems = 'False'
status = system.kanoa.asset.importAsset(export_data, userId, createModes, createStates, createItems)