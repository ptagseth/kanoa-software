---
id: architecture
title: Architecture
sidebar_position: 1
---
The framework comes with two projects, Global and MES. The Global project contains all views, scripts and session properties used by the application. This project should be inherited from to create different projects for different needs such as TV Dashboards, Marquees, Operator Consoles etc. The MES Project contains the project properties, gateway scripts, session event scripts and session custom properties.  

Script libraries fall under the shared\Kanoa folder in the Global project.   

All tags uses by the framework fall can be found in the Kanoa_MES tag provider.  

Mostly all session properties can be found under the custom.kanoa session properties folder in both Global and MES projects.