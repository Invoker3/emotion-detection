# First let import the most necessary libs
import math
import string

import nltk
import re
import pandas as pd
import numpy as np
from nltk import word_tokenize
# Library to import pre-trained model for sentence embeddings
from sentence_transformers import SentenceTransformer
# Calculate similarities between sentences
from sklearn.metrics.pairwise import cosine_similarity
# Visualization library
import seaborn as sns
import matplotlib.pyplot as plt
# package for finding local minimas
from scipy.signal import argrelextrema
from nltk.corpus import stopwords
from nltk.stem import WordNetLemmatizer
from pywsd.utils import lemmatize_sentence
from sklearn.feature_extraction.text import TfidfVectorizer, CountVectorizer

# Loading a model - don't try it at home, it might take some time - it is 420 mb
model = SentenceTransformer('all-mpnet-base-v2')
# Split text into sentences

nltk.download('stopwords')
lemmatizer = WordNetLemmatizer()
stop_words = set(stopwords.words('english'))

text = 'Let me tell you a little story. When I was a little kid I really liked to play football. I wanted to be like ' \
       'Messi and play at Camp Nou. However, I was really bad at it and now I’m not training at Camp Nou. I’m writing ' \
       'a medium article on embeddings. In this article, I want to show how are we going to split a text into parts. ' \
       'We first embed sentences. Then we compute sentence similarities. After that, we detect the split point in the ' \
       'text. After finishing this process we will go play chess with friends.'

# with open('text.txt', 'r') as data:
#     text = data.read().replace('\n', '')

word_tokens = word_tokenize(text)
filtered_sentence = [w for w in word_tokens if not w.lower() in stop_words]

filtered_sentence = []
sentences = text.split('. ')
stop_words = ' '.join(stop_words)
stop_words = stop_words.split()

for w in word_tokens:
    if w not in stop_words:
        filtered_sentence.append(w)

join = ' '.join(filtered_sentence)

final = lemmatize_sentence(join)

final = ' '.join(final)

cv = CountVectorizer()
word_count_vector = cv.fit_transform([final])

