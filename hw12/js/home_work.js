class HttpReq{
  get(url,callback){
    let xhr = new XMLHttpRequest(); 
    xhr.open('GET',url); 
    xhr.send()
    xhr.addEventListener('load', ()=>{
      callback(JSON.parse(xhr.responseText))
    })
  }
  post(url,callback){
    let xhr = new XMLHttpRequest(); 
    xhr.open('POST',url); 
    xhr.send(body)
    xhr.addEventListener('load', ()=>{
      callback(xhr.responseText)

    })
  }
}

let customHttp = new HttpReq(); 
customHttp.get('https://jsonplaceholder.typicode.com/users', (response)=>{
for (let i = 0; i<response.length; i++){
  console.log(response[i].name);
  let fragment = "<div class='card'><div class='card-header' id='headingOne'><h2 class='mb-0'><button class='btn btn-link' type='button' data-toggle='collapse' data-target='#collapseOne' aria-expanded='true' aria-controls='collapseOne'>Collapsible Group Item #1</button</h2></div><div id='collapseOne'class='collapse show' aria-labelledby='headingOne' data-parent='#accordionExample'><div class='card-body'>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</div></div></div>"

  document.getElementsByClassName('accordion')[0].insertAdjacentHTML('beforeend',fragment);

  document.getElementsByTagName('button')[i].innerHTML = response[i].name; 


  document.getElementsByClassName('card-body')[i].innerHTML = `The user's id is ${response[i].id}, username is ${response[i].username} and email is ${response[i].email}`; 
  }

// if button 'area expanded' == true, the rest of areas are false; 

//let child = document.getElementsByClassName('card'); 
//child.parentNode.removeChild(child); 

//document.getElementsByClassName('card').innerHTML = ' '; 
})






console.log(`задание: Получить пользователей (users) от сервера https://jsonplaceholder.typicode.com используя класс созданный на занятии. Получив ответ от сервера вывести имена пользователей на страницу. При клике на имя пользователя в произвольном месте должна появиться подробная информация о нем. Для визуальной части можно использовать bootstrap или другие фреймворки.
результат:; 
объяснение: `)


console.log(`задание: 
результат:; 
объяснение: `) 