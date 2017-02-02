from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def index():
	return render_template("index.html")

@app.route("/connections")
def connection():
	return render_template("connections.html")
if __name__ == "__main__":
	app.run(host='0.0.0.0')
