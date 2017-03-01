/*
 * Copyright (C) 2017  Arista Networks, Inc.
 * Use of this source code is governed by the Apache License 2.0
 * that can be found in the COPYING file.
 */$(function(){ // on dom ready
  var cy = cytoscape({
    container: $("#cy")[0],

    boxSelectionEnabled: false,
    autounselectify: true,
    userZoomingEnabled: true,


    style: cytoscape.stylesheet()
        .selector("node")
          .css({
            "content": "data(name)",
            "text-valign": "center",
            "color": "white",
            "text-outline-width": 3,
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
            "background-color": "#06406",
            "line-color": "#06406",
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
          }, // elements,


    layout: {
       name: "cose",
       padding: 10,
       randomize: true
     }
  }); // cytoscape

  cy.on("tap", "edge", function(){
    try { // your browser may block popups
      window.alert("SOURCE: \n"+this.data("source")+"\n"+"DESTINATION: \n"+this.data("target")+"\n"+"INTERFACE: \n"+this.data("label"));
    } catch(e){ // fall back on url change
      window.location.href = this.data("href");
    }

  });

}); // ready
