// Lab 4: Fix the Form!

// Your job is to make the volunteer interest form work.

console.log("Volunteer form JavaScript loaded.");

const form = document.querySelector("#volunteerForm");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const interestInput = document.querySelector("#interest");
const result = document.querySelector("#result");

form.addEventListener("submit", function(event) {

event.preventDefault();
        const name = nameInput.value;
const email = emailInput.value;
const interest = interestInput.value;

if (name === "" || email === "" || interest === "") {
        result.textContent = "Please fill out all fields before submitting.";

    } 
    
    else if (interest === "outreach") {
        result.textContent = "Thank you, " + name + "! You selected Community Outreach.";

    } 
    
    else if (interest === "events") {
        result.textContent = "Thank you, " + name + "! You selected Event Support.";

    } 
    
    else if (interest === "mentoring") {
        result.textContent = "Thank you, " + name + "! You selected Youth Mentoring.";

    } 
    
    else {
        result.textContent = "Please select a valid volunteer opportunity.";
    }

});
