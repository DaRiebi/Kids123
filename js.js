// JavaScript learning math adding to 10, 100 and 1000!

// fullscreen webbrowser
/* Get the documentElement (<html>) to display the page in fullscreen */
var elem = document.documentElement;

/* View in fullscreen */
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }
}

/* Close fullscreen */
function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) { /* Safari */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) { /* IE11 */
    document.msExitFullscreen();
  }
}

// page itself

document.getElementById("btnCheck").addEventListener("click", check);
document.getElementById("btnEasy").addEventListener("click", easy);
document.getElementById("btnMedium").addEventListener("click", medium);
document.getElementById("btnHard").addEventListener("click", hard);
var input = document.getElementById("inputErgebnis");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById("btnCheck").click();
	}
}
);

function easy() {
	document.getElementById("inputErgebnis").value = "";
	var a = Math.floor(Math.random() * 10);
	document.getElementById("varA").innerHTML = a;
	var b = Math.floor(Math.random() * 10);
	document.getElementById("varB").innerHTML = b;
	while ((a + b) > 10) {
		a = Math.floor(Math.random() * 10);
		document.getElementById("varA").innerHTML = a;
		b = Math.floor(Math.random() * 10);
		document.getElementById("varB").innerHTML = b;
		}
}

function medium() {
	document.getElementById("inputErgebnis").value = "";
	var a = Math.floor(Math.random() * 100);
	document.getElementById("varA").innerHTML = a;
	var b = Math.floor(Math.random() * 100);
	document.getElementById("varB").innerHTML = b;
	while ((a + b) > 100) {
		a = Math.floor(Math.random() * 100);
		document.getElementById("varA").innerHTML = a;
		b = Math.floor(Math.random() * 100);
		document.getElementById("varB").innerHTML = b;
		}
}

function hard() {
	document.getElementById("inputErgebnis").value = "";
	var a = Math.floor(Math.random() * 1000);
	document.getElementById("varA").innerHTML = a;
	var b = Math.floor(Math.random() * 1000);
	document.getElementById("varB").innerHTML = b;
	while ((a + b) > 1000) {
		a = Math.floor(Math.random() * 1000);
		document.getElementById("varA").innerHTML = a;
		b = Math.floor(Math.random() * 1000);
		document.getElementById("varB").innerHTML = b;
		}
}

function check() {
	var aa = document.getElementById("varA").innerHTML;
	var aaa = parseInt(aa);
	var bb = document.getElementById("varB").innerHTML;
	var bbb = parseInt(bb);
	var cc = document.getElementById("inputErgebnis").value;
	var ccc = parseInt(cc);
	if (isNaN(aaa) || isNaN(bbb) || isNaN(ccc)) {
		alert("not a number");
	}
	else {
		if (aaa + bbb == ccc) {
		alert("richtig");
		}
		else {
			alert("falsch");		
		}
	}
}





// heavy metal //