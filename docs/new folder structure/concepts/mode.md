---
id: mode1
title: Mode
sidebar_position: 2
hide_table_of_contents: true 
---

# Understanding the Concept of a Mode in Kanoa Ops

## Overview

In Kanoa Ops, a 'Mode' is a fundamental concept intricately linked to 'States.' It defines the intended operating condition of an asset as directed by the Kanoa Ops system. Modes are typically scheduled or manually set by an operator or supervisor for each asset, line, or piece of equipment. They dictate what the MES (Manufacturing Execution System) expects the asset to be doing, while the State provides feedback on the actual status of the machine.

## Key Attributes of a Mode

**Name**: Identifies the mode.<br />
**Type**: Helps categorize specific modes.<br />
**Enabled/Disabled Status**: Indicates if the mode is active and usable within the system.<br />
**Can Select Option**: Determines if the mode is available in line operation screens and if qualified users can manually set the equipment to this mode.<br />
**Can Schedule Flag**: Shows whether the mode is available to be scheduled within the Kanoa scheduling system.<br />
**Additional Attributes**: Colors, icons, etc., are used for easy identification and categorization but are secondary to the core attributes.

## Default Modes and Their Use Cases

**Unknown Mode**: Serves as a catch-all state for uncertain scenarios or unclassified states of the asset.<br />
**Production Mode**: The primary mode where assets are actively producing products. This mode indicates readiness for production and active engagement in the manufacturing process.<br />
**Idle Mode**: The default state for an asset when it is not actively working but is available to produce. It represents a standby or waiting condition.<br />
**Changeover Mode**: Used during the transition between different production runs. It covers setup activities, cleaning, and other preparatory tasks needed to switch products or start production.

## Utilization of Modes in Kanoa Ops

### Scheduling Modes
Modes are scheduled for assets using the Operations Scheduler in Kanoa Ops. This tool allows for the planned assignment of modes to various assets, ensuring that each piece of equipment is in the correct mode for its intended operation at any given time.

### Manual Control of Modes
In addition to being scheduled, Modes can also be manually controlled via the Line Operation screen. This feature enables operators or supervisors to dynamically adjust the mode of an asset based on real-time operational needs or changes in the production environment.

## Mode Configuration

### Configuration Screen
Modes are configured in the Mode Configuration screen within Kanoa Ops. This interface allows users to define a master list of all modes available in the system.

### Linking Modes to Assets
Once created, modes are linked to individual assets. This linkage specifies which modes are applicable to a particular asset.

### Mode Codes
Each mode is assigned a unique Mode Code, serving as a reference ID in the database. These codes are crucial for identifying and tracking modes across the system.

## Importance of Modes

Modes play a critical role in describing what an asset is supposed to be doing at any given time. They are essential for:
- Effective production scheduling
- Monitoring and managing the operational status of assets
- Ensuring assets follow the planned schedule
- Providing clarity in the manufacturing process

In summary, Modes in Kanoa Ops provide a structured approach to managing and understanding the operational status of manufacturing assets, facilitating effective scheduling, operational oversight, and the flexibility to adapt to real-time production demands. The Mode Configuration screen adds an extra layer of customization and control, allowing for a tailored operational workflow.
