<template>
  <div id="navbar">
      <div class="logo navbar-div" @click="clicklogo">
        <span id="quinlogo"><img src="../assets/logo-color.png" alt="logo" srcset="" width="40px" height="40px" ></span>
      </div>
      <div class="searchbar navbar-div">
          <input type="text" name="searchtext" v-model="searchtext" placeholder="search friends" id="searchbox">
          <button @click="search" id="searchBtn">search</button>
      </div>
    
        <div class="nandp navbar-div" >
            <div class="icons" >
                <!-- <div class="notification" id="notification-div"> -->
                    <span id="notificationicon"><img src="../assets/bell.svg" id="notifyicon" @click="notificationtiptext"></span>
                    <!-- <span class="notificationtiptext" >Notifications</span> -->
                <!-- </div> -->
                <div class="profile" id="profile-div">
                    <span id="profile"><img src="../assets/user.svg" id="icon" @click="profiletiptext"></span>
                    <!-- <span class="profiletiptext">Own Feed</span> -->
                    <div class="dropdown-content" id="profile-content-div">
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
        this.$router.push('/feed')
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
            this.$router.push("/login")
         }).catch(err=>console.log(err))
      }
    }
}
</script>

<style scoped>
/* .icons{
  display: inline-block;
  justify-content: space-between;
} */
*{
    box-sizing: border-box;
    margin:0;
}

#navbar{
    display: flex;
    justify-content: space-evenly;
    z-index: 1;
}
.navbar-div{

    height: 50px;
}

.logo{
    /* background-color: orange; */
    width: calc(100% - 90%);
    position: relative;
    
}

.searchbar{
    /* background-color: aqua; */
    width: calc(100%  - 30%);
    padding-left: 8%;
    padding-top: 10px;
    text-align: right;
    padding-right: 15px;
}

.nandp{
    
    /* background-color: green; */
    width: calc(100% - 90%);
    text-align: center;
    
    
}

#quinlogo{
    position: absolute;
    left:calc(100% - 85%);
    top: 5px;
    /* padding: calc(100% - 85%); */
}

#searchbox{
    width: 15%;
    padding: 5px;
    border-radius: 5px;
    border-style: solid;
    border-color: black;
    outline: none;
    transition: ease-in-out 1s;
}

#searchBtn{
    padding: 6px;
    background-color: purple;
    color: white;
    border-radius: 10px;
    border-color: purple;
    outline: none;
}

#searchBtn:hover{
    background-color:white;
    border-color: purple;
    color: purple;
}


#searchbox:focus{
    border-color: purple;
    width: 40%;
    
}

.profile{
    /* padding-top: 3px; */
    position: relative;
    display: inline-block;
    
}


#profile-content-div{
    display: none;
    position: absolute;
    top: 100%;
    right: 10%;
    width: 300%;
    height: 20vh;
    background-color: purple;
    border: 1px solid violet;
    border-radius: 10px;
    text-align: center;
    
}

#profile-content-div>a{
    display: block;
}
#profile-div:hover #profile-content-div{
    display: block;   
    z-index:3;
    padding-bottom: 10px;
    padding-top: 10px;
    
}


#profile-content-div > a{
    display: block;
    text-decoration: none;
    color: white;
    margin: 10px 0px;
}

#icon, #notifyicon{
  margin-top: 20px;
}

#notification.div, #profile-div{
  width: 50%;
}
</style>
