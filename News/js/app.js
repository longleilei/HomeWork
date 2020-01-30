

document.addEventListener('DOMContentLoaded', function() {
  let elems = document.querySelectorAll('select');
  let instances = M.FormSelect.init(elems);
});

//generated objects stored in other places 
const newsService = new NewsService(); 
const newsUI = new NewsUI(); 

//first we write the main functions 
const form = document.forms['newsControlForm']; 
const countrySel = form['country']; 
const categorySel = form['category']; 
const inputSearch = form['search']; 

//event listeners 
countrySel.addEventListener('change', onSelectChange); 
categorySel.addEventListener('change', onSelectChange); 
inputSearch.addEventListener('input', onInputChange); 


//callback function 
function onSelectChange(){
  //get the values from choose field 
  let country = countrySel.value; 
  let category = categorySel.value;

  //return if none is chosen  
  if(!country || !category) return; 
  
  //else --> create a request field and write it in response 
  newsService.getNews({country, category}, (response)=>{
    const{articles} = response; 
    console.log(articles); 
    // two methods - clear content and addNews 
    newsUI.clearContent(); 
    articles.forEach((article) => newsUI.addNews(article)); 

  })
}

function onInputChange(){

  let input = inputSearch.value; 

  if (input.length <=3) return;  
      
  let timeout = null; 
  let doneTypingInterval = 5000; 

  inputSearch.addEventListener('input', (input)=>{ 
    setTimeout(() =>{
      clearTimeout(timeout); 
      },doneTypingInterval)
  })  
  newsService.getNewsFromSearch({input}, (response)=>{
    const{articles} = response; 
    console.log(articles); 
    // two methods - clear content and addNews 
    newsUI.clearContent(); 
    let articlePack = article.repeat(20); 
    articles.forEach((articlePack) => newsUI.addNews(articlePack));})
    }


    
    
    
      
