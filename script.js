let rect = document.querySelector('#center');

rect.addEventListener("mousemove", (e) => {
    rectloc=rect.getBoundingClientRect();
    let xtep = Math.floor(e.clientX - ((rectloc.width/2) + rectloc.left));
    x =  xtep / rectloc.width * 200;
    
    if (x < 0) {
        rect.style.backgroundColor = `rgb(${-x}%, 0%, 0%)`;
        rect.style.transform = `scale(1.05)`;
        rect.style.transition = ` 0.2s ease`;
        rect.style.borderRadius = `10px`;
        
    } else {
        rect.style.backgroundColor = `rgb(0%, 0%, ${x}%)`;
        rect.style.transform = `scale(1.05)`;
        rect.style.transition = ` 0.2s ease`;
        rect.style.borderRadius = `10px`;
    }
    console.log(`X: ${-x}`);
});

rect.addEventListener("mouseleave", (e) => {
    rect.style.backgroundColor = `transparent`;
    rect.style.borderRadius = `0px`;
    rect.style.transition = ` 0.2s ease`;
    rect.style.transform = `scale(1)`;
});
