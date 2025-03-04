// Froyo

function countFroyoOrders() {
    // STEP 1: Prompt the user for froyo flavors
    const userInput = prompt("Enter your favorite froyo flavors separated by commas:");
    console.log("User inputted:", userInput);

    // Step 2: Split the input string into an array of flavor strings
    const inputtedFlavors = userInput.split(',');

    // Step 3: Create an empty object to keep track of how many of each flavor we have
    const orderedFlavors = {};

    // Step 4: Loop through each flavor in the inputtedFlavors array
    for (let flavor of inputtedFlavors) {

        // If the flavor is already in the flavorOrders object, increase its count by 1
        // If it's not in the object yet, we set its count to 1

        if (orderedFlavors[flavor]) {
            orderedFlavors[flavor] += 1; // Increment the count
        } else {
            orderedFlavors[flavor] = 1; // Initialize the count to 1
        }
    };

    // Output the result to the console
    console.table(orderedFlavors);
}

countFroyoOrders();