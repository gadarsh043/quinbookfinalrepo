<template>
  <div id="navbar" style="height: 70px;overfloe:scroll">
      <!-- <div class="searchbar" style="padding: 10px 99px;
    font-family: cursive, sans-serif;
    font-style: italic;
    font-size: 14px;">
          <input type="text" placeholder="search friends" style="padding: 8px 300px;">
          <button style="padding: 8px;">search</button>
      </div> -->
        <div class="nandp" style="padding: 13px 13px 13px 20px;">
            <div class="icons">
                <div class="notification" @mouseover="showUserMask = true" @mouseleave="showUserMask = false">
                    <img src="../assets/bell.svg" id="icon">
                    <span class="notificationtiptext">Notifications</span>
                </div>
                <div class="profile">
                    <img src="../assets/user.svg" id="icon" @mouseover="showUserMask = true" @mouseleave="showUserMask = false">
                    <span class="profiletiptext">Profile</span>
                </div>
        </div>
      </div>
      <div class="searchbar" style="padding: 37px 30px 31px 75%;">
            <search />
        </div>
    <div v-if="showUserMask" class="user-mask"></div>
  </div>
</template>

<script> 
import search from '../components/search.vue'
export default {
    components:{
        search
    },
    data () {
        return {
            showUserMask: false
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
  left: 105%;
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
  position: absolute;
  z-index: 1;
  top: -5px;
  left: 105%;
}

.profile:hover .profiletiptext {
  visibility: visible;
}
.user-mask {
  position: fixed;
  top: 65px;
  bottom: 0px;
  width: 100%;
  background-color: rgba(0,0,0, 0.9);
  z-index: 5;
}
</style>