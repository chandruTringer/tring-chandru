		var currentposition=0;
		var imagewidth=0;
		var carousl=new carousel() ;
		 spinner();

		  document.getElementById("right").addEventListener("click", function() {
			carousl.doleft();	})
		  document.getElementById("icon-left").addEventListener("click", function() {
			carousl.doRight();})
		//  window.addEventListener("resize",carousel);
		    window.onresize=function(){
				carousel();
			};
			  
			 
	    function carousel() {
			   var imagefit=[];
			   var screenWidth=window.innerWidth;
			   var contain=document.getElementsByClassName("container")[0];
			   var carousalCont=document.getElementsByClassName("carousal")[0]
			   var imagefit=document.getElementsByClassName("imagefit");
			   var right=document.getElementById("icon-left");
			   var iconleft=document.getElementById("icon-left");
			   var noofclass=imagefit.length;
			   var imagewidth=imagefit[0].offsetWidth;
		       for(i=0;i<imagefit.length;i++) {
				   if(screenWidth<=imagewidth) {
			           var imagewidth=screenWidth-160;
					   contain.style.width=imagewidth+"px";
					   console.log(imagewidth);
				    	}
					   imagefit[i].style.width=imagewidth+"px";
					}
				     var DefaultValue=noofclass*imagewidth;
					 carousalCont.style.width=DefaultValue+"px";
					 console.log(DefaultValue)
		     this.doleft=function() {
					 maxleft=imagewidth-DefaultValue;		  
			      if(currentposition>maxleft) {
						  currentposition+=-imagewidth;
						  carousalCont.style.marginLeft=currentposition+"px";
						  iconleft.style.color="black";
					  }else {
						  right.style.color="#323232";
				}
			 }
		      this.doRight=function() {			
					  if(currentposition<0) {
						 currentposition+=imagewidth;
						 carousalCont.style.marginLeft=currentposition+"px";			  
						}else {
						   right.style.color="black";
						   iconleft.style.color="#323232";
						}
		       }

	     }  

		 function spinner() {
				var carSpinner= document.getElementsByClassName("carousal")[0];
				var iconleft=document.getElementById("icon-left");
				var right=document.getElementById("right");
				var spinner=document.getElementsByClassName("sk-circle")[0];
				//carSpinner.addEventListener("load",function(){
			   // setTimeout(function(){
				spinner.style.opacity="0";
		    	//  },1000)
				 carSpinner.style.opacity="1";
				 iconleft.style.display="block";
				 right.style.display="block";
			   // 
				// })
		
		  }
		