console.log("Rely Home Extension loaded on the page!");


// Function to click the element containing the text "New: See All Available Work Orders"
function clickAvailableWorkOrdersElement() {
    const elements = document.querySelectorAll("button, a, div, input");

    for (const element of elements) {
        if (element.textContent.trim().includes("New: See All Available Work Orders")) { // Match containing text
            console.log("'New: See All Available Work Orders' element clicked");
            element.click(); // Click the element
            return true; // Exit the function once clicked
        }
    }

    console.log("Looking for 'New: See All Available Work Orders' element.");
    return false;
}

// Main function to run the extension logic
function main() {
    // Try clicking the "New: See All Available Work Orders" element
    const clickedWorkOrders = clickAvailableWorkOrdersElement();

    // If "New: See All Available Work Orders" was clicked, continue running the script
    if (!clickedWorkOrders) {
        console.log("Reloading the page...");
        window.location.reload(); // Reload the page to repeat the logic
    } 
}

// Run the main function
main();
