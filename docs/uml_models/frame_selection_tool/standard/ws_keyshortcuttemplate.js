
//////////////////////////////////////////////////////////////////////////////////

function ShortCutDestinationGet()
{
	bTabKeyDestinationObjectFound=false;
	bArrowsKeyDestinationObjectFound=false;
	
	if(window.top.InformationFrame)		
	if(window.top.InformationFrame.Content)
	if(window.top.InformationFrame.Content.Tab)
	{			
		bTabKeyDestinationObjectFound=true;
		TabKeyDestinationObject=window.top.InformationFrame.Content;	
	}
	
	if(window.top.InformationFrame)
	if(window.top.InformationFrame.TreeFrame)
	if(window.top.InformationFrame.TreeFrame.TreeControl)
	{		
		bArrowsKeyDestinationObjectFound=true;
		ArrowsKeyDestinationObject=window.top.InformationFrame.TreeFrame.TreeControl;	
	}	
}

//////////////////////////////////////////////////////////////////////////////////

function onKeyDown()
{	
	ShortCutDestinationGet();

	if(event.keyCode==9) // tab 
	{
		if(bTabKeyDestinationObjectFound)
		{		
			TabKeyDestinationObject.KeyDownEventProcess(event);			
		}	
		event.returnValue=false;
	}
	else if(event.keyCode==37 || 
			event.keyCode==39 || 
			event.keyCode==38 ||
			event.keyCode==40 ||
			event.keyCode==107 ||
			event.keyCode==109) // arrows and + and -
	{
		if(bArrowsKeyDestinationObjectFound)
		{		
			ArrowsKeyDestinationObject.KeyDownEventProcess(event);		
		}
		event.returnValue=false;
	}	
}

var bTabKeyDestinationObjectFound=false;
var TabKeyDestinationObject;
var bArrowsKeyDestinationObjectFound=false;
var ArrowsKeyDestinationObject;

window.document.onkeydown=onKeyDown;