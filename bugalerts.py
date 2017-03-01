 # * Copyright (C) 2017  Arista Networks, Inc.
 # * Use of this source code is governed by the Apache License 2.0
 # * that can be found in the COPYING file.

from jsonrpclib import Server
import ssl
import json
host = '10.85.128.153'
user = 'admin'
passwd = ''

url = "https://{}:{}@{}/command-api".format(user,passwd,host)
ssl._create_default_https_context = ssl._create_unverified_context
cvxreq = Server(url)

def sw_mac():
    resp = cvxreq.runCmds(1,["show cvx connections brief"])
    n = 0
    macs = []
    for x in resp[0]["connections"]:
    	sw_mac = resp[0]["connections"][n]["switchId"]
    	macs.append(sw_mac)
    	n += 1
    return macs

def client_host_names():
    resp = cvxreq.runCmds(1,["show cvx connections brief"])[0]['connections']
    hostnames = []
    for rows in resp:
        for key, value in rows.items():
            if key == 'hostname':
                hostnames.append(value)
    return hostnames

def bugalerts(mac):
    op = {}
    resp = cvxreq.runCmds(1,["show service bug-alert report switch mac %s" %mac])
    eos = resp[0]["switches"][mac]["eosVersion"].replace("'","")
    hostname = resp[0]["switches"][mac]["hostname"]
    bugs = resp[0]["switches"][mac]["bugExposureList"]
    buglist = []
    for bug in bugs:
        bug_det = resp[0]["bugs"][str(bug)]["bugSummary"]
        ver_intro = resp[0]["bugs"][str(bug)]["versionsIntroduced"]
        ver_fix = resp[0]["bugs"][str(bug)]["versionsFixed"]
        buglist.append({'bugid':bug,'details':bug_det,'ver_intro':ver_intro,'ver_fix':ver_fix})
    op['mac'] = mac
    op['host'] = hostname
    op['eos'] = eos
    op['bugdata'] = buglist
    # op.append({'mac':mac,'host':hostname,'eos':eos,'bugdata':buglist})
    return op

def get_all_bugs():
    resp = cvxreq.runCmds(1,["show service bug-alert detail bugs"])
    hostnames = client_host_names()
    buglist = []
    for bugid,bugdata in resp[0]['bugs'].iteritems():
        buglist.append(bugid)
    return buglist

def main():
    macs = sw_mac()
    result = []
    for mac in macs:
        mac = mac.replace(':','-')
        op = bugalerts(mac)
        result.append(op)
    return result
