let mainMenu = document.getElementsByClassName('menu')[0];
let allSubMenus = mainMenu.getElementsByClassName('dropdown-menu'); 


mainMenu.addEventListener('click', (event)=>{
  let targetParent = event.target.parentElement; 
  if (targetParent.classList.contains('dropdown-item')){

    for(let subMenu of allSubMenus){

      if (subMenu.parentElement === targetParent){

        subMenu.classList.toggle('d-none'); 
    }else{
      subMenu.classList.add('d-none'); 
      }
    }
  };  
})