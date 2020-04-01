import axios from 'axios'

const state={
    todoList:[]
};

const getters={
    allTodos:state=> state.todoList
};

const actions={
    
    async fetch({commit}){

        ///someone use services file
        const response = await axios.get(
            'https://jsonplaceholder.typicode.com/todos');

        commit('setTodo',response.data)
    },

    async addTodo({commit},title){
        const response = await axios.post(
            'https://jsonplaceholder.typicode.com/todos'
                ,{title,completed:false}
        );
        commit('newTodo',response.data);
    },

    async deleteTodo({commit},id){
       await axios.delete( `https://jsonplaceholder.typicode.com/todos/${id}`);
       commit('delete',id);
    },
};

const mutations={

    setTodo: (state,todos) => state.todoList=todos,
    newTodo: (state, todo) => state.todoList.unshift(todo),
    delete: (state,id) => (state.todoList = state.todoList.filter(todo=>todo.id!==id)),


};


export default {
    state,
    getters,
    actions,
    mutations
  };
