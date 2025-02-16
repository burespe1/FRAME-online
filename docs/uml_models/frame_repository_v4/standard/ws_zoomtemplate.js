/////////////////////////////////////////////////////////////////////
// function used to store and restore the orginal map 
/////////////////////////////////////////////////////////////////////

function ZoomButtonMouseOut()
{	
	this.className = "ZoomButton";
	
	if(idZoomInterval)
	{		
		clearInterval(idZoomInterval);
		var fxCoeff;
		fxCoeff= timeOutEltImg.offsetWidth / timeOutEltStartWidth;	
		var fyCoeff;
		fyCoeff= timeOutEltImg.offsetHeight / timeOutEltStartHeight;
		
		MapCoeffApply(timeOutEltMap, fxCoeff, fyCoeff);	
		
		idZoomInterval=null
	}
}

function ZoomButtonMouseOver()
{	
	this.className = "ZoomButtonHighlighted";	
}

function InitZoomButton()
{
	if(window.ZoomButton)
	{
		if(ZoomButton[0])
		{	
		
			var k;
			for ( k = 0; k < ZoomButton.length; k++)
			{	
				ZoomButton[k].onmouseover=ZoomButtonMouseOver;
				ZoomButton[k].onmouseout=ZoomButtonMouseOut;
			}							
		}
		else
		{	
			ZoomButton.onmouseover=ZoomButtonMouseOver;
			ZoomButton.onmouseout=ZoomButtonMouseOut;					
		}
	}		
}

/////////////////////////////////////////////////////////////////////
// function used to store and restore the orginal map 
/////////////////////////////////////////////////////////////////////
function MapRestore(eltMap, tabArea)
{
	if(eltMap)
	{
		var k;
		for ( k = 0; k < eltMap.all.tags("AREA").length; k++)
		{	
			var eltArea;
			eltArea=(eltMap.all.tags("AREA"))[k];				
			eltArea.setAttribute("coords", tabArea[k]);
		}
	}
}	

function MapStore(eltMap, tabArea)
{
	if(eltMap)
	{
		var k;
		for ( k = 0; k < eltMap.all.tags("AREA").length; k++)
		{	
			var eltArea;
			eltArea=(eltMap.all.tags("AREA"))[k];							
			tabArea[k]=eltArea.getAttribute("coords");
		}
	}
}

function DocumentMapStore(tabDocumentMap)
{
	if(window.ContentTabDiag)
	{
		if(ContentTabDiag[0])
		{
			var k;
			for ( k = 0; k < ContentTabDiag.length; k++)
			{	
				var eltMap;
				eltMap=(ContentTabDiag[k].all.tags("MAP"))[0];			
				var tabArea = new Array();
				MapStore(eltMap, tabArea);
				tabDocumentMap[k]=tabArea;
			}
		}
		else
		{
			var eltMap;
			eltMap=(ContentTabDiag.all.tags("MAP"))[0];			
			var tabArea = new Array();
			MapStore(eltMap, tabArea);
			tabDocumentMap[0]=tabArea;
		}
	}
}

function CurrentMapRestore(tabDocumentMap)
{
	if(ContentTabDiag[0])
	{
		var k;
		var bCurrentFound=false;
		for ( k = 0; k < ContentTabDiag.length && !bCurrentFound; k++)
		{				
			if(ContentTabDiag[k].className=="ContentTabDiagVisible")
			{			
				if((ContentTabDiag[k].all.tags("MAP"))[0])
				{
					var eltMap;
					eltMap=(ContentTabDiag[k].all.tags("MAP"))[0];						
					MapRestore(eltMap, tabDocumentMap[k]);
				}
			}
		}
	}
	else
	{
		if((ContentTabDiag.all.tags("MAP"))[0])
		{
			var eltMap;
			eltMap=(ContentTabDiag.all.tags("MAP"))[0];						
			MapRestore(eltMap, tabDocumentMap[0]);
		}
	}
}

/////////////////////////////////////////////////////////////////////
// function used to store and restore the orginal size of picture
/////////////////////////////////////////////////////////////////////

function DocumentImgSizeInit(tabDocumentImgSize)
{
	if(window.ContentTabDiag)
	{
		if(ContentTabDiag[0])
		{
			var k;
			for ( k = 0; k < ContentTabDiag.length; k++)
			{	
				var eltImg;
				eltImg=(ContentTabDiag[k].all.tags("IMG"))[0];			
				var tabImgSize = new Array();	
				tabImgSize[0]=0;
				tabImgSize[1]=0;
				tabDocumentImgSize[k]=tabImgSize;		
			}
		}
		else
		{
			var eltImg;
			eltImg=(ContentTabDiag.all.tags("IMG"))[0];			
			var tabImgSize = new Array();	
			tabImgSize[0]=0;
			tabImgSize[1]=0;
			tabDocumentImgSize[0]=tabImgSize;		
		}
	}
}

function CurrentActualImgSizeStore(tabDocumentImgSize)
{
	if(ContentTabDiag[0])
	{
		var k;
		var bCurrentFound=false;
		for ( k = 0; k < ContentTabDiag.length && !bCurrentFound; k++)
		{	
			if(ContentTabDiag[k].className=="ContentTabDiagVisible")
			{				
				if((ContentTabDiag[k].all.tags("IMG"))[0])
				{
					var eltImg;
					bCurrentFound=true;
					if((tabDocumentImgSize[k])[0] == 0 && (tabDocumentImgSize[k])[1] == 0 )
					{
						eltImg=(ContentTabDiag[k].all.tags("IMG"))[0];					
						(tabDocumentImgSize[k])[0]=eltImg.offsetWidth;	
						(tabDocumentImgSize[k])[1]=eltImg.offsetHeight;						
					}			
				}
			}
		}
	}
	else
	{
		if((ContentTabDiag.all.tags("IMG"))[0])
		{		
			var eltImg;
			bCurrentFound=true;
			if((tabDocumentImgSize[0])[0] == 0 && (tabDocumentImgSize[0])[1] == 0 )
			{
				eltImg=(ContentTabDiag.all.tags("IMG"))[0];					
				(tabDocumentImgSize[0])[0]=eltImg.offsetWidth;	
				(tabDocumentImgSize[0])[1]=eltImg.offsetHeight;						
			}	
		}
	}
}

function CurrentImgSizeRestore(tabDocumentImgSize)
{
	if(ContentTabDiag[0])
	{
		var k;
		var bCurrentFound=false;
		for ( k = 0; k < ContentTabDiag.length && !bCurrentFound; k++)
		{	
			if(ContentTabDiag[k].className=="ContentTabDiagVisible")
			{	
				if((ContentTabDiag[k].all.tags("IMG"))[0])
				{			
					var eltImg;
					bCurrentFound=true;
					eltImg=(ContentTabDiag[k].all.tags("IMG"))[0];			
					eltImg.setAttribute("width",String((tabDocumentImgSize[k])[0]));
					eltImg.setAttribute("height",String((tabDocumentImgSize[k])[1]));		
				}
			}
		}
	}
	else
	{
		if((ContentTabDiag.all.tags("IMG"))[0])
		{
			var eltImg;
			bCurrentFound=true;		
			eltImg=(ContentTabDiag.all.tags("IMG"))[0];			
			eltImg.setAttribute("width",String((tabDocumentImgSize[0])[0]));
			eltImg.setAttribute("height",String((tabDocumentImgSize[0])[1]));
		}
	}
}

/////////////////////////////////////////////////////////////////////
// function to change the map
/////////////////////////////////////////////////////////////////////

function MapCoeffApply(eltMap, fxCoeff, fyCoeff)
{
	for ( k = 0; k < eltMap.all.tags("AREA").length; k++)
	{	
		var eltArea;
		eltArea=(eltMap.all.tags("AREA"))[k];
				
		var strCoord=eltArea.getAttribute("coords")
		var collCoord=strCoord.split(",");
			
		var strNewCoord = String("");
		strNewCoord = strNewCoord.concat(String(parseInt(collCoord[0])*fxCoeff).concat(","));
		strNewCoord = strNewCoord.concat(String(parseInt(collCoord[1])*fyCoeff).concat(","));
		strNewCoord = strNewCoord.concat(String(parseInt(collCoord[2])*fxCoeff).concat(","));
		strNewCoord = strNewCoord.concat(String(parseInt(collCoord[3])*fyCoeff));
									
		eltArea.setAttribute("coords", strNewCoord);			
	} 				
}

function ImgCoeffApply(eltImg, fxCoeff, fyCoeff)
{
	var k;
	var bCurrentFound=false;
		
	var iNewWidth=eltImg.offsetWidth *fxCoeff
	var iNewHeight=eltImg.offsetHeight *fyCoeff
	eltImg.width=iNewWidth;
	eltImg.height=iNewHeight;		
}

/////////////////////////////////////////////////////////////////////
// 
/////////////////////////////////////////////////////////////////////

function IntervalIncr()
{		
	ImgCoeffApply(timeOutEltImg, 1.02, 1.02);	
}

function OnIncrStart()
{		
	CurrentActualImgSizeStore(tabDocumentImgSize);
	
	if(ContentTabDiag[0])
	{	
		var k;
		var bCurrentFound=false;	
		for ( k = 0; k < ContentTabDiag.length && !bCurrentFound; k++)
		{	
			if(ContentTabDiag[k].className=="ContentTabDiagVisible")
			{
				if((ContentTabDiag[k].all.tags("IMG"))[0])
				{
					bCurrentFound=true;
					timeOutEltImg=(ContentTabDiag[k].all.tags("IMG"))[0];
					timeOutEltMap=(ContentTabDiag[k].all.tags("MAP"))[0];	
					timeOutEltStartWidth=timeOutEltImg.offsetWidth;
					timeOutEltStartHeight=timeOutEltImg.offsetHeight;
					idZoomInterval = setInterval("IntervalIncr()", 20);				
				}
			}			
		}			
	}
	else	
	{
		if((ContentTabDiag.all.tags("IMG"))[0])
		{
			timeOutEltImg=(ContentTabDiag.all.tags("IMG"))[0];
			timeOutEltMap=(ContentTabDiag.all.tags("MAP"))[0];	
			
			timeOutEltStartWidth=timeOutEltImg.offsetWidth;
			timeOutEltStartHeight=timeOutEltImg.offsetHeight;		
			
			idZoomInterval = setInterval("IntervalIncr()", 20);				
		}
	}
}

function OnIncrStop()
{
	if(idZoomInterval)
	{
		clearInterval(idZoomInterval);
		var fxCoeff;
		fxCoeff= timeOutEltImg.offsetWidth / timeOutEltStartWidth;	
		var fyCoeff;
		fyCoeff= timeOutEltImg.offsetHeight / timeOutEltStartHeight;
		
		MapCoeffApply(timeOutEltMap, fxCoeff, fyCoeff);	
		idZoomInterval=null;
	}
}

/////////////////////////////////////////////////////////////////////

function IntervalDecr()
{	
	ImgCoeffApply(timeOutEltImg, 0.98, 0.98);	
}

function OnDecrStart()
{
	CurrentActualImgSizeStore(tabDocumentImgSize);

	if(ContentTabDiag[0])
	{	
		var k;
		var bCurrentFound=false;	
		for ( k = 0; k < ContentTabDiag.length && !bCurrentFound; k++)
		{	
			if(ContentTabDiag[k].className=="ContentTabDiagVisible")
			{
				if((ContentTabDiag[k].all.tags("IMG"))[0])
				{
					bCurrentFound=true;
					timeOutEltImg=(ContentTabDiag[k].all.tags("IMG"))[0];
					timeOutEltMap=(ContentTabDiag[k].all.tags("MAP"))[0];	
					timeOutEltStartWidth=timeOutEltImg.offsetWidth;
					timeOutEltStartHeight=timeOutEltImg.offsetHeight;
					idZoomInterval = setInterval("IntervalDecr()", 20);				
				}
			}			
		}			
	}
	else	
	{
		if((ContentTabDiag.all.tags("IMG"))[0])
		{
			timeOutEltImg=(ContentTabDiag.all.tags("IMG"))[0];
			timeOutEltMap=(ContentTabDiag.all.tags("MAP"))[0];	
			
			timeOutEltStartWidth=timeOutEltImg.offsetWidth;
			timeOutEltStartHeight=timeOutEltImg.offsetHeight;		
			
			idZoomInterval = setInterval("IntervalDecr()", 20);				
		}
	}
}

function OnDecrStop()
{
	if(idZoomInterval)
	{
		clearInterval(idZoomInterval);
		var fxCoeff;
		fxCoeff= timeOutEltImg.offsetWidth / timeOutEltStartWidth;	
		var fyCoeff;
		fyCoeff= timeOutEltImg.offsetHeight / timeOutEltStartHeight;
		
		MapCoeffApply(timeOutEltMap, fxCoeff, fyCoeff);	
		idZoomInterval=null
	}
}

/////////////////////////////////////////////////////////////////////

function OnFitWidthClick()
{	
	CurrentActualImgSizeStore(tabDocumentImgSize);
	
	OnRegularClick();	
	
	if(ContentTabDiag[0])
	{	
		var k;
		var bCurrentFound=false;
		for ( k = 0; k < ContentTabDiag.length && !bCurrentFound; k++)
		{	
			if(ContentTabDiag[k].className=="ContentTabDiagVisible")
			{
				if((ContentTabDiag[k].all.tags("IMG"))[0])
				{
					bCurrentFound=true;
					var eltImg=(ContentTabDiag[k].all.tags("IMG"))[0];
					var eltMap=(ContentTabDiag[k].all.tags("MAP"))[0];																					
					
					var fxCoeff=(ObjectTitleTable.offsetWidth -10)/((ContentTabDiag[k].all.tags("IMG"))[0]).offsetWidth;
					var fyCoeff=fxCoeff;				
			
					MapCoeffApply(eltMap, fxCoeff, fyCoeff);	
					ImgCoeffApply(eltImg, fxCoeff, fyCoeff);
				}
			}			
		}
	}
	else
	{
		if((ContentTabDiag.all.tags("IMG"))[0])
		{
			var eltImg=(ContentTabDiag.all.tags("IMG"))[0];
			var eltMap=(ContentTabDiag.all.tags("MAP"))[0];																					
				
			var fxCoeff=(ObjectTitleTable.offsetWidth -10)/((ContentTabDiag.all.tags("IMG"))[0]).offsetWidth;
			var fyCoeff=fxCoeff;				
			
			MapCoeffApply(eltMap, fxCoeff, fyCoeff);	
			ImgCoeffApply(eltImg, fxCoeff, fyCoeff);	
		}
	}						
}

/*function OnFitHeightSize()
{
	CurrentActualImgSizeStore(tabDocumentImgSize);
	
	OnRegularClick();
	
	if(ContentTabDiag[0])
	{
		var k;
		var bCurrentFound=false;
		for ( k = 0; k < ContentTabDiag.length && !bCurrentFound; k++)
		{	
			if(ContentTabDiag[k].className=="ContentTabDiagVisible")
			{
				bCurrentFound=true;
				var eltImg=(ContentTabDiag[k].all.tags("IMG"))[0];
				var eltMap=(ContentTabDiag[k].all.tags("MAP"))[0];																					
				
				// (ZoomGlobalTab.offsetHeight-45) because the tab height is not usable				
				var fyCoeff=(ZoomGlobalContainer.offsetHeight - 50) /((ContentTabDiag[k].all.tags("IMG"))[0]).offsetHeight;
				var fxCoeff=fyCoeff;							
		
				MapCoeffApply(eltMap, fxCoeff, fyCoeff);	
				ImgCoeffApply(eltImg, fxCoeff, fyCoeff);
			}			
		}
	}
	else
	{
		var eltImg=(ContentTabDiag.all.tags("IMG"))[0];
		var eltMap=(ContentTabDiag.all.tags("MAP"))[0];																					
				
		// (ZoomGlobalTab.offsetHeight-45) because the tab height is not usable				
		var fyCoeff=(ZoomGlobalContainer.offsetHeight - 50) /((ContentTabDiag.all.tags("IMG"))[0]).offsetHeight;
		var fxCoeff=fyCoeff;							
		
		MapCoeffApply(eltMap, fxCoeff, fyCoeff);	
		ImgCoeffApply(eltImg, fxCoeff, fyCoeff);	
	}			
}*/


function OnRegularClick()
{
	CurrentActualImgSizeStore(tabDocumentImgSize);

	CurrentImgSizeRestore(tabDocumentImgSize);
	CurrentMapRestore(tagDocumentMap);
}

/////////////////////////////////////////////////////////////////////
// 
/////////////////////////////////////////////////////////////////////
var timeOutEltImg;
var timeOutEltMap;
var timeOutEltStartWidth;
var timeOutEltStartHeight;
var idZoomInterval=null;

var tagDocumentMap=new Array();
var tabDocumentImgSize= new Array();

if(ContentTab[0])
{
	if ((ContentTab[0].all.tags("MAP"))[0])
	{
	  InitZoomButton();
	  DocumentMapStore(tagDocumentMap);
	  DocumentImgSizeInit(tabDocumentImgSize);
	}
}
else
{
	if ((ContentTab.all.tags("MAP"))[0])
	{
	  InitZoomButton();
	  DocumentMapStore(tagDocumentMap);
	  DocumentImgSizeInit(tabDocumentImgSize);
	}
}


