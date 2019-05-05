class Http {
  constructor() {
    this.get = this.get;
    this.post = this.post;
    this.put = this.put;
    this.delete = this.delete;
  }

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

  async get(url = '') {
    try {
      let response = await Http._request('GET', url);
      return JSON.parse(response);
    } catch (err) {
      console.log('Get data failed', err);
    }
  }

  async post(url, body) {
    try {
      const response = await Http._request('POST', url, body);
      return JSON.parse(response);
    } catch (err) {
      console.log('Post data failed', err);
    }
  }

  async put(url, body) {
    try {
      const response = await Http._request('PUT', url, body);
      return JSON.parse(response);
    } catch (err) {
      console.log('Put data failed', err);
    }
  }

  async delete(url, body) {
    try {
      const response = await Http._request('DELETE', url, body);
      return JSON.parse(response);
    } catch (err) {
      console.log('Delete data failed', err);
    }
  }
}

export default new Http();
