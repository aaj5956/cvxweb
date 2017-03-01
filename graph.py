 # * Copyright (C) 2017  Arista Networks, Inc.
 # * Use of this source code is governed by the Apache License 2.0
 # * that can be found in the COPYING file.

import pyeapi
import json
import parser

# node = pyeapi.connect_to('10.85.128.153')
# res=node.enable('show network physical-topology neighbors')
def graph():
    graph=parser.graph()
    init_node=set([n1 for n1, n2,n3 in graph] + [n2 for n1, n2, n3 in graph])
    data = {
		"nodes": [

		],
		"edges": [

		],
	}

    for i in init_node:
        temp_node={
            "data": {
                        "id": i,
                        "name":i
        }
        }
        data["nodes"].append(temp_node)


    for i in graph:
        temp_edge={
            "data" : {
                "source":i[0],
                "target":i[1],
                "label":i[2]
            }
        }

        data["edges"].append(temp_edge)
    print json.dumps(data,indent=4)
    return data
