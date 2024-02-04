/*
    Graduate Atelier - Assignment 1
    This JavaScript file uses Node and JSON to send/collect data to Python file that runs Whisper model.
    The code was written with reference to the YouTube video referenced in the document.
*/

 // Node process
const spawner = require('child_process').spawn;

// audio file name to send to Python for analysis
const data_to_pass_in = 'you_are_kind'; 

console.log('Audio file name sent to python script:', data_to_pass_in);

// Referencing Python file and sending data
const python_process = spawner('python3', ['./main.py', data_to_pass_in]); 

// Collecting transcription data from Python file
let transcribed = [];
python_process.stdout.on('data', (data) => {
    console.log('Audio transcription received from python script:', data.toString());
    transcribed = data.toString();
}); 