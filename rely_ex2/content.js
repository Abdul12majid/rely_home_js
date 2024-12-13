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
        setTimeout(() => {
            console.log("a second wait completed.");
        }, 500); // Wait for 5 seconds
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
        setTimeout(() => {
            console.log("a second wait completed.");
        }, 500); // Wait for 5 seconds
    } else {
        console.log("'Accept SWO' element not found.");
    }
}

function clickElementByXPath(xpath) {
    const result = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
    const element = result.singleNodeValue;

    if (element) {
        console.log(`Accept work order found by XPath: ${xpath}`);
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

// Main function to run the extension logic
function main() {
    // Step 1: Click the second radio button
    clickSecondRadioButton();

    // Step 2: Click the "Accept SWO" element
    clickAcceptSWO();

    const xpath = '//*[@id="offerPage"]/table/tbody/tr[4]/td/div/a';
    const clickedByXPath = clickElementByXPath(xpath);
    if (clickedByXPath) {
        console.log("Element clicked using XPath.");
        return; // Exit after clicking the XPath element
    }
    
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
