const http = new CustomHttp(); 

class NewsService{
  constructor(){
    this.apiUrl = 'https://newsapi.org/v2/top-headlines';
    this.apiKey = '9c27b0f722b84da5a08312d2b125351b';
  }
  getNews({country,category}){
    return new Promise((resolve, reject) => {
      http.get(`${this.apiUrl}?country=${country}&category=${category}&apiKey=${this.apiKey}`)
      .then((response)=>response.json())
      .then((resp)=> {
                const { articles } = resp;
                if(articles.length){
                  resolve(articles)
                }else{
                  reject({message:"not found articles"})
                }
              })
      .catch((response)=>{
            reject(response)
      })
    });
    
  }
  getNewsFromSearch({input}){
    return new Promise((resolve, reject) => {
      http.get(`${this.apiUrl}?q=${input}&apiKey=${this.apiKey}`)
      .then((response)=>response.json())
        .then((resp)=> {
                  const { articles } = resp;
                  if(articles.length){
                    resolve(articles)
                  }else{
                    reject({message:"not found articles"})
                  }
                })
        .catch((response)=>{
              reject(response)
        })
    });
    
  }
}