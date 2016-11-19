new Vue({
    el: '#app',
    data: {
        counter: 100
    },
    methods: {
        increment() {
            this.counter++;
        },
        decrement(){
            this.counter--;
        }
    }
});
