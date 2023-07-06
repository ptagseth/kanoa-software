---
id: system-requirements
title: System Requirements
sidebar_position: 1
---

## Hardware
The Ignition Gateway server can be on-premises or in the cloud. It can be a physical or virtual machine. It can be windows based or Linux. Recommendation is for at least 3 cores and 16 Gbytes of memory. SQL Server 2018 or higher can be installed on the same server or a separate server. If the same server is used, it is recommended to increase the server size to at least 24 Gbytes of RAM. Follow the recommendations for number of CPU’s for SQL and note this will affect the licensing costs for SQL.

## Software Licensing
The Kanoa MES Framework can be purchased for an enterprise. With that purchase, the framework can be installed for as many sites, production lines and servers as required for the client.  

SQL Server will require licensing and it is expected that for the most part, a clients IT department will provide a database for this purpose.  

An Ignition™ license will also be required. The only requirements for the MES Framework are the Perspective module and platform and the [BIJC Calendar Component Module](https://modules.bijc.co.uk/?page_id=76).  

It is recommended that MQTT be used for data transmission between machines and the MES Framework, in which case the MQTT Engine and MQTT Distributor modules will need to be installed on the MES Gateway and the MQTT Transmission modules will be installed on the edge devices.