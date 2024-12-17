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

// Function to handle forbidden locations
function handleForbiddenLocations() {
    const forbiddenLocations = ["Sandy Valley", "Laughlin", "Pahrump", "Bullhead", "Bullhead City"];

    for (const location of forbiddenLocations) {
        if (document.body.textContent.includes(location)) {
            console.log(`Forbidden location found: ${location}`);
            console.log("Pausing for 3 minutes...");
            
            // Pause the logic for 3 minutes (180 seconds)
            setTimeout(() => {
                console.log("3 minutes wait over. Resuming...");
                main(); // Restart the logic after 3 minutes
            }, 180000); // 180,000 ms = 3 minutes

            return true; // Indicate that a forbidden location was found
        }
    }

    return false; // No forbidden location was found
}

// Main function to run the extension logic
function main() {
    // Check for forbidden locations
    const foundForbidden = handleForbiddenLocations();
    if (foundForbidden) {
        return; // Stop further execution during the pause
    }

    const clickedAccept = clickAcceptElement();
    if (!clickedAccept) {
        console.log("Reloading the page...");
        window.location.reload();
    }
}

// Run the main function
main();
