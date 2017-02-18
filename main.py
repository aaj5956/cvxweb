from flask import Flask, render_template
import json
import sys
import pyeapi
import cvxp
import bugalerts
from datetime import datetime
from dateutil import tz
import graph as g

app = Flask(__name__)
node = pyeapi.connect_to('10.85.128.153')

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

@app.route("/topology")
def topology():
	graph_data=g.graph()
	#print graph_data
	return render_template("topology.html")

@app.route("/vxlan")
def vxlan():
	resp =  node.enable('show service vxlan address-table received')
	op = []
	for mac in resp[0]['result']["switches"]:
	    vtep = resp[0]['result']["switches"][mac]['vnis'][0]['bumVtepListTable'][0]['vtepIpList'][0]
	    mac = mac.replace('-',':')
	    op.append({'mac':mac,'vtep':vtep})
	resp = node.enable('show cvx connections brief')
	mac_host = []
	for res in resp[0]['result']['connections']:
	     mac_host.append({'switchId':res['switchId'],'host':res['hostname']})
	cnt = 0
	for macid in op:
	    mac = macid['mac']
	    for host in mac_host:
	        if host['switchId'] == mac:
	            op[cnt]['host'] = host['host']
	    cnt += 1
	return render_template("vxlan.html",op = op)

@app.route("/bugalerts")
def bugalert():
	op = bugalerts.main()
	# print json.dumps(op,indent = 4)
	bugids = []
	for index,bugs in enumerate(op):
		if bugs['bugdata']:
			for bugindex,bug in enumerate(bugs['bugdata']):
				bugids.append({'res_index':index, 'bugindex':bugindex, 'bugid':bug['bugid']})
	# print json.dumps(op,indent=4)
	return render_template("bugalerts.html", op = op, bugs = bugids)

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
