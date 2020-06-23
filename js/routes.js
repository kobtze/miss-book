// PAGES:

import homePage from './pages/home-page.cmp.js';
import about from './pages/about.cmp.js';
import bookApp from './pages/book-app.cmp.js';
import bookAdd from './pages/book-add.cmp.js';
import bookDetails from './pages/book-details.cmp.js';

// CMPS:

import bookAddManually from './cmps/book-add-manually.cmp.js';


const myRoutes = [
    {
        path: '/',
        component: homePage
    },
    {
        path: '/all-books',
        component: bookApp
    },
    {
        path: '/book/add',
        component: bookAdd
    },
    {
        path: '/book/add+m',
        component: bookAddManually
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
