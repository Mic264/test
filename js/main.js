alert("JavaScript file is loaded!");

//when page loads
//get references to interactive elements 
const txtParagraph = document.getElementById("paragraph");
const txtHeader = document.getElementById("header");
const imgCat = document.getElementById("Cat");
const btnText = document.getElementById("text");
const btnHtml = document.getElementById("html");
const btnStyle = document.getElementById("style");
const btnClass = document.getElementById("class");
const btnAttribute = document.getElementById("attribute");
const btnHighlight = document.getElementById("highlight");

//listen for all events
btnText.addEventListener("click", changeText);
btnHtml.addEventListener("click", changeHtml);
btnStyle.addEventListener("click", toggleStyle);
btnClass.addEventListener("click", toggleClass);
btnAttribute.addEventListener("click", changeAttribute);
btnHighlight.addEventListener('mouseenter', addHighlight);
btnHighlight.addEventListener('mouseleave', removeHighlight);

function changeText() {
    txtParagraph.textContent = "Now I am text!";
}

function changeHtml() {
    txtParagraph.innerHTML = "<b>Now I am bold HTML!</b>";
}

function toggleStyle() {
    txtHeader.style.color = txtHeader.style.color === "blue" ? "black" : "blue";
}

function toggleClass() {
    if (txtHeader.classList.contains("green")) {
        txtHeader.classList.remove("green");
        txtHeader.classList.add("purple");
    } else {
        txtHeader.classList.remove("purple");
        txtHeader.classList.add("green");
    }
}


function changeAttribute() {
    if (imgCat.src.includes("EmotionalCat.jpg")) {
        imgCat.src = "images/HappyCat.jpg";
    } else {
        imgCat.src = "images/EmotionalCat.jpg";
    }
}


function addHighlight(){
    btnHighlight.style.backgroundColor = "yellow";
}

function removeHighlight(){
    btnHighlight.style.backgroundColor = "";
}


