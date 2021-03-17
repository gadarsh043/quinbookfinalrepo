<template>
  <div id="navbar">
      <div class="logo" @click="clicklogo">
        <span ><img src="../assets/logo-color.png" alt="logo" srcset="" width="40px" height="40px" id="quinlogo"></span>
      </div>
      <div class="searchbar" style="padding: 10px 99px;
    font-family: cursive;
    font-style: italic;
    font-size: 14px;">
          <input type="text" name="searchtext" v-model="searchtext" placeholder="search friends" style="padding: 8px 300px;">
          <button style="padding: 8px;" @click="search">search</button>
      </div>
      <!-- <div class="searchbar">
        <search />
     </div> -->
        <div class="nandp" style="padding: 13px;padding-left: 254px;">
            <div class="icons">
                <div class="notification" @mouseover="showUserMask = true" @mouseleave="showUserMask = false">
                    <img src="../assets/bell.svg" id="icon" @click="notificationtiptext">
                    <span class="notificationtiptext" >Notifications</span>
                </div>
                <div class="profile" @mouseover="showUserMask = true" @mouseleave="showUserMask = false">
                    <img src="../assets/user.svg" id="icon" @click="profiletiptext">
                    <span class="profiletiptext">Own Feed</span>
                    <div class="dropdown-content">
                        <a href="/editprofile">Edit Profile</a>
                        <a href="/about">About</a>
                        <a @click="logoutUser" style="cursor:pointer">Logout</a>
                    </div>
                </div>
        </div>
      </div>
      <div v-if="showUserMask" class="user-mask"></div>
  </div>
</template>

<script> 
// import search from '../components/search.vue'
import axios from 'axios'
export default {
    components:{
        // search
    },
    data () {
        return {
            showUserMask: false,
            searchtext:''
        }
    },
    methods:{
      search(){
        localStorage.setItem('searchterm', this.searchtext)
        console.log(localStorage.getItem('searchterm'))
        this.$router.push('/search')
      },
      notificationtiptext(){
        this.$router.push('/notification')
      },
      profiletiptext(){
        this.$router.push('/ownfeed')
      },
      clicklogo(){
        this.$router.push('/feed', (error) => {console.log(error)})
      },
      logoutUser(){
         var obj = {
           sessionId : localStorage.getItem('sessionId')
         }
         axios.post("http://10.177.68.58:8090/logout",obj).then(res => { //ishika - logout
           console.log("loggin out navbar" + res)
         }).catch(err=>console.log(err))
         axios.get("http://10.177.68.89:8090/QuinBookPost/"+localStorage.getItem('myName')).then(res => { //meghana - logout
           console.log("loggin out meghana" + res)
         }).catch(err=>console.log(err))
         axios.get("http://10.177.68.28:8082/"+localStorage.getItem('myName')).then(res => { //deepk - logout
           console.log("loggin out deepak" + res)
           localStorage.clear()
            this.$router.push("/")
         }).catch(err=>console.log(err))
      }
    }
}
</script>

<style scoped>
#navbar {
    background-color:#251d1d;
    height: 60px;
    width: 100%;
    display: flex;
    position: sticky;
    top: 0;
    align-content: space-between;
    flex-wrap: wrap;
    /* justify-content: flex-start; */
}
.logo {
    padding-top: 8px;
    margin-left: 30px; 
    display: inline-block;
}
#quinlogo{
    box-shadow: 1px 1px 1px 1px rgb(24, 23, 23);
}

/* .searchbar{
     padding-left: 20%;

} */
.icons{
    display: flex;
}

#icon{
    border: solid black 1px;
    background-color: white;
    margin: 3px;
    height: 30px;
}
.notification {
  position: relative;
  display: inline-block;
}

.notification .notificationtiptext {
  visibility: hidden;
  width: 120px;
  background-color: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  
  /* Position the tooltip */
  position: absolute;
  z-index: 1;
  top: -5px;
  right: 105%;
}

.notification:hover .notificationtiptext {
  visibility: visible;
}

.profile {
  position: relative;
  display: inline-block;
}

.profile .profiletiptext {
  visibility: hidden;
  width: 120px;
  background-color: rgb(245, 245, 245);
  color: rgb(0, 0, 0);
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  
  /* Position the tooltip */
  /* position: absolute;
  z-index: 1;
  top: 100%;
  left: 50%;
  margin-left: -60px; */
  position: absolute;
  z-index: 1;
  top: -5px;
  right: 105%;
}

.profile:hover .profiletiptext {
  visibility: visible;
}

.user-mask {
  position: fixed;
  top: 70px;
  bottom: 0px;
  width: 100%;
  background-color: rgba(0,0,0, 0.9);
  z-index: 5;
}
.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}
.dropdown-content {
  display: none;
  position: absolute;
  right: 0;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 6;
}
.profile:hover .dropdown-content {
    display: block;
}
</style>