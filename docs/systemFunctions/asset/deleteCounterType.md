---
id: deleteCounterType
title: system.kanoa.asset.deleteCounterType
---
import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaOPS</b> module</PurpleBox>
<HeaderBox header="Description">Deletes the counterType in KanoaOPS. Foreign key constraints will prevent deletion if the counterType has been used.</HeaderBox>
<HeaderBox header="Syntax">
    <b>deleteCounterType(counterTypeId, userId)</b>
    <li> Parameters <br />
        <ul>int counterTypeId - The ID of the counterType to be deleted.</ul>
        <ul>int userId - The ID of the user making the deletion.</ul>
    </li>
    <li> Returns <br />
        <ul>(bool) Success flag</ul>
        <ul>(str) Records modified or error message</ul>
    </li>
</HeaderBox>

### Code Examples
```python
# Usage example
success_flag, message = system.kanoa.asset.deleteCounterType(counterTypeId=123, userId=456)

if not success_flag:
    print(f"Deletion failed: {message}")
else:
    print(f"Successfully deleted counterType.")