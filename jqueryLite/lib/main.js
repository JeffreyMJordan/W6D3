const DOMNodeCollection = require('./dom_node_collection');

const $l = function(arg){
  let nodeArr = [];
  if(typeof(arg)==="string"){
    let nodeList = document.querySelectorAll(arg);
    nodeArr = Array.from(nodeList);
  }else if(typeof(arg) ==="object"){
    let nodeList = document.querySelectorAll(arg);
    nodeArr = Array.from(nodeList);
  }
  let domNode = new DOMNodeCollection(nodeArr);
  return domNode;
};


window.$l = $l;