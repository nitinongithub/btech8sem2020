function callMe(){
	nm_ = document.frmContact.txtName.value;
	document.getElementById('textHere').innerHTML = "Welcome " + "<b>" + nm_ + "</b>";
	document.frmContact.txtName.value = "Welcome " + nm_;
	document.getElementById("textHere").style.color = "#ff0000";
}