from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def index():
	return "<h1>This is the homepage</h1>"

if __name__ == "__main__":
	app.run(host='0.0.0.0')
