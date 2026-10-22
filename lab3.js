
let moodInput = document.querySelector("#moodInput");
let recommendButton = document.querySelector("#recommendButton");
let output = document.querySelector("#output");

recommendButton.addEventListener("click", function() {
    let mood = moodInput.value.toLowerCase().trim();

    if (mood === "") {
        output.textContent = "Please enter a mood to get a recommendation.";
    }
    else if (mood === "happy") {
        output.textContent = "Recommended Genre: Pop.";
    }
    else if (mood === "stressed") {
        output.textContent = "Recommended Genre: Classical.";
    }
    else if (mood === "focused") {
        output.textContent = "Recommended Genre: Lo-fi.";
    }
    else if (mood === "tired") {
        output.textContent = "Recommended Genre: Acoustic.";
    }
    else {
        output.textContent = "Mood not recognized. Try happy, stressed, focused, or tired.";
    }
});
