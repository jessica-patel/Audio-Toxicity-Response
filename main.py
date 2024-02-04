# interprocess communication between python script and node.js process
import sys # accessing command line arguments through python interpreter
import whisper

model = whisper.load_model("base")

input = sys.argv[1] # list that contains command line arguments passed to the script, this takes the first elements
result = model.transcribe(input + ".mp3")
# print('x ==>', result["text"])
data_to_pass_back = result["text"]
output = data_to_pass_back
print(output)
sys.stdout.flush() # flush flushes the internal buffer to print output visibly in standard output (removes delay)