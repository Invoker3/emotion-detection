from nltk import sent_tokenize
from transformers import pipeline


# Accepts data sent from UI
def accept_data(data_from_server):
    global text
    text = data_from_server
    return text


# Returns data stored currently in text variable to the UI
def display_text():
    return text


# Returns list of emotions of the given text
def calculate_emotion():
    emotion = pipeline('sentiment-analysis', model="arpanghoshal/EmoRoBERTa", tokenizer="arpanghoshal/EmoRoBERTa")

    sentences = sent_tokenize(text)

    emotions_list = {"admiration": 0, "amusement": 0, "anger": 0, "annoyance": 0, "approval": 0, "caring": 0,
                     "confusion": 0, "curiosity": 0, "desire": 0, "disappointment": 0, "disapproval": 0, "disgust": 0,
                     "embarrassment": 0, "excitement": 0, "fear": 0, "gratitude": 0, "grief": 0, "joy": 0, "love": 0,
                     "nervousness": 0, "neutral": 0, "optimism": 0, "pride": 0, "realization": 0, "relief": 0,
                     "remorse": 0, "sadness": 0}

    sentence_emotion_dictionary = {}
    list_sentence_emotion_dictionary = [
        {
            'location': 0, 'sentence': '', 'emotion': ''
        }
    ]

    # This map updates the sentence_emotion_dictionary Dictionary with emotion of each sentence
    def add_to_map(map_dict, key, value):
        if key in map_dict:
            map_dict[key].append(value)
        else:
            map_dict[key] = [value]

    count = 0;
    for sentence in sentences:
        result = emotion(sentence)

        if result[0]['label'] == 'admiration':
            emotions_list["admiration"] += 1
            add_to_map(sentence_emotion_dictionary, 'admiration', sentence)
            if count == 0:
                list_sentence_emotion_dictionary[0] = {'location': count, 'sentence': sentence, 'emotion': 'admiration'}
            else:
                list_sentence_emotion_dictionary.append(
                    {'location': count, 'sentence': sentence, 'emotion': 'admiration'})
            count += 1
        if result[0]['label'] == 'amusement':
            emotions_list["amusement"] += 1
            add_to_map(sentence_emotion_dictionary, 'amusement', sentence)
            if count == 0:
                list_sentence_emotion_dictionary[0] = {'location': count, 'sentence': sentence, 'emotion': 'amusement'}
            else:
                list_sentence_emotion_dictionary.append(
                    {'location': count, 'sentence': sentence, 'emotion': 'amusement'})
            count += 1
        if result[0]['label'] == 'anger':
            emotions_list["anger"] += 1
            add_to_map(sentence_emotion_dictionary, 'anger', sentence)
            if count == 0:
                list_sentence_emotion_dictionary[0] = {'location': count, 'sentence': sentence, 'emotion': 'anger'}
            else:
                list_sentence_emotion_dictionary.append(
                    {'location': count, 'sentence': sentence, 'emotion': 'anger'})
            count += 1
        if result[0]['label'] == 'annoyance':
            emotions_list["annoyance"] += 1
            add_to_map(sentence_emotion_dictionary, 'annoyance', sentence)
            if count == 0:
                list_sentence_emotion_dictionary[0] = {'location': count, 'sentence': sentence, 'emotion': 'annoyance'}
            else:
                list_sentence_emotion_dictionary.append(
                    {'location': count, 'sentence': sentence, 'emotion': 'annoyance'})
            count += 1
        if result[0]['label'] == 'approval':
            emotions_list["approval"] += 1
            add_to_map(sentence_emotion_dictionary, 'approval', sentence)
            if count == 0:
                list_sentence_emotion_dictionary[0] = {'location': count, 'sentence': sentence, 'emotion': 'approval'}
            else:
                list_sentence_emotion_dictionary.append(
                    {'location': count, 'sentence': sentence, 'emotion': 'approval'})
            count += 1
        if result[0]['label'] == 'caring':
            emotions_list["caring"] += 1
            add_to_map(sentence_emotion_dictionary, 'caring', sentence)
            if count == 0:
                list_sentence_emotion_dictionary[0] = {'location': count, 'sentence': sentence, 'emotion': 'caring'}
            else:
                list_sentence_emotion_dictionary.append(
                    {'location': count, 'sentence': sentence, 'emotion': 'caring'})
            count += 1
        if result[0]['label'] == 'confusion':
            emotions_list["confusion"] += 1
            add_to_map(sentence_emotion_dictionary, 'confusion', sentence)
            if count == 0:
                list_sentence_emotion_dictionary[0] = {'location': count, 'sentence': sentence, 'emotion': 'confusion'}
            else:
                list_sentence_emotion_dictionary.append(
                    {'location': count, 'sentence': sentence, 'emotion': 'confusion'})
            count += 1
        if result[0]['label'] == 'curiosity':
            emotions_list["curiosity"] += 1
            add_to_map(sentence_emotion_dictionary, 'curiosity', sentence)
            if count == 0:
                list_sentence_emotion_dictionary[0] = {'location': count, 'sentence': sentence, 'emotion': 'curiosity'}
            else:
                list_sentence_emotion_dictionary.append(
                    {'location': count, 'sentence': sentence, 'emotion': 'curiosity'})
            count += 1
        if result[0]['label'] == 'desire':
            emotions_list["desire"] += 1
            add_to_map(sentence_emotion_dictionary, 'desire', sentence)
            if count == 0:
                list_sentence_emotion_dictionary[0] = {'location': count, 'sentence': sentence, 'emotion': 'desire'}
            else:
                list_sentence_emotion_dictionary.append(
                    {'location': count, 'sentence': sentence, 'emotion': 'desire'})
            count += 1
        if result[0]['label'] == 'disappointment':
            emotions_list["disappointment"] += 1
            add_to_map(sentence_emotion_dictionary, 'disappointment', sentence)
            if count == 0:
                list_sentence_emotion_dictionary[0] = {'location': count, 'sentence': sentence,
                                                       'emotion': 'disappointment'}
            else:
                list_sentence_emotion_dictionary.append(
                    {'location': count, 'sentence': sentence, 'emotion': 'disappointment'})
            count += 1
        if result[0]['label'] == 'disapproval':
            emotions_list["disapproval"] += 1
            add_to_map(sentence_emotion_dictionary, 'disapproval', sentence)
            if count == 0:
                list_sentence_emotion_dictionary[0] = {'location': count, 'sentence': sentence,
                                                       'emotion': 'disapproval'}
            else:
                list_sentence_emotion_dictionary.append(
                    {'location': count, 'sentence': sentence, 'emotion': 'disapproval'})
            count += 1
        if result[0]['label'] == 'disgust':
            emotions_list["disgust"] += 1
            add_to_map(sentence_emotion_dictionary, 'disgust', sentence)
            if count == 0:
                list_sentence_emotion_dictionary[0] = {'location': count, 'sentence': sentence, 'emotion': 'disgust'}
            else:
                list_sentence_emotion_dictionary.append(
                    {'location': count, 'sentence': sentence, 'emotion': 'disgust'})
            count += 1
        if result[0]['label'] == 'embarrassment':
            emotions_list["embarrassment"] += 1
            add_to_map(sentence_emotion_dictionary, 'embarrassment', sentence)
            if count == 0:
                list_sentence_emotion_dictionary[0] = {'location': count, 'sentence': sentence,
                                                       'emotion': 'embarrassment'}
            else:
                list_sentence_emotion_dictionary.append(
                    {'location': count, 'sentence': sentence, 'emotion': 'embarrassment'})
            count += 1
        if result[0]['label'] == 'excitement':
            emotions_list["excitement"] += 1
            add_to_map(sentence_emotion_dictionary, 'excitement', sentence)
            if count == 0:
                list_sentence_emotion_dictionary[0] = {'location': count, 'sentence': sentence, 'emotion': 'excitement'}
            else:
                list_sentence_emotion_dictionary.append(
                    {'location': count, 'sentence': sentence, 'emotion': 'excitement'})
            count += 1
        if result[0]['label'] == 'fear':
            emotions_list["fear"] += 1
            add_to_map(sentence_emotion_dictionary, 'fear', sentence)
            if count == 0:
                list_sentence_emotion_dictionary[0] = {'location': count, 'sentence': sentence, 'emotion': 'fear'}
            else:
                list_sentence_emotion_dictionary.append(
                    {'location': count, 'sentence': sentence, 'emotion': 'fear'})
            count += 1
        if result[0]['label'] == 'gratitude':
            emotions_list["gratitude"] += 1
            add_to_map(sentence_emotion_dictionary, 'gratitude', sentence)
            if count == 0:
                list_sentence_emotion_dictionary[0] = {'location': count, 'sentence': sentence, 'emotion': 'gratitude'}
            else:
                list_sentence_emotion_dictionary.append(
                    {'location': count, 'sentence': sentence, 'emotion': 'gratitude'})
            count += 1
        if result[0]['label'] == 'grief':
            emotions_list["grief"] += 1
            add_to_map(sentence_emotion_dictionary, 'grief', sentence)
            if count == 0:
                list_sentence_emotion_dictionary[0] = {'location': count, 'sentence': sentence, 'emotion': 'grief'}
            else:
                list_sentence_emotion_dictionary.append(
                    {'location': count, 'sentence': sentence, 'emotion': 'grief'})
            count += 1
        if result[0]['label'] == 'joy':
            emotions_list["joy"] += 1
            add_to_map(sentence_emotion_dictionary, 'joy', sentence)
            if count == 0:
                list_sentence_emotion_dictionary[0] = {'location': count, 'sentence': sentence, 'emotion': 'joy'}
            else:
                list_sentence_emotion_dictionary.append(
                    {'location': count, 'sentence': sentence, 'emotion': 'joy'})
            count += 1
        if result[0]['label'] == 'love':
            emotions_list["love"] += 1
            add_to_map(sentence_emotion_dictionary, 'love', sentence)
            if count == 0:
                list_sentence_emotion_dictionary[0] = {'location': count, 'sentence': sentence, 'emotion': 'love'}
            else:
                list_sentence_emotion_dictionary.append(
                    {'location': count, 'sentence': sentence, 'emotion': 'love'})
            count += 1
        if result[0]['label'] == 'nervousness':
            emotions_list["nervousness"] += 1
            add_to_map(sentence_emotion_dictionary, 'nervousness', sentence)
            if count == 0:
                list_sentence_emotion_dictionary[0] = {'location': count, 'sentence': sentence,
                                                       'emotion': 'nervousness'}
            else:
                list_sentence_emotion_dictionary.append(
                    {'location': count, 'sentence': sentence, 'emotion': 'nervousness'})
            count += 1
        if result[0]['label'] == 'neutral':
            emotions_list["neutral"] += 1
            add_to_map(sentence_emotion_dictionary, 'neutral', sentence)
            if count == 0:
                list_sentence_emotion_dictionary[0] = {'location': count, 'sentence': sentence, 'emotion': 'neutral'}
            else:
                list_sentence_emotion_dictionary.append(
                    {'location': count, 'sentence': sentence, 'emotion': 'neutral'})
            count += 1
        if result[0]['label'] == 'optimism':
            emotions_list["optimism"] += 1
            add_to_map(sentence_emotion_dictionary, 'optimism', sentence)
            if count == 0:
                list_sentence_emotion_dictionary[0] = {'location': count, 'sentence': sentence, 'emotion': 'optimism'}
            else:
                list_sentence_emotion_dictionary.append(
                    {'location': count, 'sentence': sentence, 'emotion': 'optimism'})
            count += 1
        if result[0]['label'] == 'pride':
            emotions_list["pride"] += 1
            add_to_map(sentence_emotion_dictionary, 'pride', sentence)
            if count == 0:
                list_sentence_emotion_dictionary[0] = {'location': count, 'sentence': sentence, 'emotion': 'pride'}
            else:
                list_sentence_emotion_dictionary.append(
                    {'location': count, 'sentence': sentence, 'emotion': 'pride'})
            count += 1
        if result[0]['label'] == 'realization':
            emotions_list["realization"] += 1
            add_to_map(sentence_emotion_dictionary, 'realization', sentence)
            if count == 0:
                list_sentence_emotion_dictionary[0] = {'location': count, 'sentence': sentence,
                                                       'emotion': 'realization'}
            else:
                list_sentence_emotion_dictionary.append(
                    {'location': count, 'sentence': sentence, 'emotion': 'realization'})
            count += 1
        if result[0]['label'] == 'relief':
            emotions_list["relief"] += 1
            add_to_map(sentence_emotion_dictionary, 'relief', sentence)
            if count == 0:
                list_sentence_emotion_dictionary[0] = {'location': count, 'sentence': sentence, 'emotion': 'relief'}
            else:
                list_sentence_emotion_dictionary.append(
                    {'location': count, 'sentence': sentence, 'emotion': 'relief'})
            count += 1
        if result[0]['label'] == 'remorse':
            emotions_list["remorse"] += 1
            add_to_map(sentence_emotion_dictionary, 'remorse', sentence)
            if count == 0:
                list_sentence_emotion_dictionary[0] = {'location': count, 'sentence': sentence, 'emotion': 'remorse'}
            else:
                list_sentence_emotion_dictionary.append(
                    {'location': count, 'sentence': sentence, 'emotion': 'remorse'})
            count += 1
        if result[0]['label'] == 'sadness':
            emotions_list["sadness"] += 1
            add_to_map(sentence_emotion_dictionary, 'sadness', sentence)
            if count == 0:
                list_sentence_emotion_dictionary[0] = {'location': count, 'sentence': sentence, 'emotion': 'sadness'}
            else:
                list_sentence_emotion_dictionary.append(
                    {'location': count, 'sentence': sentence, 'emotion': 'sadness'})
            count += 1

    return emotions_list, sentence_emotion_dictionary, list_sentence_emotion_dictionary


def count():
    return len(sent_tokenize(text))
