---
id: storeDateRangeSelection
title: system.kanoa.utilities.storeDateRangeSelection
sidebar_position: 27
---
import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';


<PurpleBox>This function requires <b>KanoaCore</b> module</PurpleBox>

<HeaderBox header="Description">Stores the passed in date range to make it persistent across views in the current tab (page)</HeaderBox>

<HeaderBox header="Syntax">
    <b>storeDateRangeSelection(self, startDate, endDate, ...)</b>
    <li> Parameters <br />
        <ul>self: PyObject (Dictionary) page object</ul>
        <ul>startDate: PyObject (datetime) start date</ul>
        <ul>endDate: PyObject (datetime) end date</ul>
        <ul>selectedDateRange: PyObject (String) text representation of date range i.e. valid values are 'Today, 'Yesterday', This Week', 'Last Week', 'This Month', 'Last Month', 'Year To Date', None</ul>
    </li>
    <li> Returns <br />
        <ul>None</ul>
    </li>
</HeaderBox>

### Code Examples

```py 


```