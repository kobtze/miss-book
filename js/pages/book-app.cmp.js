
import bookFilter from '../cmps/book-filter.cmp.js'
import bookList from '../cmps/book-list.cmp.js'
// import bookDetails from './book-details.cmp.js';
import bookEdit from '../cmps/book-edit.cmp.js';

import {bookService} from '../services/book.service.js'

export default {
    template: `
    <main class="app-main book-app">
        <router-link to ="/book/edit">New Book</router-link>
        <book-filter @filtered="setFilter"/>
        <book-list :books="booksToShow"></book-list>
    </main>
    `,
    data() {
        return {
            books: [],
            currBook: null,
            filterBy: {
                searchStr: '',
                // priceMinMax: [0, 100]
            }
        }
    },
    computed: {
        booksToShow() {
            const filterBy = this.filterBy;
            if (!filterBy) return this.books;

            var filteredBooks = this.books.filter(book => {
                return book.title.toLowerCase().includes(filterBy.searchStr.toLowerCase());
            })
            return filteredBooks;
        }
    },
    created() {
        bookService.getBooks()
            .then(books => {
                this.books = books;
            })
    },
    methods: {
        setFilter(filterBy) {
            this.filterBy = filterBy;
        },
    },
    components: {
        bookFilter,
        bookList,
    }
}
