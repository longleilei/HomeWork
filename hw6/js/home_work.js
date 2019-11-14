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
  return infoObj;
}
console.log(`задание: 2. Создать функцию, которая принимает в качестве аргумента узел DOM и возвращает информацию (в виде объекта) о типе узла, об имени узла и о количестве дочерних узлов (если детей нет - 0).
результат:${JSON.stringify(infoDOM(document.querySelector('div')))}; 
объяснение: `) 


function getTextFromUl(ul){
  let list = ul.getElementsByTagName('a'); 
  let arr = [];
  for (let el of list){
    arr.push(el.textContent);    
}
return arr; 
}
console.log(getTextFromUl(document.querySelector('ul'))); 

console.log(`задание: 3. Получить массив, который состоит из текстового содержимого ссылок внутри списка: getTextFromUl(ul) ---> ["Link1", "Link2", "Link3"]
результат:; 
объяснение: `) 

let change = document.querySelector('p').childNodes;
let changeList = Array.from(change); 
changeList.forEach((node) => {
  if (node.nodeType ===  3){
    node.data = '-text-'
    }
  });


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
  link.id = link; 
}
console.log(links)


console.log(`задание: 2. Найти в коде ссылку, находящуюся после списка ul, и добавить id=link
результат:; 
объяснение: `) 

function setClassItem(ul, className){
  let list = ul.getElementsByTagName('li'); 
  if (!list.length) return; //exit

  for (let i = 0; i < list.length; i++){
    if (i % 2 === 0){
      list[i].classList.add(className); 
    }
  } 
}

setClassItem(document.querySelector('ul'), 'item'); 
console.log(document.querySelector('ul')); 

console.log(`задание: 3. На li через один (начиная с самого первого) установить класс “item”
результат:; 
объяснение: `) 

let allLinks = Array.from(document.links).forEach(link => link.classList.add('custom-link'))
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