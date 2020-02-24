setTimeout(function()  {
    var pre = document.getElementsByClassName("preloader")[0];
    var cont = document.getElementsByClassName("content")[0];
    pre.outerHTML=""; 
    //  c.style.display = "flex";
    cont.classList.remove("content");
 }, 0);


