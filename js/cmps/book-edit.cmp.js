
import {bookService} from '../services/book.service.js';

export default {
    template: `
        <form class="book-edit" v-on:submit.prevent="saveBook">
            <h2>Add book</h2>
            *Title: <input type="text" v-model.trim="bookToEdit.title"/>
            <br/>
            *Author 1: <input type="text" v-model.trim="bookToEdit.authors[0]"/>
            <br/>
            Author 2: <input type="text" v-model.trim="bookToEdit.authors[1]"/>
            <br/>
            Year Published: <select v-model="bookToEdit.publishedDate">
                <option>2020</option>
                <option>2019</option>
                <option>2018</option>
                <option>2017</option>
                <option>2016</option>
            </select>
            <br>
            Language: <select v-model="bookToEdit.language">
                <option>he</option>
                <option>en</option>
                <option>ar</option>
                <option>es</option>
            </select>
            <br>
            Price: <input type="number" v-model.number="bookToEdit.listPrice.amount"/>
            <select v-model="bookToEdit.listPrice.currencyCode">
                <option>EUR</option>
                <option>USD</option>
                <option>ILS</option>
            </select>
            <br>

            isOnSale: <input type="checkbox" v-model="bookToEdit.listPrice.isOnSale"/>
            
            <pre>{{bookToEdit}}</pre> 
            
            <button v-bind:disabled="!isValid">Save</button>
        </form>
    `,
    data() {
        return {
            bookToEdit: {
                title: '',
                authors: [],
                publishedDate: 2020,
                language: 'he',
                listPrice: {
                    amount: 100,
                    currencyCode: 'ILS',
                    isOnSale: true
                 },
            }
        }
    },
    computed: {
        isValid() {
            return (this.bookToEdit.title.length >= 2)? true : false;
        }
    },
    methods: {
        saveBook() {
            bookService.saveBook(this.bookToEdit);

            this.bookToEdit = {
                title: '',
                authors: [],
                publishedDate: 2020,
                language: 'he',
                listPrice: {
                    amount: 100,
                    currencyCode: 'ILS',
                    isOnSale: true
                 },
            }
        }
    },
    created(){
        const id = this.$route.params.bookId
        const book = bookService.getBookById(id)
            .then(book => this.bookToEdit = book)
    }

}