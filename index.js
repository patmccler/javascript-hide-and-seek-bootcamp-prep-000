
function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function deepestChild() {
  var currentNode =  document.querySelector('div#grand-node')
  

}
 function findDeepestChild(node, depth, deepestNode, deepestdepth)
 {
   depth++
   var child = node.firstChild
   
   while(child){

     findDeepestChild(child, depth, deepestNode, deepestDepth)
     
     child = child.nextSibling()
   }

   return deepestNode

   
 }