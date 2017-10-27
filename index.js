
function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function deepestChild() {
  var currentNode =  document.querySelector('#grand-node')
  findDeepestChild(currentNode, 0, {depthV:0})

}

 function findDeepestChild(node, depth, deepestNodeAndDepth)
 {
   //console.log(`current node: #{node}`)
   depth++
   var child = node.firstChild

   if(depth > deepestNodeAndDepth.depthV)
   {
     deepestDepth.value = depth
     deepestNode.value = node
   }


   while(child !== null){

     findDeepestChild(child, depth, deepestNode, deepestDepth)

     child = child.nextSibling
   }

   return deepestNode.value
 }
