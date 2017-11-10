class Router {
  constructor(node) {
    this.node = node;
  }
  
  start () {
    window.addEventListener('onhashchange', render) 
  }
  
  render () {
    this.node.innerHTML = "";
    let currentRoute = this.activeRoute();
    let newPar = document.createElement('p');
    newPar.appendChild(currentRoute);
    this.node.appendChild(newPar);
  }
  
  activeRoute () {
    return window.location.hash.slice(1);
  }
};

module.exports = Router;

