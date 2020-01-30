document.addEventListener('DOMContentLoaded', function () {
  let elems = document.querySelectorAll('select');
  let instances = M.FormSelect.init(elems);
});
const doneTypingInterval = 2000;
//generated objects stored in other places 
const newsService = new NewsService();
const newsUI = new NewsUI();

//first we write the main functions 
const form = document.forms['newsControlForm'];
const countrySel = form['country'];
const categorySel = form['category'];
const inputSearch = form['search'];
let inProgress = false;
//event listeners 
countrySel.addEventListener('change', onSelectChange);
categorySel.addEventListener('change', onSelectChange);
inputSearch.addEventListener('input', onInputChange);


//callback function 
function onSelectChange() {
  //get the values from choose field 
  let country = countrySel.value;
  let category = categorySel.value;

  //return if none is chosen  
  if (!country || !category) return;

  //else --> create a request field and write it in response 
 /*  newsService.getNews({
    country,
    category
  }, (response) => {
    const {
      articles
    } = response;
    console.log(articles);
    // two methods - clear content and addNews 
    newsUI.clearContent();
    articles.forEach((article) => newsUI.addNews(article));

  }) */

  newsService.getNews({
    country,
    category
  })
  .then((articles) => {
    console.log(articles);
    // two methods - clear content and addNews 
    newsUI.clearContent();
    articles.forEach((article) => newsUI.addNews(article));
  })
  .catch((error)=>{
    error.message &&  Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: error.message
      })
  })
}

function onInputChange() {

  let input = inputSearch.value;

  if (input.length <= 3) return;
  if (!inProgress) {
    inProgress = true;
   setTimeout(() => {
    newsService.getNewsFromSearch( {input: inputSearch.value})
      .then((articles)=>{
        newsUI.clearContent();
        newsUI.addAllNews(articles);
      })
      .catch((error)=>{
        error.message &&  Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error.message
          })
      })
      .finally(()=>{inProgress = false;})
    
   
    }, doneTypingInterval);
  } 
 

}

function getData(input){
return new Promise((resolve, reject) => {
    newsService.getNewsFromSearch(input, (response) => {
      const {
        articles
      } = response;
      if (articles.length){
        resolve(articles);
      }else{
        reject(response);
      }
      /* newsUI.clearContent();
      newsUI.addAllNews(articles); */
      inProgress = false;
      
  });
})
}
function getAdditionalData(input){
  return new Promise((resolve, reject) => {
      newsService.getNewsFromSearch(input, (response) => {
        const {
          articles
        } = response;
        if (articles.length){
          resolve(articles);
        }else{
          reject(response);
        }
        inProgress = false;
        
    });
  })
  }