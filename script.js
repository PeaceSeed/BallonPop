var popped = 0;

function checkAll(){
    if (popped === 10){
        // console.log("all Done");
        document.querySelector(".ballon-div").innerHTML = "";
        document.querySelector("#no-ballons").style.display = "block";
    }
};


document.addEventListener("click", function(e){
    // console.log(e.target);
    // e.target.style.display="none";
    if (e.target.className === "ballon"){
        e.target.style.background = "transparent";
        e.target.style.display = "inline-block"
        e.target.textContent = "Pop!";
        popped++;
        // console.log(popped);
        checkAll();
    }
})  