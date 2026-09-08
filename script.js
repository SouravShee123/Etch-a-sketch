const container = document.querySelector(".grid-container");

for(let i=0; i<256; i++){
    const square = document.createElement("div");
    square.classList.add("grid-box"); // adds grid-box as the class for square

    /* 'mouseenter' applies style permanently unlike ':hover' */

    square.addEventListener("mouseenter",()=>{
        square.style.backgroundColor = "purple"
    })
    container.appendChild(square); 
}

