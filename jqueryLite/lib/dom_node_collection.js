class DOMNodeCollection = {
  constructor(HTMLElements){
    this.elements = HTMLElements;
  }
  
}

DOMNodeCollection.prototype.html = function(str){
  if(str!=undefined){
     return this.elements[0].innerHTML;
  }else{
    this.elements.foreach(function(el){
      el.innerHTML = str;
    })
  }
}

DOMNodeCollection.prototype.empty = function(){
  this.elements.forEach(function(el){
    el.html = "";
  })
}

DOMNodeCollection.prototype.attr

DOMNodeCollection.prototype.addClass
DOMNodeCollection.prototype.removeClass


module.exports = DOMNodeCollection;