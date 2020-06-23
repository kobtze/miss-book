import {Utils} from '../services/utils.service.js';

export default {
    props: ['book'],
    template: `
        <li class="text-center book-preview">
            <h5 class="book-title">{{capFirst}}</h5>
            <h6 class="book-author">{{book.authors[0]}}</h6>
            <p class="book-price">
                {{book.price}} {{book.listPrice.amount}}{{book.listPrice.currencyCode}}
            </p>
            <p class="book-links">
                <router-link :to="'/book/' + book.id">Details</router-link> | 
                <router-link :to="'/book/edit/' + book.id">Edit</router-link>
            </p>
        </li>
    `,
    computed: {
        capFirst() {
            return Utils.ucFirst(this.book.title)
        }
    }
};