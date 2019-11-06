let paragraph = document.querySelector('p'); 

console.log(`задание: 1. Найти параграф и получить его текстовое содержимое (только текст!)
результат: 
Найти параграф: ${paragraph.tagName}
получить его текстовое содержимое: ${paragraph.textContent}; 
объяснение: `) 

function infoDOM(node){
  //paragraph.nodeType; 
  //paragraph.tagName; 
  //oParent.hasChildNodes() 
  let infoObj = {}; 
  infoObj.type = node.nodeType; 
  infoObj.name = node.tagName; 
  infoObj.childNum = node.childNodes.length; 
  //return infoObj - returns [object:object]
  console.log(JSON.stringify({infoObj})); 
}
console.log(`задание: 2. Создать функцию, которая принимает в качестве аргумента узел DOM и возвращает информацию (в виде объекта) о типе узла, об имени узла и о количестве дочерних узлов (если детей нет - 0).
результат:${infoDOM(document.querySelector('div'))}; 
объяснение: `) 

let arr = [];
function getTextFromUl(ul,arr){
  for (let el = 0; el<= ul.length; el++){
    let textEl = ul[el].textContent; 
    arr.push(textEl)
    return arr;  
}
  

}
console.log(getTextFromUl(document.querySelector('ul li'))); 

console.log(`задание: 3. Получить массив, который состоит из текстового содержимого ссылок внутри списка: getTextFromUl(ul) ---> ["Link1", "Link2", "Link3"]
результат:; 
объяснение: `) 

let change = document.querySelector('p').childNodes;
let changeList = Array.from(change); 
changeList.forEach((element) => {
  if (element instanceof String){
    element = '-text-'
    }
  });


//el.data = '-text-'  
//change.firstChild.data = '-text-'
//change.nextSibling.data = '-text'


console.log(`задание: 4. В параграфе заменить все дочерние текстовые узлы на “-text-” (вложенные теги должны остаться). Конечный результат:
-text-<a href="#">reprehendunt</a>-text-<mark>nemore</mark>-text-
результат:$; 
объяснение: `) 

let findUl = document.querySelector('ul')
findUl.classList.add('list')
console.log(findUl)

console.log(`задание: 1. Найти в коде список ul и добавить класс “list”
результат:; 
объяснение: `) 


let links = Array.from(document.querySelectorAll('a')).filter(link => !link.closest('ul')); 
for (let link of links){
  link.classList.add('id=link')
}
console.log(links)


console.log(`задание: 2. Найти в коде ссылку, находящуюся после списка ul, и добавить id=link
результат:; 
объяснение: `) 

let oddUlArray = Array.from(document.querySelector('ul'));
for (let i = 0; i<= oddUlArray.length;i++){
  if (i === 0 || i%1 === 0 ){
    //oddUlArray[i].classList.add('item')
  }
}
  console.log(oddUlArray)
//odd.classList.add('item')
//console.log(oddUlArray)

console.log(`задание: 3. На li через один (начиная с самого первого) установить класс “item”
результат:; 
объяснение: `) 
let allLinks = document.querySelectorAll('a').forEach(link => link.classList.add('custom-link'))
console.log(allLinks)

console.log(`задание: 4. На все ссылки в примере установить класс “custom-link”
результат:; 
объяснение: `) 

console.log(`задание: 
результат:; 
объяснение: `) 


console.log(`задание: 
результат:; 
объяснение: `) 