console.log(document.head)
console.log(document.body)
console.log(document.body.children)
console.log(document.body.firstElementChild)
console.log(document.body.firstElementChild.children)

//б) вывести в консоль все дочерние узлы кроме первого и последнего
console.log(Array.prototype.slice.call(document.body.firstElementChild.children, 1, -1))