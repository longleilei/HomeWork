let btn = document.getElementById('btn-msg')
 btn.addEventListener('click', function(){
  alert(btn.textContent); 
}) 
console.log(`задание: 1.По нажатию на кнопку "btn-msg" должен появиться алерт с тем текстом который находится в атрибуте data-text у кнопки.
результат:; 
объяснение: `) 

btn.addEventListener('mouseover', function(event){
  event.target.classList.toggle('active');  
}); 
btn.addEventListener('mouseout',function(event){
  event.target.classList.toggle('active'); 
})

console.log(`задание: 2. При наведении указателя мыши на "btn-msg", кнопка становится красной; когда указатель мыши покидает кнопку, она становится прежнего цвета. Цвет менять можно через добавление класса.
результат:; 
объяснение: `) 

/* document.addEventListener('click', function (event) {
    let clicked = event.target.tagName; 
    document.getElementById('tag').innerHTML = `Tag : ${clicked}`; 
}); */

console.log(`задание: 3. При нажатии на любой узел документа показать в элементе с id=tag имя тега нажатого элемента.
результат:; 
объяснение: `) 

/* function addLi2 (number){
  let ul = document.querySelector('ul'); 
  let count = ul.getElementsByTagName('li').length; 
  let fragment = ''; 

  for (let i = 0; i < number; i++){
    fragment += `<li class='new-item>item ${i + count}</li>`
  }
  ul.insertAdjacentHTML('beforeend',fragment)
    }
  addLi2(4);  */

let btnGen = document.getElementById('btn-generate'); 
btnGen.addEventListener('click', function(){
   let ul = document.querySelector('ul'); 
   let count = ul.getElementsByTagName('li').length; 
   let fragment =  `<li class='new item'>item ${count+1}</li>`
   ul.insertAdjacentHTML('beforeend', fragment)
}) 

console.log(`задание: 4. При нажатии на кнопку btn-generate добавлять в список ul элемент списка Li с текстом Item + порядковый номер Li по списку, т.е Item 3, Item 4 и т.д 
результат:; 
объяснение: `) 

console.log(`задание: 
результат:; 
объяснение: `) 

