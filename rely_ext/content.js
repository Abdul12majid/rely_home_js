console.log("Rely Home Extension loaded on the page!");

// Global variable to store the URL where the "Accept" button was clicked
let clickedAcceptURL = null;

// Function to click the element specified by an XPath

function clickElementByXPath(xpath) {
    const result = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
    const element = result.singleNodeValue;

    if (element) {
        console.log(`new work order: ${xpath}`);
        element.click(); // Click the element
        console.log("Element clicked, waiting for 5 seconds before continuing...");
        setTimeout(() => {
            console.log("5 seconds wait completed.");
        }, 1000); // Wait for 5 seconds
        return true;
    } else {
        console.log(`Accept order not found by XPath: ${xpath}`);
        return false;
    }
}

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

    const forbiddenMessages = ["Sorry you are too late."];
    for (const message of forbiddenMessages) {
        if (document.body.textContent.includes(message)) {
            console.log("Forbidden message found: " + message);

            if (clickedAcceptURL) {
                console.log("Redirecting back to the URL where 'Accept' button was clicked: " + clickedAcceptURL);
                window.location.href = clickedAcceptURL; // Navigate back to the stored URL
            } else {
                console.log("URL where 'Accept' button was clicked is not available. Navigating back...");
                window.history.back(); // Fall back to navigating 
                window.history.back();
            }
            return; // Prevent further script execution
        }
    }

    const xpath = '//*[@id="offerPage"]/table/tbody/tr[4]/td/div/a';
    const clickedByXPath = clickElementByXPath(xpath);
    if (clickedByXPath) {
        console.log("Element clicked using XPath.");
        return; // Exit after clicking the XPath element
    }

    const clickedAccept = clickAcceptElement();
    if (!clickedAccept) {
        console.log("Reloading the page...");
        window.location.reload();
    }
}

// Run the main function
main();
