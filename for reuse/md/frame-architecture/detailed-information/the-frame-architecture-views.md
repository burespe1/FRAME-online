Integrated ITS services are complex, and it is not possible to describe them completely in a single model or diagram. Instead we use a number of different models, each one concentrating on a different aspect of the integrated ITS services. As an example consider how people might describe a car. Some are interested in their colour and style, others are interested in the interior design. Technical issues, e.g. maximum speed, fuel consumption is another area to be considered as, of course, is the price. None of these attributes is sufficient to describe a car on its own, but together they built up a total picture i.e. they are each different views, or viewpoints, of a car (see below).

In a similar way we use a number of different views to describe a set of integrated ITS services which, together, form the ITS Architecture. The FRAME methodology use of the term “Views” follows the recommendations of IEEE 1471. The alternative term of “Architecture” is still used elsewhere, but we feel that an architecture made up of views is more comprehensible than one that is made up of architectures.

Whilst there are a very large number of possible Views, there are four principle views that are used by most users of the FRAME Architecture – The Functional, Physical, Communications and Organisational Views.

The Functional View
The Functional View (sometimes called the Logical View) describes the functionality (what is to be done) to create the various ITS services. The FRAME Architecture uses Data Flow Diagrams to define the Physical View, as these not only have the properties needed for the FRAME Architecture, i.e. the ability to be partitioned into consistent sub-sets, but they have been proven to be fully comprehensible by all those who need to understand them, in particular those with a non-technical background. A typical data flow diagram is made up of Functions, that “do” things, Data Stores that store sets of data for a length of time (but are not necessarily full databases), and Functional Data Flows that pass data between then, as shown in the example below.

Physical View
A Physical View shows where, physically, each Function and Data Store is to be located. Example locations can be:

* Central – the place that is used by parts of a system to collect and manage the storage and processing of traffic data, toll payments, freight shipping orders, and/or the generation of traffic management measures, or fleet management instructions, with or without human intervention, e.g. a traffic control/information centre, or a freight and fleet management centre.
* Roadside – the place that is used by parts of a system for the detection of traffic, vehicles and pedestrians, or the collection of tolls, and/or the generation of traffic management measures, and/or the provision of information and commands to drivers and/or pedestrians.
* Vehicle – a device that is capable of moving through the road network and carrying one or more people (bicycles, motorcycles, cars, public transport vehicles) and/or goods (vans and any other form of vehicle able to carry freight on roads) in which parts of system can be installed during manufacture or can be added on later.
* Personal device – a nomadic device in which part of the system can be installed so that it can be easily used (and possibly carried) by travellers as one of their personal possessions.
* Freight device – a device in which part of the system can be installed so that it is an integral part of a freight carrying unit, e. g. freight container, trailer, or vehicle body.
* Kiosk – a device, usually located in a public place, into which part of the system can be installed to enable travellers to have limited and controlled access to some of its facilities.

But other names can be used, e.g. the name of a building instead of “Central”, in order to make things clear to the reader.

The example below shows the above Functions and Data Stores allocated either to Sub-System X or to Sub-System Y. A consequence on this is that the two Functional Data Flows FDFi and FDFj now have to pass between the two Sub-Systems and thus comprise a single Physical Data Flow.

Sometimes it is useful to sub-divide a sub-system into two or more Modules, each containing a set of Functions and Data Stores to perform a specific task or service.

Communications View
A Communications View is the result of an analysis of the Physical Data Flows and describes the kinds of communications links that will be required. Of particular interest is:

* Size – the quantity of data in each item
* Time between the creation of the data and its use
* Time before a new value is required
* When one of the sub-systems is mobile

The first two items will provide the minimum data transfer rate. The third will indicate whether a data link can be shared, and the fourth will indicate whether a wireless link must be used.

The use of, or the need for, a communication standard can also be inferred from these results.

Organisational View
The above three views consider technical aspects of an ITS deployment, the organisational views considers the ownership and business issues, e.g. who owns what, who manages what, and the business/contractual relationships between the various parties involved.

The Organisation View is usually a derivative of the Physical View. It is used to show the organisations that will own, and/or operate, and/or maintain the Sub-Systems and Modules in the Physical View (see Section 6.4 in Deployment and Organisational Issues for Cooperative Systems).

On occasions it is necessary for an ITS architecture to fit into a given organisational/legal/constitutional structure. On these occasions the Physical View must be created to meet these constraints. (see also The FRAME Architecture and the ITS Action Plan)