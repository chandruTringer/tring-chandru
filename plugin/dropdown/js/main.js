//Global variables
var check;
var rows;
var table;
var  assign=[];
//Main Object which as controlled
 accordion={
    createElement:function(id, classname, text, src, element) {
		var elements = document.createElement(element);
		var text = document.createTextNode(text); /* For creating text */
	     if (element == "img") {
			elements.src = src;//To check the image src.
			}
			elements.id = id;
			elements.className = classname;
		if (text != "" && text != null) {
			elements.appendChild(text);
		   }
		 return elements;
    },
	//Element creation in the accordion
    element:function(name,description) {//Dynamic Creation of Html and css
			for(i=0;i<description.length;i++) { 
				 var  mainContent=this.createElement("","maincontent","","","div");
				 var  section=this.createElement("","","","","section");
				 var  header=this.createElement("","header","","","div");
				 var  selectHeader=this.createElement("","accordionLink",name[i],"","a");
				 var  parentContent=this.createElement("","parentContent","","","div");
				 var  content=this.createElement("","content","","","div");
				 var  paragraph=this.createElement("","",description[i],"","p");
				 content.appendChild(paragraph);
				 parentContent.appendChild(content);
				 header.appendChild(selectHeader);
				 section.appendChild(header);
				 section.appendChild(parentContent);
				 mainContent.appendChild(section);
				 var container=document.getElementsByClassName("container")[0];
				  container.appendChild(mainContent);  			     
				 
			}
		 var main=document.getElementsByClassName("main")[0];
		 main.appendChild(container);
		},
	//Events occurs in the element clicked
	click:function() { 
	  var obj = document.getElementsByTagName("section");//Header of the each content
		 //Looping the every click event
		 for(i=0;i<obj.length;i++) {
			 var accordobj = this;
			 obj[i].addEventListener("click",function(e){
			  accordobj.dropDown(e);
			  });
		 }
	 },
	 //Functionality 
	dropDown:function(e) {//Dynamic Creation for drop down in every content 
        var parentContent = e.currentTarget.lastElementChild;
		var objtext = e.currentTarget.firstElementChild.innerText;
		var containerlist = document.querySelectorAll(".container .maincontent section");
		var parentContentList = document.querySelectorAll(".container .maincontent section .parentcontent");
		for(var k=0;k<containerlist.length;k++) {
			var accordtext = containerlist[k].querySelectorAll(".header a")[0].innerHTML;
			var parentHeight=containerlist[k].querySelectorAll(".content")[0].offsetHeight;
			var checkOpen=containerlist[k].getElementsByTagName("p")[0];
			if(accordtext==objtext&&!checkOpen.classList.contains("open")) {
				parentContent.style.height=parentHeight+"px";
				checkOpen.className="open";    		
			}else{
				parentContentList[k].style.height=0+"px";
				checkOpen.classList.remove("open");
			}	
	    }		
	},	  
	//Check the rows and column
    showpage:function(accordionObject){
		 var value=[];
		 var description=[];
		  var flag=accordionObject[0].state;
		 for(i=0;i<accordionObject.length;i++) {
		     value.push(accordionObject[i].name);
		     description.push(accordionObject[i].description);
	
		 }
	     this. element(value,description);
		 this.click();	
		 
		 if(flag==true){
			 var firstState=document.querySelectorAll(".container .maincontent section:first-child div.parentcontent");
			 var firstElement=document.querySelectorAll(".content")[0].offsetHeight;
		      firstState[0].style.height=firstElement+"px";
		}
	}
 }
	
	
	/*	console.log(value);
	    if(value.hasOwnProperty("row","table")) {
		     for (check in value) {
                if(typeof value[check]=== 'number'){
					if(rows==null){
					 assign[0]=value[check];
					}else {
					  assign[1]=value[check];
					}
				     for(i=0;i<=1;i++){
						rows=assign[0];
						table=assign[1];
					}
					 this.element(rows,table);
					this.click(value);
				}	  
		 }
	   }else {
		  rows=3;
		  table=1;
		  this. element(rows,table);
		  this.click();	
	  } 
	}, */                


/*if(state=true){
	 var firstState=document.querySelectorAll(".container .maincontent section:first-child div.parentcontent");
	  var firstElement=document.querySelectorAll(".content")[0].offsetHeight;
	  firstState.style.height=firstElement+"px";
}else{
	  firstState.style.height=0+"px";
}*/