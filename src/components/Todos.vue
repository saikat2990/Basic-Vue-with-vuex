<template>
    
    <div>

      <h3>Students (Param Passing concept)</h3>
      <div class="todos">
         <div v-for="student in students" :key="student.id"  class="todo">
            {{student.name}}
            <div v-if="student.detailShow">
              {{student.detail}}
              <div @click="details(student.id)">Hide details</div>
            </div>
            <button @click="$emit('del-student', student.id)" class="del">x</button>
            <div v-if="!student.detailShow" @click="details(student.id)">Show Details</div>
         </div>
      </div>


      <h3>Todos (Vuex concept)</h3>
      <div class="todos">
         <div v-for="todo in allTodos" :key="todo.id"  class="todo">
           {{todo.title}}
       
           <i @click="deleteTodo(todo.id)" class="fas fa-trash-alts "><button class="del">x</button></i>
         </div>
        
      </div>
    </div>

</template>
<script>
import {mapGetters,mapActions} from 'vuex';
import eventBus from '../plugins/EventBus';
export default {
    name:"Todos",
    props:["students"],
    methods:{
      ...mapActions(['fetch','deleteTodo']),
      details(id){
         eventBus.$emit('showStudentDetail',id);
      },

    },
    computed:mapGetters(['allTodos']),
    created(){
      this.fetch();
    }
}
</script>



<style scoped>
.todos {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
}
.todo {
  border: 1px solid #ccc;
  background: #41b883;
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  position: relative;
  cursor: pointer;
  color: #fff;
}
i {
  position: absolute;
  bottom: 10px;
  right: 10px;
  color: #fff;
  cursor: pointer;
}
.legend {
  display: flex;
  justify-content: space-around;
  margin-bottom: 1rem;
}
.complete-box {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #35495e;
}
.incomplete-box {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #41b883;
}
.is-complete {
  background: #35495e;
  color: #fff;
}
@media (max-width: 500px) {
  .todos {
    grid-template-columns: 1fr;
  }
}

  .del {
    color: #ff0000;
    border: none;
    padding: 5px 9px;
    border-radius: 50%;
    cursor: pointer;
    float: right;
  }

</style>