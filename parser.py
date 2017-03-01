 # * Copyright (C) 2017  Arista Networks, Inc.
 # * Use of this source code is governed by the Apache License 2.0
 # * that can be found in the COPYING file.

import json
from collections import OrderedDict

def graph():
    with open('sample.json') as json_data:
        d=json.load(json_data)
    #d=json.load(d)
    graph=[]
    iterator=d['result'][0]['neighbors']


    for k,v in iterator.items():
        edge=[]
        if 'MGMT' in v['fromPort']['hostname']:
            from_hostname=v['fromPort']['hostname']
        else:
            from_hostname=v['fromPort']['hostname'].split('.')[0]
        edge.append(from_hostname)
        from_port=(v['fromPort']['name']).replace('Ethernet','et')
        for i in v['toPort']:
            if 'MGMT' in i['hostname']:
                dest_hostname=i['hostname']
            else:
                dest_hostname=i['hostname'].split('.')[0]
            edge.append(dest_hostname)
            dest_port=i['name'].replace('Ethernet','et')
            #edge.append(from_port)
            #edge.append(dest_port)
            interface=from_port+','+dest_port
            edge.append(interface)

        if len(edge)> 3:
            #print edge
            deletion=edge
            list1=[]
            list2=[]
            list1.append(edge[0])
            list2.append(edge[0])
            list1.append(edge[1])
            list1.append(edge[2])
            list2.append(edge[3])
            list2.append(edge[4])
            graph.append(list1)
            graph.append(list2)
            #print graph
            edge=[]
        graph.append(edge)

    for i in graph:
        if (len(i))==0:
            to_delete=graph.index(i)
            del graph[to_delete]
    duplicate=[]

    #print len(graph)
    duplicate = []
    for i in range(0,len(graph)):
        for j in range(i,len(graph)):
            if ((graph[i][0]==graph[j][1]) and (graph[i][1]==graph[j][0])):
                duplicate.append(i)

    for index in duplicate:
        graph[index]=1

    while 1 in graph:
        graph.remove(1)

    return graph

if __name__=='__main__':
    graph(d)
