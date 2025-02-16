////////////////////////////////////////////////////////////////////////////////

function ButtonHide()
{
	if(window.Button)
	{
		if(Button[0])
		{				
			for (var i = 0; i < Button.length; i++)
			{
				Button[i].style.display="none";
			}
		}
		else
		{
			Button.style.display="none";
		}
	}		
	if(window.ZoomButton)
	{
		if(ZoomButton[0])
		{				
			for (var i = 0; i < ZoomButton.length; i++)
			{
				ZoomButton[i].style.display="none";
			}
		}
		else
		{
			ZoomButton.style.display="none";
		}
	}
}

function ButtonShow()
{
	if(window.Button)
	{
		if(Button[0])
		{				
			for (var i = 0; i < Button.length; i++)
			{
				Button[i].style.display="inline";
			}
		}
		else
		{
			Button.style.display="inline";
		}
	}	
	if(window.ZoomButton)
	{
		if(ZoomButton[0])
		{				
			for (var i = 0; i < ZoomButton.length; i++)
			{
				ZoomButton[i].style.display="inline";
			}
		}
		else
		{
			ZoomButton.style.display="inline";
		}
	}			
}

////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function TabDiagMouseOut()
{
	if(this.className == "TabDiagHighlighted") 
	{
		this.className = "TabDiag";
	}
}

function TabDiagMouseOver()
{
	if(this.className != "TabDiagSelected") 
	{
		this.className = "TabDiagHighlighted";
	}	
}

////////////////////////////////////////////////////////////////////////////////

function SelectTabDiag(iClickedTabDiagIndex)
{
	if(TabDiag[0])
	{
		var eltClickedTabDiag;
		eltClickedTabDiag = TabDiag[iClickedTabDiagIndex];	
		
		for (var i = 0; i < TabDiag.length; i++)
		{
			ContentTabDiag[i].className ="ContentTabDiag";
			TabDiag[i].className="TabDiag";
		}				
			
		eltClickedTabDiag.className = "TabDiagSelected";
		ContentTabDiag[iClickedTabDiagIndex].className = "ContentTabDiagVisible";	
	}
	else
	{
		TabDiag.className = "TabDiagSelected";
		ContentTabDiag.className = "ContentTabDiagVisible";	
	}
}

function ClickTabDiag()
{
	var eltClickedTabDiag;
	eltClickedTabDiag = window.event.srcElement;	
	
	TabDiagList.className="TabDiagList";	
	
	if(TabDiag[0])
	{	
		var iClickedTabDiagIndex=0;
		for (var i = 0; i < TabDiag.length; i++)
		{
			if(TabDiag[i] == eltClickedTabDiag)
			{
				iClickedTabDiagIndex=i;
			}
		}
		SelectTabDiag(iClickedTabDiagIndex);
	}			
}

////////////////////////////////////////////////////////////////////////////////

function InitTabDiag(strTabDiagIndex)
{	
	if(TabDiag[0])
	{	
		var k;
		for ( k = 0; k < TabDiag.length; k++)
		{
			TabDiag[k].className="TabDiag";
			TabDiag[k].onclick=ClickTabDiag;
			TabDiag[k].onmouseover=TabDiagMouseOver;
			TabDiag[k].onmouseout=TabDiagMouseOut;
		}	
		iTabDiagIndex = parseInt(strTabDiagIndex);	
		TabDiag[iTabDiagIndex].className = "TabDiagSelected";
		ContentTabDiag[iTabDiagIndex].className = "ContentTabDiagVisible";											
	}
	else
	{
		TabDiag.onclick=ClickTabDiag;
		TabDiag.onmouseover=TabDiagMouseOver;
		TabDiag.onmouseout=TabDiagMouseOut;
	
		TabDiag.className = "TabDiagSelected";
		ContentTabDiag.className = "ContentTabDiagVisible";			
	}
}


function PreviousClickedTabDiagIndexGet()
{
	var iPreviousClickedTabDiagIndex=-1;
	
	if(TabDiag[0])
	{
		var bPreviousClickedTabDiagIndexFound=false;
		for (var i = 0; i < TabDiag.length && !bPreviousClickedTabDiagIndexFound; i++)
		{
			if(TabDiag[i].className == "TabDiagSelected")
			{
				iPreviousClickedTabDiagIndex=i;
				bPreviousClickedTabDiagIndexFound=true;
			}
		}
	}
	else
	{
		iPreviousClickedTabDiagIndex=0;
	}	
	return iPreviousClickedTabDiagIndex;
}

function SelectPredecessorTabDiag(iPreviousClickedTabDiagIndex)
{	
	if(TabDiag[0])
	{	
		if(iPreviousClickedTabDiagIndex==0)
		{
			SelectTabDiag(TabDiag.length - 1);
		}
		else
		{
			SelectTabDiag(iPreviousClickedTabDiagIndex - 1);
		}
	}
	else
	{
		SelectTabDiag(0);
	}
}

function SelectSuccessorTabDiag(iPreviousClickedTabDiagIndex)
{		
	if(TabDiag[0])
	{	
		if(iPreviousClickedTabDiagIndex==TabDiag.length - 1)
		{
			SelectTabDiag(0);
		}
		else
		{
			SelectTabDiag(iPreviousClickedTabDiagIndex + 1);
		}	
	}
	else
	{	
		SelectTabDiag(0);
	}
}

////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function TabMouseOut()
{
	if(this.className == "TabHighlighted") 
	{
		this.className = "Tab";
	}	
	/*if(this.className == "TabEmptyHighlighted") 
	{
		this.className = "TabEmpty";
	}*/
}

////////////////////////////////////////////////////////////////////////////////////////

function TabMouseOver()
{
	if(this.className == "Tab") 
	{
		this.className = "TabHighlighted";
	}	
	/*if(this.className == "TabEmpty") 
	{
		this.className = "TabEmptyHighlighted";
	}*/
}

////////////////////////////////////////////////////////////////////////////////////////

function PreviousClickedTabIndexGet()
{	
	var iPreviousClickedTabIndex=-1;
	var bPreviousClickedTabIndexFound=false;
	for (var i = 0; i < Tab.length && !bPreviousClickedTabIndexFound; i++)
	{
		if(Tab[i].className=="TabSelected" || Tab[i].className=="TabEmptySelected" )
		{	
			bPreviousClickedTabIndexFound=true;		
			iPreviousClickedTabIndex=i;
		}
	}
	if(bPreviousClickedTabIndexFound)
	{
		return iPreviousClickedTabIndex;
	}
	else
	{
		return -1;
	}
}

////////////////////////////////////////////////////////////////////////////////////////

function SelectTab(iPreviousClickedTabIndex, iClickedTabIndex)
{

	if(Tab[0])
	{
		var eltClickedTab;
		eltClickedTab = Tab[iClickedTabIndex];	

		if(iClickedTabIndex!=0 && window.TabDiag)
		{							
			TabDiagList.className="TabDiagList";
		}
	
		if(	window.parent.length) 
		if( window.parent.TreeFrame)
		if(	window.parent.TreeFrame.TreeMenu)		
		if(	window.parent.TreeFrame.frames("TreeMenu").TabMemory)
		{
			var docTabMemory = window.parent.TreeFrame.frames("TreeMenu").document;				
			if(window.TabMemoryName)
			if(docTabMemory.getElementById(TabMemoryName.innerHTML))
			{
				docTabMemory.getElementById(TabMemoryName.innerHTML).innerHTML=String(iClickedTabIndex);
			}
		}	
				
			
		for (var i = 0; i < Tab.length; i++)
		{
			ContentTab[i].className ="ContentTab";
			if(Tab[i].className=="TabEmptySelected" || Tab[i].className=="TabEmpty" )
			{
				Tab[i].className= "TabEmpty";
			}
			else
			{
				Tab[i].className="Tab";
			}
			Tab[i].onclick=ClickTab;
		}

			
		if(iClickedTabIndex==0)
		{	
      if(window.ContentTabDiag)
		  {
			  if (! ContentTab[0].all.tags("MAP")[0]) 
        { 
				  for (var i=0; i< ContentTabDiag.length;i++)
          { 
            ContentTabDiag[i].className="ContentTabDiag"; 
          }
        }
      }
	
			if(window.TabDiag)
			{		
			  if ((ContentTab[0].all.tags("MAP"))[0])	
			  {			  
				  ButtonShow();	
				}
				else
				{
				  ButtonHide();	
				}
				if(TabDiag[0])
				{				
					// multiple diagram									
					if (! ContentTab[0].all.tags("MAP")[0])		
				  	{
					
						for (var i=0; i< ContentTabDiag.length;i++)
						{						
							ContentTabDiag[i].className="ContentTabDiag";	
						}
					}
					if(TabDiagList.className=="TabDiagListVisible")			
					{						
						TabDiagList.className="TabDiagList";
					}
					else
					{
						TabDiagList.className="TabDiagListVisible";
					}								
				}
				else if(iPreviousClickedTabIndex == 0)
				{
					// multiple diagram									
					if(TabDiagList.className=="TabDiagListVisible")			
					{						
						TabDiagList.className="TabDiagList";
					}
					else
					{
						TabDiagList.className="TabDiagListVisible";
					}
				}
			}
			else
			{
				ButtonHide();
			}						
		}
		else
		{			
			ButtonHide();
		}
		if(eltClickedTab.className == "TabEmpty")
		{
			eltClickedTab.className="TabEmptySelected";
		}
		else
		{
			eltClickedTab.className = "TabSelected";
		}		
			
		if(eltClickedTab.className!="TabEmptySelected")
		{
			ContentTab[iClickedTabIndex].className = "ContentTabVisible";
		}
	}
	else
	{
		if(window.TabDiag)
		{
      if (! ContentTab.all.tags("MAP")[0]) 
      { 
        if(window.ContentTabDiag)
		    {
          for (var i=0; i< ContentTabDiag.length;i++)
          { 
            ContentTabDiag[i].className="ContentTabDiag"; 
          }
        }
      }
			TabDiagList.className="TabDiagList";
      if ((ContentTab.all.tags("MAP"))[0])	
			{			  
			 ButtonShow();	
			}
			else
			{
			  ButtonHide();	
			}
			if(TabDiag[0])
			{				
				// multiple diagram									
				if(TabDiagList.className=="TabDiagListVisible")			
				{						
					TabDiagList.className="TabDiagList";
				}
				else
				{
					TabDiagList.className="TabDiagListVisible";
				}								
			}
			else if(iPreviousClickedTabIndex == 0)
			{
				// single diagram									
				if(TabDiagList.className=="TabDiagListVisible")			
				{						
					TabDiagList.className="TabDiagList";
				}
				else
				{
					TabDiagList.className="TabDiagListVisible";
				}
			}
		}
		else
		{
			ButtonHide();						
		}	
	}		
}

////////////////////////////////////////////////////////////////////////////////////////

function ClickTab()
{
	var eltClickedTab;
	eltClickedTab = window.event.srcElement;	
		
	if(Tab[0])
	{	
		var iPreviousClickedTabIndex=PreviousClickedTabIndexGet();		
						
		var iClickedTabIndex=0;
		for (var i = 0; i < Tab.length; i++)
		{
			if(Tab[i] == eltClickedTab)
			{		
				iClickedTabIndex=i;
			}
		}		
		SelectTab(iPreviousClickedTabIndex, iClickedTabIndex);		
	}
	else
	{
		SelectTab(0, 0);	
	}
}

////////////////////////////////////////////////////////////////////////////////////////

function NotEmptyTabIndexGet()
{
	var iNotEmptyTabIndex=-1;
	if(Tab[0])
	{	
		for ( k = 0; k < Tab.length && iNotEmptyTabIndex<0 ; k++)
		{
			if(Tab[k].className!="TabEmpty")
			{			
				iNotEmptyTabIndex=k;
			}
		}	
	}
	else
	{
		if(Tab.className!="TabEmpty")
		{
			iNotEmptyTabIndex=0;
		}
	}
	return iNotEmptyTabIndex;
}

function TabCheck()
{
	if(window.Tab)
	{
		// at least one tab object
		if(window.ContentTab)
		{									
			if(Tab[0])
			{
				// multiple tab objects	
				if(ContentTab[0])
				{
					if(Tab.length != ContentTab.length)
					{					
						alert("WARNING : There are " + String(Tab.length) + " objects with the Tab id while "+ String(ContentTab.length)+" objects with the ContentTab id.\r\nTabulation mechanisms shouldn't work properly");					
					}
				}
				else
				{
					// ERROR : multiple Tab objects while just one ContentTab object
					alert("WARNING : There are " + String(Tab.length) + " objects with the Tab id while 1 object with the ContentTab id.\r\nTabulation mechanisms shouldn't work properly");					
				}
			}
			else
			{
				// one tab object
				if(ContentTab[0])
				{
					// ERROR : multiple ContentTab objects while just one tab object
					alert("WARNING : There is 1 object with the Tab id while " + String(ContentTab.length) + "objects with the ContentTab id.\r\nTabulation mechanisms shouldn't work properly");
				}										
			}
		}
		else
		{
			// ERROR : no ContentTab object
			alert("WARNING : There isn't any object with the ContentTab id in this html page.\r\nTabulation mechanisms shouldn't work properly");		
		}
	}
	else
	{
		// ERROR : no Tab object
		alert("WARNING : There isn't any object with the Tab id in this html page.\r\nTabulation mechanisms shouldn't work properly");
	}
}

function InitTab()
{
	TabCheck();
	if(Tab[0])
	{	
		var iMemoryTab=0;
		if(	window.parent.length) 
		if( window.parent.TreeFrame)
		if(	window.parent.TreeFrame.TreeMenu)		
		if(	window.parent.TreeFrame.frames("TreeMenu").TabMemory)
		{
			var docTabMemory = window.parent.TreeFrame.frames("TreeMenu").document;
			if(window.TabMemoryName)
			if(docTabMemory.getElementById(TabMemoryName.innerHTML))
			{						
				iMemoryTab=parseInt(docTabMemory.getElementById(TabMemoryName.innerHTML).innerHTML);			
			}
		}
				
		var k;
		for ( k = 0; k < Tab.length; k++)
		{			
			Tab[k].onclick=ClickTab;
			Tab[k].onmouseover=TabMouseOver;
			Tab[k].onmouseout=TabMouseOut;
			if(Tab[k].className=="Tab")
			{			
				if(ContentTab[k].innerText == "")
				{
					Tab[k].className="TabEmpty";
				}
			}
		}	
		var strTabDiagIndex="0";
		if(window.location.search!="")
		{
			strTabDiagIndex = (window.location.search.split("="))[1];
			if(strTabDiagIndex != "")
			{
				// User clicked on an object's diagram in the tree
				if(Tab[0].className == "TabEmpty")
				{
					Tab[0].className = "TabEmptySelected";
				}
				else
				{	
					Tab[0].className = "TabSelected";
				}
				ContentTab[0].className = "ContentTabVisible";	
				if(window.TabDiag)
				{
					if ((ContentTab[0].all.tags("MAP"))[0])	
			    {			  
  				  ButtonShow();	
				  }
				  else
				  {
  				  ButtonHide();	
				  }
					InitTabDiag(strTabDiagIndex);				
				}
				else
				{
					ButtonHide();
				}
			}
		}
		else
		{		
			//User clicked on an object in the tree
			if(window.Tab[iMemoryTab])
			{
				if(Tab[iMemoryTab].className == "TabEmpty")
				{
					iNotEmptyTabIndex=0;					
					iNotEmptyTabIndex=NotEmptyTabIndexGet();						
					if(iNotEmptyTabIndex>=0)
					{
						iMemoryTab=iNotEmptyTabIndex;
					}
				}
				if(Tab[iMemoryTab].className == "TabEmpty")
				{
					Tab[iMemoryTab].className = "TabEmptySelected";
				}
				else
				{
					Tab[iMemoryTab].className = "TabSelected";
				}
				ContentTab[iMemoryTab].className = "ContentTabVisible";
				if(iMemoryTab==0)
				{
					// ObjectTitleTable.style.display = "none";					
					if(window.TabDiag)
					{
					  if ((ContentTab[0].all.tags("MAP"))[0])	
			      {			  
				      ButtonShow();	
				    }
				    else
				    {
				      ButtonHide();	
				    }						
						InitTabDiag(strTabDiagIndex);			
					}
					else
					{
						ButtonHide();
					}
				}
				else
				{
					if(window.TabDiag)
					{
						InitTabDiag(strTabDiagIndex);
					}
					ButtonHide();										
					// ObjectTitleTable.style.display = "inline";
				}
			}						
		}		
	}
	else
	{
		Tab.onclick=ClickTab;
		Tab.onmouseover=TabMouseOver;
		Tab.onmouseout=TabMouseOut;
		
		if(Tab.className=="Tab")
		{			
			if(ContentTab.children.length == 0 || ContentTab.innerText == "")
			{
				Tab.className="TabEmpty";
			}
		}
			
		if(Tab.className == "TabEmpty")
		{
			Tab.className = "TabEmptySelected";
		}
		else
		{
			Tab.className = "TabSelected";
		}
		ContentTab.className = "ContentTabVisible";		
		
		var strTabDiagIndex="0";
		if(window.location.search!="")
		{
			strTabDiagIndex = (window.location.search.split("="))[1];
		}
		
		if(window.TabDiag)
		{
		  if ((ContentTab.all.tags("MAP"))[0])	
			{			  
			  ButtonShow();	
			}
			else
			{
			  ButtonHide();	
			}							
			InitTabDiag(strTabDiagIndex);
		}
		else
	  {
		  ButtonHide();
	  }		
	}	
}

////////////////////////////////////////////////////////////////////////////////////////

function SelectPredecessorTab(iPreviousClickedTabIndex)
{
	var k;
	var bPredecessorFound=false;
	for ( k = iPreviousClickedTabIndex-1; k >=0 && !bPredecessorFound; k--)
	{			
		if(Tab[k].className!="TabEmpty")
		{			
			SelectTab(iPreviousClickedTabIndex, k);	
			bPredecessorFound=true;
		}
	}	
	
	if(!bPredecessorFound)
	{
		for ( k = Tab.length - 1; k > iPreviousClickedTabIndex && !bPredecessorFound; k--)
		{			
			if(Tab[k].className!="TabEmpty")
			{			
				SelectTab(iPreviousClickedTabIndex, k);	
				bPredecessorFound=true;		
			}
		}			
	}	
}

function SelectSuccessorTab(iPreviousClickedTabIndex)
{
	var k;
	var bSuccessorFound=false;
	for ( k = iPreviousClickedTabIndex+1; k <= Tab.length -1 && !bSuccessorFound; k++)
	{			
		if(Tab[k].className!="TabEmpty")
		{			
			SelectTab(iPreviousClickedTabIndex, k);	
			bSuccessorFound=true;
		}
	}	
	
	if(!bSuccessorFound)
	{
		for ( k = 0; k < iPreviousClickedTabIndex && !bSuccessorFound; k++)
		{					
			if(Tab[k].className!="TabEmpty")
			{			
				SelectTab(iPreviousClickedTabIndex, k);	
				bSuccessorFound=true;				
			}
		}			
	}	
}

////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////

function KeyDownEventProcess(eventFired)
{
	if(eventFired.keyCode==9)// tab
	{
		if(Tab[0])
		{	
			var iPreviousClickedTabIndex = PreviousClickedTabIndexGet();
			if(iPreviousClickedTabIndex==-1)
			{
				SelectTab(iPreviousClickedTabIndex, 0);	
			}
			else
			{
				if(eventFired.shiftKey || eventFired.keyCode==37)
				{							
					SelectPredecessorTab(iPreviousClickedTabIndex);	
				}
				else
				{
					SelectSuccessorTab(iPreviousClickedTabIndex);	
				}									
			}
			eventFired.returnValue=false;
		}		
	}		
	else if(eventFired.keyCode==13)// enter
	{
		if(Tab[0])
		{
			if(Tab[0].className=="TabSelected")
			{
				if(TabDiagList.className=="TabDiagListVisible")			
				{	
					TabDiagList.className="TabDiagList";				
					eventFired.returnValue=false;
				}
				else
				{
					TabDiagList.className="TabDiagListVisible";				
					eventFired.returnValue=false;
				}
			}
		}
		else
		{
			if(window.TabDiagList)
			if(TabDiagList.className=="TabDiagListVisible")			
			{	
				TabDiagList.className="TabDiagList";				
				eventFired.returnValue=false;
			}
			else
			{
				TabDiagList.className="TabDiagListVisible";				
				eventFired.returnValue=false;
			}		
		}
	}	
}

////////////////////////////////////////////////////////////////////////////////////////

InitTab();

