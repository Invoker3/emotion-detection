from flask import render_template, Flask, jsonify
import pandas as pd
import numpy as np
import server

# app = config.connex_app
# app.add_api(config.basedir / "swagger.yml")
app = Flask(__name__)

@app.route("/data")
def home():
    return {
        "sentences": server.process_func()
    }

@app.route("/emotion")
def emotion():
    response = jsonify(server.get_emotions())
    response.status_code = 200 # or 400 or whatever
    return response


# if __name__ == "__main__":
#     app.run(host="0.0.0.0", port=5000, debug=True)
if __name__ == '__main__':
    app.run(debug=True)