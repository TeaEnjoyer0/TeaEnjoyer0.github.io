let items = new Array();
let toggle = false;
let ta = false
const size = "128px"
const min = 90, max = 100

if ('ontouchstart' in window) {
  // The device has a touchscreen
  // Add touch event listener
  ta = true
  
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
        document.body.appendChild(x);
        x.style.width = size;
        x.style.height = size;
        x.style.backgroundColor = "#252525";
        x.style.position = "absolute";
        if(ta)
        {
x.style.left = "calc(" + Math.floor(Math.random() * min) + "dvw" + "-" + size)
        x.style.bottom = "calc(" + Math.floor(Math.random() * min) + "dvw" + "-" + size)
        }
        else{
x.style.left = "calc(" + Math.floor(Math.random() * max) + "dvw" + "-" + size);
        x.style.bottom = "calc(" + Math.floor(Math.random() * max) + "dvw" + "-" + size)
}
x.style.transition = "left 500ms, bottom 500ms, background-color 500ms";
        items.push(x); 
}
        
        for(let i = 0; i < items.length; i++)
        {
            if(ta)
            {
items[i].style.left = "calc(" + Math.floor(Math.random() * min) + "dvw" + "-" + size)
items[i].style.bottom= "calc(" + Math.floor(Math.random() * min) + "dvw" + "-" + size)
}
else
{
items[i].style.left = "calc(" + Math.floor(Math.random() * max) + "dvw" + "-" + size)
            items[i].style.bottom = "calc(" + Math.floor(Math.random() * max) + "dvw" + "-" + size)
}
            
            items[i].style.backgroundColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
        }
    }
},500)
