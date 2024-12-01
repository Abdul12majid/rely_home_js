console.log("Rely Home Extension loaded on the page!");

// Function to click the element containing the text "Enroll"
function clickEnrollElement() {
    const elements = document.querySelectorAll("button, a, div, input");

    for (const element of elements) {
        if (element.textContent.trim() === "NEW: See All Available Work Orders") { // Matching exact "Accept"
            console.log("'work orders' clicked");
            element.click(); // Click the element
            return true; // Exit the function once clicked
        }
    }

    console.log("Looking for 'Available Work Orders' element.");
    return false; // Return false if the element is not found
}

// Main function to run the extension logic
function main() {
    // Try clicking the "Enroll" element
    const clicked = clickEnrollElement();

    // Log and reload the page regardless of whether the element was found or not
    
    if (!clicked) {
        // Reload the page if "Accept" element is not found
        console.log("Reloading the page...");
        window.location.reload();
    }

    
}

// Run the main function
main();
