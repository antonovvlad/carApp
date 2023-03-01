let block = document.getElementById("car"); // we also can use document.querySelector

let left1 = 0; 
let top1 = 0;


document.addEventListener('click', (event) => {
  const mousePosition = {
      x: event.clientX,
      y: event.clientY
  };
  block.style.left = `${mousePosition.x - block.offsetWidth/2}px`;
  block.style.top = `${mousePosition.y - block.offsetHeight/2}px`;
}, true)



document.addEventListener("keydown", (event) => { 
  const arrowRightFn = () => { 
    block.style.transform = "rotate(0deg)";
    block.style.left = left1 + "px";
    left1 = left1 + 14;
  }

  const arrowLeftFn = () => {
    block.style.transform = "rotate(180deg)";
    block.style.left = left1 + 'px';
    left1 = left1 - 14;
   }

   const arrowDownFn = () => {
    block.style.transform = "rotate(90deg)";
    block.style.top = top1 + "px";
    top1 = top1 + 14;
   }

   const arrowUpFn = () => {
    block.style.transform = "rotate(270deg)";
    block.style.top = top1 + "px";
    top1 = top1 - 14;
   }

   const spaceFn = () => alert("beep-beep");

   const actions = {
    ArrowRight: arrowRightFn,
    ArrowDown: arrowDownFn,
    ArrowLeft: arrowLeftFn, 
    ArrowUp: arrowUpFn, 
    Space: spaceFn

   }

   actions[event.code]();
})
