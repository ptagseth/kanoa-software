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
#### Calculating OEE

OEE is a lean manufacturing standard and there is wealth of information on the internet about OEE, 
so we won't get into that much detail here about it, other than talking about how it is calculated and how it can be modified.

The term OEE was invented in the 1960s by the creator of the Total Productive Maintenance system, Seiichi Nakajima. OEE is expressed as a percentage from 0 to 100, 
where an OEE score of 100 percent would indicate that a manufacturing line or cell was producing only good parts at the anticipated production rate with no unexpected stops.

**OEE** is calculated by multiplying **Availability** _*_ **Performance** _*_ **Quality** where...

* **Availability** = runtime / (runtime + unplanned downtime)
* **Performance** = infeed count / (infeed rate * runtime)
* **Quality** = outfeed count / infeed count

Things to note...

* planned downtime events such as a 'Clean In Place' step are excluded from the availability calculation
* performance looks at infeed count and runtime, not outfeed count and total time as downtime and scrap would then skew the performance metric. Performance should only indicate processing speed issues

There's a little bit more behind the scenes on how we calculate OEE. If there is no infeed count, we will multiple outfeed count by the package count to calculate the infeed count.


Quite often we find companies that have their own way of calculating OEE and who are we to tell them the standard doesn't allow that, so we make it easy to 
calculate custom OEE values, but bear in mind that OEE is math and if you use OEE in the way it was intended, it can be quite useful in planning.

##### Using OEE to Estimate Order Completion

If the historical average for a production line is 67% and the standard deviation is fairly low, you can use this number to determine how long it will take complete an order.

Order XYZ is for 10000 cases of Product A. Standard Rate is 200 cases per hour, OEE due to downtime and scrap is 67% means actual production rate can be calculated as..

Actual Production Rate = Standard Rate * OEE = 200 * 67% = 134 case per hour

Total time estimated to produce Order XYZ = 10000 / 134 = 74.6 hrs.

##### Modifying OEE
We're not actually suggesting you modify OEE because it is a standard, but all the data points needed to determine OEE are exposed by our system functions shown down below in the 'Analyzing OEE' section.
If you really want to change the way OEE that is returned, you can see how we calculate it in our stored procedures and you could theoretically modify it there. 
We would recommend though that you make a copy of it and use you own version throughout the application.

***
#### Analyzing OEE

OEE Analytics are shown throughout the application, from the asset card on the enterprise view to the 'Operator Station' screen. Regardless of where you get your OEE number, it is calculated from the 
same data source using one of several functions...

* [system.kanoa.event.getOEEDataByInterval()](../systemFunctions/event/getOEEDataByInterval)
* [system.kanoa.event.getOEEDataByIntervalByShift()](../systemFunctions/event/getOEEDataByIntervalByShift)
* [system.kanoa.event.getOEEDataSummary()](../systemFunctions/event/getOEEDataSummary)
***
The OEE Chart visualizes the individual component parts that comprise OEE. 

![OEE Report](/img/analysis/oeeDashboard.png)

You can choose to chart OEE data for a specific asset or for all assets in an area, or at a site, for the given date range.
By default, the interval (time period) is automatically determined based on the date range selected. If a range of one day is selected, an hourly interval is chosen.
If the date range crosses multiple days, the interval will be by day. If the date range crosses  months, the interval will be by week. You can choose the interval you want, be aware
that showing a years worth of data by hour may not render that well in the bar chart.

On the right side of the chart, the average OEE, availability, performance, and quality values are displayed.

Each of the plots can be toggled on or off by clicking in the chart legend.