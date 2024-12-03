console.log("Rely Home Extension loaded on the page!");

// Global variable to store the current page URL
let current_url = null;

// Function to click the element containing the text "Accept"
function clickAcceptElement() {
    // Find all elements on the page
    const elements = document.querySelectorAll("button, a, div, input");

    // Iterate over the elements to find one containing the text "Accept"
    for (const element of elements) {
        if (element.textContent.trim() === "Accept") { // Matching exact "Accept"
            // Save the current page's URL to the global variable
            current_url = window.location.href;
            console.log("Current page URL captured: " + current_url);

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
    const forbiddenMessages = ["Sorry, you're too late", "NEW: See All Available Work Orders"];
    for (const message of forbiddenMessages) {
        if (document.body.textContent.includes(message)) {
            console.log("Forbidden message found: " + message);

            if (current_url) {
                console.log("Redirecting to stored URL: " + current_url);
                window.location.href = current_url; // Redirect to the stored URL
            } else {
                console.log("Stored URL not available. Navigating back...");
                window.history.back(); // Go back to the previous page
            }
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
