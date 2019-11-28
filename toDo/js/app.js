// Task manager
// 1. создать задачу
//      а. обработка формы
//          - проверить данные перед добавлением (валидация)
//      б. добавить задачу в массив
//      в. добавить данные в таблицу
//      г. офистить форму
// 2. удалить задачу
//      а. подтверждение
//      б. удаление данных из таблицы
//      в. удаление данных из массива 
// 3. редактировать задачу 
//      а. взять данные из массива
//      б. поместить в форму 
//      в. обработать форму на редактирование
//          - валидация
//      г. обновить данные в массиве
//      д. обновить данные в таблице
//      е. офистить форму

// task = {
//     id: {
//         type: 'String',
//         required: true
//     },
//     title: {
//         type: 'String',
//         required: true
//     },
//     text: {
//         type: 'String',
//         required: true
//     }
// }

//UI Element 
let ui = {
    form : document.forms['addToDoForm'],
    table : document.querySelector('table tbody')  
}; 

ui.title = ui.form.elements['text'];
ui.text = ui.form.elements['title'];

ui.table.addEventListener('click', (event)=>{
    if(event.target.classList.contains("fa-trash")){
        let tr = event.target.closest('tr');
        let id = tr.dataset['id'];
        deleteTodoFromStorage(id);
        deleteFromView(id);
    }
    if (event.target.classList.contains("fa-edit")){
        let tr = event.target.closest('tr');
        let id = tr.dataset['id']; 

        let todo = getToDoById(id)

        //get these from getToDoById and write to new variables 
        let _title = todo.title; 
        let _text = todo.text;

        //write in inputs 
        ui.title.value = _title; 
        ui.text.value = _text; 
         
        ui.form.querySelector('button').innerHTML = 'Edit the task';
        //when we press 'edit the task', the right funtion will be implemented   
        ui.form.dataset['id'] = id; 

        //editTodoFromStorage(id, title, text)
    }
    
});



ui.form.addEventListener('submit',function(event){
    event.preventDefault();
    let id = ui.form.dataset['id']; 
    let title = ui.title.value; 
    let text = ui.text.value; 

    ui.title.classList.remove('is-invalid'); 
    ui.text.classList.remove('is-invalid'); 
    //validation of form 
    if (!title){ui.title.classList.add ('is-invalid'); return; }
    if(!text) {ui.text.classList.add ('is-invalid'); return; }
    if(!id){
        addNewTodoToStorage(ui.title.value, ui.text.value); 
    }else{
    editTodoFromStorage(id, ui.title.value,ui.text.value);
    //reset form after submitting 
    //document.getElementsByTagName("form").reset();
    ui.form.dataset['id'] = null; }

    ui.form.reset(); 
})




let storage = {
    todos : [
        {

        }]
};

function getToDoById(id){
    for (let i = 0; i < storage.todos.length; i++){
        if(storage.todos[i].id === id){
            return storage.todos[i]
        }
    }
    return null; 
}

function addNewTodoToStorage(title, text){
    if (!title) return;
    if (!text) return;
    const newTask = {
        id: generateId(),
        title, 
        text
    }
    storage.todos.push(newTask);
    addNewTodoToView(newTask); 
}

function addNewTodoToView(task){
    //create template 
    let template = getToDoTemplate(task); 
    ui.table.insertAdjacentHTML('beforeend', template); 
}

function getToDoTemplate(task){
    return `
    <tr data-id = '${task.id}'>
        <td class='text-center'>${task.title}</td>
        <td class='text-center'>${task.text}</td> 
        <td class='text-center'>
            <i class=' s fa-trash'></i>
            <i class='fas fa-edit'></i> 
        </td>  
    </tr>
    `}

//return unique id for every new task 
function generateId(){
    const words = '0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
    let idString='';
        for(let char of words){
            let index = Math.floor(Math.random()*words.length);
            idString+=words[index];
        }

    return idString;
}
function deleteFromView(id){
    let tr = ui.table.querySelector(`[data-id='${id}']`); 
    ui.table.removeChild(tr); 
}


function deleteTodoFromStorage(id){
    //check the id 
    const checkIdRes = checkId(id);
    if (checkIdRes.error) return checkIdRes.msg;
    let removedTask; //to write in the deleted task 
    for(let i = 0; i < storage.todos.length; i++){
        if(storage.todos[i].id === id){
            //assign the deletion to the empty object
            removedTask = storage.todos.splice(i, 1);
            break;
        }
    }
    return removedTask;
}

function checkId(id){
    // if id wasn't assigned 
    if (!id){
       return {
            error: true,
            msg: 'Передай Id!'
        }
    }
    //if there's no such id in the storage 
    let check = storage.todos.some(function(task){
        return task.id === id;
    })

    if (!check){
        return {
            error: true,
            msg: 'Id не существует!'
        }
    }
    
    return {error: false};
}

function editTodoFromStorage(id, newTitle, newText){
    //check the id similar to delete function
    const checkIdRes = checkId(id);
    //iterate and assign new values if the element was found by the array
    if (checkIdRes.error) return checkIdRes.msg;
    let todo = getToDoById(id); 

    /* todo.title is a field from the storage
    newTitle is a field that accepts the value ui.title.value from addEventListener*/ 

    todo.title = newTitle; 
    todo.text= newText; 
    deleteFromView(todo.id); 
    addNewTodoToView(todo); 
}