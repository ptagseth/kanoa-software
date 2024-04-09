---
id: deleteStateCategory
title: system.kanoa.asset.deleteStateCategory
---
import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaOPS</b> module</PurpleBox>
<HeaderBox header="Description">Deletes the stateCategory in KanoaOPS. Foreign key constraints will prevent deletion if the stateCategory has been used.</HeaderBox>
<HeaderBox header="Syntax">
    <b>deleteStateCategory(stateCategoryId, userId)</b>
    <li> Parameters <br />
        <ul>int stateCategoryId - The ID of the stateCategory to be deleted.</ul>
        <ul>int userId - The ID of the user making the deletion.</ul>
    </li>
    <li> Returns <br />
        <ul>(bool) Success flag</ul>
        <ul>(str) Records deleted or error message</ul>
    </li>
</HeaderBox>

### Code Examples
```python
# Usage example
success_flag, message = system.kanoa.asset.deleteStateCategory(stateCategoryId=123, userId=456)

if not success_flag:
    print(f"Deletion failed: {message}")
else:
    print(f"Successfully deleted stateCategory.")
