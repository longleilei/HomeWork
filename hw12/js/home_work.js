class HttpReq {
  get(url, callback) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.send()
    xhr.addEventListener('load', () => {
      callback(JSON.parse(xhr.responseText))
    })
  }
  post(url, callback) {
    let xhr = new XMLHttpRequest();
    xhr.open('POST', url);
    xhr.send(body)
    xhr.addEventListener('load', () => {
      callback(xhr.responseText)
    })
  }
}

let customHttp = new HttpReq();
customHttp.get('https://jsonplaceholder.typicode.com/users', (response) => {
  let container = document.getElementsByClassName('accordion')[0];
  for (let i = 0; i < response.length; i++) {
    let user = response[i];
    console.log(user.name);
    let fragment = generateTemplate(user);
    container.insertAdjacentHTML('beforeend', fragment);
  }

})
setTimeout(()=>{})
function generateTemplate(user) {
  return /* html */ `
  <div class="card">
  <div class="card-header" id="card-item-${user.id}">
    <h2 class="mb-0">
      <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapse-${user.id}" aria-controls="collapse-${user.id}" aria-expanded="false">
        ${user.name}
      </button>
    </h2>
  </div>

  <div id="collapse-${user.id}" class="collapse" aria-labelledby="card-item-${user.id}" data-parent="#accordionExample" >
    <div class="card-body">
      The user's id is ${user.id}, username is ${user.username} and email is ${user.email}
    </div>
  </div>
</div>`

}





console.log(`задание: Получить пользователей (users) от сервера https://jsonplaceholder.typicode.com используя класс созданный на занятии. Получив ответ от сервера вывести имена пользователей на страницу. При клике на имя пользователя в произвольном месте должна появиться подробная информация о нем. Для визуальной части можно использовать bootstrap или другие фреймворки.
результат:; 
объяснение: `)


console.log(`задание: 
результат:; 
объяснение: `)