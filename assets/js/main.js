// Vue.component('', {
//     template: `
//     `
// })

new Vue({
    el: '#app',
    data: {
        quotes,
        currentQuote: quotes[0]
    },
    methods: {
        generateRandomQuote: function() {
            const randomIndexOfQuotes = Math.floor(Math.random() * quotes.length)
            this.currentQuote = quotes[randomIndexOfQuotes]
        }
    }
})