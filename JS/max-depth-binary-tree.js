var maxDepth = function(root) {
  // nodes = []
  // for ( let n = 1; n < root.length; n = 2 ** n) {
  // nodes.push(n);
  // }
  // return nodes.length;
  if (root === null) return 0;
  return 1 + Math.max(maxDepth(root.left) , maxDepth(root.right));
};

console.log(maxDepth([1,null,2]));
