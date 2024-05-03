---
id: convertRecurringRuleToText
title: system.kanoa.schedule.convertRecurringRuleToText
hide_table_of_contents: true
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaOPS</b> module</PurpleBox>
<HeaderBox header="Description">
    Takes the rruleStr string object and returns a human-readable text for displaying to the user.
</HeaderBox>
<HeaderBox header="Syntax">
    <b>convertRecurringRuleToText(rruleStr)</b>
    <li>Parameters <br />
        <ul>
            rruleStr (string) - Recurring rule string.
        </ul>
    </li>
    <li>Returns <br />
        <ul>Human-readable string.</ul>
    </li>
</HeaderBox>

### Code Example

```python
# Example Usage:
rrule_str = 'FREQ=WEEKLY;COUNT=5;BYDAY=MO,TU,WE'
recurring_text = system.kanoa.schedule.convertRecurringRuleToText(rrule_str)

