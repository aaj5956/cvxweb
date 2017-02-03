import networkx as nx
from networkx.readwrite import json_graph
import matplotlib.pyplot as plt
import matplotlib.image as mpimg
import json
import parser
import base64


def draw_graph(graph,labels):
    #img=mpimg.imread('/Users/sowmitha/Documents/Python/CVX/images.png')
    nodes = set([n1 for n1, n2,n3 in graph] + [n2 for n1, n2, n3 in graph])
    print nodes
    G=nx.Graph()

    for node in nodes:
        G.add_node(node)

    for edge in graph:
        i=graph.index(edge)
        e=G.add_edge(edge[0],edge[1],label=labels[i][0][0],label2=labels[i][0][1])
    pos = nx.spring_layout(G)
    nx.draw(G,pos,with_labels=True)
    #nx.draw_random(G,pos)

    labels = nx.get_edge_attributes(G,'label')
    labels2= nx.get_edge_attributes(G,'label2')
    nx.draw_networkx_edge_labels(G,pos,edge_labels=labels,font_size=7,label_pos=0)
    nx.draw_networkx_edge_labels(G,pos,edge_labels=labels,font_size=7,label_pos=1)

    plt.savefig('simple_path.png')
    #nx.write_gexf(G, "graph.gexf")
    data = json_graph.node_link_data(G)
    # for i in data['nodes']:
    #     del i['image']
    s = json.dumps(data)
    return s


def main(graph):
    #graph = parser.graph()
    labels=[]
    for i in graph:
        split=[]
        split.append(i[2].split(','))
        labels.append(split)
    s=draw_graph(graph,labels)
    return s

if __name__=='__main__':
    main()
