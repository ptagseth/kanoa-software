---
id: states
title: States
sidebar_position: 3
---
Assets - fill in definition…

![States](/img/StateOverview.png)


## Asset Management
Assets states are created in State Editor. New states can be added. 

![States](/img/StateEditor.png)



The state type determines whether the state should be considered to be a running, unplanned downtime or a planned downtime state and affect the OEE, reliability and downtime analysis.  

The category field provides a method for grouping the different states into buckets for analysis.

The configured asset states can then be associated to assets by selecting the assets in the asset tree, selecting the states in the table and pressing the link button.
This creates a link entry between the asset and the state. A code value (integer) must then be defined for the asset. This will be the state value coming from that asset’s PLC.

![States](/img/StateLinkAssets.png)
