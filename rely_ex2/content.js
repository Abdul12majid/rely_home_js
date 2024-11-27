console.log("Select time and accept");

// Function to click the second radio button using the provided XPath
function clickSecondRadioButton() {
    const radioButtonXPath = '//*[@id="frm"]/div[2]/div[2]/ul/li[5]/div[2]/label/input';  // Update with the correct XPath for the second radio button
    //*[@id="frm"]/div[2]/div[2]/ul/li[5]/div[2]/label/input
    const secondRadioButton = document.evaluate(radioButtonXPath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

    if (secondRadioButton) {
        // Log the action
        console.log("Time selected.");
        secondRadioButton.click();  // Click the second radio button
    } else {
        console.log("Time unavailable.");
    }
}

// Function to click the "Accept SWO" element using XPath
function clickAcceptSWO() {
    const acceptSWOXPath = '//*[@id="frm"]/div[2]/div[3]/input';  // XPath for the "Accept SWO" element
    const acceptSWOElement = document.evaluate(acceptSWOXPath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

    if (acceptSWOElement) {
        // Log the action
        console.log("Found 'Accept SWO' Button. Clicking...");
        acceptSWOElement.click();  // Click the "Accept SWO" element
        console.log("Job Accepted!");
    } else {
        console.log("'Accept SWO' element not found.");
    }
}

// Main function to run the extension logic
function main() {
    // Step 1: Click the second radio button
    clickSecondRadioButton();

    // Step 2: Click the "Accept SWO" element
    clickAcceptSWO();

    // Step 3: Prevent page reload by stopping the default action
    window.onbeforeunload = function (e) {
        console.log("Page reload prevented.");
        return "Are you sure you want to leave?";
    };

    // Optionally, disable interactions (if needed)
    document.body.style.pointerEvents = "none"; // Disable interactions, if needed
}

// Run the main function
main();
