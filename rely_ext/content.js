console.log("Rely Home Extension loaded on the page!");

// Global variable to store the URL where the "Accept" button was clicked
let clickedAcceptURL = null;


// Function to click the element containing the text "Accept"
function clickAcceptElement() {
    const elements = document.querySelectorAll("button, a, div, input");

    for (const element of elements) {
        if (element.textContent.trim() === "Accept") { // Matching exact "Accept"
            clickedAcceptURL = window.location.href; // Save the current URL
            console.log("Clicked Accept button at URL: " + clickedAcceptURL);
            element.click(); // Click the element

            setTimeout(() => {
            console.log("5 seconds wait completed.");
        }, 3000); // Wait for 5 seconds
            return true;
        }
    }

    console.log("Looking for Accept button.");
    return false;
}

// Main function to run the extension logic
function main() {
    const forbiddenLocations = ["Laughlin", "Pahrump", "Bullhead", "Bullhead City"];

    for (const location of forbiddenLocations) {
        if (document.body.textContent.includes(location)) {
            console.log(`Forbidden location found: ${location}`);
            return; // Stop further execution
        }
    }

    const clickedAccept = clickAcceptElement();
    if (!clickedAccept) {
        console.log("Reloading the page...");
        window.location.reload();
    }
}

// Run the main function
main();
