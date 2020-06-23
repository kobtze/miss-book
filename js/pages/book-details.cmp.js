import {bookService} from '../services/book.service.js';

export default {
    // props: ['book'],
    template: `
        <section class="book-details">
            <button @click="close">X</button>
            <pre>{{book}}</pre>
        </section>
    `,
    data() {
        return {
            book: null
        }
    },
    created() {
        const {bookId} = this.$route.params;
        bookService.getBookById(bookId)
            .then(book => {
                this.book = book;
            })
        console.log('bookDetails created', bookId);
    },
    methods: {
        close() {
            console.log('saving...');
            this.$emit('close', null);
        }
    }
}