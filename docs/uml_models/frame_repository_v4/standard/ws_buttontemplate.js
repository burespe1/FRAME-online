
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function ButtonMouseOut()
{	
	this.className = "Button";
}

function ButtonMouseOver()
{	
	this.className = "ButtonHighlighted";	
}

function InitButton()
{	
	if(window.Button)
	{
		if(Button[0])
		{	
		
			var k;
			for ( k = 0; k < Button.length; k++)
			{	
				Button[k].onmouseover=ButtonMouseOver;
				Button[k].onmouseout=ButtonMouseOut;
			}							
		}
		else
		{	
			Button.onmouseover=ButtonMouseOver;
			Button.onmouseout=ButtonMouseOut;					
		}
	}	
}

InitButton();
