from flask import Flask,render_template,request,jsonify
from chat import get_response
from chatanush import get_response_anush
from chattanseeha import get_response_tanseeha

app=Flask(__name__)

@app.route("/")
def index_get():
    return render_template("index.html")


@app.post("/predict")
def predict():

    text=request.get_json().get("message")

    response=get_response(text)

    message={"answer":response}
    return jsonify(message)

@app.post("/predict2")
def predict2():
    
    text=request.get_json().get("message2")

    response=get_response_anush(text)

    message={"answer":response}
    return jsonify(message)

@app.post("/predict3")
def predict3():
    
    text=request.get_json().get("message3")

    response=get_response_tanseeha(text)

    message={"answer":response}
    return jsonify(message)
    
if __name__=="__main__":
    app.run(debug=True)