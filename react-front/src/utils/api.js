class Api {
  constructor({ baseUrl, headers }) {
    // constructor body
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  // RESPONSE CHECK
  _responseCheck(res) {
    return res.ok ? res.json() : Promise.reject(`Error!` + res.statusText);
  }



  likes(user, id) {
    return fetch(this._baseUrl + '/likes/' + id, {
      headers: this._headers,
      method: 'PUT',
      body: JSON.stringify({ user })
    })
      .then(this._responseCheck)
  }
  dislikes(user, id) {
    return fetch(this._baseUrl + '/dislikes/' + id, {
      headers: this._headers,
      method: 'PUT',
      body: JSON.stringify({ user })
    })
      .then(this._responseCheck)
  }

  login(email, password) {
    return fetch(this._baseUrl + '/login',
      {
        headers: this._headers,
        method: 'POST',
        body: JSON.stringify({ email, password })
      }
    )
      .then(res => {
        return res.json();
      })
  }

  getAllUsers() {
    return fetch(this._baseUrl + '/display',
      {
        headers: this._headers,
        method: 'GET'
      }
    )
      .then(this._responseCheck)
  }

}


export default Api;