
function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function deepestChild() {
  var currentNode =  document.querySelector('div#grand-node')
  findDeepestChild(currentNode, 0, currentNode, {'value':0})

}

 function findDeepestChild(node, depth, deepestNode, deepestDepth)
 {
   console.log(`current node: #{node}`)
   depth++
   var child = node.firstChild

   if(depth >= deepestDepth[value])
   {
     deepestDepth[value] = depth
     deepestNode = node
   }


   while(child){

     findDeepestChild(child, depth, deepestNode, deepestDepth)

     child = child.nextSibling
   }

   return deepestNode


 }
