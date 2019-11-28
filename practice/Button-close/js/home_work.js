let paines = document.getElementsByClassName('pane'); 
for (const block of paines){
  block.insertAdjacentHTML('afterbegin', '<button class="remove-button">[x]</button>')
}
document.addEventListener('click', (event)=>{
  if (event.target.contains('remove-button')){
    event.target.parentElement.classList.add('d-none')}
  }) 