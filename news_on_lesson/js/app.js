
 
 
 document.addEventListener('DOMContentLoaded', function() {
    let elems = document.querySelectorAll('select');
    let instances = M.FormSelect.init(elems);
  });



  const newsService = new NewsService();
  const newsUI = new NewsUI();


  const form = document.forms["newsControlForm"];
  const countrySel = form['country'];
  const categorySel = form['category'];
  const inputSearch;

  countrySel.addEventListener('change', onSelectChange);
  categorySel.addEventListener('change', onSelectChange);
  //inputSearch.addEventListener('input', onInputChange);
  
  function onSelectChange(){
      let country = countrySel.value;
      let category = categorySel.value;
      if(!country || !category) return;

      newsService.getNews({country, category}, (response)=>{
        const {articles} = response;
        console.log(articles);
        newsUI.clearContent();
        articles.forEach((article) => newsUI.addNews(article));
      })
  }