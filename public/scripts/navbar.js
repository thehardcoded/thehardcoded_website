/* for responsive navbar */
function myFunction(x) {
    if (x.matches) { // If media query matches
      document.getElementsByClassName("openmenu")[0].style.display = "inline-block";
      document.getElementsByClassName("navbar")[0].style.display = "none";
    } else {
      document.getElementsByClassName("openmenu")[0].style.display = "none";
      document.getElementsByClassName("closemenu")[0].style.display = "none";
      document.getElementsByClassName("navbar")[0].style.display = "flex";
    }
  }
  var x = window.matchMedia("(max-width: 860px)")
  x.addListener(myFunction)
  myFunction(x) // Call listener function at run time
  
  
  function openmenu() {
    document.getElementsByClassName("navbar")[0].style.display = "flex";
    document.getElementsByClassName("openmenu")[0].style.display = "none";
    document.getElementsByClassName("closemenu")[0].style.display = "inline-block"
  }
  function closemenu() {
    document.getElementsByClassName("navbar")[0].style.display = "none";
    document.getElementsByClassName("closemenu")[0].style.display = "none";
    document.getElementsByClassName("openmenu")[0].style.display = "inline-block"
  }

  