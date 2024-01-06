---
id: addStateCategory
title: system.kanoa.asset.addStateCategory
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaOPS</b> module</PurpleBox>
<HeaderBox header="Description">Adds a State Category to the stateCategory table (kanoaOPS)</HeaderBox>
<HeaderBox header="Syntax">
    <b>addStateCategory(stateCategoryName, userId)</b>
    <li> Parameters <br />
        <ul>stateCategoryName (string) - The name of the state category</ul>
        <ul>userId (int) - User ID</ul>
    </li>
    <li> Returns <br />
        <ul>stateCategoryId (int) - The ID of the newly added state category</ul>
    </li>
</HeaderBox>

### Code Examples

```python
# Example Usage:
state_category_id = system.kanoa.asset.addStateCategory('Category_Name', 789)
