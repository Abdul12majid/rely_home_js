console.log("Rely Home Extension loaded on the page!");

// Function to click the element containing the text "Enroll"
function clickWorkElement() {
    const elements = document.querySelectorAll("button, a, div, input");
    console.log(`Found ${elements.length} elements to check.`);

    for (const element of elements) {
        console.log(`Checking element: ${element.textContent.trim()}`);
        if (element.textContent.trim() === "NEW: See All Available Work Orders") {
            console.log("'work orders' found");
            element.setAttribute("target", "_self"); // Force same-tab behavior
            console.log("'work orders' clicked");
            element.click(); // Click the element
            return true;
        }
    }

    console.log("Looking for 'Available Work Orders' element.");
    return false;
}

// Main function to run the extension logic
function main() {
    console.log("Running main function.");
    const clicked = clickWorkElement();

    if (!clicked) {
        console.log("Reloading the page...");
        window.location.href = window.location.href; // Explicit reload
    }
}

main();
