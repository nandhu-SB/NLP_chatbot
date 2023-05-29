import nltk     #importing nltk library
import numpy as np

#following was a mandatory step to download nltk package punkt? while running the first time
# nltk.download('punkt')  

#we are using the PorterStemmer method from nltk>stem>porter package
from nltk.stem.porter import PorterStemmer  

#creating an object 'stemmer' for the PorterStemmer method
stemmer=PorterStemmer()                     



#function to tokenise the sentence using nltk word_tokenize method.normal sentence is passed and returns tokenised sentence
def tokenize(sentence):
    return nltk.word_tokenize(sentence)

#funtion to stem the word using stem method.normal words are passed and returns stemmed words.here stemmer is the object of PorterStemmer method
def stem(word):
    return stemmer.stem(word.lower())

#function to convert into bag of words array.should pass the tokenised sentence and an array containing all words.
def bag_of_words(tokenized_sentence,all_words):
    tokenized_sentence=[stem(w) for w in tokenized_sentence]
    bag=np.zeros(len(all_words),dtype=np.float32)
    for idx,w in enumerate(all_words):
        if w in tokenized_sentence:
            bag[idx]=1.0
    return bag



# sent=["hello","how","are","you"]
# word=["hi","hello","I","you","bye","thank","cool"]
# bag=bag_of_words(sent,word)
# print(bag)


#below snippet was used to test if tokenisation function was working
# a="When do I get my delivery?"
# print(a)
# a=tokenize(a)
# print(a)

#below snippet was used to check if stemming function was working
# words=["organize","organizes","organizing"]
# stemmed=[stem(w) for w in words]
# print(stemmed)

