var closepop = document.querySelector(".pop-up");
var closedark= document.querySelector(".dark-bx");
var darkmode = document.querySelector(".dark");
var sidebar = document.querySelector(".side-bar");
var body= document.getElementsByTagName("body");


function sideopenToggle(){
  sidebar.classList.toggle("side-bar-open");
}


function sidecloseToggle(){
  sidebar.classList.toggle("side-bar-close");
}


function closebarToggle(){
  closepop.classList.toggle("pop-up-close");
}

function openbarToggle(){
  closepop.classList.toggle("pop-up-open");
}

function openbox(){
  closedark.classList.toggle("dark-bx-close");
}



function darkmodeToggle(){
    darkmode.classList.toggle("darker-btn");
  document.body.classList.toggle("darktheme");


    if(localStorage.getItem("theme") == "light"){
       localStorage.setItem("theme", "dark");
    }
    else{
      localStorage.setItem("theme", "light");
    }

    
}

if(localStorage.getItem("theme") == "light"){
  darkmode.classList.remove("darker-btn");
  document.body.classList.remove("darktheme");
}
else if(localStorage.getItem("theme") == "dark"){
  darkmode.classList.add("darker-btn");
  document.body.classList.add("darktheme");
}
else{
  localStorage.setItem("theme", "light");
}


localStorage.setItem("theme", "dark");
localStorage.getItem("theme");

