/*
 * Copyright (C) 2017  Arista Networks, Inc.
 * Use of this source code is governed by the Apache License 2.0
 * that can be found in the COPYING file.
 */
document.addEventListener("DOMContentLoaded", function(){ // on dom ready

  var cy = cytoscape({
    container: document.querySelector("#cy"),
    boxSelectionEnabled: false,
    autounselectify: true,
    style: cytoscape.stylesheet()
      .selector("node")
        .css({
          "content": "data(name)",
          "text-valign": "center",
          "color": "white",
          "text-outline-width": 2,
          "background-color": "#4e78a0",
          "text-outline-color": "#4e78a0"
        })
      .selector("edge")
        .css({
          "curve-style": "bezier",
          "target-arrow-shape": "triangle",
          "target-arrow-color": "#B5CCEE",
          "line-color": "#B5CCEE",
          "width": 3
        })
      .selector(":selected")
        .css({
          "background-color": "black",
          "line-color": "black",
          "target-arrow-color": "black",
          "source-arrow-color": "black"
        })
      .selector(".faded")
        .css({
          "opacity": 0.25,
          "text-opacity": 0
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
                    "name": "do450"
                }
            },
            {
                "data": {
                    "id": "n2",
                    "name": "gb421"
                }
            },
            {
                "data": {
                    "id": "n3",
                    "name": "gb420"
                }
            },
            {
                "data": {
                    "id": "n4",
                    "name": "do451"
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
            },
            {
                "data": {
                    "source": "n0",
                    "target": "n3"
                }
            },
            {
                "data": {
                    "source": "n0",
                    "target": "n4"
                }
            }
        ]
    },

    layout: {
      name: "grid"
    }
  });

  cy.on("tap", "node", function(e){
    var node = e.cyTarget;
    var neighborhood = node.neighborhood().add(node);

    cy.elements().addClass("faded");
    neighborhood.removeClass("faded");
  });

  cy.on("tap", function(e){
    if( e.cyTarget === cy ){
      cy.elements().removeClass("faded");
    }
  });

}); // on dom ready
