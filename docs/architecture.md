---
id: architecture
title: Architectures
sidebar_position: 1
hide_table_of_contents: true 
---

So you're finally ready to roll out a brand new state of the art Manufacturing Execution System using KanoaMES, congratulations! 
The road has been long, trying to justify the cost, determine the ROI, selecting the right MES solution and gaining the needed support within your organization.
Now all you have to do is ensure a successful implementation... well probably best to start off with the architecture. 

Here you go...


![architecture](/img/architectures/architecture_basic.png)

Yes it might seem a bit simple, but we're huge fans of keeping it simple. Our motto is MES shouldn't be more complicated than the process to build your product, that would be silly. And it certainly shouldn't be as expensive.<br/>

Let's break this architecture down. 

We use an edge device and a broker service because that provides network resiliency in the case of an outage and massively reduces network traffic, so you don't have to worry about overloading your network or losing data if a switch fails or a server dies. 
And that right there is huge, because MES is about collecting, collating and contextualizing data, and if your data has gaps, you can hardly turn that into knowledge or wisdom.

**'One server aint going to cut it, we've a bunch of sites and hundreds of production assets'**<br/>
Well maybe. But let's give it a shot, our system is lightning fast, seriously, and optimized so that whether you're a single asset , single site or multi-enterprise / multi-site, we'll still probably end up recommending that we 
start out with a single server until you reach capacity, because we can handle quite the load. You can spend a lot more with a multi server architecture, but why bother if it increases your costs and complexity and doesn't address any of your concerns? 
We can easily spin out more servers at a later stage.

But perhaps you're more concerned about redundancy or load balancing. 

**'What if the MES server dies?, it may not lose data, but operators still need to be able to start production runs'**<br/>
Well we built Kanoa MES on top of Ignition, so we have plenty of options. Ignition provides its own redundancy configuration by way of setting up a primary/secondary server, each listening to each other. If the primary goes down, the secondary takes over.

![architecture](/img/architectures/architecture_redundant.png)

And we can always use this configuration, but our opinion is that adding a redundant ignition server can be a double edged sword. Yes you're protected if your failure point stems from the primary server going down, but there are so many other failure points.
It could be a Kepware server, it could be the database, it could a switch between the ignition server and the database server, it could a server update or a change to the firewall. 
Or it could be the network connection between the servers that make the primary and secondary both think they're active.<br/>

So if redundancy is important and/or you want to balance the load and have servers that handle a specific site or area, simply spin up another MES server and split your assets between them.

![architecture](/img/architectures/architecture_multi_1.png)

In this architecture, each gateway is configured identically, however its domain of control is specific to certain assets and the tags to capture and store states and counts are only enabled on that server. 
Users can access any of the servers to configure, schedule, operate assets and view analysis of any asset. 
Should a server go down unexpectedly or require maintenance, one of the other servers can be configured to enable those assets to continue to capture asset states and counts or switching can be performed automatically via the gateway area network.

**What if the database server goes down?**<br/>

Database Administration is its own world and has plenty of solutions in place for disaster recovery, database backup and restore, archiving, mirroring and load balancing. 
Your DBA should have you covered but if they don't, a cloud solution such as AWS RDS or Azure will, and we can also provide you with a cloud SAAS solution that includes this.

**Our manufacturing sites don't have reliable network connectivity**<br/>
We used to hear this quite a bit, but it has certainly become less and less over the years. As IS/IT solutions moved to the cloud, remote sites needed to figure out how they were going to be able to 
manufacture when they couldn't connect to ERP, inventory management software or labor reporting systems. 
Installing dual redundant fiber-optic networks with backup cellular vpn was more effective than managing local instances of every system.
But if your MES implementation will be tightly coupled to production control and any spottiness will create downtime, then you'll certainly be looking at having localized MES Servers. 

![architecture](/img/architectures/architecture_local_site.png)

In this architecture, the database servers can be set up for mirroring, or services such as HighByte can be employed to push data around. 
The MES enterprise server is no different than the local MES server other than it has access to data from all sites. 
If you want the MES Enterprise Server to be controlling rather than passive, that can be achieved using the Gateway Area network for messaging between the enterprise MES server and local MES servers, and remote tag providers.

**'Even the slightest interruption will cause us issues'**<br/>

We get it. Doesn't matter what the failure point is, it won't be good if it happens. Ignition provides such a flexible solution that we can at any point tweak the architecture to address identified failure points. 
Edge devices are cheap, so if your failure point may be a switch or cable between a plc cabinet and the gateway server, then install an edge device in each plc cabinet. 
No loss of data and a switch failure will only affect that line and there will be no data loss.

But if it does happen, our Kanoa MES provides a really easy user screen to add in the missing data. Add a run, add downtime events, edit production counts. 
You don’t want to have to do it, but if you need to patch in a run, you can do it easily and quickly without having to touch the database.

**'Perhaps I should move everything to the cloud'**<br/>

Yes, you probably should, because at the end of the day we're capturing a wealth of data and trying to make sense of it to drive continuous improvement, and you're going to want to start making that data available to AI and machine learning algorithms.

**'Should I be using containers?'**<br/>
We are. Containers allow us to easily deploy our application, ignition server and database all in one through our CI/CD process to our Dev - QA - Demo servers. We also host 8 docker containers on a single linux cloud server available for anyone to try out the application. 

In summary, Kanoa MES is an extremely flexible solution that coupled with Ignition provides a wealth of choices for how to architect out your solution. That architecture will ultimately be dependent on the requirements (production control, redundancy, fault tolerance, compliance), 
system constraints (network reliability, latency, security) and budget. 

And you're not alone when it comes to mitigating risk of system failure. Inductive Automation provides a wealth of resources and they will support you in architecting the right solution for you.Cirrus Link are also right beside you providing the IIOT solution. 
Our Friends Of Kanoa partners 4IR Solutions sole purpose in life is in providing managed solutions, and our own SAAS solution means you have the might of AWS managing availability and security.



