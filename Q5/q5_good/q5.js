const targetp = document.getElementById("targetp");
const btnGrid = document.getElementById("btnGrid");

// adding event listner to parent (event delegation)
btnGrid.addEventListener("click", function(e){
    let btnText = e.target.textContent;
    switch(btnText){
        case "RED" :
            targetp.style.color = btnText; break;
        case "GREEN" :
            targetp.style.color = btnText; break;
        case "BLUE" :
            targetp.style.color = btnText; break;
        case "10" :
            targetp.style.fontSize = `${btnText}px`; break;
        case "20" :
            targetp.style.fontSize = `${btnText}px`; break;
        case "30" :
            targetp.style.fontSize = `${btnText}px`; break;
        case "monospace" :
            targetp.style.fontFamily = btnText; break;
        case "serif" :
            targetp.style.fontFamily = btnText; break;
        case "sans-serif" :
            targetp.style.fontFamily = btnText; break;
    }
});