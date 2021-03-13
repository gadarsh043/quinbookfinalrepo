<template>
  <div class="container" >
      <navbar />
      <br>
      <center>
        <div class="feed" id ="feed" style="margin: 0px 6px;">
            <div class="post" v-for="i in info" :key="i.id" :id="i.postId">
                <div class="plaf">
                    <img class="avatar" :src="i.postImages[0]">
                    <div>
                        <input type="text" name="How you doing" :placeholder="i.postCaption" v-model="postCaption" class="timeline">
                    <div style="display:flex">
                        <input type="text" id="location" v-model="location" name="location" :placeholder="i.location" style="height: 19px;">
                        <input type="file" @change="previewImage" accept="image/*">
                        <img class="preview" :src="postImages" width="120px" height="120px">
                        <button style="margin: 0px 100px; height: 25px;" @click="onupdate(i.postId)">Update</button>
                        <button style="margin: 0px 99px 0px -88px; height: 25px;" @click="onsubmit">Delete</button>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </center>
  </div>
</template>
<script>
import axios from 'axios'
import navbar from "../components/navbar.vue"
export default {
    data () {
        return{
            postchange:[],
            info: '',
            location: '',
            postCaption: '',
            postImages: '',
            postId: ''
    }},
    
    components:{
        navbar
    },
    
    methods : {
        onupdate(id){
            const update ={
                location: this.location,
                postCaption: this.postCaption,
                postImages: this.postImages,
            }
            console.log(update)
            axios
                .put('http://10.177.68.8:8090/QuinBookPost/updatePost/'+id,update, { headers: { sessionId: localStorage.getItem('sessionId') } }) // meghana - got updating my post - send session Id
                .then(response => {
                    console.log(response)
                })
                .catch(error =>{
                    console.log(error)
                })
        },
        previewImage: function(event) {
            var input = event.target;
            if (input.files && input.files[0]) {
                var reader = new FileReader();
                reader.onload = (event) => {
                    this.postImages = event.target.result;
                }
                reader.readAsDataURL(input.files[0]);
                console.log(this.postImages)
            }
        }
    },
   mounted(){
     axios
      .get('http://10.177.68.8:8090/QuinBookPost/getAllPostByUserName/'+localStorage.getItem('myName')) // meghana - for getting my post
      .then(response => {
        console.log(response)
        this.info = response.data
      })
      .catch(error =>{
        console.log(error)
      })
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
    margin-right: 100px
}
</style>