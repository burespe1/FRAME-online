////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function SubMenuMouseOut()
{	
	this.className = "SubMenu";
}

function SubMenuMouseOver()
{	
	this.className = "SubMenuHighlighted";
}

function InitSubMenu()
{
	if(SubMenu[0])
	{				
		var k;
		for ( k = 0; k < SubMenu.length; k++)
		{			
			SubMenu[k].onmouseover=SubMenuMouseOver;
			SubMenu[k].onmouseout=SubMenuMouseOut;
		}					
	}
	else
	{		
		SubMenu.onmouseover=SubMenuMouseOver;
		SubMenu.onmouseout=SubMenuMouseOut;						
	}	
}

////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function MenuMouseOut()
{
	if(this.className != "MenuSelected") 
	{
		this.className = "Menu";
	}	
}

function MenuMouseOver()
{
	if(this.className != "MenuSelected") 
	{
		this.className = "MenuHighlighted";
	}	
}

function ClickMenu()
{
	var eltClickedMenu;
	eltClickedMenu = window.event.srcElement;	
	
	if(Menu[0])
	{	
		var iClickedMenuIndex=0;
		for (var i = 0; i < Menu.length; i++)
		{
			if(Menu[i] == eltClickedMenu)
			{
				iClickedMenuIndex=i;
			}
		}
		
		for (var i = 0; i < Menu.length; i++)
		{
			ContentMenu[i].className ="ContentMenu";
			Menu[i].className="Menu";
		}
			
		eltClickedMenu.className = "MenuSelected";
		ContentMenu[iClickedMenuIndex].className = "ContentMenuVisible";		
	}
}

function InitMenu()
{	
	if(Menu[0])
	{				
		var k;
		for ( k = 0; k < Menu.length; k++)
		{
			Menu[k].onclick=ClickMenu;
			Menu[k].onmouseover=MenuMouseOver;
			Menu[k].onmouseout=MenuMouseOut;
		}			
		
		Menu[0].className = "MenuSelected";
		ContentMenu[0].className = "ContentMenuVisible";								
	}
	else
	{
		Menu.onclick=ClickMenu;
		Menu.onmouseover=MenuMouseOver;
		Menu.onmouseout=MenuMouseOut;
			
		Menu.className = "MenuSelected";
		ContentMenu.className = "ContentMenuVisible";				
	}		
}

InitMenu();
InitSubMenu();