function displayText(desc)
{

	document.getElementById(desc).style.display = "block";
	// var x = document.getElementById(desc);
	// 	if ( x.style.display === "block")
	// 	{
	// 		document.getElementById(desc).style.display = "none";
	// 	}
	// 	else
	// 	{
	// 		document.getElementById(desc).style.display = "block";
	// 	}
}

function hideText(desc)
{
	document.getElementById(desc).style.display = "none";
}


function displayText1(x,y)
{
		var a = document.getElementById('targetModal');
		var b = document.getElementById(x).innerHTML;

		console.log(b);
		document.getElementById('picSelected').src = y;

		if ( a.style.display === "block")
		{
			document.getElementById('targetModal').style.display = "none";
		}
		else
		{
			document.getElementById('descSelected').innerHTML = b;	
			document.getElementById('targetModal').style.display = "block";
		}
}