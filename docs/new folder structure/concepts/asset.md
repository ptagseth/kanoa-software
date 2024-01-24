---
id: assets1
title: Asset
sidebar_position: 1
hide_table_of_contents: true 
---

# Understanding the Concept of an Asset in Kanoa Ops

## Introduction

Understanding the concept of an Asset is fundamental in Kanoa Ops. This documentation explains what an Asset is in Kanoa Ops and how it's utilized within the system.

## Definition of an Asset

An Asset in Kanoa MES is essentially any entity that needs tracking or summarizing within the operational environment. Assets are varied and can represent different physical or logical elements within a manufacturing setup. An Asset can refer to a specific machine, a manufacturing line, or an entire factory.

## Asset Hierarchy

Assets in Kanoa MES are organized in a hierarchical structure. Although Kanoa MES does not strictly require adherence to the ISA 95 standard equipment hierarchy, it serves as a useful model. The ISA 95 hierarchy typically progresses from Enterprise to Site, Area, Line, and Work cell. This hierarchical arrangement allows for an effective roll-up and drill-down of data, where higher levels can summarize the data of their subordinate elements.

### ISA-95 Hierarchical Levels:

1. **Enterprise**
2. **Site**
3. **Area**
4. **Line**
5. **Work Cell**

## Asset Management

Assets are managed via the Asset Management screen in the Kanoa system. This interface allows users to define the hierarchy, Asset types, groups, and their OEE status.

### Asset Types and Groups

- **Asset Types:** Used for categorizing Assets at a broader level, akin to the ISA 95 hierarchy (e.g., enterprise, site, region).
- **Asset Groups:** Useful for grouping Assets that may not be in the same hierarchical area but need to be reported similarly. For instance, Assets like 'box formers' across different lines can be grouped under a single Asset group for consolidated reporting.

## Assets in Kanoa Ops

One of the primary uses of an Asset in Kanoa Ops is enabling it for OEE tracking. An OEE-enabled Asset refers to any equipment or area where operational equipment efficiency data needs to be monitored. This includes tracking in-feed and out-feed counts, states, and other relevant metrics.

## Assets in Kanoa Quality

While the Asset hierarchy plays a crucial role in Kanoa Ops, especially for OEE tracking, its role in Kanoa Quality is less critical and more optional. In Kanoa Quality, Assets are used primarily for conducting tests within the context of a specific part of the plant and for automatic data collection from that Asset.

## Summary

In summary, Assets in Kanoa Ops are critical for defining and measuring OEE and conducting specific tests in Kanoa Quality. The flexibility in defining Assets, along with the hierarchical organization and grouping capabilities, allows for efficient management and reporting within the Kanoa system.


