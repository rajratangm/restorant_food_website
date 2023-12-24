// infoBoxHandler.js

// Function to toggle the visibility of the info box
function toggleInfoBox() {
    // Get the reference to the infoBox element
    var infoBox = document.getElementById("infoBox");
    // Toggle the 'hidden' class to show/hide the info box
    infoBox.classList.toggle("hidden");
  }
  
  // Close the info box when clicking outside of it
  document.addEventListener("mouseup", function (e) {
    // Get the reference to the infoBox element
    var infoBox = document.getElementById("infoBox");
    // Check if the click is outside the info box
    if (!infoBox.contains(e.target)) {
      // If outside, hide the info box
      infoBox.classList.add("hidden");
    }
  });

  console.log('Hellow Raj');

  // const h1var = document.getElementsByTagName('h4');
  // if(h1var.length>0){
  //   h1var[0].style.fontSize="50px";
  // }
  // else{
  //   console.log("there is no h4");
  // }
  
  // const allLi = document.querySelectorAll("li");

  // for(var i=0; i< allLi.length; i++){
  //   allLi[i].style.fontWeight= "bolder";
  // }

  