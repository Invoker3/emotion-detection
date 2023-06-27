import pandas as pd
import numpy as np
from nltk import word_tokenize
from nltk import sent_tokenize
from nltk.corpus import stopwords
import nltk
from nltk.text import Text
from nltk.sentiment import SentimentIntensityAnalyzer
from nltk.tokenize import sent_tokenize
from nltk.corpus import gutenberg
from vaderSentiment.vaderSentiment import SentimentIntensityAnalyzer
import text2emotion as emotion
import processEmotion
# from numba import jit, cuda

# word = nltk.corpus.gutenberg.words()

# words = [word for word in nltk.corpus.gutenberg.words() if word.isalpha()]
# # print(len(words))

# stopwords = nltk.corpus.stopwords.words("english")
# words_without_stopword = [w for w in words if w.lower() not in stopwords]
# # print(len(words_without_stopword))

# freq_dist = nltk.FreqDist(words_without_stopword)
# # print(freq_dist.most_common(5))

# lower_fd = nltk.FreqDist([w.lower() for w in freq_dist])
# # print(lower_fd.most_common(5))

# concordance_list = nltk.Text(nltk.corpus.gutenberg.words()).concordance_list("shall", lines = 5)
# # for entry in concordance_list:
# #      print(entry.line)


# collocation_finder = nltk.collocations.TrigramCollocationFinder.from_words(words)   #BigramCollocationFinder, QuadgramCollocationFinder
# # print(collocation_finder.ngram_fd.most_common(2))

# @jit(target_backend='cuda')
def process_func():
    
    words = word_tokenize(gutenberg.raw('austen-emma.txt'))

    punctuation = '''!"#$%&'()*+, -./:;<=>?@[\]^_`{|}~--''``'''

    new_line = '''\n'''

    stopwords = nltk.corpus.stopwords.words("english")

    # words_without_stopword = [w for w in words if w.lower() not in stopwords]
    # words_without_punctuation = [w for w in words_without_stopword if w not in punctuation]
    # words_without_new_line = [w for w in words_without_punctuation if w not in new_line]

    # print(len(words_without_stopword))

    # fd = nltk.FreqDist(words_without_stopword)

    # fd.most_common(5)

    textfile = open('text.txt', 'r')
    text = textfile.read()

    sentimentAnalyser = SentimentIntensityAnalyzer()
    sentences = sent_tokenize(text)

    words_in_sent = []
    sentiment_list = []
    final_list = []
    # list(words_in_sent)  
    for s in sentences:  
        words_in_sent.append(word_tokenize(s))
        sentiment_list.append(sentimentAnalyser.polarity_scores(s))
    
    for list_of_words in words_in_sent:
        [final_list.append(w) for w in list_of_words if w not in stopwords and final_list.append(w)]

        # [final_list.append(w) for w in list_of_words if w not in punctuation] 
        # for i in range(len(list_of_words)):
        #     if list_of_words[i] not in stopwords or list_of_words[i] not in punctuation:
        #         final_list = list_of_words           
           
    print("sentences: ", sentences)
    print("sentiment_list: ", sentiment_list)
    print("final_list: ", final_list)

    # sentences_without_stopwords = [s for s in sentences if s.lower() not in stopwords]
    # sentences_without_punctuation = [s for s in sentences_without_stopwords if s not in punctuation]
    # sentences_without_new_line = [s for s in sentences_without_punctuation if s not in new_line]
    return sentences

def get_emotions():
    textfile = open('text.txt', 'r')
    text = textfile.read()

    sentences = sent_tokenize(text)
    
    emotion_values = []

    for s in sentences:
        emotion_values.append(processEmotion.get_emotion(s))
        
    print("emotion_map: ", emotion_values)

    return emotion_values

