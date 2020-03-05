
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
      document.getElementById("myname").style.display="none";
    } else {
      x.className = "topnav";
      document.getElementById("myname").style.display="block";
    }
    
  }
/*function about(){
    document.getElementById("about").style.display="block";
    document.getElementById("home").style.display="none";
    document.getElementById("skills").style.display="none";
    document.getElementById("contact").style.display="none";
}
function home(){
    document.getElementById("about").style.display="none";
    document.getElementById("home").style.display="block";
    document.getElementById("skills").style.display="none";
    document.getElementById("contact").style.display="none";
}
function skills(){
    document.getElementById("about").style.display="none";
    document.getElementById("home").style.display="none";
    document.getElementById("skills").style.display="block";
    document.getElementById("contact").style.display="none";
}
function contact(){
    document.getElementById("about").style.display="none";
    document.getElementById("home").style.display="none";
    document.getElementById("skills").style.display="none";
    document.getElementById("contact").style.display="block";
}*/



jQuery(document).ready(function(){
	jQuery('.skillbar').each(function(){
		jQuery(this).find('.skillbar-bar').animate({
			width:jQuery(this).attr('data-percent')
		},6000);
	});
});