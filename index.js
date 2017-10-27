
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

   if(depth > deepestNodeAndDepth.depthV)
   {
     deepestNodeAndDepth.depthV = depth
     deepestNodeAndDepth.node = node
   }

   var childCount = node.childElementCount
   if(childCount > 0)
   {
     var children = node.children
     for(let i = 0; i < childCount; i++)
     {
       findDeepestChild(children[i], depth, deepestNodeAndDepth)
     }
   }
   
   return deepestNodeAndDepth.node
 }

 function increaseRankBy(n)
 {
   var elemsToIncrease = document.querySelectorAll('.ranked-list li')
   var thisElem
   for(let i = 0; i < elemsToIncrease.length, i++)
   {
     thisElem.innerHTML = parseInt(thisElem.innerHTML) + 2
     
   }


   
 }
