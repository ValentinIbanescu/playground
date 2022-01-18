// var getAllElements = function(root1, root2) {
//     let nodes = Array(...Object.values(root1), ...Object.values(root2)).filter(element => element !== null);
//     return nodes.sort();
// };

// console.log(getAllElements([2,1,4], [1,0,3]));
// console.log(getAllElements([1,null,8], [8,1]));
const postorder = (root) => {
    const nodes = []
    if (root) {
        postorder(root.left)
        postorder(root.right)
        nodes.push(root.val)
    }
    return nodes
}
console.log(getAllElements([1,null,8], [8,1]));
