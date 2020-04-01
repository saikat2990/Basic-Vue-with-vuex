<template>
  <div id="home">
    <div class="container">
      <AddTodo/>
      <Todos v-bind:students="students" v-on:del-student="deleteStudent"/>
    </div>
  </div>
</template>

<script>
import Todos from '../components/Todos'
import AddTodo from '../components/AddTodo'
import eventBus from '../plugins/EventBus'

export default {
  name: 'Home',
  data(){
    return{
      students:[
        {
          id:1,
          name:"Saikat Sen",
          detail:"I am a good boy but .........",
          detailShow:false,
        },
        {
          id:2,
          name:"Niloy Ibtasham",
          detail:"I am a good boy but .........",
          detailShow:false,
        },
        {
          id:3,
          name:"Fazlay Rabbi",
          detail:"I am a good boy but .........",
          detailShow:false,
        }
      ]
    }

  },
  created(){
    eventBus.$on('showStudentDetail',(id)=>{
      for(var i=0;i<this.students.length;i++){
        if(this.students[i].id==id){
          this.students[i].detailShow=!this.students[i].detailShow;
          return;
        }
      }
    })
  },
  components: {
    Todos,
    AddTodo,
  },
  methods:{
    deleteStudent(id){
      this.students= this.students.filter(student=> student.id!==id)
    }
  }
}
</script>

<style>

body {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  line-height: 1.6;
  background: #e8f7f0;
}
.container {
  max-width: 1100px;
  margin: auto;
  overflow: auto;
  padding: 0 2rem;
}


</style>
