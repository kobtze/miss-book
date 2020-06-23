import bookPreview from './book-preview.cmp.js';

export default {
    props: ['books'],
    template:`
        <ul class="clean-list flex wrap flex-start book-list">
            <book-preview v-for="book in books" v-on:click.native="selectBook(book)" :book="book" :key="book.id"/>
        </ul>
    `,
    methods: {
        selectBook(book) {
            this.$emit('bookSelected', book);
        }
    },
    components: {
        bookPreview
    }
}
