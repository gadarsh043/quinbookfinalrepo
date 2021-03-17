<template>
  <div class="container">
    <div class="user" style="justify-content: center;">
      <div > <br><h1 style="text-align: center;">{{this.myFullName}}</h1> 
      <div class="afp buttons">
        <br>
        <button class="btn123" @click="onsubmit">My Profile</button>
        <br>
        <br>
        <br>
        <br>
         <button class="btn123" @click="onsubmit1">Friends</button>
         <br>
         <br>
         <br>
        <br>
          <button class="btn123" @click="onsubmit2">Photos</button>
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
  width: 100%;
  height: 250px;
  border: rgb(0, 0, 0) 2px solid;
  background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ01SZD8LTME-CsgwCipl6i5Fx79F20D6S-cw&usqp=CAU");
  /* background-image: url("~@/assets/logo-color.png"); */
  background-repeat: no-repeat;
  /* background-size: cover; */
  background-position-x: center; 
  background-repeat: round;
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

}

.avatar {
  vertical-align: middle;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  position: relative;
  top: 30px;
  margin-left: 30px;
}
.btn123{
  padding: 15px 25px;
  font-size: 24px;
  text-align: center;
  cursor: pointer;
  outline: none;
  color: #fff;
  background-color: #000000;
  border: none;
  border-radius: 90px;
  box-shadow: 4px 2px rgb(182, 179, 179);
}
.btn123:hover {background-color: #8b1c54}

.btn123:active {
  background-color: #9120a7;
  box-shadow: 0 5px #666;
  transform: translateY(4px);
}

</style>