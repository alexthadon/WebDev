// Lab 4: Fix the Form!

// Your job is to make the volunteer interest form work.

console.log("Volunteer form JavaScript loaded.");

const form = document.querySelector("#volunteerForm");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const interestInput = document.querySelector("#interest");
const result = document.querySelector("#result");

// TODO: Select the form, email input, and interest dropdown.

// TODO: Add a submit event listener to the form.
form.addEventListener("submit", function(event) {
// TODO: Prevent the default form submission.

// TODO: Read the input values and check for missing information.
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
// TODO: Display helpful errors or an interest-specific response.
