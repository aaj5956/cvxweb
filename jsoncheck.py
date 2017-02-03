import json

data = {
	"nodes": [
		{
		  "id": "n0",
		  "label": "L3 Network",
		  "x": 0,
		  "y": 0,
		  "size": 3
		},
		{
		  "id": "n1",
		  "label": "Another node",
		  "x": 3,
		  "y": 1,
		  "size": 1
		},
		{
		  "id": "n2",
		  "label": "And a last one",
		  "x": 1,
		  "y": 3,
		  "size": 1
		}
	],
	"edges": [
		{
		  "id": "e0",
		  "source": "n0",
		  "target": "n1"
		},
		{
		  "id": "e1",
		  "source": "n1",
		  "target": "n2"
		},
		{
		  "id": "e2",
		  "source": "n2",
		  "target": "n0"
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
