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
let suggestions = [];


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
    if (!suggestions.includes(suggestion) && suggestion != "" && !products.includes(suggestion)){
        suggestions.push(suggestion);
    } else if (suggestions.includes(suggestion) && !products.includes(suggestion)){
        suggestionSection.innerHTML = "Suggestion already logged.";
    }

    

}

//Scripting logic for the newsletter on index - Naoise.
let yesButton = document.getElementById("yesButton").addEventListener("click", newsletterYesResponse);
let noButton = document.getElementById("noButton").addEventListener("click", newsletterNoResponse);;
let newsletterBox = document.getElementById("newsletterBox");
subscriberCheck();

//Stores the selection in session storage so the user isn't constantly prompted - Naoise.
function newsletterYesResponse(){
    newsletterBox.innerHTML =  "Subscribed!";
    document.getElementById("yesButton").style.display = "none";
    document.getElementById("noButton").style.display = "none";
    sessionStorage.setItem("Subscribed", "true");
    
}

function newsletterNoResponse(){
    newsletterBox.innerHTML = "";
    document.getElementById("noButton").style.display = "none";
    document.getElementById("yesButton").style.display = "none";
    sessionStorage.setItem("Subscribed", "false");
}


function subscriberCheck(){
    if (sessionStorage.getItem("Subscribed") === "true"){
        newsletterBox.innerHTML = "Subscribed!";
        document.getElementById("noButton").style.display = "none";
        document.getElementById("yesButton").style.display = "none";        
    } else if (sessionStorage.getItem("Subscribed") === "false"){
        newsletterBox.innerHTML = "";
        document.getElementById("noButton").style.display = "none";
        document.getElementById("yesButton").style.display = "none";
    } 
}

