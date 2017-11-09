const DOMNodeCollection = require('./dom_node_collection');

const $l = function(arg){
  let nodeArr = [];
  if(arg instanceof String){
    let nodeList = document.querySelectorAll(arg);
    nodeArr = Array.from(nodeList);
  }else if(arg instanceof HTMLElement){
    let nodeList = document.querySelectorAll(arg);
    nodeArr = Array.from(nodeList);
  }
  let domNode = new DOMNodeCollection(nodeArr);
  return domNode;
};


window.$l = $l;