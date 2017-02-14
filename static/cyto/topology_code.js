
$(function(){ // on dom ready

var cy = cytoscape({
  container: $('#cy')[0],

  boxSelectionEnabled: false,
  autounselectify: true,
  userZoomingEnabled: true,


  style: cytoscape.stylesheet()
      .selector('node')
        .css({
          'content': 'data(name)',
          'text-valign': 'center',
          'color': 'white',
          'text-outline-width': 3,
          'background-color': '#4e78a0',
          'text-outline-color': '#4e78a0'
        })
      .selector('edge')
        .css({
          'curve-style': 'unbundled-bezier',
          'target-arrow-shape': 'triangle',
          'target-arrow-color': '#B5CCEE',
          'line-color': '#B5CCEE',
          'width': 3
        })
      .selector(':selected')
        .css({
          'background-color': '#06406',
          'line-color': '#06406',
          'target-arrow-color': 'black',
          'source-arrow-color': 'black'
        })
      .selector('.faded')
        .css({
          'opacity': 0.25,
          'text-opacity': 0
        }),
  elements: {
      "nodes": [
          {
              "data": {
                  "id": "gb421",
                  "name": "gb421"
              }
          },
          {
              "data": {
                  "id": "dm1-rack238-tor",
                  "name": "dm1-rack238-tor"
              }
          },
          {
              "data": {
                  "id": "sr285-alta-lab",
                  "name": "sr285-alta-lab"
              }
          },
          {
              "data": {
                  "id": "mt709",
                  "name": "mt709"
              }
          },
          {
              "data": {
                  "id": "mt708",
                  "name": "mt708"
              }
          },
          {
              "data": {
                  "id": "mt703",
                  "name": "mt703"
              }
          },
          {
              "data": {
                  "id": "mt701",
                  "name": "mt701"
              }
          },
          {
              "data": {
                  "id": "mt707",
                  "name": "mt707"
              }
          },
          {
              "data": {
                  "id": "mt706",
                  "name": "mt706"
              }
          },
          {
              "data": {
                  "id": "mt704",
                  "name": "mt704"
              }
          },
          {
              "data": {
                  "id": "tacsrv20",
                  "name": "tacsrv20"
              }
          },
          {
              "data": {
                  "id": "fm150",
                  "name": "fm150"
              }
          },
          {
              "data": {
                  "id": "fm151",
                  "name": "fm151"
              }
          },
          {
              "data": {
                  "id": "cz153",
                  "name": "cz153"
              }
          },
          {
              "data": {
                  "id": "cz150",
                  "name": "cz150"
              }
          },
          {
              "data": {
                  "id": "cz151",
                  "name": "cz151"
              }
          },
          {
              "data": {
                  "id": "co648",
                  "name": "co648"
              }
          },
          {
              "data": {
                  "id": "co645",
                  "name": "co645"
              }
          },
          {
              "data": {
                  "id": "co647",
                  "name": "co647"
              }
          },
          {
              "data": {
                  "id": "co646",
                  "name": "co646"
              }
          },
          {
              "data": {
                  "id": "co641",
                  "name": "co641"
              }
          },
          {
              "data": {
                  "id": "localhost",
                  "name": "localhost"
              }
          },
          {
              "data": {
                  "id": "ro502",
                  "name": "ro502"
              }
          },
          {
              "data": {
                  "id": "ro501",
                  "name": "ro501"
              }
          },
          {
              "data": {
                  "id": "ro504",
                  "name": "ro504"
              }
          },
          {
              "data": {
                  "id": "BG1-34-MGMT-7048T-A",
                  "name": "BG1-34-MGMT-7048T-A"
              }
          },
          {
              "data": {
                  "id": "gb420",
                  "name": "gb420"
              }
          },
          {
              "data": {
                  "id": "co585",
                  "name": "co585"
              }
          },
          {
              "data": {
                  "id": "mn435",
                  "name": "mn435"
              }
          },
          {
              "data": {
                  "id": "mn434",
                  "name": "mn434"
              }
          },
          {
              "data": {
                  "id": "mn433",
                  "name": "mn433"
              }
          },
          {
              "data": {
                  "id": "mn431",
                  "name": "mn431"
              }
          },
          {
              "data": {
                  "id": "do451",
                  "name": "do451"
              }
          },
          {
              "data": {
                  "id": "do450",
                  "name": "do450"
              }
          },
          {
              "data": {
                  "id": "ro503-alta-lab",
                  "name": "ro503-alta-lab"
              }
          },
          {
              "data": {
                  "id": "co587",
                  "name": "co587"
              }
          }
      ],
      "edges": [
          {
              "data": {
                  "source": "gb421",
                  "target": "do451",
                  "label": "From: et66 To: et6"
              }
          },
          {
              "data": {
                  "source": "co587",
                  "target": "ro501",
                  "label": "From: et2 To: et5"
              }
          },
          {
              "data": {
                  "source": "mn434",
                  "target": "mn433",
                  "label": "From: et3 To: et3"
              }
          },
          {
              "data": {
                  "source": "mt707",
                  "target": "cz153",
                  "label": "From: et19 To: et15"
              }
          },
          {
              "data": {
                  "source": "gb421",
                  "target": "do450",
                  "label": "From: et65 To: et6"
              }
          },
          {
              "data": {
                  "source": "mn435",
                  "target": "mt708",
                  "label": "From: et50 To: et24"
              }
          },
          {
              "data": {
                  "source": "mn435",
                  "target": "cz153",
                  "label": "From: et51 To: et21"
              }
          },
          {
              "data": {
                  "source": "mn435",
                  "target": "mt708",
                  "label": "From: et49 To: et23"
              }
          },
          {
              "data": {
                  "source": "co641",
                  "target": "co641",
                  "label": "From: et20 To: et44"
              }
          },
          {
              "data": {
                  "source": "co641",
                  "target": "do450",
                  "label": "From: et20 To: et23"
              }
          },
          {
              "data": {
                  "source": "co645",
                  "target": "co641",
                  "label": "From: et6 To: et11"
              }
          },
          {
              "data": {
                  "source": "co645",
                  "target": "co646",
                  "label": "From: et1 To: et1"
              }
          },
          {
              "data": {
                  "source": "do451",
                  "target": "mn434",
                  "label": "From: et1 To: et49"
              }
          },
          {
              "data": {
                  "source": "co645",
                  "target": "co646",
                  "label": "From: et2 To: et2"
              }
          },
          {
              "data": {
                  "source": "ro502",
                  "target": "ro501",
                  "label": "From: et9 To: et9"
              }
          },
          {
              "data": {
                  "source": "gb420",
                  "target": "fm151",
                  "label": "From: et2 To: et49/1"
              }
          },
          {
              "data": {
                  "source": "do450",
                  "target": "cz150",
                  "label": "From: et17 To: et17"
              }
          },
          {
              "data": {
                  "source": "co585",
                  "target": "ro503-alta-lab",
                  "label": "From: et1 To: et9"
              }
          },
          {
              "data": {
                  "source": "co585",
                  "target": "ro502",
                  "label": "From: et4 To: et6"
              }
          },
          {
              "data": {
                  "source": "mn433",
                  "target": "do450",
                  "label": "From: et50 To: et2"
              }
          },
          {
              "data": {
                  "source": "co585",
                  "target": "sr285-alta-lab",
                  "label": "From: et9 To: et3"
              }
          },
          {
              "data": {
                  "source": "ro501",
                  "target": "dm1-rack238-tor",
                  "label": "From: Management1 To: et46"
              }
          },
          {
              "data": {
                  "source": "do450",
                  "target": "cz151",
                  "label": "From: et19 To: et19"
              }
          },
          {
              "data": {
                  "source": "co648",
                  "target": "BG1-34-MGMT-7048T-A",
                  "label": "From: Management1 To: et30"
              }
          },
          {
              "data": {
                  "source": "cz153",
                  "target": "BG1-34-MGMT-7048T-A",
                  "label": "From: Management1 To: et26"
              }
          },
          {
              "data": {
                  "source": "co641",
                  "target": "BG1-34-MGMT-7048T-A",
                  "label": "From: Management1 To: et28"
              }
          },
          {
              "data": {
                  "source": "ro504",
                  "target": "co585",
                  "label": "From: et6 To: et5"
              }
          },
          {
              "data": {
                  "source": "fm150",
                  "target": "fm151",
                  "label": "From: et6 To: et6"
              }
          },
          {
              "data": {
                  "source": "fm150",
                  "target": "fm151",
                  "label": "From: et5 To: et5"
              }
          },
          {
              "data": {
                  "source": "mn434",
                  "target": "BG1-34-MGMT-7048T-A",
                  "label": "From: Management1 To: et39"
              }
          },
          {
              "data": {
                  "source": "fm150",
                  "target": "co648",
                  "label": "From: et2 To: et1"
              }
          },
          {
              "data": {
                  "source": "fm150",
                  "target": "co647",
                  "label": "From: et1 To: et1"
              }
          },
          {
              "data": {
                  "source": "gb421",
                  "target": "BG1-34-MGMT-7048T-A",
                  "label": "From: Management1 To: et42"
              }
          },
          {
              "data": {
                  "source": "BG1-34-MGMT-7048T-A",
                  "target": "gb420",
                  "label": "From: et40 To: Management1"
              }
          },
          {
              "data": {
                  "source": "BG1-34-MGMT-7048T-A",
                  "target": "gb421",
                  "label": "From: et42 To: Management1"
              }
          },
          {
              "data": {
                  "source": "BG1-34-MGMT-7048T-A",
                  "target": "fm150",
                  "label": "From: et43 To: Management1"
              }
          },
          {
              "data": {
                  "source": "BG1-34-MGMT-7048T-A",
                  "target": "fm151",
                  "label": "From: et44 To: Management1"
              }
          },
          {
              "data": {
                  "source": "BG1-34-MGMT-7048T-A",
                  "target": "cz151",
                  "label": "From: et45 To: Management1"
              }
          },
          {
              "data": {
                  "source": "mn433",
                  "target": "mn434",
                  "label": "From: et1 To: et1"
              }
          },
          {
              "data": {
                  "source": "mn433",
                  "target": "mn434",
                  "label": "From: et3 To: et3"
              }
          },
          {
              "data": {
                  "source": "mn433",
                  "target": "mn434",
                  "label": "From: et2 To: et2"
              }
          },
          {
              "data": {
                  "source": "mn433",
                  "target": "mn434",
                  "label": "From: et5 To: et5"
              }
          },
          {
              "data": {
                  "source": "mn433",
                  "target": "mn434",
                  "label": "From: et4 To: et4"
              }
          },
          {
              "data": {
                  "source": "mn433",
                  "target": "mn434",
                  "label": "From: et7 To: et7"
              }
          },
          {
              "data": {
                  "source": "mn433",
                  "target": "mn434",
                  "label": "From: et6 To: et6"
              }
          },
          {
              "data": {
                  "source": "mn433",
                  "target": "mn434",
                  "label": "From: et9 To: et9"
              }
          },
          {
              "data": {
                  "source": "mn433",
                  "target": "mn434",
                  "label": "From: et8 To: et8"
              }
          },
          {
              "data": {
                  "source": "ro502",
                  "target": "co585",
                  "label": "From: et6 To: et4"
              }
          },
          {
              "data": {
                  "source": "fm151",
                  "target": "co647",
                  "label": "From: et1 To: et2"
              }
          },
          {
              "data": {
                  "source": "fm151",
                  "target": "co648",
                  "label": "From: et2 To: et2"
              }
          },
          {
              "data": {
                  "source": "fm151",
                  "target": "fm150",
                  "label": "From: et5 To: et5"
              }
          },
          {
              "data": {
                  "source": "fm151",
                  "target": "fm150",
                  "label": "From: et6 To: et6"
              }
          },
          {
              "data": {
                  "source": "co585",
                  "target": "dm1-rack238-tor",
                  "label": "From: Management1 To: et39"
              }
          },
          {
              "data": {
                  "source": "tacsrv20",
                  "target": "ro501",
                  "label": "From: p6p1 To: et5"
              }
          },
          {
              "data": {
                  "source": "gb421",
                  "target": "fm151",
                  "label": "From: et2 To: et49/5"
              }
          },
          {
              "data": {
                  "source": "gb421",
                  "target": "gb420",
                  "label": "From: et4 To: et4"
              }
          },
          {
              "data": {
                  "source": "mn433",
                  "target": "mn434",
                  "label": "From: et10 To: et10"
              }
          },
          {
              "data": {
                  "source": "co646",
                  "target": "co641",
                  "label": "From: et6 To: et12"
              }
          },
          {
              "data": {
                  "source": "mt703",
                  "target": "BG1-34-MGMT-7048T-A",
                  "label": "From: Management1 To: et3"
              }
          },
          {
              "data": {
                  "source": "co646",
                  "target": "co648",
                  "label": "From: et5 To: et5"
              }
          },
          {
              "data": {
                  "source": "co646",
                  "target": "co645",
                  "label": "From: et2 To: et2"
              }
          },
          {
              "data": {
                  "source": "co646",
                  "target": "co647",
                  "label": "From: et3 To: et3"
              }
          },
          {
              "data": {
                  "source": "co646",
                  "target": "co645",
                  "label": "From: et1 To: et1"
              }
          },
          {
              "data": {
                  "source": "do451",
                  "target": "cz150",
                  "label": "From: et19 To: et19"
              }
          },
          {
              "data": {
                  "source": "co641",
                  "target": "co641",
                  "label": "From: et44 To: et20"
              }
          },
          {
              "data": {
                  "source": "co641",
                  "target": "do450",
                  "label": "From: et44 To: et23"
              }
          },
          {
              "data": {
                  "source": "mt701",
                  "target": "mn431",
                  "label": "From: et23 To: et43"
              }
          },
          {
              "data": {
                  "source": "do451",
                  "target": "cz151",
                  "label": "From: et17 To: et17"
              }
          },
          {
              "data": {
                  "source": "mt703",
                  "target": "mt704",
                  "label": "From: et1/4 To: et18"
              }
          },
          {
              "data": {
                  "source": "do451",
                  "target": "mn433",
                  "label": "From: et3 To: et51"
              }
          },
          {
              "data": {
                  "source": "do451",
                  "target": "mn434",
                  "label": "From: et2 To: et50"
              }
          },
          {
              "data": {
                  "source": "co648",
                  "target": "co647",
                  "label": "From: et8 To: et8"
              }
          },
          {
              "data": {
                  "source": "gb420",
                  "target": "gb421",
                  "label": "From: et4 To: et4"
              }
          },
          {
              "data": {
                  "source": "do451",
                  "target": "gb421",
                  "label": "From: et6 To: et66"
              }
          },
          {
              "data": {
                  "source": "gb420",
                  "target": "fm150",
                  "label": "From: et1 To: et49/1"
              }
          },
          {
              "data": {
                  "source": "do451",
                  "target": "co641",
                  "label": "From: et4 To: et4"
              }
          },
          {
              "data": {
                  "source": "co648",
                  "target": "fm151",
                  "label": "From: et2 To: et2"
              }
          },
          {
              "data": {
                  "source": "ro502",
                  "target": "ro501",
                  "label": "From: et8 To: et8"
              }
          },
          {
              "data": {
                  "source": "co645",
                  "target": "BG1-34-MGMT-7048T-A",
                  "label": "From: Management1 To: et38"
              }
          },
          {
              "data": {
                  "source": "do451",
                  "target": "do450",
                  "label": "From: et8 To: et8"
              }
          },
          {
              "data": {
                  "source": "mn434",
                  "target": "do451",
                  "label": "From: et49 To: et1"
              }
          },
          {
              "data": {
                  "source": "co648",
                  "target": "co647",
                  "label": "From: et7 To: et7"
              }
          },
          {
              "data": {
                  "source": "co648",
                  "target": "co646",
                  "label": "From: et5 To: et5"
              }
          },
          {
              "data": {
                  "source": "do451",
                  "target": "BG1-34-MGMT-7048T-A",
                  "label": "From: Management1 To: et34"
              }
          },
          {
              "data": {
                  "source": "mt708",
                  "target": "BG1-34-MGMT-7048T-A",
                  "label": "From: Management1 To: et8"
              }
          },
          {
              "data": {
                  "source": "mt703",
                  "target": "mt703",
                  "label": "From: et19 To: et17"
              }
          },
          {
              "data": {
                  "source": "BG1-34-MGMT-7048T-A",
                  "target": "cz153",
                  "label": "From: et26 To: Management1"
              }
          },
          {
              "data": {
                  "source": "BG1-34-MGMT-7048T-A",
                  "target": "co641",
                  "label": "From: et28 To: Management1"
              }
          },
          {
              "data": {
                  "source": "BG1-34-MGMT-7048T-A",
                  "target": "co647",
                  "label": "From: et29 To: Management1"
              }
          },
          {
              "data": {
                  "source": "mt703",
                  "target": "mt703",
                  "label": "From: et17 To: et19"
              }
          },
          {
              "data": {
                  "source": "mn434",
                  "target": "co645",
                  "label": "From: et52 To: et48"
              }
          },
          {
              "data": {
                  "source": "mn434",
                  "target": "do451",
                  "label": "From: et50 To: et2"
              }
          },
          {
              "data": {
                  "source": "mn434",
                  "target": "do450",
                  "label": "From: et51 To: et3"
              }
          },
          {
              "data": {
                  "source": "dm1-rack238-tor",
                  "target": "co585",
                  "label": "From: et39 To: Management1"
              }
          },
          {
              "data": {
                  "source": "cz151",
                  "target": "BG1-34-MGMT-7048T-A",
                  "label": "From: Management1 To: et45"
              }
          },
          {
              "data": {
                  "source": "mt708",
                  "target": "mt709",
                  "label": "From: et1/2 To: et17"
              }
          },
          {
              "data": {
                  "source": "mt708",
                  "target": "mt706",
                  "label": "From: et1/3 To: et18"
              }
          },
          {
              "data": {
                  "source": "mt704",
                  "target": "mt703",
                  "label": "From: et18 To: et1/4"
              }
          },
          {
              "data": {
                  "source": "ro503-alta-lab",
                  "target": "co585",
                  "label": "From: et9 To: et1"
              }
          },
          {
              "data": {
                  "source": "mt708",
                  "target": "mt709",
                  "label": "From: et1/4 To: et18"
              }
          },
          {
              "data": {
                  "source": "cz151",
                  "target": "do451",
                  "label": "From: et17 To: et17"
              }
          },
          {
              "data": {
                  "source": "mt701",
                  "target": "BG1-34-MGMT-7048T-A",
                  "label": "From: Management1 To: et1"
              }
          },
          {
              "data": {
                  "source": "gb420",
                  "target": "BG1-34-MGMT-7048T-A",
                  "label": "From: Management1 To: et40"
              }
          },
          {
              "data": {
                  "source": "BG1-34-MGMT-7048T-A",
                  "target": "co648",
                  "label": "From: et30 To: Management1"
              }
          },
          {
              "data": {
                  "source": "BG1-34-MGMT-7048T-A",
                  "target": "do450",
                  "label": "From: et33 To: Management1"
              }
          },
          {
              "data": {
                  "source": "BG1-34-MGMT-7048T-A",
                  "target": "do451",
                  "label": "From: et34 To: Management1"
              }
          },
          {
              "data": {
                  "source": "BG1-34-MGMT-7048T-A",
                  "target": "mn434",
                  "label": "From: et39 To: Management1"
              }
          },
          {
              "data": {
                  "source": "BG1-34-MGMT-7048T-A",
                  "target": "co645",
                  "label": "From: et38 To: Management1"
              }
          },
          {
              "data": {
                  "source": "mn434",
                  "target": "mn433",
                  "label": "From: et8 To: et8"
              }
          },
          {
              "data": {
                  "source": "co647",
                  "target": "BG1-34-MGMT-7048T-A",
                  "label": "From: Management1 To: et29"
              }
          },
          {
              "data": {
                  "source": "do450",
                  "target": "BG1-34-MGMT-7048T-A",
                  "label": "From: Management1 To: et33"
              }
          },
          {
              "data": {
                  "source": "mt708",
                  "target": "mn435",
                  "label": "From: et23 To: et49"
              }
          },
          {
              "data": {
                  "source": "mt709",
                  "target": "mt708",
                  "label": "From: et18 To: et1/4"
              }
          },
          {
              "data": {
                  "source": "mt708",
                  "target": "mt707",
                  "label": "From: et17 To: et17"
              }
          },
          {
              "data": {
                  "source": "fm151",
                  "target": "gb421",
                  "label": "From: et49/5 To: et2"
              }
          },
          {
              "data": {
                  "source": "mt709",
                  "target": "mt708",
                  "label": "From: et17 To: et1/2"
              }
          },
          {
              "data": {
                  "source": "mt709",
                  "target": "cz153",
                  "label": "From: et17 To: et27"
              }
          },
          {
              "data": {
                  "source": "fm151",
                  "target": "gb420",
                  "label": "From: et49/1 To: et2"
              }
          },
          {
              "data": {
                  "source": "BG1-34-MGMT-7048T-A",
                  "target": "mt708",
                  "label": "From: et8 To: Management1"
              }
          },
          {
              "data": {
                  "source": "BG1-34-MGMT-7048T-A",
                  "target": "mt703",
                  "label": "From: et3 To: Management1"
              }
          },
          {
              "data": {
                  "source": "BG1-34-MGMT-7048T-A",
                  "target": "mt701",
                  "label": "From: et1 To: Management1"
              }
          },
          {
              "data": {
                  "source": "mn433",
                  "target": "do451",
                  "label": "From: et51 To: et3"
              }
          },
          {
              "data": {
                  "source": "co641",
                  "target": "co646",
                  "label": "From: et12 To: et6"
              }
          },
          {
              "data": {
                  "source": "co641",
                  "target": "co645",
                  "label": "From: et11 To: et6"
              }
          },
          {
              "data": {
                  "source": "mt708",
                  "target": "mn435",
                  "label": "From: et24 To: et50"
              }
          },
          {
              "data": {
                  "source": "gb421",
                  "target": "fm150",
                  "label": "From: et1 To: et49/5"
              }
          },
          {
              "data": {
                  "source": "fm150",
                  "target": "gb421",
                  "label": "From: et49/5 To: et1"
              }
          },
          {
              "data": {
                  "source": "fm150",
                  "target": "gb420",
                  "label": "From: et49/1 To: et1"
              }
          },
          {
              "data": {
                  "source": "cz153",
                  "target": "mt707",
                  "label": "From: et15 To: et19"
              }
          },
          {
              "data": {
                  "source": "cz153",
                  "target": "mt708",
                  "label": "From: et16 To: et19"
              }
          },
          {
              "data": {
                  "source": "cz151",
                  "target": "cz150",
                  "label": "From: et15 To: et15"
              }
          },
          {
              "data": {
                  "source": "fm150",
                  "target": "BG1-34-MGMT-7048T-A",
                  "label": "From: Management1 To: et43"
              }
          },
          {
              "data": {
                  "source": "co585",
                  "target": "ro501",
                  "label": "From: et3 To: et4"
              }
          },
          {
              "data": {
                  "source": "gb420",
                  "target": "do450",
                  "label": "From: et65 To: et5"
              }
          },
          {
              "data": {
                  "source": "cz151",
                  "target": "do450",
                  "label": "From: et19 To: et19"
              }
          },
          {
              "data": {
                  "source": "mn434",
                  "target": "mn433",
                  "label": "From: et4 To: et4"
              }
          },
          {
              "data": {
                  "source": "mn434",
                  "target": "mn433",
                  "label": "From: et5 To: et5"
              }
          },
          {
              "data": {
                  "source": "mn434",
                  "target": "mn433",
                  "label": "From: et6 To: et6"
              }
          },
          {
              "data": {
                  "source": "mn434",
                  "target": "mn433",
                  "label": "From: et7 To: et7"
              }
          },
          {
              "data": {
                  "source": "mn434",
                  "target": "mn433",
                  "label": "From: et1 To: et1"
              }
          },
          {
              "data": {
                  "source": "mn434",
                  "target": "mn433",
                  "label": "From: et2 To: et2"
              }
          },
          {
              "data": {
                  "source": "fm151",
                  "target": "BG1-34-MGMT-7048T-A",
                  "label": "From: Management1 To: et44"
              }
          },
          {
              "data": {
                  "source": "mt708",
                  "target": "cz153",
                  "label": "From: et19 To: et16"
              }
          },
          {
              "data": {
                  "source": "do450",
                  "target": "co641",
                  "label": "From: et23 To: et44"
              }
          },
          {
              "data": {
                  "source": "do450",
                  "target": "co641",
                  "label": "From: et23 To: et20"
              }
          },
          {
              "data": {
                  "source": "mn434",
                  "target": "mn433",
                  "label": "From: et9 To: et9"
              }
          },
          {
              "data": {
                  "source": "ro501",
                  "target": "sr285-alta-lab",
                  "label": "From: et1 To: et1"
              }
          },
          {
              "data": {
                  "source": "mt707",
                  "target": "mt708",
                  "label": "From: et17 To: et17"
              }
          },
          {
              "data": {
                  "source": "ro501",
                  "target": "co587",
                  "label": "From: et5 To: et2"
              }
          },
          {
              "data": {
                  "source": "ro501",
                  "target": "tacsrv20",
                  "label": "From: et5 To: p6p1"
              }
          },
          {
              "data": {
                  "source": "co648",
                  "target": "fm150",
                  "label": "From: et1 To: et2"
              }
          },
          {
              "data": {
                  "source": "mn433",
                  "target": "do450",
                  "label": "From: et49 To: et1"
              }
          },
          {
              "data": {
                  "source": "ro501",
                  "target": "ro502",
                  "label": "From: et9 To: et9"
              }
          },
          {
              "data": {
                  "source": "ro501",
                  "target": "ro502",
                  "label": "From: et8 To: et8"
              }
          },
          {
              "data": {
                  "source": "co585",
                  "target": "ro504",
                  "label": "From: et5 To: et6"
              }
          },
          {
              "data": {
                  "source": "dm1-rack238-tor",
                  "target": "ro501",
                  "label": "From: et46 To: Management1"
              }
          },
          {
              "data": {
                  "source": "mt706",
                  "target": "mt708",
                  "label": "From: et18 To: et1/3"
              }
          },
          {
              "data": {
                  "source": "co585",
                  "target": "localhost",
                  "label": "From: et24 To: p1p1"
              }
          },
          {
              "data": {
                  "source": "mn431",
                  "target": "mt701",
                  "label": "From: et43 To: et23"
              }
          },
          {
              "data": {
                  "source": "do450",
                  "target": "do451",
                  "label": "From: et8 To: et8"
              }
          },
          {
              "data": {
                  "source": "cz153",
                  "target": "mn435",
                  "label": "From: et21 To: et51"
              }
          },
          {
              "data": {
                  "source": "cz153",
                  "target": "mt709",
                  "label": "From: et27 To: et17"
              }
          },
          {
              "data": {
                  "source": "mn434",
                  "target": "mn433",
                  "label": "From: et10 To: et10"
              }
          },
          {
              "data": {
                  "source": "do450",
                  "target": "gb420",
                  "label": "From: et5 To: et65"
              }
          },
          {
              "data": {
                  "source": "do450",
                  "target": "gb421",
                  "label": "From: et6 To: et65"
              }
          },
          {
              "data": {
                  "source": "ro501",
                  "target": "co585",
                  "label": "From: et4 To: et3"
              }
          },
          {
              "data": {
                  "source": "do451",
                  "target": "co645",
                  "label": "From: et45 To: et45"
              }
          },
          {
              "data": {
                  "source": "cz150",
                  "target": "do451",
                  "label": "From: et19 To: et19"
              }
          },
          {
              "data": {
                  "source": "cz150",
                  "target": "do450",
                  "label": "From: et17 To: et17"
              }
          },
          {
              "data": {
                  "source": "cz150",
                  "target": "cz151",
                  "label": "From: et15 To: et15"
              }
          },
          {
              "data": {
                  "source": "localhost",
                  "target": "co585",
                  "label": "From: p1p1 To: et24"
              }
          },
          {
              "data": {
                  "source": "co645",
                  "target": "mn434",
                  "label": "From: et48 To: et52"
              }
          },
          {
              "data": {
                  "source": "co647",
                  "target": "co648",
                  "label": "From: et8 To: et8"
              }
          },
          {
              "data": {
                  "source": "sr285-alta-lab",
                  "target": "co585",
                  "label": "From: et3 To: et9"
              }
          },
          {
              "data": {
                  "source": "sr285-alta-lab",
                  "target": "ro501",
                  "label": "From: et1 To: et1"
              }
          },
          {
              "data": {
                  "source": "co641",
                  "target": "do451",
                  "label": "From: et4 To: et4"
              }
          },
          {
              "data": {
                  "source": "co647",
                  "target": "co646",
                  "label": "From: et3 To: et3"
              }
          },
          {
              "data": {
                  "source": "co647",
                  "target": "fm151",
                  "label": "From: et2 To: et1"
              }
          },
          {
              "data": {
                  "source": "co647",
                  "target": "fm150",
                  "label": "From: et1 To: et1"
              }
          },
          {
              "data": {
                  "source": "co645",
                  "target": "do451",
                  "label": "From: et45 To: et45"
              }
          },
          {
              "data": {
                  "source": "co647",
                  "target": "co648",
                  "label": "From: et7 To: et7"
              }
          },
          {
              "data": {
                  "source": "do450",
                  "target": "mn433",
                  "label": "From: et1 To: et49"
              }
          },
          {
              "data": {
                  "source": "do450",
                  "target": "mn433",
                  "label": "From: et2 To: et50"
              }
          },
          {
              "data": {
                  "source": "do450",
                  "target": "mn434",
                  "label": "From: et3 To: et51"
              }
          }
      ]
  }

,


layout: {
   name: 'cose',
   padding: 10,
   randomize: true
 },
 });

 cy.elements("edge").qtip({
   content: function(){ return "SOURCE: "+this.data('source')+"<br>DESTINATION: "+this.data('target')+"<br>INTERFACE: "+this.data('label') },
   position: {
     my: 'top center',
     at: 'bottom center'
   },
   style: {
     classes: 'qtip-tipsy',
     tip: {
       width: 16,
       height: 16
     }
   }
 });


// cy.on('tap', 'edge', function(){
  // try { // your browser may block popups
  //   window.alert("SOURCE: \n"+this.data('source')+'\n'+"DESTINATION: \n"+this.data('target')+'\n'+"INTERFACE: \n"+this.data('label'));
  // } catch(e){ // fall back on url change
  //   window.location.href = this.data('href');
  // }

// });

}); // on dom ready
