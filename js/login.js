var attempt = 3;
// Below function Executes on click of login button.
function validate(){
//var username = document.getElementById("username").value;
//var password = document.getElementById("password").value;
//var xhr = new XMLHttpRequest();
//xhr.open('POST', '/test.php', false);
//xhr.send();
//var test = JSON.parse(xhr.responseText);
if ( document.getElementById("username") == "cwitting" && document.getElementById("password") == "123")
{
//window.location = "next_page.php" + "\?login=" + test.shopperName + "&email=" + test.shopperEmail;
	window.location = "http://google.com";
	return false;
}
else
{
	attempt--;
	if (attempt > 1)
		alert("You have left "+attempt+" attempts");
	else if (attempt == 1)
		alert("You have left "+attempt+" attempt");
	else
	{
		alert("You have no attempts left :'(");
		document.getElementById("username").disabled = true;
		document.getElementById("password").disabled = true;
		document.getElementById("submit").disabled = true;
		return false;
	}
}
}
