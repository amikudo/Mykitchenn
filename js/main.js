var app = new Vue({
    el: '#app',
    data: {
        newItem: '',
        foods: []
    },
    methods: {
        addItem: function(event) {
            if(this.newItem == '') return;

            var food = {
               item: this.newItem
            };

            this.foods.push(food);
            this.newItem = '';

        },
        deleteItem: function(index){
            this.foods.splice(index, 1)

        }
    }
})