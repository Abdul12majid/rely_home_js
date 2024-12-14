console.log("Second extension");

// Flag to track if the element has already been clicked or the process should stop
let elementClicked = false;
let stopReloading = false;

// Function to click the second radio button using the provided XPath
function clickSecondRadioButton() {
    const radioButtonXPath = '//*[@id="frm"]/div[2]/div[2]/ul/li[5]/div[2]/label/input'; // Update with the correct XPath
    const secondRadioButton = document.evaluate(radioButtonXPath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

    if (secondRadioButton) {
        console.log("Time selected.");
<<<<<<< HEAD
        secondRadioButton.click();
        return true; // Indicate the action was performed
=======
        secondRadioButton.click();  // Click the second radio button
        setTimeout(() => {
            console.log("a second wait completed.");
        }, 500); // Wait for 5 seconds
>>>>>>> 59dcfdd90d704caf100df2a802daef4cb7f4dbb1
    } else {
        console.log("Time unavailable.");
        return false; // Action could not be performed
    }
}

// Function to click the "Accept SWO" element using XPath
function clickAcceptSWO() {
    const acceptSWOXPath = '//*[@id="frm"]/div[2]/div[3]/input'; // XPath for the "Accept SWO" element
    const acceptSWOElement = document.evaluate(acceptSWOXPath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

    if (acceptSWOElement) {
        console.log("Found 'Accept SWO' Button. Clicking...");
        acceptSWOElement.click();
        console.log("Job Accepted!");
<<<<<<< HEAD
        return true; // Indicate the action was performed
=======
        setTimeout(() => {
            console.log("a second wait completed.");
        }, 500); // Wait for 5 seconds
>>>>>>> 59dcfdd90d704caf100df2a802daef4cb7f4dbb1
    } else {
        console.log("'Accept SWO' element not found.");
        return false; // Action could not be performed
    }
}

<<<<<<< HEAD
// Function to click an element specified by an XPath
function clickElementByXPath(xpath) {
    if (elementClicked) {
        console.log("Element already clicked. Skipping...");
        return false; // Prevent duplicate actions
    }

=======
function clickElementByXPath(xpath) {
>>>>>>> 59dcfdd90d704caf100df2a802daef4cb7f4dbb1
    const result = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
    const element = result.singleNodeValue;

    if (element) {
        console.log(`Accept work order found by XPath: ${xpath}`);
<<<<<<< HEAD
        element.click();

        // Set the flag to prevent further clicks
        elementClicked = true;

    } else {
        console.log(`Accept order not found by XPath: ${xpath}`);
        return false; // Action could not be performed
    }
}

// Function to check for specific text on the page
function checkForText(text) {
    if (document.body.innerText.includes(text)) {
        console.log(`Found text: "${text}". Navigating back in 3, 2, 1...`);
        stopReloading = true; // Set the flag to stop reloading
        return true;
    }
    return false;
}

=======
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

>>>>>>> 59dcfdd90d704caf100df2a802daef4cb7f4dbb1
// Main function to run the extension logic
function main() {

    // Check for "Sorry you are too late." text on the page
    if (checkForText("Sorry you are too late.")) {
        clearInterval(reloadInterval); // Stop reloading
        return;
    }

    // Step 1: Click the second radio button
    const radioClicked = clickSecondRadioButton();

    // Step 2: Click the "Accept SWO" element
    const swoClicked = clickAcceptSWO();

<<<<<<< HEAD
    // Step 3: Click an element using a specific XPath
=======
>>>>>>> 59dcfdd90d704caf100df2a802daef4cb7f4dbb1
    const xpath = '//*[@id="offerPage"]/table/tbody/tr[4]/td/div/a';
    const clickedByXPath = clickElementByXPath(xpath);
    if (clickedByXPath) {
        console.log("Element clicked using XPath.");
        return; // Exit after clicking the XPath element
    }
<<<<<<< HEAD
=======
    
    // Step 3: Prevent page reload by stopping the default action
    window.onbeforeunload = function (e) {
        console.log("Page reload prevented.");
        return "Are you sure you want to leave?";
    };

    // Optionally, disable interactions (if needed)
    document.body.style.pointerEvents = "none"; // Disable interactions, if needed
>>>>>>> 59dcfdd90d704caf100df2a802daef4cb7f4dbb1
}

// Set an interval to run the main function every 0.9 seconds
const reloadInterval = setInterval(() => {
    console.log("Running main function...");
    main();

    if (!elementClicked && !stopReloading) {
        console.log("Reloading page in 2 seconds...");
        setTimeout(() => {
            window.location.reload();
        }, 900);
    } else {
        // Clear the interval if conditions are met
        console.log("Stopping reload.");
        clearInterval(reloadInterval);
    }
}, 900);
