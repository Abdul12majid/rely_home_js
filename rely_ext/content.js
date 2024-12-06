console.log("Rely Home Extension loaded on the page!");

// Global variable to store the current page URL
let current_url = null;

// Function to click the element containing the text "Log In"
function clickAcceptElement() {
    // Find all elements on the page
    const elements = document.querySelectorAll("button, a, div, input");

    // Iterate over the elements to find one containing the text "Log In"
    for (const element of elements) {
        if (element.textContent.trim() === "Accept") { // Matching exact "Log In"
            // Save the current page's URL to the global variable
            current_url = window.location.href;
            console.log("Current page URL captured: " + current_url);

            console.log("Log In button clicked");
            element.click(); // Click the element
            return true; // Exit the function once clicked
        }
    }

    console.log("Looking for Log In button.");
    return false;
}

// Function to click the element specified by an XPath
function clickElementByXPath(xpath) {
    const result = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
    const element = result.singleNodeValue;

    if (element) {
        console.log(`Accept work order found by XPath: ${xpath}`);
        element.click(); // Click the element
        return true;
    } else {
        console.log(`Accept order not found by XPath: ${xpath}`);
        return false;
    }
}

// Main function to run the extension logic
function main() {
    // Avoid re-execution after redirection by using a URL-based condition
    const forbiddenLocations = ["Laughlin", "Pahrump", "Bullhead", "Bullhead City"];
    
    // Check if any forbidden text is on the page
    for (const location of forbiddenLocations) {
        if (document.body.textContent.includes(location)) {
            console.log(`Forbidden location found: ${location}`);
            return; // Stop further execution
        }
    }

    // Check if any forbidden messages are on the page
    const forbiddenMessages = ["Sorry you are too late."];
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
            return; // Prevent further script execution
        }
    }

    // Check and click the element by XPath
    const xpath = '//*[@id="offerPage"]/table/tbody/tr[4]/td/div/a';
    const clickedByXPath = clickElementByXPath(xpath);
    if (clickedByXPath) {
        console.log("Element clicked using XPath. Redirecting...");
        return; // Stop further execution to avoid triggering other actions
    }

    // Try clicking the "Log In" element
    const clickedLogIn = clickAcceptElement();
    if (!clickedLogIn) {
        // Reload the page if "Log In" element is not found
        console.log("Reloading the page...");
        window.location.reload();
    }
}

// Run the main function
main();
