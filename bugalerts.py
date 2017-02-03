from jsonrpclib import Server
import ssl
host = '10.85.128.153'
user = 'admin'
passwd = ''

def sw_mac(cvxreq):
    resp = cvxreq.runCmds(1,["show cvx connections brief"])
    n = 0
    macs = []
    for x in resp[0]["connections"]:
    	sw_mac = resp[0]["connections"][n]["switchId"]
    	macs.append(sw_mac)
    	n += 1
    return macs

def bugalerts(cvxreq,mac):
    op = []
    resp = cvxreq.runCmds(1,["show service bug-alert report switch mac %s" %mac])
    eos = resp[0]["switches"][mac]["eosVersion"]
    hostname = resp[0]["switches"][mac]["hostname"]
    bugs = resp[0]["switches"][mac]["bugExposureList"]
    # print "Switch %s installed EOS version is %s" %(hostname,eos)
    # print "-------------------------------------------------------"
    # print "Bugs that the switch is exposed to:\n"
    buglist = []
    for bug in bugs:
        bug_det = resp[0]["bugs"][str(bug)]["bugSummary"]
        ver_intro = resp[0]["bugs"][str(bug)]["versionsIntroduced"]
        ver_fix = resp[0]["bugs"][str(bug)]["versionsFixed"]
        # print "Bug: %s \nDetails:%s \nVersion Introduced:%s \nVersion Fixed: %s\n" %(bug, bug_det,ver_intro,ver_fix)
        buglist.append({'bugid':bug,'details':bug_det,'ver_intro':ver_intro,'ver_fix':ver_fix})
    op.append({'host':hostname,'eos':eos,'bugdata':buglist})
    # print op
    return op
def main():
    url = "https://{}:{}@{}/command-api".format(user,passwd,host)
    ssl._create_default_https_context = ssl._create_unverified_context
    cvxreq = Server(url)
    macs = sw_mac(cvxreq)
    result = []
    for mac in macs:
        mac = mac.replace(':','-')
        op = bugalerts(cvxreq,mac)
        result.append({'mac':mac,'op':op})
    return result
