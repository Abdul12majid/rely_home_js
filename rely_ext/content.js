console.log("Rely Home Extension loaded on the page!");

// Function to click the element containing the text "Accept"
function clickAcceptElement() {
    // Find all elements on the page
    // Find all buttons, links, and divs (commonly interactive elements)
    const elements = document.querySelectorAll("button, a, div, input");

    // Iterate over the elements to find one containing the text "Accept"
    for (const element of elements) {
        if (element.textContent.trim() === "Accept") {  // Matching exact "Accept"
            console.log("Accept button clicked");
            element.click(); // Click the element
            return true; // Exit the function once clicked
        }
    }

    console.log("Looking for Accept button.");
    return false;
}

// Main function to run the extension logic
function main() {
    const forbiddenLocations = ["Laughlin", "Pahrump", "Bullhead", "Bullhead City"];
    
    // Check if any forbidden text is on the page
    for (const location of forbiddenLocations) {
        if (document.body.textContent.includes(location)) {
            console.log(`Forbidden location found: ${location}`);
            return; // Stop further execution
        }
    }

    // Check if any forbidden messages are on the page
    const forbiddenMessages = ["Sorry, you're too late"];
    for (const message of forbiddenMessages) {
        if (document.body.textContent.includes(message)) {
            console.log("Navigating back...");  // Log the message
            window.history.back();  // Go back to the previous page
            return;  // Stop further execution
        }
    }

    // Try clicking the "Accept" element
    const clicked = clickAcceptElement();
    if (!clicked) {
        // Reload the page if "Accept" element is not found
        console.log("Reloading the page...");
        window.location.reload();
    }
}

// Run the main function
main();
