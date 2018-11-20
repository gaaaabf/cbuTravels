function displayText(desc)
{
	document.getElementById(desc).style.display = "block";
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

function messageSent()
{
	alert("Your message has been sent!");
}

function bookingForm()
{
	document.getElementById('descSelected').innerHTML = 

				'<form onsubmit="bookingSent();">'+
					'<label>Name:</label><input type="text" name="" required>'+	
					'<label>Email:</label><input type="email" name="" required>'+
					'<label>Number:</label><input type="number" name="" required>'+
					'<label>Pax:</label><input type="number" name="" required>'+
					'<label>Remarks:</label><textarea rows="5" style="border: 1px solid black;" required></textarea>'+
					'<input type="submit" name="">'+
				'</form>'
}

function bookingSent()
{
	alert('Your request has been sent. Please wait for our call.');
}