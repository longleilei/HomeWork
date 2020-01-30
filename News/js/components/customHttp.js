class CustomHttp{
  get(url){
    return fetch(url);
    
  }

  post(url,callback){
    let xhr = new XMLHttpRequest(); 
    xhr.open('POST',url); 
    xhr.send(body)
    xhr.addEventListener('load', ()=>{
      callback(xhr.responseText)

    })
  }
}