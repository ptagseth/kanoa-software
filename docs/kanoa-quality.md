---
id: kanoa-quality
title: Quality Management
sidebar_position: 1
hide_table_of_contents: true
---

Create a culture of quality with systems that are easy to use, hard to ignore, and provide value every single day. 
Kanoa Quality transforms how manufacturing teams define, collect, and use quality data to achieve compliance and improve performance.

* **Real-Time Insights**: Deliver real-time insights to front-line operators and correct mistakes before they affect product quality.
* **Accountability**: Ensure the right tests are done every time with test performance analysis and accountability alerts.
* **Reduce Waste**: Improving product quality directly improves manufacturing process efficiency. Every poor quality product is wasted time, energy, and material to make something that cannot actually be sold.
***
### How It Works

#### Create Your Check Sheets
The Check Sheet is the focal point of Kanoa Quality. Think of each Check Sheet as replacing a paper form.
A Check Sheet defines all of the data required to complete a quality check or process along with engineering tolerances, operator instructions, associated assets and items, and approval requirements.
There are multiple ways that Check Sheets can be scheduled and triggered to run including on a timed schedule, by equipment or product change, by shift change, or manually.

![kanoa-quality](/img/quality/quality-config-check-table.png)

Click here to go to the [Check Sheet Configuration section](configuration/quality/check-sheets)
***
#### Data Collection
Kanoa Quality can collect Check Sheet data through other automation systems and databases, in-app calculation, or manual operator entry.
Leverage Ignition's data collection interfaces to collect data from PLCs, HMIs, OPC servers, databases, and more. Kanoa Quality is designed to support MQTT for collecting data from IoT and Edge devices.
Our built-in data calculation interface allows both simple (sum, average, min/max) and complex (eval and Python scripting) tools to derive quality data from any source, including other quality data.
Kanoa Quality is designed to accommodate manual operator data entry in complex shop floor environments with a touch-screen-friendly UI design, builtin check instructions, and real-time data validation.

![kanoa-quality](/img/quality/quality-check.png) 

Click here to go to the [Entering Checks section](kanoa-quality/check-sheet)
***
#### Quality Data Analysis
Kanoa Quality has quality data analysis and Statistical Process Control (SPC) built into the platform.
Access Quality Check data on-demand with our built-in analysis engine and charting tools.
Run Nelson, WECO, or Custom statistical rules against data and highlight violations. Exclude outliers and "junk data" to focus on what is important. 

![kanoa-quality](/img/quality/qualityDetail.png) 

Click here to go to the [Analyze Checks section](kanoa-quality/check-details)
***
#### Quality Performance Analysis
Drive accountability with Kanoa Quality's Check Sheet performance analysis tools. See how many checks were completed on-time as-expected and which may have been late, rejected, or missed.
Analyze Check Sheet completion time against expectations to make sure teams are running tests efficiently.
Filter quality efficacy data by Check Sheet, department, shift or asset.

![kanoa-quality](/img/quality/quality-analysis-check-summary.png) 

Click here to go to the [Summarize Checks section](kanoa-quality/check-summary)
***