const app = new Vue({
    el: '#app',
    data: {
        list: [
            {
                id: 1,
                name: 'iphone',
                price: 5000,
                count: 1
            },
            {
                id: 2,
                name: 'iPad Pro',
                price: 2000,
                count: 1
            },
            {
                id: 3,
                name: 'MacBook Pro',
                price: 21488,
                count: 1
            }
        ]
    },
    computed: {
        totalPrice: function () {
            let total = 0;
            for (let i = 0; i < this.list.length; i++) {
                let item = this.list[i];
                total += item.price * item.count;
            }
            return total.toString().replace(/\B(?=(\d{3}+$))/g, ',');
        }
    },
    methods: {
        handleReduce: function (index) {
            if (this.list[index].count === 1) return;
            this.list[index].count--;
        },
        handleAdd: function (index) {
            this.list[index].count++;
        },
        handleRemove: function (index) {
            this.list.splice(index, 1);
        }
    }
});