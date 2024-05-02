---
id: getModeTypes
title: system.kanoa.asset.getModeTypes
hide_table_of_contents: true
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaOPS</b> module</PurpleBox>
<HeaderBox header="Description">Retrieve mode types based on specified parameters.</HeaderBox>
<HeaderBox header="Syntax">
    <b>getModeTypes(paramsDict, enabled)</b>
    <li> Parameters <br />
        <ul>paramsDict (dictionary) - A dictionary of key/value pairs used to filter the returned dataset</ul>
        <ul>enabled (boolean) - Indicates whether the mode type is enabled or not</ul>
    </li>
    <li> Returns <br />
        <ul>pyDataset - A pyDataset containing mode types filtered by the provided parameters</ul>
    </li>
</HeaderBox>

### Code Examples

```python
# Example Usage:
params = {'enabled': True, 'modeTypeId': 1, 'modeTypeName': 'Production'}
enabled_mode_types = system.kanoa.asset.getModeTypes(params, True)