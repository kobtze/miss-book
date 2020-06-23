
import googleBookService from '../services/google.book.service.js';
import {bookService} from '../services/book.service.js';
 

export default {
    props: ['book'],
    template: `
        <li class="book-name">
            <button v-on:click="saveGoogleBook">+</button>
            {{book.volumeInfo.title}} ({{book.volumeInfo.authors}})
        </li>
    `,
    methods: {
        saveGoogleBook() {
            bookService.saveGoogleBook(this.book)
            // console.log(this.book)
        }
    },
    created() {
        console.log(googleBookService, bookService);
    }
}