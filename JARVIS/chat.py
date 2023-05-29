import random
import json

import torch
import time

from model import NeuralNet
from ntlk_utils import bag_of_words, tokenize

device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')



with open('intents.json', 'r') as f:
    intents = json.load(f)



# with open('anush.json', 'r') as f:
#     intents = json.load(f)



FILE = "jarvis.pth"
data = torch.load(FILE)

input_size = data["input_size"]
hidden_size = data["hidden_size"]
output_size = data["output_size"]
all_words = data['all_words']
tags = data['tags']
model_state = data["model_state"]

model = NeuralNet(input_size, hidden_size, output_size).to(device)
model.load_state_dict(model_state)
model.eval()



bot_name = "JARVIS"
sorry=["Whaat?,I didn't get it","Sorry,Come again?","Could you say that again?"]


def get_response(msg):
    sentence = tokenize(msg)
    X = bag_of_words(sentence, all_words)
    X = X.reshape(1, X.shape[0])
    X = torch.from_numpy(X).to(device)

    output = model(X)
    _, predicted = torch.max(output, dim=1)

    tag = tags[predicted.item()]

    probs = torch.softmax(output, dim=1)
    prob = probs[0][predicted.item()]
    if prob.item() > 0.75:
        for intent in intents['intents']:
            if tag == intent["tag"]:
                return random.choice(intent['responses'])
    
    return random.choice(sorry)


if __name__ == "__main__":
    print("")
    print("")
    print("JARVIS v2")
    print("----------")
    while True:
        print("")
        sentence = (input("You : ")).lower()
        if sentence == "quit":
            print("JARVIS:Ok bie")
            break

        resp =get_response(sentence)
        print("JARVIS : ",end="")
        for char in resp:
            print(char, end="", flush=True)
            time.sleep(0.1)