const http = new CustomHttp(); 

class NewsService{
  constructor(){
    this.apiUrl = 'https://newsapi.org/v2/top-headlines';
    this.apiKey = '9c27b0f722b84da5a08312d2b125351b';
  }
  getNews({country,category},callback){
    http.get(`${this.apiUrl}?country=${country}&category=${category}&apiKey=${this.apiKey}`, callback)
  }
  getNewsFromSearch({input}, callback){
    http.get(`${this.apiUrl}?sources=${input}&apiKey=${this.apiKey}`, callback)
  }
}