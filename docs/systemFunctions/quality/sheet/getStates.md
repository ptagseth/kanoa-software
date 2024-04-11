---
id: getStates
title: system.kanoa.quality.sheet.getStates
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaQDS</b> module</PurpleBox>
<HeaderBox header="Description">Retrieves check sheet states in KanoaQDS.</HeaderBox>
<HeaderBox header="Syntax">
    <b>getStates(paramsDict)</b>
    <li> Parameters <br />
        <ul>paramsDict - Dictionary containing optional parameters:</ul>
        <ul>  - 'enabled': True to filter by enabled states (bool).</ul>
        <ul>  - 'chkShtStateId': ID of the specific check sheet state (int).</ul>
        <ul>  - 'chkShtStateName': Name of the check sheet state (string).</ul>
    </li>
    <li> Returns <br />
        <ul>data - PyDataset containing check sheet state information.</ul>
    </li>
</HeaderBox>

### Code Examples
```python
# Usage example
params_dict = {'enabled': True, 'chkShtStateId': 1, 'chkShtStateName': 'Approved'}
states_data = system.kanoa.quality.sheet.getStates(paramsDict=params_dict)

print(states_data)
