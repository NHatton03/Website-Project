document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("menuButton");
    const dropdown = document.querySelector(".dropdown");

    console.log(button, dropdown)

    if (!button || !dropdown) return;

    button.addEventListener("click", () => {
        dropdown.classList.toggle("show");
    });
});





//Scripting logic for the suggestion button on index - Naoise.
let suggestionButton = document.getElementById("suggestionButton").addEventListener("click", acknowledgeSuggestion);
let suggestionSection = document.getElementById("suggestionSection");
let products = ["Zoom H5 Recorder", "Rode Wireless Microphone", "Ten Channel Stereo Mixer", "SubZero Radio Microphone", "XLR Cable"];


function acknowledgeSuggestion(){
    let suggestion = document.getElementById("suggestionBox").value;
    if(suggestion != ""){
        suggestionSection.innerHTML = "Thank you for the suggestion!";
    } else {
        suggestionSection.innerHTML = "Please enter a valid suggestion.";
    }
    for(let i = 0; i < products.length; i++){
        if(suggestion === products[i]){
            suggestionSection.innerHTML = "Already in stock!";
        }
    }
    if (!products.includes(suggestion) && suggestion != ""){
        products.push(suggestion);
    }

}