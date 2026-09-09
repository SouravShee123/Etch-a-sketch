const container = document.querySelector(".grid-container");
const button = document.querySelector(".btn");

// function to genarate grid 
function createGrid(size) {

    container.innerHTML = ""; // clears out the old grid completely

    const totalSquare = size * size;
    const sizePercentage = `${100 / size}%`; // height/width percentage for each square

    for(let i=0; i<totalSquare; i++){
        const square = document.createElement("div");
            square.classList.add("grid-box");
            
            //set dynamic sizing directly
            square.style.height = sizePercentage;
            square.style.width = sizePercentage;

            // handles trailing effect
            square.addEventListener("mouseenter",()=>{
                square.style.backgroundColor = getRandomColor(); //  trailing effect gets a random color instead of one single color
            })
            container.appendChild(square); 
    }
}

createGrid(16); // creating 16x16 grid initially

// adding button functions
button.addEventListener("click",()=>{
    const sideLength=parseInt(prompt("Enter the length of one side(max 100)"));

    if(isNaN(sideLength) || sideLength <= 0){
        alert("Please enter a positive number");
    }
    else if(sideLength > 100){
        alert("Maximun limit exceeded ! Please enter a lower number");
    }
    else{
        createGrid(sideLength);
    }
})

// generating a random color
function getRandomColor (){
    const r = Math.floor(Math.random()*256); // getting a random value from 0 to 255 (ex: 24)
    const g = Math.floor(Math.random()*256); // (ex: 35)
    const b = Math.floor(Math.random()*256); // (ex: 245)
    
    return `rgb(${r},${g},${b})`; //  rgb(24,35,245)
}
