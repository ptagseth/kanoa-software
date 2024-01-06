---
id: populateMenu
title: system.kanoa.config.populateMenu
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaCore</b> module</PurpleBox>
<HeaderBox header="Description">Build the navigation menu tree (kanoaCore).</HeaderBox>
<HeaderBox header="Syntax">
    <b>populateMenu(projectList, userRolesList)</b>
    <li>Parameters <br />
        <ul>projectList (List) - List of projects (e.g., ['kanoaCore', 'kanoaOPS']).</ul>
        <ul>userRolesList (List) - List of user roles.</ul>
    </li>
    <li>Returns <br />
        <ul>Navigation menu tree hierarchy.</ul>
    </li>
</HeaderBox>

### Code Example

```python
# Example Usage:
menuTree = system.kanoa.config.populateMenu(['kanoaCore', 'kanoaOPS'], ['Admin', 'User'])
