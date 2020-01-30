


class NewsUI{
  constructor(){
    //container is the div to place all cards with articles 
    this.container = document.querySelector('.news-wrap .row')
   
  }
  //clean the container 
  clearContent(){
    this.container.innerHTML = ''; 
  }
  //add news to container 
  addNews(article){   
  

    this.generateFullTemplate = this.generateTemplate(article);
    this.container.insertAdjacentHTML("beforeend", this.generateFullTemplate); 
}

  //template card for the container 

  addAllNews(articles){
   if (!articles.length){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'No articles'})
        return;
    }

    this.generateFullTemplate = '';
    articles.forEach(element => {
      this.generateFullTemplate += this.generateTemplate(element)
    });
    this.container.insertAdjacentHTML("beforeend", this.generateFullTemplate); 
  }

  generateTemplate(article){
    return /* html */ `
    <div class="col s12 m6">
    <div class="card">
        <div class="card-image">
            <img src="${article.urlToImage}">
            <span class="card-title">${article.title || ''}</span>
        </div>
        <div class="card-content">

            <p>${article.description || ''}</p>
        </div>
        <div class="card-action">
            <a href="${article.url}" target="_blank">Read more</a>
        </div>
    </div>
</div>`
 
  }
 

}