document.addEventListener('DOMContentLoaded', function(){ // on dom ready
//$(document).ready(function(event) {
var cy = cytoscape({
  container: document.querySelector('#cy'),

  boxSelectionEnabled: false,
  autounselectify: true,
  style: cytoscape.stylesheet()
    .selector('node')
      .css({
        'content': 'data(name)',
        'text-valign': 'center',
        'color': 'white',
        'text-outline-width': 2,
        'background-color': '#999',
        'text-outline-color': '#999'
      })
    .selector('edge')
      .css({
        'curve-style': 'bezier',
        'target-arrow-shape': 'triangle',
        'target-arrow-color': '#ccc',
        'line-color': '#ccc',
        'width': 1
      })
    .selector(':selected')
      .css({
        'background-color': 'black',
        'line-color': 'black',
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
                  "id": "n0",
                  "name": "L3 Network"
              }
          },
          {
              "data": {
                  "id": "n1",
                  "name": "gb421"
              }
          },
          {
              "data": {
                  "id": "n2",
                  "name": "gb420"
              }
          }
      ],
      "edges": [
          {
              "data": {
                  "source": "n0",
                  "target": "n1"
              }
          },
          {
              "data": {
                  "source": "n0",
                  "target": "n2"
              }
          }
      ]
  },

  layout: {
    name: 'grid',
  }
});

cy.on('tap', 'node', function(e){
  var node = e.cyTarget;
  var neighborhood = node.neighborhood().add(node);

  cy.elements().addClass('faded');
  neighborhood.removeClass('faded');
});

cy.on('tap', function(e){
  if( e.cyTarget === cy ){
    cy.elements().removeClass('faded');
  }
});

}); // on dom ready
