The FRAME model used for the Functional View is based on hierarchical Data Flow Diagrams. At the highest level is the Context Diagram (see figure below) which shows all the functionality supported by the FRAME Architecture inside a box labelled “System” surrounded by a set of “Terminators”, which are outside the boundary of the system. Each Terminator represents some thing, or person, to which the system will send data and/or from which it will receive data. As there is a large amount of functionality in the FRAME Architecture (2-3000 elements in total), its size is managed using hierarchies of functions and terminators.

The FRAME Context Diagram

The FRAME System in the figure above is divided into 9 Areas (see below). Each Area then has a number of hierarchical levels of functions as required, with each High-Level Function being decomposed into a number of lower-level Functions until the final Low-Level Functions are reached. Initially it was thought that the High-Level Functions would be used during the sub-set creation process, but it was quickly found that, whilst many of the corresponding Low-Level Functions were required in a given situation, not all them were. That, and the difficulty of following data flows through the hierarchy of functions, has resulted in the High-Level Functions being used solely for convenience when creating or looking at the entire FRAME Architecture. Thus the FRAME Architecture Functional View is now defined with its Low-Level Functions, and the creation of sub-sets is performed using only them.

The name “Terminator” derives from the fact that the data for, and produced by, the System starts/stops there. The FRAME Architecture sub-divides some of its Terminators into a number of Actors. Not only does this make the total architecture more manageable, especially the construction of the diagrams, but it is also useful for situations when some data goes to/from all Actors in the Terminator, e.g. all Drivers, and on other occasions data goes to/from a specific Actor, e.g. Public Transport Driver.

The 9 Areas of the FRAME Architecture
The FRAME Architecture models road based ITS applications and services, and is divided into the following nine broad Areas:

* Provide Electronic Payment Facilities
* Provide Safety and Emergency Facilities – includes both in-vehicle and roadside “eCall” plus the management of the Emergency Services responses
* Manage Traffic – includes urban and inter-urban traffic management, plus parking, incident and demand management
* Manage Public Transport Operations – includes both regular and on-demand services, plus fare cards and vehicle sharing
* Provide Advanced Driving Assistance Systems – includes support for in-vehicle services some of which are part of cooperative systems
* Provide Traveller Journey Assistance – includes both pre- and on-trip planning, plus traveller information
* Provide Support for Law Enforcement
* Manage Freight and Fleet Operations
* Provide Support for Cooperative Systems – includes support for cooperative systems not included elsewhere

Links to other modes of transport are made through the Terminator “Multi-Modal System”, which is used to provide travellers with multi-modal travel information, to manage multi-modal crossings and incidents that take place on other modes.

Multiple Copies of Items
Although the FRAME Architecture has only one copy of each element, it clearly has to be able to model situations when more than one identical physical unit is required. There are two ways that this is done:

* It is common practice, when high-level diagrams are drawn, to use a single “box” to represent lots of the same “boxes”, e.g. road side units. Thus a “box” in a Physical View may represent any number of copies of itself.
* Consider the situation when a Traffic Control/Management Centre needs to be able to pass data to/from another adjacent Traffic Control/Management Centre. In this situation it is necessary to be able to show that flow of data. This is done by using the terminator “Other Related System”, which represents a link to other instances of systems that have been produced using the FRAME Architecture

The User Needs
As an initial approximation the FRAME User Needs perform the task of system requirements for the Functional View, though in practice many of them were created in their final form after the Functional View had been produced. They perform three related tasks:

* They are a set of statements that, together, describe the tasks performed by the Function View. Each one uses the style “The system shall…” and so indicates the different functionality that needs to be performed by the ITS.
* Each Low-Level Function is cross-referenced to one or more User Needs and this provides a mechanism to make an initial selection of Functions for a particular sub-set of the FRAME Architecture. It should be noted that there is not an exact, or one-to-one, correlation between the User Needs and the Functions, and most are only cross-referenced to the primary functions that are required to support them. Only rarely will (some of) the secondary functions supplying data to the primary functions also be mentioned, since there can be many of them, often with their own suppliers of data.
* A few of the User Needs do not relate to the Functional View, but to other views or to non-functional requirements.

Logically each High-Level Function should have the User Needs of its constituent lower-level functions. However, when this was done, some High-Level Functions had so many User Needs that the benefit of the information was uncertain, indeed it normally caused confusion. Thus at the same time as it was decided to define the FRAME Architecture with its Low-Level Functions (see above), the associated User Needs were also removed from the High-Level Functions.

Extra Elements
On occasions it is possible that the user of the FRAME Architecture has to add elements to the Functional View for the following two main reasons:

* Since the FRAME Architecture does not claim to contain every ITS application or service, either because it has only recently been devised or its use is very specialised in one location, extra functionality may need to be added to support the missing item.
* On occasions the deployment of a particular service may require part of the functionality of a Low-Level Function to be in one location (in the Physical View), and the remainder in another. In this situation it will be necessary to create two additional Lower-Level Functions, and their associated data flows and data stores, which together perform the original Low-Level Function.

The FRAME Architecture is designed to enable users to do this for themselves and a description of how to do it is available in the Selection Tool Reference Manual.

Configuration Management
The FRAME Architecture is maintained according to a strict set of Configuration Management Rules (260kB pdf file), the objectives of which are to ensure that no ITS Architecture sub-set created from an earlier version will be invalidated by a later version. The primary consequences of this are that if the description of an element needs to be changed then it is given a new identifier, and that the identifier of an “obsolete” element is never re-used.