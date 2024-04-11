---
id: convertDatesToString
title: system.kanoa.utilities.convertDatesToString
---
import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaCore</b> module</PurpleBox>
<HeaderBox header="Description">Converts a list of dates to strings, adjusted to the SQL Server's timezone, for passing to a stored procedure in KanoaCore.</HeaderBox>
<HeaderBox header="Syntax">
    <b>convertDatesToString(datesIn, deviceUTCOffsetMins)</b>
    <li> Parameters <br />
        <ul>list datesIn - List of dates to be converted [startDate, endDate].</ul>
        <ul>int deviceUTCOffsetMins - Offset in minutes for the device's timezone.</ul>
    </li>
    <li> Returns <br />
        <ul>list datesOut - List of converted date strings.</ul>
    </li>
</HeaderBox>
### Code Examples

```python
# Usage example
converted_dates = system.kanoa.utilities.convertDatesToString(datesIn=['2024-01-01 10:00:00', '2024-01-01 12:00:00'], deviceUTCOffsetMins=300)

if converted_dates is not None:
    print(f"Converted dates: {converted_dates}")
else:
    print("Conversion failed.")
    