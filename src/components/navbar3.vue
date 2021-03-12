<template>
  <div id="navbar">
      <div class="logo">
        <span ><img src="../assets/logo.png" alt="logo" srcset="" width="40px" height="40px" id="quinlogo"></span>
      </div>

      <!-- <div class="searchbar">
        <search />
     </div> -->
        <div class="nandp" style="padding: 11px 0px 0px 1230px;">
            <div class="icons">
                <div class="notification" @mouseover="showUserMask = true" @mouseleave="showUserMask = false">
                    <img src="../assets/bell.svg" id="icon" @click="notificationtiptext">
                    <span class="notificationtiptext" >Notifications</span>
                </div>
                <div class="profile" @mouseover="showUserMask = true" @mouseleave="showUserMask = false">
                    <img src="../assets/user.svg" id="icon" @click="profiletiptext">
                    <span class="profiletiptext">Profile</span>
                    <div class="dropdown-content">
                        <a href="/editprofile">Edit Profile</a>
                        <a href="#">Settings</a>
                        <a href="/login">Logout</a>
                    </div>
                </div>
        </div>
      </div>
      <div v-if="showUserMask" class="user-mask"></div>
  </div>
</template>

<script> 
// import search from '../components/search.vue'
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
        this.$router.push('/search')
      },
      notificationtiptext(){
        this.$router.push('/feed')
      },
      profiletiptext(){
        this.$router.push('/feed')
      }
    }
}
</script>

<style scoped>
#navbar {
    background-color:#7cad3e;
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
    box-shadow: 1px 1px 1px 1px black;
}

/* .searchbar{
     padding-left: 20%;

} */
.icons{
    display: flex;
}

#icon{
    border: solid black 1px;
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
  background-color: black;
  color: #fff;
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
  background-color: black;
  color: #fff;
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