function openTab(evt, tabName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

document.getElementById("settingstab").addEventListener("click", function() {
	openTab(event, "Settings");
	});
document.getElementById("abouttab").addEventListener("click", function() {
	openTab(event, "About");
	});
	
document.getElementById("thresholdstab").addEventListener("click", function() {
	openTab(event, "Thresholds");
	});
document.getElementById("autotab").addEventListener("click", function() {
	openTab(event, "Auto");
	});
document.getElementById("alchemytab").addEventListener("click", function() {
	openTab(event, "Alchemy");
	});
document.getElementById("settingstab").click();