let header=document.querySelector("#header")
let logo=document.querySelector("#header .headerBottom .logo")
let iconBox=document.querySelector("#header .headerBottom .iconBox")
let headerBottom=document.querySelector("#header .headerBottom")

window.onscroll=function(){
    if(window.scrollY>110){
        header.style="position:relative"
        header.classList.remove("headerTop")
        header.classList.remove("headerMiddle")
        logo.style="opacity:1;visibility:visible;"
        iconBox.style="opacity:1;visibility:visible;"
        headerBottom.style="position:fixed; top:0; left:0"
    }
    else{
        logo.style="opacity:0;visibility:hidden;"
        iconBox.style="opacity:0;visibility:hidden;"
        headerBottom.style="position:relative"
    }
}