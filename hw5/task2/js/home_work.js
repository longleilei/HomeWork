
function isParent(parent,child){
  let result = false;
  if (parent.contains(child)){
    result = true; 
    }
  console.log(result);
}


  /* if(child.closest(parent)){
    result = true;
  }
  console.log(result)
  } */

isParent(document.body.children[0], document.querySelector('mark'));
isParent(document.querySelector('ul'), document.querySelector('mark'));
//document.querySelector('mark').parentElement.parentElement.parentElement = document.querySelector('mark')


console.log(`задание: 1. Создать функцию, которая принимает два элемента. Функция проверяет, является ли первый элемент родителем для второго:
isParent(parent, child);
isParent(document.body.children[0], document.querySelector('mark'));
// true так как первый див является родительским элементом для mark

isParent(document.querySelector('ul'), document.querySelector('mark'));
// false так ul НЕ является родительским элементом для mark

результат:; 
объяснение: `) 

console.log(document.links) ////?????
console.log(`задание: 2. Получить список всех ссылок, которые не находятся внутри списка ul
результат:; 
объяснение: `) 

console.log(document.querySelector('ul').previousElementSibling)
console.log(document.querySelector('ul').nextElementSibling)

console.log(`задание: 3. Найти элемент, который находится перед и после списка ul
результат:; 
объяснение: `) 

console.log(document.querySelector('ul').childElementCount)///????
console.log(`задание: 4. Посчитать количество элементов li в списке
результат:; 
объяснение: `) 
let ul = document.querySelector('ul'),
    count = 0;
for (let elem of ul.children){
  if (elem.matches('li')){
    count++
  }
}
console.log('li count', count)
console.log(`задание: 
результат:; 
объяснение: `) 

console.log(`задание: 
результат:; 
объяснение: `) 