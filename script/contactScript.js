
document.getElementById("work").addEventListener("mouseout", hideProjects);
document.getElementById("work").addEventListener("mouseover", showProjects);
document.getElementById("work").addEventListener("mouseover", projectHover);
document.getElementById("work").addEventListener("mouseout", projectMouseOut);
document.getElementsByClassName("dropdown")[0].addEventListener("mouseover", showProjects);
document.getElementsByClassName("dropdown")[0].addEventListener("mouseout", hideProjects);
document.getElementsByClassName("dropdown")[0].addEventListener("mouseover", projectHover);
document.getElementsByClassName("dropdown")[0].addEventListener("mouseout", projectMouseOut);


function showProjects() {
    document.getElementById("work").style.visibility = "visible";
}

function hideProjects(){
    document.getElementById("work").style.visibility = "hidden";
}

function projectHover() {
    document.getElementsByClassName("dropdown")[0].style.backgroundColor = "rgb(50, 119, 247)";
    document.getElementsByClassName("dropdown")[0].style.color = "white";
    document.getElementsByClassName("dropdown")[0].style.borderRadius = "5px";
}

function projectMouseOut(){
    document.getElementsByClassName("dropdown")[0].style.backgroundColor = "white";
    document.getElementsByClassName("dropdown")[0].style.color = "black";
  }

