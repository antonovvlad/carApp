let block = document.getElementById("car"); // we also can use document.querySelector


let left1 = 0; 
let top1 = 0;

document.addEventListener("keydown",  event => { // we also can use document.onclickdown(event)
  if (event.code == "ArrowRight") { 
    block.style.transform = "rotate(0deg)";
    left1++;
    block.style.left = left1 + "px";
  }
  if (event.code == "ArrowDown") {
    block.style.transform = "rotate(90deg)";
    top1++;
    block.style.top = top1 + "px";
  }
  if(event.code == 'ArrowLeft') {
    block.style.transform = "rotate(180deg)";
    left1--;
    block.style.left = left1 + 'px';
   }
   if (event.code == "ArrowUp") {
    block.style.transform = "rotate(270deg)";
    top1--;
    block.style.top = top1 + "px";
  }
});

document.addEventListener("keydown", event => {
  if (event.code == "Space") {
    alert("beep-beep");
  }
});

