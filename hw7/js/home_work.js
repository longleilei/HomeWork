function addLi (number){
let ul = document.querySelector('ul'); 
let count = ul.getElementsByTagName('li').length; 
let fragment = document.createDocumentFragment(); 
for (let i = 0; i < number; i++){
  let li = document.createElement('li'); 
  li.classList.add('new-item');
  li.innerHTML = `item ${i + count}`;
  fragment.appendChild(li)
}
ul.append(fragment)
  }
addLi(1); 

function addLi2 (number){
  let ul = document.querySelector('ul'); 
  let count = ul.getElementsByTagName('li').length; 
  let fragment = ''; 

  for (let i = 0; i < number; i++){
    fragment += `<li class='new-item>item ${i + count}</li>`
  }
  ul.insertAdjacentHTML('beforeend',fragment)
    }
  addLi2(4); 

//document.fragment()

console.log(`задание: 1. Не используя innerHTML, добавить в список несколько li с классом ‘new-item’ и текстом ‘item’ + номер li:
<ul>
<li><a href="#">Link1</a></li>
...
<li class=”new-item”>item 5</li>
<li class=”new-item”>item 6</li>
</ul>
Вручную номер li не ставить оно должно подставляться в зависимости от кол-ва лишек в списке.

результат:; 
объяснение: `) 

let ulLinks = document.getElementsByTagName('li'); 
for (let el of ulLinks){
  el.insertAdjacentHTML('beforeend','<strong></strong>')
}

console.log(ulLinks)
document.getElementsByTagName('li')



console.log(`задание: В каждую ссылку, которая находятся внутри списка ul  добавить по тегу strong (в каждую ссылку один - strong). 
результат:; 
объяснение: `) 


/*let body = document.querySelector('body'); 
let fragment = `<img src = 'https://static.boredpanda.com/blog/wp-content/uploads/2016/03/hairy-fluffy-cat-sky-the-ragdoll-31.jpg' alt = 'of course it's a Cat!'</img>`; 
body.insertAdjacentHTML('afterbegin', fragment) */ 


let body = document.querySelector('body'); 
let img = document.createElement('img'); 
img.src = 'https://static.boredpanda.com/blog/wp-content/uploads/2016/03/hairy-fluffy-cat-sky-the-ragdoll-31.jpg'
img.alt = 'Cat' 
body.insertAdjacentElement('afterbegin', img)


console.log(`задание: 3. В начало документа (в начало body) добавить картинку img с атрибутами src и alt (текст придумайте сами). В src добавьте реальный url к картинке. Для создания элемента используйте метод createElement. 
результат:; 
объяснение: `) 


//document.getElementsByTagName('mark').insertAdjacentText('beforeend', 'green' )
// <mark class = 'green'>nemore green</mark> 
let mark = document.querySelector('mark')
//tried to add getElementsByTagName but then mark is 'undefined' 
mark.classList.add('green')
let text = document.createTextNode(' green')
mark.append(text)

console.log(`задание: Найти на странице элемент mark, добавить в конец содержимого текст “green” и на элемент установить класс green
результат:; 
объяснение: `) 

let liArr = document.querySelector('ul').textContent; 
liArr.split().sort(function(prev,next){
  for (let i of liArr){
    return next.i - prev.i}
})
/* document.querySelector('ul').innerHTML = ''
document.querySelector('ul').append(arr) */



/* let newUl = document.querySelector('ul'); 

function sortList(newUl){
  let newArr = newUl.cloneNode(false); 

  let lis = []; 
  for (let i = newUl.childNodes.length; i--;){
    if(newUl.childNodes[i] === 'li')
      lis.push(newUl.childNodees[i]); 
  }
lis.sort(function(a,b){
  return parseInt(b.childNodes[0].data,10) - 
        parseInt(a.childNodes[0].data,10); 
}); 

for (let i = 0; i < lis.length; i++){
  newArr.appendChild(lis[i])}; 
  newUl.parentNode.replaceChild(newArr,newUl)
}
sortList(document.getElementsByTagName('ul')); */

//liArr.sort(function(prev,next){
  //return prev - next; 
//})
//console.log(liArr)

console.log(`задание: Отсортировать li внутри списка в обратном порядке (по тексту внутри)
результат:; 
объяснение: `) 

console.log(`задание: 
результат:; 
объяснение: `) 