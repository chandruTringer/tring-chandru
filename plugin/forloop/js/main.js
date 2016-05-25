//For Loop for selected list iusing Radio icon

 function getradiovalue() {
	 var namedata=[];//Loading name using array.
	 var checkeditem=[];//Checkeditem using radio list
	 var gender=[];//Gender for using loading the array
	 var selectedName=[];//Loadingselectedname thearray
	 var  selectedGender=[];
	 var nonselect=[];
	 var nongender=[];
	 male=document.getElementsByClassName("mname");
	 female=document.getElementsByClassName("fname");
	 selectedName=document.getElementsByClassName("selected");
	 selectedGender=document.getElementsByClassName("gender");
	 nonselect=document.getElementsByClassName("nonselected");	 
	 nongen=document.getElementsByClassName("nongender");
	 var val=document.getElementsByClassName("naming");
	 for(i=0;i<val.length;i++) {
		namedata[i]=val[i].innerText;
        if(male[i].checked) {	//To check the radio if its male has selected
		   gender[i]="male";
		   }else if(female[i].checked) {//Female has selected
			 gender[i]="female";
		   }else {//Display null value 
		    gender[i]="null";
		    }
	   }

        for(i=0;i<selectedName.length;i++) {
			if(gender[i]!="null") {
				 selectedName[i].innerText=namedata[i];
				 selectedGender[i].innerText=gender[i];
			   }
    	 }
			 document.getElementById("select").style.display="block";
			  
		 for(i=0;i<gender.length;i++) {
		      if(gender[i]=="null") {
				     
				    nonselect[i].innerText=namedata[i];
				    nongen[i].innerText="Unselected";
				 }
		 }
	    		document.getElementById("Unselect").style.display="block";
				
	for(i=0;i<namedata.length;i++){
			if(male[i].checked || female[i].checked) {
				namedata[i].innerHTML="";
				male[i].innerHTML="";
				female[i].innerHTML="";
			
			}
		}
 }
