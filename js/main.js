

const app = new Vue ({
    el: '#root',
    data: {
        todos: [
        {
        text: 'Comprare colori ad olio',  
        completed: true,  
        },
        {
        text: 'Comprare pennelli',  
        completed: false,  
        },
        {
        text: 'Comprare carta da pacchi',  
        completed: true,  
        },  
        ],
        nuovoTodo: '',
    },



    methods: {
        addTodo (){
            if(this.nuovoTodo !== '')
            
                this.todos.unshift({
                    text: this.nuovoTodo,
                    completed: false, 
            });

            this.nuovoTodo = '';

        
        }
    }


});