from flask import Flask, jsonify, request
import server

app = Flask(__name__)


# Returns text to the UI
@app.route("/text", methods=['GET'])
def home():
    return server.display_text()


# Accepts text sent from UI
@app.route("/emotion", methods=['POST', 'GET'])
def emotion():
    if request.method == 'POST':
        data = request.get_json()
        text = data['text']
        print('Received text:', text)
        return server.accept_data(text)
    if request.method == 'GET':
        emotions_list, sentence_emotion_dictionary, list_sentence_emotion_dictionary = server.calculate_emotion()
        response = jsonify({"emotions_list": emotions_list, "sentence_emotion_dictionary": sentence_emotion_dictionary,
                            "list_sentence_emotion_dictionary": list_sentence_emotion_dictionary})
        response.status_code = 200
        return response
    return 'Emotion Processed'


# Return count of sentences in the given text
@app.route("/count", methods=['GET'])
def count():
    print("count: ", server.count())
    return jsonify(server.count())


if __name__ == '__main__':
    app.run(debug=True)
