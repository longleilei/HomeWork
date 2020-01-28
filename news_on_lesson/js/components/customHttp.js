

class CustomHttp {
    get(url, callback) {
      let xhr = new XMLHttpRequest();
      xhr.open('GET', url);
      xhr.send()
      xhr.addEventListener('load', () => {
        callback(JSON.parse(xhr.responseText))
      })
    }
    post(url, callback) {
      let xhr = new XMLHttpRequest();
      xhr.open('POST', url);
      xhr.send(body)
      xhr.addEventListener('load', () => {
        callback(xhr.responseText)
      })
    }
  }