
function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function deepestChild() {
  var currentNode =  document.querySelector('div#grand-node')
  findDeepestChild(currentNode, 0, currentNode, 0)

}
 function findDeepestChild(node, depth, deepestNode, deepestDepth)
 {
   depth++
   var child = node.firstChild

   if(depth > deepestDepth)
   {
     deepestDepth = depth
     deepestNode = node
   }


   while(child){

     findDeepestChild(child, depth, deepestNode, deepestDepth)

     child = child.nextSibling
   }

   return deepestNode


 }
