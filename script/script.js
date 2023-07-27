document.getElementById("hire").addEventListener("click", myFunction);

function myFunction() {
  document.getElementById("hire").innerHTML = "Thanks!";
}

document.getElementById('select').addEventListener("mouseover", showProjects);
document.getElementById('select').addEventListener("mouseout", hideProjects);
document.getElementById('work').addEventListener("mouseover", showProjects);
document.getElementById('work').addEventListener("mouseout", hideProjects);
document.getElementById('work').addEventListener("mouseover", projectHover);
document.getElementById('work').addEventListener("mouseout", projectMouseOut);

function projectHover() {
  document.getElementById("select").style.backgroundColor = "rgb(50, 119, 247)";
  document.getElementById("select").style.color = "white";
  document.getElementById("select").style.borderRadius = "5px";
}

function projectMouseOut(){
  document.getElementById("select").style.backgroundColor = "white";
  document.getElementById("select").style.color = "black";
}

function showProjects() {
    document.getElementById('work').style.visibility = "visible";
}

function hideProjects() {
    document.getElementById('work').style.visibility = "hidden";
}