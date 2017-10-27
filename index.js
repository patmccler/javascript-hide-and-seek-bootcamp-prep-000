
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
   console.log(`current node: #{node}`)
   depth++
   var child = node.firstChild

   if(depth >= deepestDepth)
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

 const src = path.resolve(__dirname, '..', 'index.js');
const jsdom = require('jsdom');
 const path = require('path');
const html = path.resolve(__dirname, '..', 'index.html')
const babelResult = require('babel-core').transformFileSync(src, {
  presets: ['es2015']
});
jsdom.env(html, [], { src: babelResult.code }, (err, window) => {
  if (err) {
    return done(err);
  }

  Object.keys(window).forEach(key => {
    global[key] = window[key];
  });

  return done();
});

deepestChild()
