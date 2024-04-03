---
title: OEE
sidebar_position: 2
hide_table_of_contents: true
---

Overall Equipment Effectiveness identifies the percentage of manufacturing time that is truly productive. 
An OEE score of 100% means you are manufacturing only good parts, as fast as possible, with no downtime. 

![OEE Report](/img/analysis/oee.png)

Fair warning though, you can get the same exact OEE number for entirely different utilizations. 

![OEE Report](/img/analysis/modePies.png)

OEE is meaningless without utilization, so most implementations try to make OEE cover 100% of the time, making idle time considered as unplanned downtime, But why?
'The Goal' says it ok to have local in-efficiencies, idle time allows for more capacity planning. OEE should focus on how well we operate when we are expected to operate, but 
utilizing the assets have efficiently may be a bigger problem than how well they run during production. Perhaps reducing changeover or setup time or maintenance will have a greater
impact on your bottom line than reducing scrap or rework. This is not to say OEE is not important, more to say don;t just focus on OEE.
***
The OEE Chart visualizes the individual component parts that comprise OEE. 

![OEE Report](/img/analysis/oeeDashboard.png)

You can choose to chart OEE data for a specific asset or for all assets in an area, or at a site, for the given date range.
By default, the interval (time period) is automatically determined based on the date range selected. If a range of one day is selected, an hourly interval is chosen.
If the date range crosses multiple days, the interval will be by day. If the date range crosses  months, the interval will be by week. You can choose the interval you want, be aware
that showing a years worth of data by hour may not render that well in the bar chart.

On the right side of the chart, the average OEE, availability, performance, and quality values are displayed.f

Each of the plots can be toggled on or off by clicking in the chart legend.

