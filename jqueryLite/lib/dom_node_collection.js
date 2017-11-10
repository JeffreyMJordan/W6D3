class DOMNodeCollection{
  constructor(HTMLElements){
    this.elements = HTMLElements;
  }
}

DOMNodeCollection.prototype.html = function(str){
  if(str===undefined){
     return this.elements[0].innerHTML;
  }else{
    this.elements.forEach(function(el){
      el.innerHTML = str;
    })
  }
}

DOMNodeCollection.prototype.empty = function(){
  this.html("");
}

DOMNodeCollection.prototype.append = function(arg){
  if(typeof(arg)==="string"){
    this.elements.forEach(function(el){
      el.innerHTML += arg;
    })
  }else if (typeof(arg)==="object"){
     this.elements.forEach(function(el){
      el.innerHTML += arg.outerHTML; 
    });
  }else{
    
    for (let i = 0; i < arg.length; i++) {
      for (let j = 0; j < this.elements.length; j++) {
        this.elements[j].appendChild(arg[i].cloneNode(true))
      }
    }
  }
    
}


DOMNodeCollection.prototype.attr = function(key, val){
  if(typeof(val)==="string"){
    this.elements.forEach(function(el){
      el.setAttribute(key, val);
    })
  }else{
    return this.elements[0].getAttribute(key);
  }
}

DOMNodeCollection.prototype.addClass = function(str){
  this.elements.forEach((el) => el.classList.add(str));
}


DOMNodeCollection.prototype.removeClass = function(str){
  this.elements.forEach((el) => el.classList.remove(str));
}


module.exports = DOMNodeCollection;