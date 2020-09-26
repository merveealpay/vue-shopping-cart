window.addEventListener('load', () => {
//py -m http.server 8000 ile sunucuda serve ederek degisiklikleri tek tek gorerek calistirdim.
    window.vue = new Vue({
        el: '#app',
        name: 'Cart',
        data: {
            isLoading: true,
            cart: [],
            saved: []
        },
        methods: {
            removeFromCart(index) {
                this.cart.splice(index,1);
            },
            saveForLater(index) {
                const item = this.cart.splice(index,1);
                this.saved.push(item[0]); //splice metodu array doner JS'de
            }
        },
        created() {
                fetch('./data.json')
                .then((res) => { return res.json() })
                .then((res) => {
                    this.isLoading = false;
                    this.cart = res.cart;
                    this.saved = res.saved;
                })
        }

    })
});