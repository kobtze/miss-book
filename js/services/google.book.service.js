
import {Utils} from './utils.service.js';

export default {
    getBooksByStr,
  }

function getBooksByStr(searchStr) {
    return axios.get(`https://www.googleapis.com/books/v1/volumes?printType=books&q=${searchStr}`)
        .then(res => {
            console.log(res.data.items)
            return res.data.items
        })
        .catch(error => console.log(error))
}
