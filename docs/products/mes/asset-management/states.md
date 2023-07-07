---
id: states
title: States
sidebar_position: 3
---
Assets states are created in this screen. New states can be added. The state type determines whether the state should be considered to be a running, unplanned downtime or a planned downtime state and affect the OEE, reliability and downtime analysis.  

The category field provides a method for grouping the different states into buckets for pareto analysis.  

The Equipment type field is used to simply indicate if this state is has been created for a particular type of asset.  

![Mode Editor](/img/6.png)

The configured asset states can then be associated to assets by selecting the assets in the asset tree, selecting the states in the table and pressing the link button.

![Mode Editor](/img/7.png)

This creates a link entry between the asset and the state. A code value (integer) must then be defined for the asset. This will be the state value coming from that asset’s plc.