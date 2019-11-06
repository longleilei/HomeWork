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

let storage = {
    todos : []
};


function addNewTodoToStorage(title, text){
    if (!title) return;
    if (!text) return;
    const newTask = {
        id: generateId(),
        title, 
        text
    }
    storage.todos.push(newTask);
}

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

function editTodoFromStorage(id, title, text){
    //check the id similar to delete function
    const checkIdRes = checkId(id);
    //get the input from the user 
    let newTitle = ''; 
    let newText = ''; 
    //iterate and assign new values if the element was found by the array
    if (checkIdRes.error) return checkIdRes.msg;
    for(let i = 0; i < storage.todos.length; i++){
        if(storage.todos[i].id === id){
            //edit title and text
            storage.todos[i].title = newTitle; 
            storage.todos[i].text = newText; 

        }
    }
}