<template>
  <div class="container">
    <Navbar style="width: 100.3%;margin-bottom: 3px;" />
    <div class="userprofile"> 
      <img src="https://www.pngitem.com/pimgs/m/78-786293_1240-x-1240-0-avatar-profile-icon-png.png" alt="Avatar" class="avatar">
    </div><br>
    <div class="user">
      <profilecover class="userdetails"/>
      <div class="userfriends">
        <div style="padding: 12px;">
          <input type="text" name="searchtext" v-model="searchtext" placeholder="search friends" style="padding: 8px 300px;">
          <button style="padding: 8px;" @click="search">Confirm</button>
        </div>
        <div class="friends" v-for="i in friends" :key="i.id" style="margin: 30px 211px;">
            <div class="friendrequest" style="padding: 0px 0px 0px 88px;">
              <div>
                <br>
                  <img src="../assets/user.svg" width="23" height="23">
                  <br>
                <p> G Adarsh</p>
                <!-- <p> {{i.}} </p> -->
              </div>
              <div class="iconsforaddblock" style="display:flex">
                <div class="AddFriendUnFriend" style="padding: 21px;">
                  <span class="AUtiptext" >AddFriend/Un</span>
                  <img :id="i" src="http://localhost:8080/img/user-add.5047d004.svg" style="padding: 17px;" @click="changeImageadddis(i)">
                </div>
                <div  class="Block/UnBlock" style="padding: 21px;">
                <span class="BUtiptext" >Block/Un</span>
                <img :id="i+'i'" src="http://localhost:8080/img/user-block.80ef950f.svg" style="padding: 17px;" @click="changeImageblockun(i)">
                </div>
              </div>
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
  name:'searchpage',
    data () {
        return{
            friends :100,
            searchtext: ''
        }
    },
  components: {
    profilecover: profilecover,
    Navbar
 },
 mounted () {
    let x = localStorage.getItem('searchterm')
    axios
    this.$alert('Please Confirm to proceed')
      .get('http://10.177.68.5:8090/user/getUserName/'+ x,{ headers: { Authorization: localStorage.getItem('sessionID') } })
      console.log(x)
      .then(response => {
        console.log(response)
        this.friends = response.data
      })
      .catch(error => {
        this.errorMessage = error.message
        console.log(error)
      })
  },
 methods : {
   search(){
     localStorage.setItem('seatchterm',this.searchtext)
     axios
      .get('http://10.177.68.5:8090/user/getUserName/'+ localStorage.getItem('searchterm'),{ headers: { Authorization: localStorage.getItem('sessionID') } })
      .then(response => {
        console.log(response)
        this.friends = response.data
      })
      .catch(error => {
        this.errorMessage = error.message
        console.log(error)
      })
   },
   changeImageadddis(id) {
        var image = document.getElementById(id);
        if (image.src.match("http://localhost:8080/img/user-add.5047d004.svg")) {
            image.src = "http://localhost:8080/img/user-remove.7fad484d.svg";
        }
        else {
            image.src = "http://localhost:8080/img/user-add.5047d004.svg";
        }
    },
    changeImageblockun(id) {
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