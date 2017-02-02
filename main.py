from flask import Flask, render_template
import pyeapi
from flask_moment import Moment
from datetime import datetime
from dateutil import tz

app = Flask(__name__)
node = pyeapi.connect_to('10.85.128.153')
moment = Moment(app)

@app.route("/")
def index():
	op = node.enable('show hostname')
	hostname = op[0]['result']['hostname']
	fqdn = op[0]['result']['fqdn']
	return render_template("index.html", hostname = hostname, fqdn = fqdn)

@app.route("/connections")
def connection():
	op =  node.enable('show cvx connections')
	conn = op[0]['result']['connections']
	return render_template("connections.html",conn = conn)

@app.template_filter('format_date')
def format_date(text):
	"""Convert a string to all datetime object."""
	to_zone = tz.tzutc()
	from_zone = tz.tzlocal()
	date = datetime.fromtimestamp(text).strftime('%d-%m-%Y %H:%M:%S')
	local = datetime.strptime(date, '%d-%m-%Y %H:%M:%S')
	local = local.replace(tzinfo=from_zone)
	utc = local.astimezone(to_zone)
	utc,zone = str(utc).split('+')
	return utc

if __name__ == "__main__":
	app.run(host='0.0.0.0')
