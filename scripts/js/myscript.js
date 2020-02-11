function callMe(){
	nm_ = document.frmContact.txtName.value;
	document.getElementById('textHere').innerHTML = "Welcome " + "<b>" + nm_ + "</b>";
	document.frmContact.txtName.value = "Welcome " + nm_;
	document.getElementById("textHere").style.color = "#ff0000";
}


$(function(){
	$('#printHere').click(function(){
		let url_ = 'datahere1.txt';

		$.ajax({
			type: 'post',
			url: url_,
			success: function(data){
				$('#printHere').html("<div style='color: #ff0000'>"+data+"</div><div class='.'></div>");
			}, 
			error: function(xhr, status, error){
				$('#printHere').html("<div style='color: #ff0000'>"+xhr.responseText+"</div>");
			}
		});
	});


});