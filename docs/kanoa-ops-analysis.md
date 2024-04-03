---
id: kanoa-ops-analysis
title: Operations Analysis
sidebar_position: 1
hide_table_of_contents: true
---

Collecting data doesn't do much good if it's not being analyzed, so we have plenty of ways to disseminate, di-sect and make sense of the data. In this section we'll discuss all the options.

![kanoa-ops](/img/analysis/dikw.png) 

The DIKW model for Knowledge Management lays out the importance of contextualizing data. Raw data form a plc by itself is going to be fairly meaningless or just downright misleading.
Recording a fault code of 'E-Stop pressed' on Line 3 for 2 hours doesn't mean the same if the line was for maintenance rather than in production. So 'Applying Meaning' means applying context. 
Was Line 3 scheduled for production at the time? 

![kanoa-ops](/img/analysis/data-transform.png) 

A fault code of 'machine faulted' may give you accurate availability metrics, but it's a hard one to know how to address it in future, so ensuring that operators code the downtime events so
you know that the line stopped because they ran out of infeed material is going to require a different set of solutions than say a jammed tail pulley.
***

#### The Evolution of Analytics
We've seen a lot of change over the years in how production data is churned over to drive continuous improvement.
PDF reporting used to be the fad and Ignition provides a pdf report designer that allows you to satisfy this need. But emailing out a pdf report detailing the last months production kpi's
to be printed out and left in the in-tray of the controllers desk should really not be part of your digital transformation, and by implementing a new MES, the goals should be immediate access
at any time to any metrics. And while you're viewing the numbers, you should be able to keep diving in further to understand why production is down or costs are increasing.
***
#### Mobile Responsive Analytics
Kanoa Ops comes with the following dashboards built-in.

* [Summary Dashboard](kanoa-ops-analysis/summary)
* Run Review
* [OEE](kanoa-ops-analysis/oee)
* [Downtime](kanoa-ops-analysis/downtime)
* [Reliability KPIs](kanoa-ops-analysis/reliability-kpis)
* [Production Counts](kanoa-ops-analysis/production-counts)
* [Run Chart](kanoa-ops-analysis/run-chart)
* [Operator Station Charts](kanoa-ops/asset-operation)

![kanoa-ops](/img/downtime/downtimeDashboard.png) 
***

#### Data Connectors
Ignition provides some neat components for visualizing production data and we've extended them with the Apex Chart module courtesy of Travis Cox. 
But data is data and there are plenty of other analytic tools out there to use such as Tableau, Power BI, SSRS, MathLab, MiniTab to name a few. So our goal when building Kanoa MES
was to make sure that after all the work put in to configure and connect your assets, the data that powers your analytics should be fast, open and easily accessible.
***

#### Data By Design
We designed our database schema following the normalized form pattern. This structure provides the smallest footprint by ensuring that no data is duplicated thereby guaranteeing
the integrity of information entered into the database. All data is constructed using primary - foreign key constraints that ensure integrity by preventing orphaned records,
and by linking records using integers, provides critically fast queries using built-in table indexes and binary tree search algorithms. 

Denormalized Form Pattern design does provide for even faster performance, but at the expense of data duplication by creating redundant data and increasing the database size. The drawback
of this design based on needing to provide easy access to users editing production data made it a non-starter for us.