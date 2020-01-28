
class NewsUI{
    constructor(){
       this.container = document.querySelector('.news-wrap .row')
    }
    
    clearContent(){
        this.container.innerHTML = "";
    }

    addNews(article){
        this.container.insertAdjacentHTML("beforeend", this.generateTemplate(article))
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
                    
                <span class="card-title">${article.publishedAt || ''}</span>
                    <p>${article.description || ''}</p>
                </div>
                <div class="card-action">
                    <a href="${article.url}" target="_blank">Read more</a>
                </div>
            </div>
        </div>
        `
    }
}