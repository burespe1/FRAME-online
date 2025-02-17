The FRAME User Needs have three principal uses, as follows.

* Specification of the Functional View – One or more User Needs provide the specification for what the functionality in the Functional View must do. Each Function is cross-referenced to one or more User Needs for which it helps to provide primary functionality.
* Creating ITS Architecture Sub-sets – see Creating an ITS Architecture using FRAME.
* Describing ITS Applications and Services – The User Needs provide a description of most ITS applications and services that might be required anywhere within the European Union. They can therefore be used for this descriptive purpose alone, e.g. by a research student wishing to know what ITS applications and services are being considered.

In order to satisfy these uses the User Needs need to be written in a manner that is clear and unambiguous, and at a level of abstraction that is sufficient to describe the primary functionality but without unnecessary detail. They should thus have the following properties:

* “Shall language” – In order to ensure that the User Needs specify what the functionality in the Functional View has to do, or features that must be included in the sub-systems and modules defined in the Physical View, they are written (in English) using the phraseology “The system shall…”. This ensures that each User Need is written from the systems’ point of view, and hence states the functionality required of that system, and not from the users’ point of view, which is likely to state how the results are to be used (and may be interpreted in more than one way).
* Short – User Needs are the entry points into the Functional View, and need to contain sufficient detail to identify the entry point precisely – only. When they are being written each phrase must have the answer “yes” to the question “is this necessary?”. A typical User Need comprises one English sentence three to five lines long (the original User Needs produced by KAREN were limited to 255 characters).
* Technology Independence – since the FRAME Architecture will have a lifespan longer than the technology that will be used to implement its features, the User Needs should state what the system is required to do, but not the mechanism for achieving it. Those User Needs that do not relate to functionality, e.g. Communications, Physical locations, should also follow this principle.
* Unambiguous – the meaning must be absolutely clear from the description. Thus, for example, whenever the word “information” is used it must be obvious from the context what should be contained within that information, otherwise it should be specified.
* Testable – since they form the basis of the FRAME Architecture and what is implemented from it, they must be written in a manner such that it is possible to check that each User Need is represented in some manner in the FRAME Architecture or the implementation.
* Traceable and Unique – since it must be possible to trace the manifestation of a User Need in a FRAME Architecture sub-set each User Need must have a unique identifier.
* Singular – If a User Need gives rise to a set of functionalities, it is assumed that all those functionalities will be required on every occasion the service is implemented. If this is not the case then it should be broken down into a number of separate User Needs.

On occasions these properties can be in conflict, in particular when writing User Needs which are unambiguous and singular, but also short, especially as there is a general desire not to have too many User Needs in the entire FRAME Architecture. Whilst no universal way has yet been found to resolve all such conflicts, some can be avoided by starting with a “high-level” User Need that describes a basic form of an application or service, followed by a number of optional extra User Needs that contain the detail of specific features.

Further Reading
A comprehensive explanation of the FRAME User Needs can be found here (1MB pdf file).

The current set of User Needs can be found here (720kB pdf file).