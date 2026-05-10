// WELCOME MESSAGE

alert("Welcome To Neha Suitings & Shirtings");


// SEARCH FUNCTION

const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("keyup", function(){

    let filter = searchInput.value.toLowerCase();

    let cards = document.querySelectorAll(".card");

    cards.forEach(function(card){

        let text = card.innerText.toLowerCase();

        if(text.includes(filter)){

            card.style.display = "block";

        }
        else{

            card.style.display = "none";

        }

    });

});


// CONSOLE MESSAGE

console.log("Neha Suitings & Shirtings Website Loaded Successfully");