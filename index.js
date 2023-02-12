var no_ofDrums=document.querySelectorAll(".drumset").length;
for(var i=0;i<no_ofDrums;i++)
{
    document.querySelectorAll(".drumset")[i].addEventListener("click",function()
    {
        var curr_btn=this.innerHTML;
        makeSound(curr_btn);
    });
}
 document.addEventListener("keypress",function(event)
    {
        makeSound(event.key);
    });
function makeSound(curr_btn)
{
    switch(curr_btn)
    {
        case "w": 
        var au1=new Audio("sounds/crash.mp3")
        au1.play();
        break;

        case "a": 
        var au2=new Audio("sounds/tom-1.mp3")
        au2.play();
        break;
        
         case "s": 
        var au3=new Audio("sounds/snare.mp3")
        au3.play();
        break;

        case "d": 
        var au4=new Audio("sounds/tom-2.mp3")
        au4.play();
        break;

        case "i": 
        var au5=new Audio("sounds/kick-bass.mp3")
        au5.play();
        break;

        case "j":
         var au6=new Audio("sounds/ride.mp3")
        au6.play();
        break;

        case "k":
        var au7=new Audio("sounds/tom-3.mp3")
        au7.play();
        break;

        default: console.log("click on Drum")
    }
}


