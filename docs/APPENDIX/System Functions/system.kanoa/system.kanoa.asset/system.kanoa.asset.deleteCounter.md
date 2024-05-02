---
id: deleteCounter
title: system.kanoa.asset.deleteCounter
hide_table_of_contents: true
---
import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaOPS</b> module</PurpleBox>
<HeaderBox header="Description">Deletes the counter in KanoaOPS. Foreign key constraints will prevent deletion if the counter has been used.</HeaderBox>
<HeaderBox header="Syntax">
    <b>deleteCounter(counterId, userId)</b>
    <li> Parameters <br />
        <ul>int counterId - The ID of the counter to be deleted.</ul>
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
success_flag, message = system.kanoa.asset.deleteCounter(counterId=123, userId=456)

if not success_flag:
    print(f"Deletion failed: {message}")
else:
    print(f"Successfully deleted counter.")