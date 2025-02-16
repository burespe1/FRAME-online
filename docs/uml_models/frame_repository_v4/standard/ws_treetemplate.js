
// ***************************************************************** 
// Definition of class Folder 
// ***************************************************************** 
function Folder(folderDescription, iconSrc, iconSrcClosed, hreference, bChildToBeLoaded) //constructor 
{ 
  //constant data 
  
  this.svgiconSrc= iconSrc
  this.svgiconSrcClosed= iconSrcClosed
  this.svgbChildToBeLoaded = bChildToBeLoaded
  
  this.desc = folderDescription 
  this.hreference = hreference   
  
  this.id = -1   
  this.navObj = 0  
  this.iconImg = 0  
  this.nodeImg = 0  
  this.isLastNode = 0 
  this.iconSrc = ICONPATH + iconSrc  
  if(iconSrcClosed=="")	
	this.iconSrcClosed = ICONPATH + iconSrc
  else
  	this.iconSrcClosed = ICONPATH + iconSrcClosed
  this.children = new Array 
  this.nChildren = 0 
  this.nPosChildren = -1;
  this.level = 0
  this.leftSideCoded = ""
  this.isLastNode=false
  this.parentObj = null
  this.maySelect=true
 
  if(bChildToBeLoaded=="true")
	this.bChildToBeLoaded=true;
  else
	this.bChildToBeLoaded=false;
 
  //dynamic data 
  this.isOpen = false
  this.isLastOpenedFolder = false
  this.isRendered = 0
 
  //methods 
  this.initialize = initializeFolder 
  this.setState = setStateFolder 
  this.addChild = addChild 
  this.createIndex = createEntryIndex 
  this.escondeBlock = escondeBlock
  this.esconde = escondeFolder 
  this.folderMstr = folderMstr 
  this.renderOb = drawFolder 
  this.totalHeight = totalHeight 
  this.subEntries = folderSubEntries 
  this.linkHTML = linkFolderHTML
  this.blockStartHTML = blockStartHTML
  this.blockEndHTML = blockEndHTML
  this.nodeImageSrc = nodeImageSrc
  this.iconImageSrc = iconImageSrc
  this.getID = getID
  this.forceOpeningOfAncestorFolders = forceOpeningOfAncestorFolders
} 
 
function initializeFolder(level, lastNode, leftSide) 
{ 
  var j=0 
  var i=0       
  nc = this.nChildren 
   
  this.createIndex() 
  this.level = level
  this.leftSideCoded = leftSide

  if (browserVersion == 0)
    this.isOpen=true;

  if (level>0)
    if (lastNode) //the last child in the children array 
		leftSide = leftSide + "0"
	else
		leftSide = leftSide + "1"

  this.isLastNode = lastNode
 
  if (nc > 0) 
  { 
    level = level + 1 
    for (i=0 ; i < this.nChildren; i++)  
    { 
      if (i == this.nChildren-1) 
      {
        this.children[i].initialize(level, true, leftSide)
       }
      else 
        this.children[i].initialize(level, false, leftSide)
    } 
  } 
} 
 
function drawFolder(insertAtObj) 
{ 
  var nodeName = ""
  var auxEv = ""
  var docW = ""

  var leftSide = leftSideHTML(this.leftSideCoded)

  /*if (browserVersion > 0) 
    auxEv = "<a href='javascript:clickOnNode(\""+this.getID()+"\")'>" 
  else 
    auxEv = "<a>" */

  nodeName = this.nodeImageSrc()
 
  if (this.level>0) 
    if (this.nChildren == 0 && !this.bChildToBeLoaded) //the last child in the children array 
	  leftSide = leftSide + "<td class=\"InvisibleTable\" valign=top onClick='javascript:clickOnNode(\""+this.getID()+"\")'>" + "<img name='nodeIcon" + this.id + "' id='nodeIcon" + this.id + "' src='" + nodeName + "' width=16 height=22 border=0></td>"
    else 
      leftSide = leftSide + "<td class=\"InvisibleTable\" valign=top style='Cursor : hand' onClick='javascript:clickOnNode(\""+this.getID()+"\")' >" + "<img name='nodeIcon" + this.id + "' id='nodeIcon" + this.id + "' src='" + nodeName + "' width=16 height=22 border=0></td>"

  this.isRendered = 1

  if (browserVersion == 2) { 
    if (!doc.yPos) 
      doc.yPos=20 
  } 

  docW = this.blockStartHTML("folder");

  docW = docW + "<tr>" + leftSide + "<td class=\"InvisibleTable\"valign=top>";
  
  docW = docW + this.linkHTML(false) 
  docW = docW + "<img id='folderIcon" + this.id + "' name='folderIcon" + this.id + "' src='" + this.iconImageSrc() + "' border=0></a>"
  
  if (WRAPTEXT)
	  docW = docW + "</td><td class=\"InvisibleTable\" valign=middle width=100%>"
  else
	  docW = docW + "</td><td class=\"InvisibleTable\" valign=middle nowrap width=100%>"
  
  docW = docW + this.linkHTML(true)     
  docW = docW + this.desc + "</a>"    

  docW = docW + this.blockEndHTML()

  if (insertAtObj == null)
  {
	  if (supportsDeferral) {
		  doc.write("<div id=domRoot></div>") //transition between regular flow HTML, and node-insert DOM DHTML
		  insertAtObj = getElById("domRoot")		  
		  insertAtObj.insertAdjacentHTML("beforeEnd", docW)
	  }
	  else
		  doc.write(docW)
  }
  else
  {
      insertAtObj.insertAdjacentHTML("afterEnd", docW)
  }
 
  if (browserVersion == 2) 
  { 
    this.navObj = doc.layers["folder"+this.id] 
    this.iconImg = this.navObj.document.images["folderIcon"+this.id] 
    this.nodeImg = this.navObj.document.images["nodeIcon"+this.id] 
    doc.yPos=doc.yPos+this.navObj.clip.height 
  } 
  else if (browserVersion != 0)
  { 
    this.navObj = getElById("folder"+this.id)
    this.iconImg = getElById("folderIcon"+this.id) 
    this.nodeImg = getElById("nodeIcon"+this.id)
  } 
} 
 
function setStateFolder(isOpen) 
{ 
  var subEntries 
  var totalHeight 
  var fIt = 0 
  var i=0 
  var currentOpen
 
  if (isOpen == this.isOpen) 
    return 
 
  if (browserVersion == 2)  
  { 
    totalHeight = 0 
    for (i=0; i < this.nChildren; i++) 
      totalHeight = totalHeight + this.children[i].navObj.clip.height 
      subEntries = this.subEntries() 
    if (this.isOpen) 
      totalHeight = 0 - totalHeight 
    for (fIt = this.id + subEntries + 1; fIt < nEntries; fIt++) 
      indexOfEntries[fIt].navObj.moveBy(0, totalHeight) 
  }  
  this.isOpen = isOpen; 
	
  if (!this.isOpen && this.isLastOpenedfolder)
  {
		lastOpenedFolder = null;
		this.isLastOpenedfolder = false;
  }
  propagateChangesInState(this) 
} 
 
function propagateChangesInState(folder) 
{   
  var i=0 

  //Change icon
  if (folder.nChildren > 0 && folder.level>0)  //otherwise the one given at render stays
    folder.nodeImg.src = folder.nodeImageSrc()

  //Change node  
  folder.iconImg.src = folder.iconImageSrc()

  //Propagate changes
  for (i=folder.nChildren-1; i>=0; i--) 
    if (folder.isOpen) 
      folder.children[i].folderMstr(folder.navObj)
    else 
  	  folder.children[i].esconde() 
} 
 
function escondeFolder() 
{ 
  this.escondeBlock()
   
  this.setState(0) 
} 
 
function TreeLinkMouseOver()
{
	var eltTreeObj;
	eltTreeObj= window.event.srcElement;
	if(eltTreeObj.className != "TreeLinkSelected")
	{
		eltTreeObj.className = "TreeLinkHighlighted";	
	}
}
 
function TreeLinkMouseOut()
{	
	var eltTreeObj;
	eltTreeObj= window.event.srcElement;
	if(eltTreeObj.className != "TreeLinkSelected")
	{
		eltTreeObj.className = "TreeLink";
	}
}
 
function linkFolderHTML(isTextLink) 
{ 
	var docW = "";
	
	if (this.hreference) 
	{ 
		docW = docW + "<a ";
		if (isTextLink) 
		{
			docW = docW + " id=\"itemTextLink"+this.id+"\"";
			docW = docW+ " onmouseover=\"TreeLinkMouseOver();\"";
			docW = docW+ " onmouseout=\"TreeLinkMouseOut();\"";
			docW = docW + " class=\"TreeLink\""    
		}
    
		if (browserVersion > 0) 
			docW = docW + "onClick='javascript:clickOnFolder(\""+this.getID()+"\")'"		
		docW = docW + ">"
	} 
	else 
		docW = docW + "<a class=\"TreeLink\">" 
	return docW;
} 
 
function addChild(childNode) 
{ 
  this.children[this.nChildren] = childNode 
  childNode.parentObj = this
  childNode.nPosChildren = this.nChildren;
  this.nChildren++ 
  return childNode 
} 
 
function folderSubEntries() 
{ 
  var i = 0 
  var se = this.nChildren 
 
  for (i=0; i < this.nChildren; i++){ 
    if (this.children[i].children) //is a folder 
      se = se + this.children[i].subEntries() 
  } 
 
  return se 
} 

function nodeImageSrc() {
  var srcStr = "";

  if (this.isLastNode) //the last child in the children array 
  { 
    if (this.nChildren == 0 && !this.bChildToBeLoaded)
      srcStr = ICONPATH + "ws_ftv2lastnode.gif"
    else
      if (this.isOpen)
        srcStr = ICONPATH + "ws_ftv2mlastnode.gif"  
      else
        srcStr = ICONPATH + "ws_ftv2plastnode.gif"  
  } 
  else 
  { 
    if (this.nChildren == 0 && !this.bChildToBeLoaded)
      srcStr = ICONPATH + "ws_ftv2node.gif"
    else
      if (this.isOpen)
        srcStr = ICONPATH + "ws_ftv2mnode.gif"
      else
        srcStr = ICONPATH + "ws_ftv2pnode.gif"
  }   
  return srcStr;
}

function iconImageSrc() {
  if (this.isOpen)
    return(this.iconSrc)
  else
    return(this.iconSrcClosed)
} 
 
 
function forceOpeningOfAncestorFolders() {
  if (this.parentObj == null || this.parentObj.isOpen)
    return
  else {
    this.parentObj.forceOpeningOfAncestorFolders()
    clickOnNodeObj(this.parentObj)
  }
}

function escondeBlock() 
{ 
  if (browserVersion == 1 || browserVersion == 3) { 
    if (this.navObj.style.display == "none") 
      return 
    this.navObj.style.display = "none" 
  } else { 
    if (this.navObj.visibility == "hiden") 
      return 
    this.navObj.visibility = "hiden" 
  }     
} 
 
function folderMstr(domObj) 
{   
  if (!this.isRendered)
     this.renderOb(domObj)
  else
    if (browserVersion == 1 || browserVersion == 3) 
      this.navObj.style.display = "block" 
    else 
      this.navObj.visibility = "show" 
} 

function blockStartHTML(idprefix) {
  var idParam = "id='" + idprefix + this.id + "'"
  var docW = ""

  if (browserVersion == 2) 
    docW = "<layer "+ idParam + " top=" + doc.yPos + " visibility=show>"
  else if (browserVersion != 0)
    docW = "<div " + idParam + " style='display:block; position:block;'>"
     
  docW = docW + "<table class=\"InvisibleTable\" cellspacing=0 cellpadding=0 width=100% >"

  return docW
}

function blockEndHTML() {
  var docW = ""

  docW = "</table>"
   
  if (browserVersion == 2) 
    docW = docW + "</layer>"
  else if (browserVersion != 0)
    docW = docW + "</div>"

  return docW
}
 
function createEntryIndex() 
{ 
  this.id = nEntries 
  indexOfEntries[nEntries] = this 
  nEntries++ 
} 
 
// total height of subEntries open 
function totalHeight() //used with browserVersion == 2 
{ 
  var h = this.navObj.clip.height 
  var i = 0 
   
  if (this.isOpen) //is a folder and _is_ open 
    for (i=0 ; i < this.nChildren; i++)  
      h = h + this.children[i].totalHeight() 
 
  return h 
} 


function leftSideHTML(leftSideCoded) {
	var i;
	var retStr = "";

	for (i=0; i<leftSideCoded.length; i++)
	{
		if (leftSideCoded.charAt(i) == "1")
		{
			retStr = retStr + "<td class=\"InvisibleTable\" valign=top background=" + ICONPATH + "ws_ftv2vertline.gif><img src='" + ICONPATH + "ws_ftv2vertline.gif' width=16 height=22></td>"
		}
		if (leftSideCoded.charAt(i) == "0")
		{
			retStr = retStr + "<td class=\"InvisibleTable\" valign=top><img src='" + ICONPATH + "ws_ftv2blank.gif' width=16 height=22></td>"
		}
	}
	return retStr
}

function getID()
{
  //define a .xID in all nodes (folders and items) if you want to PERVESTATE that
  //work when the tree changes. The value eXternal value must be unique for each
  //node and must node change when other nodes are added or removed
  //The value may be numeric or string, but cannot have the same char used in cookieCutter
  if (typeof this.xID != "undefined") 
    return this.xID
  else
    return this.id
}

 
// Events 
// ********************************************************* 
 
function clickOnFolder(folderId) 
{ 			
    var clicked = findObj(folderId)
		
	LINKTARGET.location = clicked.hreference;				
	    
    if (clicked.nChildren==0) {
      lastOpenedFolder = folderId;
      clicked.isLastOpenedfolder = true
    }

    if (isLinked(clicked.hreference)) {
        highlightObjLink(clicked);
    }
} 
 
function clickOnNode(folderId) 
{ 		
	clickOnNodeObj(findObj(folderId));  
}

function clickOnNodeObj(folderObj) 
{ 	
	if (folderObj == null) return;
	if(folderObj.bChildToBeLoaded)
	{
		folderLoaded = findObjFromReference(folderObj.hreference, 0)
		for (i=0; i < folderLoaded.nChildren; i++)
		{
			var bChildChildToBeLoaded="false";
			if(folderLoaded.children[i].nChildren > 0 || folderLoaded.children[i].bChildToBeLoaded)
			{				
				bChildChildToBeLoaded="true";
			}
			insFldX(folderObj, gFld(folderLoaded.children[i].desc, 
									folderLoaded.children[i].svgiconSrc, 
									folderLoaded.children[i].svgiconSrcClosed, 
									folderLoaded.children[i].hreference, 
									bChildChildToBeLoaded));												
		}				
			
		var leftSide =""
		var level = 0
		if (folderObj.isLastNode) //the last child in the children array 
			leftSide = folderObj.leftSideCoded + "0";
		else
			leftSide = folderObj.leftSideCoded + "1";
		
		level = folderObj.level + 1 ;
		for (i=0 ; i < folderObj.nChildren; i++)  
		{ 
			if (i == folderObj.nChildren-1) 			
				folderObj.children[i].initialize(level, true, leftSide);
			else 
				folderObj.children[i].initialize(level, false, leftSide);
		} 		
				
		folderObj.bChildToBeLoaded=false;
  	}
	var state = 0 
	var currentOpen
	 
	state = folderObj.isOpen   
	folderObj.setState(!state) //open<->close  	
}

// Auxiliary Functions 
// *******************
 
function findObj(id)
{
  var i=0;
  var nodeObj;
  if (typeof foldersTree.xID != "undefined") {
    nodeObj = indexOfEntries[i];
    for(i=0;i<nEntries&&indexOfEntries[i].xID!=id;i++) //may need optimization
      ;
    id = i
  }
  if (id >= nEntries)
    return null; //example: node removed in DB
  else
    return indexOfEntries[id];
}

function findObjFromReference(strReference, startPos)
{
	var i=0;
	var nodeObj;
	if (typeof foldersTree.xID != "undefined") 
	{
		nodeObj = indexOfEntries[i];
		for(i=startPos;i<nEntries&&indexOfEntries[i].hreference.toLowerCase()!=strReference.toLowerCase();i++) //may need optimization    				
		;
		id = i
	    
		if(id >= nEntries)
		{		
			if(startPos>0)
			{
				for(i=0;i<startPos&&indexOfEntries[i].hreference.toLowerCase()!=strReference.toLowerCase();i++) //may need optimization    				
				;
				id = i
				if(id>=startPos)
				{
					return null; //example: node removed in DB
				}
				else
				{
					return indexOfEntries[id];;
				}
			}
			else
			{
				return null; //example: node removed in DB
			}    
		}
		else
		{		
			return indexOfEntries[id];;
		}    
	}
	else
	{
		return -1; //example: node removed in DB
	}  
}

function isLinked(hrefText) {
    var result = true;
    result = (result && hrefText !=null);
    result = (result && hrefText != '');
    result = (result && hrefText.indexOf('undefined') < 0);
    result = (result && hrefText.indexOf('parent.op') < 0);
    return result;
}

// Do highlighting by changing background and foreg. colors of folder or doc text
function highlightObjLink(nodeObj) {
  if (nodeObj==null || nodeObj.maySelect==false) {//node deleted in DB 
    return;
  }
  if (browserVersion == 1 || browserVersion == 3) {
    var clickedDOMObj = getElById('itemTextLink'+nodeObj.id);
    if (clickedDOMObj != null) {
        if (lastClicked != null) {
            var prevClickedDOMObj = getElById('itemTextLink'+lastClicked.id);
            prevClickedDOMObj.className="TreeLink";
            /*style.color=lastClickedColor;
            prevClickedDOMObj.style.backgroundColor=lastClickedBgColor;
            prevClickedDOMObj.style.fontWeight=lastClickedFont;*/
        }
        
        /*lastClickedColor    = clickedDOMObj.style.color;
        lastClickedBgColor  = clickedDOMObj.style.backgroundColor;
        lastClickedFont		= clickedDOMObj.style.fontWeight;*/
        clickedDOMObj.className="TreeLinkSelected";
        /*style.color=HIGHLIGHT_COLOR;
        clickedDOMObj.style.fontWeight = HIGHLIGHT_FONT
        clickedDOMObj.style.backgroundColor=HIGHLIGHT_BG;*/
    }
  }
  lastClicked = nodeObj;  
}

function gFld(description, iconSrc, iconSrcClosed, hreference, bChildToBeLoaded) 
{ 
  folder = new Folder(description, iconSrc, iconSrcClosed, hreference, bChildToBeLoaded) 
  //folder = new Folder(description, hreference) 
  return folder 
} 
 
function gLnk(optionFlags, description, linkData) 
{ 
  var fullLink = "";
  var targetFlag = "";
  var target = "";
  var protocolFlag = "";
  var protocol = "";

  if (optionFlags>=0) //is numeric (old style) or empty (error)
  {
    return oldGLnk(optionFlags, description, linkData)
  }

  targetFlag = optionFlags.charAt(0)
  if (targetFlag=="B")
    target = "_blank"
  if (targetFlag=="P")
    target = "_parent"
  if (targetFlag=="R")
    target = "basefrm"
  if (targetFlag=="S")
    target = "_self"
  if (targetFlag=="T")
    target = "_top"

  if (optionFlags.length > 1) {
    protocolFlag = optionFlags.charAt(1)
    if (protocolFlag=="h")
      protocol = "http://"
    if (protocolFlag=="s")
      protocol = "https://"
    if (protocolFlag=="f")
      protocol = "ftp://"
    if (protocolFlag=="m")
      protocol = "mailto:"
  }

  fullLink = "'" + protocol + linkData + "' target=" + target

  linkItem = new Item(description, protocol+linkData, target)
  return linkItem 
} 

 
function insFld(parentFolder, childFolder) 
{ 
  return parentFolder.addChild(childFolder) 
} 
 
function insFldX(parentOb, childOb)
{
  childOb.xID = 'X' + counterI;
  counterI--;
  return insFld(parentOb, childOb)
}

function preLoadIcons() {

	var auxImg
	auxImg = new Image();
	auxImg.src = ICONPATH + "ws_ftv2vertline.gif";
	auxImg.src = ICONPATH + "ws_ftv2mlastnode.gif";
	auxImg.src = ICONPATH + "ws_ftv2mnode.gif";
	auxImg.src = ICONPATH + "ws_ftv2plastnode.gif";
	auxImg.src = ICONPATH + "ws_ftv2pnode.gif";
	auxImg.src = ICONPATH + "ws_ftv2blank.gif";
	auxImg.src = ICONPATH + "ws_ftv2lastnode.gif";
	auxImg.src = ICONPATH + "ws_ftv2node.gif";
	auxImg.src = ICONPATH + "ws_ftv2folderclosed.gif";
	auxImg.src = ICONPATH + "ws_ftv2folderopen.gif";
	auxImg.src = ICONPATH + "ws_ftv2doc.gif";
	
}

//Open some folders for initial layout, if necessary
function setInitialLayout() {
  if (browserVersion > 0)
    clickOnNodeObj(foldersTree);
  
}

//Used with NS4
function renderAllTree(nodeObj, parent) {
  var i=0;
  nodeObj.renderOb(parent)
  if (supportsDeferral)
    for (i=nodeObj.nChildren-1; i>=0; i--) 
      renderAllTree(nodeObj.children[i], nodeObj.navObj)
  else
    for (i=0 ; i < nodeObj.nChildren; i++) 
      renderAllTree(nodeObj.children[i], null)
}

function hideWholeTree(nodeObj, hideThisOne, nodeObjMove) {
  var i=0;
  var heightContained=0;
  var childrenMove=nodeObjMove;

  if (hideThisOne)
    nodeObj.escondeBlock()

  if (browserVersion == 2)
    nodeObj.navObj.moveBy(0, 0-nodeObjMove)

  for (i=0 ; i < nodeObj.nChildren; i++) {
    heightContainedInChild = hideWholeTree(nodeObj.children[i], true, childrenMove)
    if (browserVersion == 2) {
      heightContained = heightContained + heightContainedInChild + nodeObj.children[i].navObj.clip.height
      childrenMove = childrenMove + heightContainedInChild
	}
  }

  return heightContained;
}

 
// Simulating inserAdjacentHTML on NS6
// Code by thor@jscript.dk
// ******************************************

if(typeof HTMLElement!="undefined" && !HTMLElement.prototype.insertAdjacentElement){
	HTMLElement.prototype.insertAdjacentElement = function (where,parsedNode)
	{
		switch (where){
		case 'beforeBegin':
			this.parentNode.insertBefore(parsedNode,this)
			break;
		case 'afterBegin':
			this.insertBefore(parsedNode,this.firstChild);
			break;
		case 'beforeEnd':
			this.appendChild(parsedNode);
			break;
		case 'afterEnd':
			if (this.nextSibling) 
				this.parentNode.insertBefore(parsedNode,this.nextSibling);
			else this.parentNode.appendChild(parsedNode);
			break;
		}
	}

	HTMLElement.prototype.insertAdjacentHTML = function(where,htmlStr)
	{
		var r = this.ownerDocument.createRange();
		r.setStartBefore(this);
		var parsedHTML = r.createContextualFragment(htmlStr);
		this.insertAdjacentElement(where,parsedHTML)
	}
}

function getElById(idVal) {
  if (document.getElementById != null)
    return document.getElementById(idVal)
  if (document.all != null)
    return document.all[idVal]
  
  alert("Problem getting element by id")
  return null
}

// *********************************************************** 
// Used for the Synchronize button
// *********************************************************** 
function SynchronizeFromContent()
{	
	var bFound=false;

	var strContentLocation=String(window.parent.parent.Content.location);	
	var strPointPoint = String("..");	
	var cstReferenceLength=27;		
	
	var nPos;
	var regExpr = /diagtab=/i;
	nPos=strContentLocation.search(regExpr);
	
	var nDiagInfo =0;
	if(nPos>0)
	{
		nDiagInfo = strContentLocation.length - nPos +1;		
	}	
	strContentReference=strPointPoint.concat(strContentLocation.substr(strContentLocation.length - cstReferenceLength - nDiagInfo));							
		
	iStartIndex=0;		
	if(lastClicked!=null)
	{
		iStartIndex=lastClicked.id + 1;
	}	
			
	var nodeContent;			
	nodeContent=findObjFromReference(strContentReference, iStartIndex);			
	if(nodeContent!=null)
	{	
		nodeContent.forceOpeningOfAncestorFolders();
		highlightObjLink(nodeContent);						
		window.document.getElementById(String("folder").concat(String(nodeContent.id))).scrollIntoView(false);		
		bFound=true;
	}
	else
	{
		bFound=false;
	}	
	return bFound;
}

//To customize the tree, overwrite these variables in the configuration file (demoFramesetNode.js, etc.)
var WRAPTEXT = 0
var ICONPATH = ''
var LINKTARGET = window.parent.parent.Content;


//Other variables
var lastClicked = null;
var lastClickedColor;
var lastClickedBgColor;
var lastClickedFont;
var indexOfEntries = new Array 
var nEntries = 0 
var browserVersion = 0 
var selectedFolder=0
var lastOpenedFolder=null
var doc = document
var supportsDeferral = false
var cookieCutter = '^' //You can change this if you need to use ^ in your xID or treeID values

doc.yPos = 0

// Main function
// ************* 

////////////////////////////////////////////////////////////////////////////////////////

function KeyDownEventProcess(eventFired)
{	
	if(	eventFired.keyCode==37 || 
		eventFired.keyCode==39 || 
		eventFired.keyCode==38 ||
		eventFired.keyCode==40 ||
		eventFired.keyCode==107||
		eventFired.keyCode==109) // arrows and + and -
	{
		if (lastClicked == null) 
		{	
			clickOnFolder(foldersTree.children[0].getID());
		}
		else
		{
			if(eventFired.keyCode==37) // left arrow
			{
				if (lastClicked.isOpen)
				{
					clickOnNode(lastClicked.getID());
				}
				else
				{
					if(lastClicked.parentObj==foldersTree)
					{
						clickOnFolder(foldersTree.children[0].getID());
					}
					else
					{
						clickOnFolder(lastClicked.parentObj.getID());
					}
				}
			}
			else if(eventFired.keyCode==39) // right arrow
			{
				if(lastClicked.isOpen)
				{
					clickOnFolder(lastClicked.children[0].getID());
				}
				else if(lastClicked.nChildren != 0 || lastClicked.bChildToBeLoaded)
				{				
					clickOnNode(lastClicked.getID());				
				}
			}
			else if(eventFired.keyCode==109) // -
			{
				if(lastClicked.isOpen)
				{
					clickOnNode(lastClicked.getID());
				}				
			}
			else if(eventFired.keyCode==107) // +
			{
				if(!lastClicked.isOpen)
				{
					clickOnNode(lastClicked.getID());
				}				
			}
			else if(eventFired.keyCode==38) // up arrow
			{			
				if(lastClicked.nPosChildren != 0)
				{
					if(lastClicked.parentObj.children[lastClicked.nPosChildren-1].isOpen)
					{
						var objPreviousLastChild=lastClicked.parentObj.children[lastClicked.nPosChildren-1].children[lastClicked.parentObj.children[lastClicked.nPosChildren-1].nChildren -1];
						while (objPreviousLastChild.isOpen)
						{
							objPreviousLastChild=objPreviousLastChild.children[objPreviousLastChild.nChildren-1]
						}
						clickOnFolder(objPreviousLastChild.getID());
					}
					else
					{
						clickOnFolder(lastClicked.parentObj.children[lastClicked.nPosChildren-1].getID());
					}
				}
				else
				{
					if(lastClicked.parentObj!=foldersTree)
					{
						clickOnFolder(lastClicked.parentObj.getID());
					}
				}
			}
			else if(eventFired.keyCode==40) // down arrow
			{			
				if(lastClicked.isOpen)
				{
					clickOnFolder(lastClicked.children[0].getID());
				}
				else if(lastClicked.nPosChildren != lastClicked.parentObj.nChildren -1)
				{					
					clickOnFolder(lastClicked.parentObj.children[lastClicked.nPosChildren+1].getID());				
				}	
				else if(lastClicked.parentObj != foldersTree)				
				{
					var objParent = lastClicked.parentObj;
					var bValidParentFound=false;
					while(	objParent != foldersTree && 
							!bValidParentFound)
					{
						if(objParent.nPosChildren != objParent.parentObj.nChildren-1)
						{
							bValidParentFound=true;
						}
						else
						{
							objParent=objParent.parentObj;
						}
					}					
					if(bValidParentFound)
					{
						clickOnFolder(objParent.parentObj.children[objParent.nPosChildren+1].getID());
					}
				}		
			}			
		}
		eventFired.returnValue = false;
		window.document.getElementById(String("folder").concat(String(lastClicked.id))).scrollIntoView(false);		
	}
}

////////////////////////////////////////////////////////////////////////////////////////

// This function uses an object (navigator) defined in
// ua.js, imported in the main html page (left frame).
function initializeDocument() 
{ 
	window.document.body.className="";
	
	preLoadIcons()

	switch(navigator.family)
	{
		case 'ie4':
		browserVersion = 1 //Simply means IE > 3.x
		break;
		case 'nn4':
		browserVersion = 2 //NS4.x 
		break;
		case 'gecko':
		browserVersion = 3 //NS6.x
		break;
		default:
		browserVersion = 0 //other, possibly without DHTML  
		break;
	}

	supportsDeferral = ((browserVersion == 1 && navigator.version >= 5 && navigator.OS != "mac") || browserVersion == 3)
	    
	//foldersTree 
	foldersTree.initialize(0, true, "") 
	if (supportsDeferral)
		foldersTree.renderOb(null) //delay construction of nodes
	else {
		renderAllTree(foldersTree, null);
		
		//To force the scrollable area to be big enough
		if (browserVersion == 2) 
		doc.write("<layer top=" + indexOfEntries[nEntries-1].navObj.top + ">&nbsp;</layer>") 

		if (browserVersion != 0)
		hideWholeTree(foldersTree, false, 0)
	}

	setInitialLayout()
	clickOnNode ("X-1")
} 
 