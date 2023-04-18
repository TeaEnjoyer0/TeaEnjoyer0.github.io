let items = new Array();
let toggle = false;

if ('ontouchstart' in window) {
  // The device has a touchscreen
  // Add touch event listener
  document.addEventListener('touchstart', function(e) {
    // Handle touch event here
        if(toggle)
        {
            toggle = false;
        }
        else
        {
            toggle = true;
        }
    
  });}
document.addEventListener("keydown", (e) => {
    if(e.key == " ")
    {
        if(toggle)
        {
            toggle = false;
        }
        else
        {
            toggle = true;
        }
    }
    }
);

setInterval(function()
{
    if(toggle == false )
    {
let x;
        if(items.length < 300)
{
x = document.createElement("div");
        x.style.width = "128px";
        x.style.height = "128px";
        x.style.backgroundColor = "#252525";
        x.style.position = "absolute";
x.style.transition = "left 500ms, bottom 500ms, background-color 500ms";
        document.body.appendChild(x);
x.style.left = Math.floor(Math.random() * 60) + "dvw";
        x.style.bottom = Math.floor(Math.random() * 60) + "dvh";
        items.push(x); 
}
        
        for(let i = 0; i < items.length; i++)
        {
            items[i].style.left = Math.floor(Math.random() * 60) + "dvw";
            items[i].style.bottom = Math.floor(Math.random() * 60) + "dvh";
            items[i].style.backgroundColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
        }
    }
},500)
