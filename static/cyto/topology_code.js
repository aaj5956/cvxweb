
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
                  "id": "F10-Mgmtleaf-1",
                  "name": "F10-Mgmtleaf-1"
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
                  "id": "mt702",
                  "name": "mt702"
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
                  "id": "mt705",
                  "name": "mt705"
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
                  "id": "co641",
                  "name": "co641"
              }
          },
          {
              "data": {
                  "id": "co640",
                  "name": "co640"
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
                  "id": "gb421",
                  "name": "gb421"
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
                  "id": "mn433",
                  "name": "mn433"
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
          }
      ],
      "edges": [
          {
              "data": {
                  "source": "do451",
                  "target": "do450",
                  "label": "et8,et8"
              }
          },
          {
              "data": {
                  "source": "BG1-34-MGMT-7048T-A",
                  "target": "gb421",
                  "label": "et42,Management1"
              }
          },
          {
              "data": {
                  "source": "cz151",
                  "target": "BG1-34-MGMT-7048T-A",
                  "label": "Management1,et45"
              }
          },
          {
              "data": {
                  "source": "mt703",
                  "target": "mt702",
                  "label": "et24,et24"
              }
          },
          {
              "data": {
                  "source": "F10-Mgmtleaf-1",
                  "target": "BG1-34-MGMT-7048T-A",
                  "label": "Management1,et43"
              }
          },
          {
              "data": {
                  "source": "mt701",
                  "target": "mt705",
                  "label": "et21,et1/1"
              }
          },
          {
              "data": {
                  "source": "mt703",
                  "target": "mt701",
                  "label": "et20,et3/4"
              }
          },
          {
              "data": {
                  "source": "co648",
                  "target": "fm151",
                  "label": "et2,et2"
              }
          },
          {
              "data": {
                  "source": "BG1-34-MGMT-7048T-A",
                  "target": "cz153",
                  "label": "et26,Management1"
              }
          },
          {
              "data": {
                  "source": "BG1-34-MGMT-7048T-A",
                  "target": "co641",
                  "label": "et28,Management1"
              }
          },
          {
              "data": {
                  "source": "mt703",
                  "target": "mt701",
                  "label": "et17,et3/1"
              }
          },
          {
              "data": {
                  "source": "mt704",
                  "target": "mt708",
                  "label": "et18,et3/4"
              }
          },
          {
              "data": {
                  "source": "mt704",
                  "target": "mt708",
                  "label": "et17,et3/2"
              }
          },
          {
              "data": {
                  "source": "gb420",
                  "target": "BG1-34-MGMT-7048T-A",
                  "label": "Management1,et40"
              }
          },
          {
              "data": {
                  "source": "BG1-34-MGMT-7048T-A",
                  "target": "co648",
                  "label": "et30,Management1"
              }
          },
          {
              "data": {
                  "source": "BG1-34-MGMT-7048T-A",
                  "target": "do450",
                  "label": "et33,Management1"
              }
          },
          {
              "data": {
                  "source": "BG1-34-MGMT-7048T-A",
                  "target": "do451",
                  "label": "et34,Management1"
              }
          },
          {
              "data": {
                  "source": "BG1-34-MGMT-7048T-A",
                  "target": "co645",
                  "label": "et38,Management1"
              }
          },
          {
              "data": {
                  "source": "co647",
                  "target": "BG1-34-MGMT-7048T-A",
                  "label": "Management1,et29"
              }
          },
          {
              "data": {
                  "source": "fm151",
                  "target": "gb421",
                  "label": "et49/5,et2"
              }
          },
          {
              "data": {
                  "source": "mt709",
                  "target": "mt708",
                  "label": "et17,et1/2"
              }
          },
          {
              "data": {
                  "source": "BG1-34-MGMT-7048T-A",
                  "target": "mt708",
                  "label": "et8,Management1"
              }
          },
          {
              "data": {
                  "source": "BG1-34-MGMT-7048T-A",
                  "target": "mt703",
                  "label": "et3,Management1"
              }
          },
          {
              "data": {
                  "source": "BG1-34-MGMT-7048T-A",
                  "target": "mt701",
                  "label": "et1,Management1"
              }
          },
          {
              "data": {
                  "source": "mn435",
                  "target": "mt708",
                  "label": "et49,et23"
              }
          },
          {
              "data": {
                  "source": "mt705",
                  "target": "mt703",
                  "label": "et23,et23"
              }
          },
          {
              "data": {
                  "source": "fm151",
                  "target": "BG1-34-MGMT-7048T-A",
                  "label": "Management1,et44"
              }
          },
          {
              "data": {
                  "source": "mt706",
                  "target": "mt705",
                  "label": "et1/2,et19"
              }
          },
          {
              "data": {
                  "source": "mn433",
                  "target": "do450",
                  "label": "et49,et1"
              }
          },
          {
              "data": {
                  "source": "mt707",
                  "target": "cz153",
                  "label": "et19,et15"
              }
          },
          {
              "data": {
                  "source": "mt706",
                  "target": "mt708",
                  "label": "et18,et1/3"
              }
          },
          {
              "data": {
                  "source": "co640",
                  "target": "cz153",
                  "label": "et10,et21"
              }
          },
          {
              "data": {
                  "source": "mt708",
                  "target": "mt707",
                  "label": "et17,et17"
              }
          },
          {
              "data": {
                  "source": "mt701",
                  "target": "mt708",
                  "label": "et17,et3/1"
              }
          },
          {
              "data": {
                  "source": "mt701",
                  "target": "mt702",
                  "label": "et19,et1/1"
              }
          },
          {
              "data": {
                  "source": "mt701",
                  "target": "mt708",
                  "label": "et18,et3/3"
              }
          },
          {
              "data": {
                  "source": "mt705",
                  "target": "BG1-34-MGMT-7048T-A",
                  "label": "Management1,et5"
              }
          },
          {
              "data": {
                  "source": "mt708",
                  "target": "cz153",
                  "label": "et19,et16"
              }
          },
          {
              "data": {
                  "source": "co647",
                  "target": "co648",
                  "label": "et8,et8"
              }
          },
          {
              "data": {
                  "source": "co647",
                  "target": "fm151",
                  "label": "et2,et1"
              }
          },
          {
              "data": {
                  "source": "co647",
                  "target": "co648",
                  "label": "et7,et7"
              }
          },
          {
              "data": {
                  "source": "co647",
                  "target": "co645",
                  "label": "et5,et5"
              }
          },
          {
              "data": {
                  "source": "co647",
                  "target": "co645",
                  "label": "et4,et4"
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
