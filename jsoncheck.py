import json
'''
{
nodes: [
  {
	data: {
	  "id": "n0",
	  "name": "L3 Network"
	}
  },
  {
	data: {
	  "id": "n1",
	  "name": "gb421"
	}
  },
  {
	data: {
	  "id": "n2",
	  "name": "gb420"
	}
  }
],
edges: [
  {
	data: {
	  "source": "n0",
	  "target": "n1"
	}
  },
  {
	data: {
	  "source": "n0",
	  "target": "n2"
	}
  }
]
}
'''
data = {
	"nodes": [
		{
		  	data: {
		  	  "id": "n0",
		  	  "name": "L3 Network"
		  	}
	    }
	],
	"edges": [
		{
		  	data: {
		  	  "source": "n0",
		  	  "target": "n1"
		  	}
	    }
	]
}
new_data = {
  "id": "n3",
  "label": "And a last one",
  "x": 1,
  "y": 3,
  "size": 1
}

data["nodes"].append(new_data)
#data["nodes"].update(new_data)
print json.dumps(data, indent = 4)
