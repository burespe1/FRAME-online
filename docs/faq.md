# FAQ

## [Planning a modern Transport System]()
The major European goal in the area of mobility is the creation of the Single European Transport Area, which shall be efficient and safe and which is supportive of the goals for climate change. Once the hard infrastructures are in place of new corridors as well as of existing networks and cities, services are required to optimize their performance and integrate their use. Services, using and providing information, which optimize local performance, provide cross-border continuity and seamlessness and provide the basis for multimodality. A modern road-based transport system will be dependent on a number of Intelligent Transport Systems and Services (ITS), based on telematics, components, automated systems for traffic control and management, fleet management (public transport and goods vehicles) and road pricing. The vehicles using the network are increasingly being equipped with automated support systems and services to enhance driving safety and efficiency. The maximum benefit to end users and other stakeholders will be created from these systems when they are fully integrated or harmonized so that they can share data and operate together in a coordinated manner. Effective cooperation is also needed if stakeholders want to offer advanced services such as cross-modal traveller information and cross-organisational and cross-border traffic management. These services are only feasible by seamless collaboration of ITS actors in ITS value chains and networks, as these require information sharing, particularly if multi-modal journeys or transport are to be promoted.

## [Common Pan-European ITS Architecture]()
Archive a Common Pan-European ITS Architecture that includes the necessary priorities/services for ITS – This will be done by modifying and enhancing the existing FRAME Architecture so that it reflects the results of the various projects in this and other programmes as well as the obligations which came with the ITS Directive and the results of the recent work by CEN TC278 PT1701 on the barriers to Urban ITS deployment.In the FRAME NEXT Architecture it will be particularly important to enable the identification of the functional chains that link the collection of raw data through its processing to its use in such things as the management of the road network, dissemination of travel information support to public transport and support to freight transport.

## [FRAME seems to be too complex. Is there a summary of its contents for the decision makers?]()
FRAME covers most of the ITS available today. These systems are complex in the way that they utilize and share the information between each other. The FRAME Functional View represents all of these systems and the information flow between them, so yes if you consider the entirety of FRAME it may seem a little complex. But the entirety of FRAME is seldomly used in any project all together. It is not meant for high level decision makers of any project to work with the whole of it. FRAME is there to make selections out of it, and to create architecture subsets for specific services.

With the extended scope of FRAME in its version 5.0, an architecture subset includes not only the functional aspects of a service but also elements of the business (enterprise) architecture. The Motivation Layer of a subset architecture identifies the problem to be solved by the desired service, shows the “Vision” behind it and summarizes the highest level requirements. Therefore, the Motivation Layer of an architecture subset is the summary that is aimed to be presented to the decision makers.

## [Is FRAME compatible with mobility as a service (MaaS) applications?]()
Yes. The multi-modal traveller information and trip planning services are examples of this. The traveller is an important actor in FRAME and is addressed as both a pre-trip traveler planning a trip and as a traveler on their trip.  For the pre-trip traveler, trip planning and more general travel information is available, which can be delivered to a mobile device or to static locations, such as public transport stops.  Once the traveler is on their trip, they can alter it and be advised of changes in travel conditions that may require a different route or use of services.  The traveler can be a public transport passenger, pedestrian or car driver and can switch between transport modes during their trip.

For some FRAME may appear to have a lot of emphasis on the management of the transport network, but that is because it is complex and is a vital part of ITS if travel services are to be successfully provided.  For example, trip planning either pre-trip or on-trip needs to know about incidents that can affect the choice of route and/or transport mode.  These incidents can take a wide variety of forms and need to be detected, recognized and their impacts mitigated to minimize the disruption to travel and the movement of goods.

## [Does FRAME provide template architectures for its services?]()
No. Since the FRAME Architecture is intended to be used within the European Union it conforms to the principle of subsidiarity[1], and thus does not mandate any physical or organisational structure on a Member State. It comprises only a set of User Needs which describe what ITS can provide, and a Functional View showing how it can be done.

In FRAME Next we have created four architecture subsets for the Priority Actions of the European ITS Directive. They are examples of architecture subsets to be produced from FRAME and they demonstrate the extended scope of FRAME towards a complete business (enterprise) architecture with its additional architecture views. Beyond the Priority Actions, FRAME does not provide suggestions for physical or organizational implementations for any of its services.

In future projects FRAME may provide a selection of user needs / functional view for commonly demanded services as templates but these templates would be covering only the core aspects of any service and the rest has to be built according to the requirements of each project.

## [Is it possible to link international standards / guidelines to architecture subsets in FRAME?]()
Yes. An architecture subset may refer to standards with provisions in various levels. There are two ways that standards may be referenced in architecture subsets of FRAME. A set of standards may describe a high level structure or recommendations for the service that is being built. In this case the standard may be referenced as a “Requirement” for the service.

In other cases a standard may be related to a specific part of a service and set out a detailed description of what that part is or how it behaves (for example a component or an interface). FRAME offers a stereotyped artefact called “Specification” in its toolbox that can be used to specify standards related to specific parts of an architecture subset.

It is also very easy to generate documentation by filtering only the “specification” objects that are included into any architecture subset’s repository when creating purchase documents or product specifications.

## [Is it possible to model interfaces to existing systems?]()
Yes. It is highly anticipated that some other ITS services will already be in operation while developing an architecture subset for a particular service. These services are outside the boundary of an architecture subset and therefore they are “Terminators” for the service in the architecture subset. It is possible to model these external services using a “Terminator” stereotype, identify their interfaces to the service in the architecture subset, and model their interaction in between.

## [Will I need to purchase the new FRAME Tool?]()
The new FRAME tool and its repository is being modelled in Enterprise Architect. There is no additional cost to access FRAME materials but you will need to have Enterprise Architect installed. A view-only version of Enterprise Architect could be downloaded from the website of the developer for free. To use all features of Enterprise Architect, and to create architecture subsets of FRAME for your project, a licensed version is necessary.

It is also possible to download a 30-day trial edition of Enterprise Architect from here. The trial edition is fully operational, and can be used to explore the use of FRAME or to create an architecture subset, depending on the complexity of the ITS Service to be modelled.

## [What are FRAME User Needs]()
The FRAME User Needs have three principal uses, as follows.

 - Specification of the Functional View – One or more User Needs provide the specification for what the functionality in the Functional View must do. Each Function is cross-referenced to one or more User Needs for which it helps to provide primary functionality.
 - Creating ITS Architecture Sub-sets – see Creating an ITS Architecture using FRAME.
 - Describing ITS Applications and Services – The User Needs provide a description of most ITS applications and services that might be required anywhere within the European Union. They can therefore be used for this descriptive purpose alone, e.g. by a research student wishing to know what ITS applications and services are being considered.

In order to satisfy these uses the User Needs need to be written in a manner that is clear and unambiguous, and at a level of abstraction that is sufficient to describe the primary functionality but without unnecessary detail. They should thus have the following properties:

 - “Shall language” – In order to ensure that the User Needs specify what the functionality in the Functional View has to do, or features that must be included in the sub-systems and modules defined in the Physical View, they are written (in English) using the phraseology “The system shall…”. This ensures that each User Need is written from the systems’ point of view, and hence states the functionality required of that system, and not from the users’ point of view, which is likely to state how the results are to be used (and may be interpreted in more than one way).
 - Short – User Needs are the entry points into the Functional View, and need to contain sufficient detail to identify the entry point precisely – only. When they are being written each phrase must have the answer “yes” to the question “is this necessary?”. A typical User Need comprises one English sentence three to five lines long (the original User Needs produced by KAREN were limited to 255 characters).
 - Technology Independence – since the FRAME Architecture will have a lifespan longer than the technology that will be used to implement its features, the User Needs should state what the system is required to do, but not the mechanism for achieving it. Those User Needs that do not relate to functionality, e.g. Communications, Physical locations, should also follow this principle.
 - Unambiguous – the meaning must be absolutely clear from the description. Thus, for example, whenever the word “information” is used it must be obvious from the context what should be contained within that information, otherwise it should be specified.
 - Testable – since they form the basis of the FRAME Architecture and what is implemented from it, they must be written in a manner such that it is possible to check that each User Need is represented in some manner in the FRAME Architecture or the implementation.
 - Traceable and Unique – since it must be possible to trace the manifestation of a User Need in a FRAME Architecture sub-set each User Need must have a unique identifier.
 - Singular – If a User Need gives rise to a set of functionalities, it is assumed that all those functionalities will be required on every occasion the service is implemented. If this is not the case then it should be broken down into a number of separate User Needs.

On occasions these properties can be in conflict, in particular when writing User Needs which are unambiguous and singular, but also short, especially as there is a general desire not to have too many User Needs in the entire FRAME Architecture. Whilst no universal way has yet been found to resolve all such conflicts, some can be avoided by starting with a “high-level” User Need that describes a basic form of an application or service, followed by a number of optional extra User Needs that contain the detail of specific features.

## [How can you use the Organisational View?]()
The Organisational View is usually a derivative of the Physical View. It is used to show the organisations that will own, and/or operate, and/or maintain the Sub-systems and Modules in the Physical View. This is very useful for highlighting the relationships between different organisations and any conflicts that may arise. It can also be used to look at how data will have to be, or could be, shared between organisations.

An Organisational View usually considers the following specific issues:

 - Each service that can be provided by the functionality in an ITS architecture will be used by somebody or an organisation.
 - Each sub-system and module within the Physical View must be owned and/or managed by an organisation.
 - The relationship between organisations can take one of the following forms:
    - Directional – one (or part of an) organisation has the power to direct, or manage, what another (or other part of an) organisation does and, possibly how it is done, e.g. the organisation managing the road network manages how public transport uses the road network.
	- Long Term Contractual – one organisation is required to perform a defined service for, or on behalf of, another organisation, e.g. a communications provider will provide a service that enables data or information to be communicated from one part of the system to another;
	- Short Term Contractual – one organisation, or individual, pays another organisation for a well-defined service, e.g. the Traveller pays to use Public Transport

Some sub-systems and modules will provide data for others and this can raise organisational issues if the data that is provided is incorrect and/or incomplete. When such a failure occurs, it is important to be able to identify who is responsible for its occurrence, for rectifying it and for preventing it happening again. This may not be obvious if the failure is in an emergent property of a service provided by sub-systems owned by more than one organisation, each supplying part of the total service (see below).

## [How can you plan the Behaviour of an integrated ITS?]()
There are occasions when it is necessary to impose a particular form of behaviour, or a particular organisation structure, on integrated ITS. Examples include the need to:

 - Localise safety functions so that they will continue to work when “higher” (non-safety) functions are absent;
 - Provide a command and control structure that conforms to certain legal, or constitutional, requirements.

In these circumstances an overall concept has to be specified to which the system structure must conform.

## [How can you deal with Liability Issues?]()
Integrated ITS may be provided by components owned by more than one organisation, and some hazards may be the result of interactions between those components. It will therefore be necessary to identify who is responsible for dealing with the consequences, both legal and technical. An ITS Architecture provides a model of the components, and their interconnections, and thus a basis for analysing these issues.

### Safety
All ITS applications and services should be considered as being safety-related, until they have been shown not to be, using a process called Preliminary Safety Analysis. The safe use of ITS has three principal components:

 - (Functional) System Safety – e.g. relating to design faults or system malfunctions. This is provided by including additional stages in the system development lifecycle during which the probability of a dangerous failure is reduced to an acceptable level.
 - Human-Machine Interaction (HMI) – relating to usability, e.g. perception, overload, under-load. A key question is how much information can be presented to a driver before it stops being a help and starts to be a distraction from the main driving task.
 - Traffic Safety – all components of the traffic system working together. This relates to the direct or indirect effects of the ITS on the safety of the traffic situation.

An ITS Architecture provides a model for a safety analysis, and advice on how to approach safety issues can be found in the UTMC22 report in Other Related Reports.

### Security
Security abuse commonly includes, but is not limited to, unauthorised disclosure of information (loss of confidentiality), unauthorised modification of data (loss of integrity), and unauthorised deprivation of access to the asset (loss of availability). Users and owners of ITS must have confidence that there are countermeasures that will minimise any security risk. Whilst security is necessary for privacy, it is not sufficient.

A study of an ITS Architecture will identify where security issues need to be considered. It should also be noted that ETSI TC ITS WG5 is addressing the need for security in ITS communications.

### Privacy
Through their frequent use of vehicle identities, Cooperative Systems need to include the requirements for privacy right from the start of the initial designs. Care will have to be taken to ensure that the requirements of the European Privacy Directive are considered at every stage of the design process. A particular issue is that just making the identity of a vehicle “anonymous” is not always sufficient to ensure privacy in all situations.

A study of an ITS Architecture will identify where privacy issues need to be considered, in conjunction with CEN standard TR16742.

## [How can you undertake a Risk Analysis?]()
A risk analysis assesses the hazards that may affect an ITS deployment. Those hazards with the most severe risks should be provided with a mitigation strategy, and each strategy should be assigned to an Owner who is responsible for its implementation.

Risk Analysis is divided into five steps:

 - Identify the hazard  (what might go wrong), be it a financial, technical, organisational, institutional or a requirement hazard;
 - Identify the consequence(s) of each hazard, there may be more than one, and assign a probability  that they will occur, e.g. Low, Medium, High [1];
 - Assign an impact  to each consequence, e.g. Low, Medium, High [1];
 - Categorise the risk  (probability vs. impact) of each consequence, e.g. using a risk graph

Example Risk Graph [1]

 - Decide which categories of risk need a mitigation strategy, e.g. all red and orange, and identify the actions that need to be taken to reduce the risk to an acceptable level [1].

The result should be a list of Hazards, with their Mitigation Strategies and Owners

[1] The examples given above are only examples. The number of possible Probabilities and Impacts, as well as the content of the Risk Graph must be approved by a suitable authority. In the case of Safety and Security hazards they may have legal consequences.

## [How can you undertake a Cost/Benefit Analysis?]()
Cost–benefit analysis is a systematic process for calculating and comparing benefits and costs of a project. The costs of an ITS project can be divided between the Capital Costs, e.g. for the acquisition and deployment of equipment, and the Revenue Costs, e.g. for staff. The benefits often cannot be quantified in monetary terms, but may include reduced delays, improved environment, etc.

The following are some of the resources that are freely available:

 - [European and US figures organisation that concentrates on “evaluation”](http://www.ibec-its.co.uk)
 - [results from UK based ITS deployments](http://www.itstoolkit.co.uk)
 - [FP7 project](http://www.2decide.eu)
 - [US based costs figures](http://www.benefitcost.its.dot.gov/its/benecost.nsf/CostHome)
 - [US based benefits figures](http://www.benefitcost.its.dot.gov/its/benecost.nsf/BenefitsHome)
 