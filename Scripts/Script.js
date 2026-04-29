document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("menuButton");
    const dropdown = document.querySelector(".dropdown");

    console.log(button, dropdown)

    if (!button || !dropdown) return;

    button.addEventListener("click", function () {
        dropdown.classList.toggle("show");
    });
});




//Scripting logic for the suggestion box and the newsletter choice on index and the search function on store - Naoise.

//Function that checks if the id is present on the current page and if it is it uses the function that was passed in, every function and the corresponding id should be passed into this one as to avoid the site constantly checking for an id that isn't there - Naoise.
function onElement(id, callback) {
    const el = document.getElementById(id);
    if (el) callback(el);
}


// Suggestion Box on index
onElement("suggestionButton", function () {
    
    const suggestionSection = document.getElementById("suggestionSection");
    const products = ["Zoom H5 Recorder", "Rode Wireless Microphone", "Ten Channel Stereo Mixer", "SubZero Radio Microphone", "XLR Cable"];
    const suggestions = [];

    suggestionButton.addEventListener("click", function(){
        const suggestion = document.getElementById("suggestionBox").value.trim();

        if (suggestion === "") {
            suggestionSection.innerHTML = "Please enter a valid suggestion.";
            return;
        }

        //Loops through array to check if the suggested product is already there.
        for (let i = 0; i < products.length; i++) {
            if (suggestion.toLowerCase() === products[i].toLowerCase()) {
            suggestionSection.innerHTML = "Already in stock!";
            return;
        } 
        }
        //Checks if the suggestion has already been inputed.
        if (suggestions.includes(suggestion) && !products.includes(suggestion)){
            suggestionSection.innerHTML = "Suggestion already logged.";
        } else if (!suggestions.includes(suggestion) && !products.includes(suggestion) && suggestion != ""){
            suggestionSection.innerHTML = "Thank you for the suggestion!";
            suggestions.push(suggestion);
        }
        
    });
});


// Newsletter on index
onElement("newsletterBox", function () {
    
    const yesButton = document.getElementById("yesButton");
    const noButton = document.getElementById("noButton");

    //Function to hide the buttons
    function hideButtons() {
        yesButton.style.display = "none";
        noButton.style.display = "none";
    }

    //Function that checks if the user is subscribed
    function subscriberCheck() {
        const status = sessionStorage.getItem("Subscribed");
        if (status === "true") {
            newsletterBox.innerHTML = "Subscribed!";
            hideButtons();
        } else if (status === "false") {
            newsletterBox.innerHTML = "";
            hideButtons();
        }
    }

    //Event listeners that calls a function that changes the text and buttons if clicked
    yesButton.addEventListener("click", function () {
        newsletterBox.innerHTML = "Subscribed!";
        hideButtons();
        sessionStorage.setItem("Subscribed", "true");
    });

    noButton.addEventListener("click", function () {
        newsletterBox.innerHTML = "";
        hideButtons();
        sessionStorage.setItem("Subscribed", "false");
    });

    subscriberCheck();
});


// Search / Filter on store
onElement("searchBar", function () {
    
    function filterProducts() {
        const query = searchBar.value.toLowerCase().trim();
        //selects all elements inside a catalog with both col and storepage classes and stores them in a list.
        const products = document.querySelectorAll("#catalog .col.storepage-img");

        //forEach function through the product list to check the names within the h5 tags against the input in the search bar.
        products.forEach(function (product) {
            const name = product.querySelector("h5").textContent.toLowerCase();
            if(query === "" || name.includes(query)){
                product.style.display = "";    
            } else {
                product.style.display = "none";    
            }
            
        });
    }

    searchBar.addEventListener("input", filterProducts);
});