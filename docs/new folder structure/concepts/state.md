---
id: state1
title: State
sidebar_position: 4
hide_table_of_contents: true 
---

# Understanding the Concept of States in Kanoa Ops

## Overview

States in Kanoa Ops are indicators that describe the actual performance of a machine, complementing the concept of Modes. While Modes represent Kanoa's understanding of what a machine is supposed to be doing, States provide feedback from the machine itself, offering numeric codes that indicate its current operational status.

## Key Attributes of a State
**Name**: The identifier for the state.<br />
**Display Name**: The name displayed for the state in the system.<br />
**State Categories**: Classifications such as Planned Downtime, Unplanned Downtime, or Running.<br />
**Category**: Helps in sorting and categorizing states.<br />
**Asset Group Applicability**: Specifies the asset group to which the state applies.<br />
**Enabled/Disabled Status**: Indicates if the state is active and available for use in the system.

## Default States and Their Use Cases
**Offline**: A catch-all state, typically used when no other state is applicable. It implies that the machine is off or inactive.<br />
**Running**: Indicates that the machine is operating as expected and production is proceeding smoothly.<br />
**Idle**: Classified as unplanned downtime. It represents times when the machine could be running but is not, for various reasons.<br />
**Faulted**: Another unplanned downtime state, indicating a notable fault or error, suggesting a breakdown or malfunction.

### Additional States
**CIP (Clean-in-Place)**: An example of planned downtime, used for specific maintenance or cleaning operations.<br />
**Setup**: Represents planned downtime for preparatory activities before production starts.

## Configuration and Association of States
### State Configuration Screen
**Master List**: Contains a comprehensive list of all states available in the system.<br />
**Asset Linking**: Individual states are linked to specific assets, indicating applicability.<br />
**PLC Code Association**: Each state is assigned a PLC code for identification and association with the corresponding asset state.

## Importance of States in Kanoa Ops
States are crucial for accurately understanding the availability component of OEE (Overall Equipment Effectiveness). They provide essential insights into:
- Actual running times
- Instances and reasons for unplanned downtime
- Categorization of downtime for analysis and improvement

States help in capturing and reporting the true operational status of assets, playing a vital role in efficiency analysis and operational optimization.

### System Integration and Logic
**State Reporting**: States are reported based on PLC codes or tags from the machinery.<br />
**Logic Determination**: Any logic for determining the priority or sequence of faults should be integrated into the PLC or the system providing the state ID to Kanoa Ops.

## Conclusion

States in Kanoa Ops are integral to obtaining a comprehensive and accurate picture of asset performance. Their configuration and proper association with assets ensure that the operational data reflects the actual conditions on the production floor, thereby enabling effective monitoring and management of manufacturing processes.

