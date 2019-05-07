class Http {
  static _request(method = 'GET', url = '', body = {}) {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();

      xhr.open(method, url);
      xhr.setRequestHeader('Content-Type', 'application/json');
      xhr.onload = () => {
        const { status, response, statusText } = xhr;
        status >= 200 && status < 300
          ? resolve(response)
          : reject({ status, statusText });
      };
      xhr.onerror = () => {
        const { status, statusText } = xhr;
        reject({ status, statusText });
      };
      xhr.send(JSON.stringify(body));
    });
  }

  get(url = '') {
    return Http._request('GET', url);
  }

  post(url, body) {
    return Http._request('POST', url, body);
  }

  put(url, body) {
    return Http._request('PUT', url, body);
  }

  delete(url, body) {
    return Http._request('DELETE', url, body);
  }
}

export default new Http();
