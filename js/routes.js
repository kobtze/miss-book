import homePage from './pages/home-page.cmp.js';

import bookApp from './pages/book-app.cmp.js';
import bookDetails from './pages/book-details.cmp.js';
import bookEdit from './cmps/book-edit.cmp.js';

const about = {
    template: `
    <section class="app-main about-us">
        <h2>About Us</h2>
    </section>
`
}

const myRoutes = [
    {
        path: '/',
        component: homePage
    },
    {
        path: '/book',
        component: bookApp
    },
    {
        path: '/book/edit/:bookId?',
        component: bookEdit
    },
    {
        path: '/book/:bookId',
        component: bookDetails
    },
    {
        path: '/about/',
        component: about
    },
    // {
    //     path: '/book/:bookId',
    //     component: bookDetails
    // }
];

export const myRouter = new VueRouter({routes: myRoutes})
