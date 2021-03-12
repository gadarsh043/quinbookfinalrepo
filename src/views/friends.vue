<template>
  <div class="container">
    <Navbar style="width: 100.3%;margin-bottom: 3px;" />
    <div class="userprofile"> 
      <img src="https://www.pngitem.com/pimgs/m/78-786293_1240-x-1240-0-avatar-profile-icon-png.png" alt="Avatar" class="avatar">
    </div><br>
    <div class="user">
      <profilecover class="userdetails"/>
      <div class="userfriends">
        <h1 style="padding-left: 256px;margin: 20px;" @click="showfriends">Show Me My Friends</h1>
        <div class="friends" v-for="i in friends" :key="i.id" style="margin: 30px 211px;">
            <div class="friendprofile" @click="friendprofile">
                <img src="../assets/friends.svg" width="23" height="23">
              <p> {{i.userName}} </p>
            </div>
        </div>
      </div>

    </div>
    </div>
</template>

<script scoped>
import Navbar from '../components/navbar.vue'
import profilecover from '../components/profile-cover.vue'
import axios from 'axios'
export default {
  name:'friends',
    data () {
        return{
          friends:''
        }
    },
  components: {
    profilecover: profilecover,
    Navbar
 },
 methods : {
   showfriends(){
     axios
      .get('/fetchFriendList',{ headers: { Authorization: localStorage.getItem('sessionID') } })
      .then(response => {
        console.log(response)
        this.friends = response.data
      })
      .catch(error =>{
        console.log(error)
      })
   },
   friendprofile(){
     this.$router.push('/friendprofile')
   }
 }
}
</script>

<style scoped>
.userfriends{
    width: 60%;
    display: flex;
    flex-wrap: wrap;
    border: solid black 2px;
    overflow: scroll;
}
.friends{
  margin: 2%;
  width: 50%;
  height: 20%;
  text-align: center;
  border: solid green 2px;
  box-shadow: 3px 4px #7cad3e;
  
}
.avatar:hover{
    display: none;
}
.friends:hover {
  animation: shake 0.5s;
  animation-iteration-count: 5;
}
@keyframes shake {
  0% { transform: translate(1px, 1px) rotate(0deg); }
  50% { transform: translate(1px, 2px) rotate(0deg); }
  100% { transform: translate(1px, -2px) rotate(-1deg); }
}
</style>