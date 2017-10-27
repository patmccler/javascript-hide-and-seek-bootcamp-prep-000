
function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function deepestChild() {
  var currentNode =  document.querySelector('#grand-node')
  var deepest = findDeepestChild(currentNode, 0, {depthV:0})
  return deepest
}

 function findDeepestChild(node, depth, deepestNodeAndDepth)
 {
   //console.log(`current node: #{node}`)
   depth++
   var child = node.firstChild

   if(depth > deepestNodeAndDepth.depthV)
   {
     deepestNodeAndDepth.depthV = depth
     deepestNodeAndDepth.node = node
   }


   while(child !== null){

     findDeepestChild(child, depth, deepestNodeAndDepth)

     child = child.nextSibling
   }

   return deepestNodeandDepth.node
 }
