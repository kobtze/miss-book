import {myRouter} from './routes.js';

new Vue({
    el: '#App',
    router: myRouter,
    template: `
    <div>
        <header class="flex align center space-between app-header">
            <h1>Books</h1>
            <nav>
                <router-link to="/">Home</router-link> | 
                <router-link to="/book">Book App</router-link> | 
                <router-link to="/edit">Edit/Add book</router-link> |
                <router-link to="/about">About</router-link>
            </nav>
        </header>

        <main>
            <router-view/>
        </main>

        <footer>
            coffeerights 2020    
        </footer>  

    </div>
    `
})
