<template>
  <div class="container" >
      <navbar />
      <br>
      <center>
      <div class="feed" id ="feed" style="margin: 0px 6px;">
          <div class="post" v-for="i in feeds" :key="i.id">
              <div class="plaf">
                    <img class="avatar" src="https://www.pngitem.com/pimgs/m/78-786293_1240-x-1240-0-avatar-profile-icon-png.png" alt="Avatar">
                  <div>
              <input type="text" name="How you doing" class="timeline">
              <div style="display:flex">
                <img src="../assets/video.svg" style="margin: 0px 105px" width="30" height="30">
                <img src="../assets/photo.svg" style="margin: 0px 72px;" width="30" height="30">
                <button style="margin: 0px 100px;">Update</button>
                <button style="margin: 0px 99px 0px -88px;">Delete</button>
              </div>
          </div>
              </div>
          </div>
      </div>
      <div class="butn"></div>
      </center>
  </div>
</template>
<script>
import navbar from "../components/navbar.vue"
export default {
    data () {
        return{
            feeds:100
    }},
    
    components:{
        navbar
    },
    methods: {
    },
    
}
</script>
<style scoped>
.plaf{
    display: flex;
    justify-content: space-between;
}
.avatar {
    vertical-align: middle;
    width: 104px;
    height: 100px;
    border-radius: 50%;
    position: relative;
    top: -15px;
    margin-left: -2px;
}
.container{
  height: 700px;
}
.feed{
  width: 1000px;
  float: center;
  height: 700px;
  position: inherit;
  border: grey 2px solid;
  overflow: scroll;
}
.post{
    margin: 30px;
    width: 87%;
    height: 16%;
    padding: 29px 8px 10px;
    text-align: center;
    border: solid white;
    overflow: scroll;
}
.timeline{
    width: 550px;
    /* float: right; */
    height: 83px;
    margin: 0px;
    border: grey 2px solid;
}
.butn{
    height: 200px;
    width:300px;
    float:right;
    margin: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
}
.signup{
   height:30px;
   width: 100px;
   margin: 10px;
   color: green;
    background-color: wheat;
    
}
</style>