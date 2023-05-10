function addfeedback() {
  // Get the message of the new recommendation
  let feedback = document.getElementById("new_feedback");
  // If the user has left a recommendation, display a pop-up
  if (feedback.value != null && feedback.value.trim() != "") {
    console.log("New feedback added");
    //Call showPopup here

    // Create a new 'recommendation' element and set it's value to the user's message
    var element = document.createElement("div");
    element.setAttribute("class","feedback");
    element.innerHTML = "\<span\>&#8220;\</span\>" + feedback.value + "\<span\>&#8221;\</span\>";
    // Add this element to the end of the list of recommendations
    document.getElementById("all_feedback").appendChild(element); 
    
    // Reset the value of the textarea
    feedback.value = "";
    showPopup(true);
  }
}

function showPopup(bool) {
  if (bool) {
    document.getElementById('popup').style.visibility = 'visible'
  } else {
    document.getElementById('popup').style.visibility = 'hidden'
  }
}
