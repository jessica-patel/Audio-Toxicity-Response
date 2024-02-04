/*
    Graduate Atelier - Assignment 1
    This JavaScript file sets up the Toxicity Model and initiates a response on the webpage.
    The code was written with reference to the TensorFlow Toxicity model demo code on GitHub.
*/

// The minimum prediction confidence, as provided by the Toxicity model
const threshold = 0.2;

// Load the model. Users optionally pass in a threshold and an array of labels to include
toxicity.load(threshold).then(model => {

    // Chosen sentence to pass into Toxicity model
    const sentences = ['you are kindlet'];

    // Referencing text overlay
    let textOverlay = document.getElementsByClassName('text-overlay');

    // Referencing Toxicity Categories Indicator below game wireframe to insert the labels into later
    let labels = document.getElementById('labels');

    // Toxicity prediction model
    model.classify(sentences).then(predictions => {
        
        // Initializing the text overlay as "off"
        let shouldShowOverlay = false;

        // Initializing the words array to add in the Toxicity Categories Indicator
        let words = [];

        // Checking prediction for each category in Toxicity model
        predictions.forEach(prediction => {

            // If a category is found to have a probability > 0.2, show text overlay and push words to Indicator
            if (prediction.results[0].match) {
                shouldShowOverlay = true;
                console.log(prediction.label);
                words.push(prediction.label);
                labels.innerHTML = words.join(', ');
            } else if (prediction.results[0].match = false) {
                shouldShowOverlay = false;
            }
        });

        // Use setTimeout to delay the execution of the display styles code by 5 seconds
        setTimeout(() => {
            // Conditional for showing overlays based on the final decision
            if (shouldShowOverlay) {
                for (let i = 0; i < textOverlay.length; i++) {
                    textOverlay[i].style.opacity = '1.0'; // Setting the desired CSS opacity value
                }
            } else {
                for (let i = 0; i < textOverlay.length; i++) {
                    textOverlay[i].style.opacity = '0';
                }
            }
        }, 0); // 5000 milliseconds = 5 seconds
    });
});