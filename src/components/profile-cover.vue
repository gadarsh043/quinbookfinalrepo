<template>
  <div class="container">
    <div class="user" style="justify-content: center;">
      <div > <br><h1 style="text-align: center;">{{this.myFullName}}</h1> 
      <div class="afp buttons">
        
        </div>
        </div>
    </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      myFullName:''
    }
  },
  computed:{
    ...mapGetters(['getFirstName', 'getLastName'])
  },
methods:{
  onsubmit () {
    this.$router.push('/about')
  },
   onsubmit1 () {
     this.$router.push('/friends')
  },
   onsubmit2 () {
      this.$router.push('/userphotos')
  }
},
mounted(){
  this.myFullName = localStorage.getItem('myFullName')
}
}

</script>

<style>
.container{
  height: 700px;
}
.body{
      width: 0;
      height: 0;
      margin:0px;
}
.userprofile{
  width: 0%;
  height: 0px;
  border: rgb(0, 0, 0) 2px solid;
  
  background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ01SZD8LTME-CsgwCipl6i5Fx79F20D6S-cw&usqp=CAU");
  background-repeat: no-repeat;
  /* background-size: cover; */
  background-repeat: round;
  background-size: cover;
  /* background-image: url("https://via.placeholder.com/600x250"); */
}
.user{
  width: 100%;
  height: 450px;
  display: flex;
  justify-content: space-between;
}
.userdetails{
  overflow: hidden;
  width: 30%;
  float: left;
  height: 450px;
  border: rgb(0, 0, 0) 2px solid;
  margin: 225px 0px 0px 20px;

}

.avatar {
  vertical-align: middle;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  position: relative;
  margin: 15px 0px 0px 120px;
}
.btn123{
  padding: 15px 25px;
  font-size: 24px;
  text-align: center;
  cursor: pointer;
  outline: none;
  color: black;
  border: none;
  border-radius: 90px;
}
.btn123:hover {background-color: gray}

.btn123:active {
  background-color: #9120a7;
  box-shadow: 0 0px #666;
  transform: translateY(4px);
}

</style>