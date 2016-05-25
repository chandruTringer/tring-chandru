var CURRENTPOSITION;
$(document).ready(function(){
	initiate();
})

window.onresize=function(){
	exactContent();
}

//Main content in the carousal
function initiate() {
	var flex = "";
    for (i = 0; i <17; i++) {
        flex += '<div  class="flexSlider"><img  class="value" id="'+i+'" "data-state="false" data-name="image'+i+'.jpg"  src="assets/pet' + i + '.jpg"></div>';
    }
    $('main').prepend('<div class="bottom-content"><div class="photos-selection">' + flex + '</div></div></div>');
        $(".flexSlider").click( function() {
            currentPicture = this.className;
			this.lastElementChild.setAttribute("data-state","true");
			 createOverlay();
			  arrowEvents(currentPicture,flex);
			 this.lastElementChild.setAttribute("data-state","false");
        });
}
//generic function for overlay
function createOverlay() {
    $(".wrapper").append('<div class="mask"><div class="mainOverlay"><div class="header"><div class="content-name"><span class="imgName">images.jpg</span></div><a href=" " class="download-icon"></a><div id="close-icon">x</div></div></div><div class="menu"><div class="menu-cont"><div id="menu" class="menu-icon fa fa-th-large"></div><div class="imageCount"></div> </div></div>');
    $("#close-icon").click(function(){
		closeOverlay();
	})
}
function closeOverlay(){
	containerOverflow(false);
	$(".mask").remove();
}
function arrowiconposition(){
	 //var maxHeight = window.innerHeight;
	 $(".icon-arrow").css("top",$(".mask").height()+"px");
	 
}
//Content for overlay
function arrowEvents(pickElement,content) {
	bottomContent(content);
	containerOverflow(true);
    var mask = document.getElementsByClassName("mainOverlay")[0];
    mask.insertAdjacentHTML('beforeend', '<div class="main-content"><div class="icon-arrow"><div  data-options="left"  class="valueicon arrow-iconL fa fa-angle-left"></div><div data-options="right" class="valueicon arrow-iconR fa fa-angle-right"></div></div></div>');
	var renderElement=document.getElementsByClassName("sliderImage");
		$('.valueicon').click(function(){
			for(var j=0;j<renderElement.length;j++) {
				if(this.getAttribute("data-options")=="right"){
					if(renderElement[j].getAttribute("data-state")=="true"){
					    $(".small-content .flexSlider").css("border","");
						 var curr_p=renderElement[j].parentElement;
						 var top_p=curr_p.parentElement;
						 var nextContent=top_p.nextSibling;
						 var next_el=nextContent.lastElementChild;
						 var exact_el=next_el.lastElementChild;
						 renderElement[j].setAttribute("data-state","false");
						 exact_el.setAttribute("data-state","true");
						  top_p.style.display="none";
						 exactContent();
						 break;
					}	 
				}else{
					if(renderElement[j].getAttribute("data-state")=="true"){
						//selectAnimation();
						$(".small-content .flexSlider").css("border","");
						 var curr_p=renderElement[j].parentElement;
						 var top_p=curr_p.parentElement;
						 var nextContent=top_p.previousElementSibling;
						 var next_el=nextContent.lastElementChild;
						 var exact_el=next_el.lastElementChild;
						 renderElement[j].setAttribute("data-state","false");
						 exact_el.setAttribute("data-state","true");
						  top_p.style.display="none";
						 exactContent();
					}	 
				}
			}
		})

	contentImage(pickElement);
}
function containerOverflow(input) {
    if (input == true) {
        $("body").css("overflow","hidden");
    } else {
         $("body").css("overflow","initial");
    }
}
//Bottom content for slider
function bottomContent(bottomcontent){
	$(".imageCount").after('<div class="small-content">'+bottomcontent+'</div>');
	var state=false;
	$('.menu-icon').click(function(){
		if(state==false){
			$("#menu").removeClass("menu-icon fa fa-th-large");
			$("#menu").addClass("fa fa-angle-down"); 
			$(".menu-cont").css("height","100px");
			state=true;
		}else{
			$("#menu").removeClass("fa fa-angle-down");
			$("#menu").addClass("menu-icon fa fa-th-large"); 
			$(".menu-cont").css("height","35px");
			state=false;
		}
	});
		$(".value").click(function(){
			$(".content-slider").css("display","none")
			$(".small-content .flexSlider").css("border","0px");
			$(".content-slider").find(".sliderImage").attr("data-state","false");
			movingScrollposition(this.id,$("content-slider").length);
			$(".content-slider").eq(this.id).find(".sliderImage").attr("data-state","true");
			exactContent();
	   })
}

//Image loading function  in overlay
function contentImage(currentElement){
	var imageContent=[];
	var exactContent=[];
	console.log(currentElement);
	var currentCont=document.getElementsByClassName(currentElement)[0].parentElement;
	var parentCont=currentCont.children;
	for(var i=0;i<parentCont.length;i++){
		imageContent[i]=parentCont[i].lastElementChild;
	}
	for(var j=0;j<imageContent.length;j++){
		var refObj={};
		refObj.state=imageContent[j].getAttribute("data-state");
		refObj.url=imageContent[j].getAttribute("src");
		refObj.name=imageContent[j].getAttribute("data-name");
		exactContent.push(refObj);
	}
	renderContainer(exactContent);
}

//render container in overlay
function renderContainer(renderContent){
   var mainCarousal = document.getElementsByClassName("icon-arrow")[0];
    var mainSlide = '';
    for (i = 0; i < renderContent.length; i++) {
        mainSlide += '<div  class="content-slider"><div class="loading"><div class="sk-circle"> <div class="sk-circle1 sk-child"></div><div class="sk-circle2 sk-child"></div><div class="sk-circle3 sk-child"></div><div class="sk-circle4 sk-child"></div><div class="sk-circle5 sk-child"></div><div class="sk-circle6 sk-child"></div><div class="sk-circle7 sk-child"></div><div class="sk-circle8 sk-child"></div><div class="sk-circle9 sk-child"></div><div class="sk-circle10 sk-child"></div><div class="sk-circle11 sk-child"></div><div class="sk-circle12 sk-child"></div></div><span>Loading..</span></div><div class="exact-profile"><img data-name="'+renderContent[i].name+'" data-state="'+renderContent[i].state+'"class="sliderImage" src="'+ renderContent[i].url+ '"></div></div>';
    }
	mainCarousal.insertAdjacentHTML('afterend', mainSlide);
	exactContent();
}
function arrowicon(j,maxlength){
		if(j==0){
			$(".arrow-iconL").css("display","none");
		}else if(j==1){
			$(".arrow-iconL").css("display","block");
		}else if(maxlength-1==j){
			$(".arrow-iconR").css("display","none");
		 }
		else{
			$(".arrow-iconR").css("display","block");
			$(".arrow-iconL").css("display","block");
		}
}
//Event triggering function in slider content
function exactContent(){
	var tempSize=$(".sliderImage").length;
	    $(".loading").css("display","block");
		$(".sliderImage").each(function(index){
			if($(this).attr("data-state")=="true"){
				console.log(index);
				$(".imgName").text($(this).attr("data-name"));
				$(".small-content .flexSlider").eq(index).css("border","3px solid white");
				arrowiconposition();
				downloadElement(index);
				movingScrollposition(index,tempSize);
				arrowicon(index,tempSize);
				$(".imageCount").text(index+"  "+"of" +"  "+ $(".sliderImage").length+" "+ "items");
				var n_Width =this.naturalWidth;
			    var n_Height =this.naturalHeight;
				var output_val=contentHandle(n_Width,n_Height);
				$(this).css("opacity","1");
				$(this).closest(".content-slider").css({"display":"block","width":output_val.widthCont+"px","height":output_val.heightCont+"px","left":output_val.left+"px","top":output_val.top+"px"});
				$(".loading").css("display","none");
			}
		})
}

//Handling responsiveness function handling
function  contentHandle(exactWidth,exactHeight) {
	var win_Theight=130;
	 var maxWidth = window.innerWidth;
	 var maxHeight = window.innerHeight;
	 var win_width=(maxWidth*70)/100;
	 var win_height=(maxHeight-win_Theight);
	 var result={};
	 var widthCont=heightCont=left=top=0;
	 if(exactHeight>win_height){
		  result.widthCont=((exactWidth/exactHeight)*win_height);
		 if(result.widthCont>maxWidth){
			result.widthCont=win_width;
			result.heightCont=win_height;
			result.left=(maxWidth-result.widthCont)/2;
		    result.top=(result.heightCont+result.left)-maxWidth;
			if(result.top<win_Theight){
				result.top=(result.heightCont-result.widthCont)+result.left;
			 }
		 }else{
			result.heightCont=win_height;
			result.left=(maxWidth-result.widthCont)/2;
	        result.top=(maxHeight-result.heightCont)/2;
		 }	
	 }else if(exactWidth>win_width){
		 result.widthCont=(win_width);
		 result.heightCont=win_height;
		 result.left=(maxWidth-result.widthCont)/2;
		result.top=maxWidth-(result.heightCont+result.left);
		if(result.top<win_Theight){
			result.top=win_Theight+result.left;
		}
	 }else{
		 result.widthCont=exactWidth;
		 result.heightCont=exactHeight;
		 result.left=(maxWidth-result.widthCont)/2;
	     result.top=(maxHeight-result.heightCont)/2;
	 }
	  return result;
}

function downloadElement(currentElement){
	var downloadElement=document.getElementsByClassName("download-icon")[0];
	var contentImage=document.getElementsByClassName("sliderImage");
	downloadElement.addEventListener("click",function(){
		var downloadPath=contentImage[currentElement].getAttribute("src");
		console.log(downloadPath);
		downloadElement.setAttribute("href",downloadPath);
		downloadElement.setAttribute("download",downloadPath);
	});
}

function movingScrollposition(position,maxLength){
	var currScroll=document.getElementsByClassName("small-content")[0];
	var moveScroll=200;
	var startScroll=0;
	if(CURRENTPOSITION===undefined){
		if(position>=maxLength/2){
			currScroll.scrollLeft +=moveScroll;
		}
		CURRENTPOSITION=position;
	}else if(position>CURRENTPOSITION) {
			currScroll.scrollLeft +=moveScroll;
			CURRENTPOSITION=position;
	}else if(position<CURRENTPOSITION){
		if(currScroll.scrollLeft>=startScroll){
		  currScroll.scrollLeft -=moveScroll;	
		  CURRENTPOSITION=position;
	    }
	}
}
