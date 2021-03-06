 # * Copyright (C) 2017  Arista Networks, Inc.
 # * Use of this source code is governed by the Apache License 2.0
 # * that can be found in the COPYING file.

from jsonrpclib import Server
import json
import ssl
import os

ssl._create_default_https_context = ssl._create_unverified_context

host = '10.85.128.153'
user = 'admin'
passwd = ''

def vxlan_stat(cvxreq):
	#Check if vxlan service is running on cvx
	resp = cvxreq.runCmds(1,["show service vxlan status"])
	status = resp[0]["status"]
	return status

def mac_vtep(cvxreq):
	#get the macs of cvx clients with vxlan config and also their vtep IPs
	macs = []
	vteps = []
	resp = cvxreq.runCmds(1,["show service vxlan address-table received"])
	for mac in resp[0]["switches"]:
		macs.append(mac)
		vtep = resp[0]["switches"][mac]['vnis'][0]['bumVtepListTable'][0]['vtepIpList'][0]
		vteps.append(vtep)
	return macs, vteps

def hostnames(cvxreq,mac):
	#get hostnames of the switches as per macs obtained from mac_vtep()
	resp = cvxreq.runCmds(1,["show cvx connections brief"])
	n = 0
	for x in resp[0]["connections"]:
		sw_mac = resp[0]["connections"][n]["switchId"]
		if sw_mac == mac:
			return resp[0]["connections"][n]["hostname"]
			break
		n += 1

def main():
	url = "https://{}:{}@{}/command-api".format(user,passwd,host)
	cvxreq = Server(url)
	vxlan_status = vxlan_stat(cvxreq)
	hosts = []
	data = {
		"nodes": [
			{
				"data": {
			  	  "id": "n0",
			  	  "name": "L3 Network"
			  	}
			}
		],
		"edges": [

		]
	}
	if vxlan_status == 'running':
		macs, vteps = mac_vtep(cvxreq)
		for mac in macs:
			mac = mac.replace('-', ':')
			#call hostnames function
			hosts.append(hostnames(cvxreq,mac))
		x = 0
		count = 1
		i = 1
		j = 2
		ad = 1
		while x < len(hosts):
			#print hosts[x], vteps[x]
			new_data = {
				"data": {
			  	  "id": "n"+str(count),
			  	  "name": hosts[x]
			  	}
			}
			new_edge = {
				"data": {
			  	  "source": "n0",
			  	  "target": "n"+str(count)
			  	}
			}
			x += 1
			count += 1
			i += 1
			if (x*2)>=len(hosts):
				ad = (-1)

			j += ad
			data["nodes"].append(new_data)
			data["edges"].append(new_edge)
	else:
		print "vxlan service not running on the cvx"

	filepath = os.path.join('static/cytoscape/', 'data.json')
	with open(filepath, 'w') as outfile:
		json.dump(data, outfile, indent = 4)
