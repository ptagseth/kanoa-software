---
id: updateStateCategory
title: system.kanoa.asset.updateStateCategory
hide_table_of_contents: true
---
import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaOPS</b> module</PurpleBox>
<HeaderBox header="Description">Updates a stateCategory in KanoaOPS. Constraints will prevent duplicate state categories from being created.</HeaderBox>
<HeaderBox header="Syntax">
    <b>updateStateCategory(stateCategoryInfo, userId)</b>
    <li> Parameters <br />
        <ul>dict stateCategoryInfo - Dictionary &#123;'stateCategoryId': 18, 'stateCategoryName': 'sausages', 'enabled': True}</ul>
        <ul>int userId - The ID of the user making the update.</ul>
    </li>
    <li> Returns <br />
        <ul>(bool) Success flag</ul>
        <ul>(str) Records updated or error message</ul>
    </li>
</HeaderBox>

### Code Examples
```python
# Usage example
success_flag, message = system.kanoa.asset.updateStateCategory(stateCategoryInfo={'stateCategoryId': 18, 'stateCategoryName': 'sausages', 'enabled': True}, userId=456)
if not success_flag:
    print(f"Update failed: {message}")
else:
    print(f"Successfully updated stateCategory.")