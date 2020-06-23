
import googleBookService from '../services/google.book.service.js';
import bookName from '../cmps/book-name.cmp.js'

export default {
    template: `
    <section class="book-add">
        <h2>Find and add new books</h2>
        <input v-on:keyup.enter="searchGoogleBooks" v-model="searchStr" type="text" placeholder="Search for a book"/>
        
        <ul class="clean-list title-list">
            <book-name v-if="booksToShow" v-for="book in booksToShow" :book="book" :key="book.id"/>
        </ul>
        <router-link :to="'/book/add+m'">Add Manually</router-link>
    </section>
    `,
    data() {
        return {
            searchStr: '',
            booksToShow: null,
            loading: true,
            errored: false
        }
    },
    methods: {
        searchGoogleBooks() {
            const books = googleBookService.getBooksByStr(this.searchStr)
                .then(books => {
                    this.booksToShow = books
                    console.log(this.booksToShow[0])
                })
        }
    },
    created() {
        // console.log(googleBookService)
    },
    components: {
        bookName
    }
}