//Global Variables
var state=true;
var obj=[];
var flag=1;
var obj = document.getElementsByTagName("section");
//Looping for Click event
	for(i=0;i<obj.length;i++)
	{
		obj[i].addEventListener("click",function(e){
		dropdown(e);
		});
	}

	 function dropdown(e) {
		var parentContent = e.currentTarget.lastElementChild;
		var objtext = e.currentTarget.firstElementChild.innerText;
		var containerlist = document.querySelectorAll(".main-content section");
		var parentContentList = document.querySelectorAll(".main-content section .parentcontent");
		for(var k=0;k<containerlist.length;k++) {
			var accordtext = containerlist[k].querySelectorAll(".header a")[0].innerHTML;
			var parentHeight=containerlist[k].querySelectorAll(".content")[0].offsetHeight;
			var checkOpen=containerlist[k].getElementsByTagName("p")[0];
				if(accordtext==objtext&&!checkOpen.classList.contains("open")){
				    parentContent.style.height=parentHeight+"px";
					checkOpen.className="open";      
			      }else{
					parentContentList[k].style.height=0+"px";
					checkOpen.classList.remove("open");
			    }	
	    }		
	}	  