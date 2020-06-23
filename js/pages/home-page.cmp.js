import {eventBus} from '../services/event-bus.service.js' 


export default {
    template: `
    <section class="home-page">
        <p>Miss Book is a VueJS based app that allows CRUDL functionality for database of books.</p>
        
    </section>    
    
    `,
    methods: {
        report() {
            eventBus.$emit('somethingChanged', 18)
            
        }
    }
}