<template>
  <div class="container">
    <Navbar style="width: 100.3%;margin-bottom: 3px;" />
    <div class="userprofile"> 
      <span  v-if="this.myProfilePic"> 
        <img :src="this.myProfilePic" alt="Avatar" class="avatar" style="border: solid white 2px">
      </span>
      <span v-else>
        <img src="https://www.pngitem.com/pimgs/m/78-786293_1240-x-1240-0-avatar-profile-icon-png.png" alt="Avatar" class="avatar">
      </span>
    </div><br>
    <div class="user">
      <profilecover class="userdetails"/>
      <div class="userfriends">
        <div style="padding: 12px;">
          <input type="text"  name="searchtext" v-model="searchtext" :placeholder="this.searchterm" style="padding: 8px 300px;">
          <button style="padding: 8px;" @click="search">Confirm</button>
        </div>
        <div class="friends" v-for="i in friends" :key="i.id" style="margin: 30px 211px;">
            <div class="friendrequest" style="padding: 0px 0px 0px 88px;">
              <div>
                <br>
                <span v-if="i.img">
                  <img :src="i.img" alt="">
                </span>
                <span v-else>
                  <img src="../assets/user.svg" width="23" height="23">
                </span>
                  <br>
                  <span v-if="i.fullName">
                    <p>{{i.fullName}}</p>
                  </span>
                  <span v-else>
                    <p>User</p>
                  </span>
                
                <!-- <p> {{i.}} </p> -->
              </div>
              <div class="iconsforaddblock" style="display:flex">
                <div class="AddFriendUnFriend" style="padding: 21px;">
                  <span class="AUtiptext" >AddFriend/Un</span>
                  <img :id="i" src="http://localhost:8080/img/user-add.5047d004.svg" style="padding: 17px;" @click="changeImageadddis(i,i.userName)">
                </div>
                <div  class="Block/UnBlock" style="padding: 21px;">
                <span class="BUtiptext" >Block</span>
                <img :id="i+'i'" src="http://localhost:8080/img/user-block.80ef950f.svg" style="padding: 17px;" @click="changeImageblockun(i,i.userName)">
                </div>
              </div>
            </div> 
        </div>
      </div>
    </div>
    </div>
</template>
<script scoped>
import Navbar from '../components/navbar3.vue'
import profilecover from '../components/profile-cover.vue'
import axios from 'axios'
export default {
  name:'searchpage',
    data () {
        return{
            friends :100,
            searchterm: '',
            myProfilePic:''
        }
    },
  components: {
    profilecover: profilecover,
    Navbar
 },
 mounted () {
   this.myProfilePic=localStorage.getItem('myProfilePic')
    let x = localStorage.getItem('searchterm')
    axios
      .get('http://10.177.68.13:8090/user/getUserName/'+ x,{ headers: { sessionId: localStorage.getItem('sessionID') } })
      .then(response => {
        this.$alert('Please Confirm to proceed')
        console.log(x)
        console.log(response)
        this.friends = response.data
        this.searchterm = localStorage.getItem('searchterm')
      })
      .catch(error => {
        this.errorMessage = error.message
        console.log(error)
      })
  },
 methods : {
   search(){
     localStorage.setItem('searchterm',this.searchtext)
     axios
      .get('http://10.177.68.13:8090/user/getUserName/'+ this.searchtext,{ headers: { Authorization: localStorage.getItem('sessionID') } })
      .then(response => {
        console.log(response)
        this.friends = response.data
      })
      .catch(error => {
        this.errorMessage = error.message
        console.log(error)
      })
   },
   changeImageadddis(id,userName) {
     var obj = {
       sessionId: localStorage.getItem('sessionID'),
       toWhom: userName,
       selfDetails: {
         userName: localStorage.getItem('myName'),
         fullName: localStorage.getItem('myFullName'),
         profilePic: localStorage.getItem('myProfilePic')
       }
     }
     console.log(obj)
     axios.post('http://10.177.68.2:8089/friendRequest',obj).then(res => {
       console.log(res.data.message)
     }).catch(err => {
       console.log(err)
     })
        var image = document.getElementById(id);
        if (image.src.match("http://localhost:8080/img/user-add.5047d004.svg")) {
            image.src = "http://localhost:8080/img/user-remove.7fad484d.svg";
        }
        else {
            image.src = "http://localhost:8080/img/user-add.5047d004.svg";
        }
    },
    changeImageblockun(id,userName) {
      var obj = {
       sessionId: localStorage.getItem('sessionID'),
       friendUserName: userName,
       selfDetails: {
         userName: localStorage.getItem('myName'),
         fullName: localStorage.getItem('myFullName'),
         profilePic: localStorage.getItem('myProfilePic')
       }
     }
     console.log(obj)
      axios.post('http://10.177.68.2:8082/blockUser',obj,{headers: {sessionId: localStorage.getItem('sessionID')}})
      .then(res => {
       console.log(res.data.message)
     }).catch(err => {
       console.log(err)
     })
        var image = document.getElementById(id+'i');
        if (image.src.match("http://localhost:8080/img/user-block.80ef950f.svg")) {
            image.src = "http://localhost:8080/img/user-check.33597ea2.svg";
        }
        else {
            image.src = "http://localhost:8080/img/user-block.80ef950f.svg";
        }
    }
 }
}
</script>
<style scoped>
.friendrequest{
  display: flex;
}
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
</style>