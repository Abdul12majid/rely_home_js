console.log("Second extension");

// Counter to track the number of reloads
let reloadCount = 0;

// Flag to track if the element has already been clicked or the process should stop
let elementClicked = false;
let stopReloading = false;

// The target URL to redirect to after 3 reloads
const targetURL = "https://relyhome.com/jobs/accept/available-swo.php?vid=BTpUbca43B2X0MQfhhT7REScrJmkRvuPbODS7MHr-fM&exp=CrtUoMQKvhwYpevW8Q9TNTIunHiJHiZBPSk936PlURc&src=relyemail"; // Replace with your desired URL

// Function to click the second radio button using the provided XPath
function clickSecondRadioButton() {
    const radioButtonXPath = '//*[@id="frm"]/div[2]/div[2]/ul/li[5]/div[2]/label/input'; // Update with the correct XPath
    const secondRadioButton = document.evaluate(radioButtonXPath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

    if (secondRadioButton) {
        console.log("Time selected.");
        secondRadioButton.click();
        return true; // Indicate the action was performed
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
        return true; // Indicate the action was performed
    } else {
        console.log("'Accept SWO' element not found.");
        return false; // Action could not be performed
    }
}

// Function to click an element specified by an XPath
function clickElementByXPath(xpath) {
    if (elementClicked) {
        console.log("Element already clicked. Skipping...");
        return false; // Prevent duplicate actions
    }

    const result = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
    const element = result.singleNodeValue;

    if (element) {
        console.log(`Accept work order found by XPath: ${xpath}`);
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

// Main function to run the extension logic
function main() {
    // Check if reload count exceeds the limit
    if (reloadCount >= 3) {
        console.log(`Reload count reached ${reloadCount}. Redirecting to ${targetURL}...`);
        window.location.href = targetURL;
        clearInterval(reloadInterval); // Stop further execution
        return;
    }

    // Check for "Sorry you are too late." text on the page
    if (checkForText("Sorry you are too late.")) {
        clearInterval(reloadInterval); // Stop reloading
        return;
    }

    // Step 1: Click the second radio button
    const radioClicked = clickSecondRadioButton();

    // Step 2: Click the "Accept SWO" element
    const swoClicked = clickAcceptSWO();

    // Step 3: Click an element using a specific XPath
    const xpath = '//*[@id="offerPage"]/table/tbody/tr[4]/td/div/a';
    const clickedByXPath = clickElementByXPath(xpath);
    if (clickedByXPath) {
        console.log("Element clicked using XPath.");
        return; // Exit after clicking the XPath element
    }
}

// Set an interval to run the main function every 2 seconds
const reloadInterval = setInterval(() => {
    console.log("Running main function...");
    reloadCount++; // Increment the reload count
    main();

    if (!elementClicked && !stopReloading) {
        console.log(`Reloading page. Reload count: ${reloadCount}`);
        setTimeout(() => {
            window.location.reload();
        }, 2000);
    } else {
        // Clear the interval if conditions are met
        console.log("Stopping reload.");
        clearInterval(reloadInterval);
    }
}, 2000);
