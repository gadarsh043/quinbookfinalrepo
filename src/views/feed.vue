<template>
  <div class="container">
    <navbar style="margin-bottom: 12px;" />
    <div class="today" style="margin: 0px 10px">
      <h1>Todays Events</h1>
      <!-- //Todo: implement list of events -->
      <div class="events" v-for="i in events" :key="i.id">
        {{ i.fullName }}'s {{ i.years }}th {{ i.eventType }}!
      </div>
    </div>
    <div class="feed" style="margin: 0px 6px">
      <div class="uploadpost">
        <img
          src="https://www.pngitem.com/pimgs/m/78-786293_1240-x-1240-0-avatar-profile-icon-png.png"
          alt="Avatar"
          class="avatar"
        />
        <div >
          <input
            type="text"
            name="postCaption"
            v-model="postCaption"
            class="timeline"
            placeholder="How you doin' ?"
          />
          <button class="btn" @click="onsubmit"></button>
          <div style="display: flex">
            <img
              src="../assets/map-pin.svg"
              style="margin: 0px 105px; cursor: pointer"
              width="30"
              height="30"
              :locTypeImage="locTypeImage"
              @click="showLocation"
              v-if="locTypeImage"
            />
            <input 
            type="text" 
            name="location"
            v-model="location"
            placeholder="Location..."
            v-else
            />
            <!-- <img
              src="../assets/photo.svg"
              style="margin: 0px 72px"
              width="30"
              height="30"
            /> -->
            <input type="file" @change="previewImage" accept="image/*">
            <img class="preview" :src="img" width="120px" height="120px" v-if="img">
            <button style="margin: 0px 100px" @click="postThis">Post</button>
          </div>
        </div>
      </div>
      <div class="post" v-for="i in feeds" :key="i.id">
        <div class="plaf">
          <div class="pial">
            <img
              class="avatar"
              src="https://www.pngitem.com/pimgs/m/78-786293_1240-x-1240-0-avatar-profile-icon-png.png"
              alt="Avatar"
            />
            <div class="likeanddis" >
              1<img :id="i" src="http://localhost:8081/img/thumbs-up.7c39be07.svg" style="margin: 24px" @click="changeImagelike(i)">
              1<img :id="i+'i'" src="http://localhost:8081/img/thumbs-down.76c1523f.svg" style="margin: 24px" @click="changeImagedislike(i)">
              <div class="commentdiv" style="float">
                <img
                  src="../assets/comment.svg"
                  style="margin: 20px"
                  width="30"
                  height="30"
                  @click="comment"
                />
                <div class="commentinsidediv">
                  <input type="text" name="How you doing" class="small" />
                </div>
              </div>
            </div>
          </div>
          <div class="feed" style="height: 400px">
            <p>{{i}}</p>
            <p> {{ i.postCaption }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import navbar from "../components/navbar.vue";
import axios from "axios";
export default {
  data() {
    return {
      feeds: 100,
      fullName: "",
      eventType: "",
      img: "",
      imgList: [],
      years: 0,
      events: 5,
      friendList: [],
      userName: "",
      date: "",
      location: "",
      postCaption: "",
      sessionId: '',
      locTypeImage: false // this should be true
    };
  },
  components: {
    navbar,
  },
  methods: {
    ordinal(i){
 var j = i % 10,
        k = i % 100;
    if (j == 1 && k != 11) {
        return i + "st";
    }
    if (j == 2 && k != 12) {
        return i + "nd";
    }
    if (j == 3 && k != 13) {
        return i + "rd";
    }
    return i + "th";
    },
    postThis(){
      this.imgList.push(this.img)
      console.log(this.imgList)
      const obj = {
        postCaption : this.postCaption,
        postImages: this.imgList,
        location: this.location
      }
      console.log(obj)
        axios
        .post(`http://10.177.68.40:8090/QuinBookPost/qbpost`,obj,{headers: {sessionId: localStorage.getItem('sessionID')}})
        .then((response)=>{
        console.log(response);
        this.$alert('Post created!!')})
        .catch((error) => {
        this.errorMessage = error.errorMessage;
        console.log(error);
      });
    },
    changeImagelike(id) {
        var image = document.getElementById(id);
        if (image.src.match("http://localhost:8081/img/thumbs-up.7c39be07.svg")) {
            image.src = "http://localhost:8081/img/thumbs-upB.9679fb84.svg";
        }
        else {
            image.src = "http://localhost:8081/img/thumbs-up.7c39be07.svg";
        }
    },
    changeImagedislike(id) {
        var image = document.getElementById(id+'i');
        if (image.src.match("http://localhost:8081/img/thumbs-down.76c1523f.svg")) {
            image.src = "http://localhost:8081/img/thumbs-dred.9e7d0a8c.svg";
        }
        else {
            image.src = "http://localhost:8081/img/thumbs-down.76c1523f.svg";
        }
    },
    showLocation(){
      this.locTypeImage = false
    }, 
    previewImage: function(event) {
        var input = event.target;
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = (event) => {
                this.img = event.target.result;
            }
            reader.readAsDataURL(input.files[0]);
            console.log(this.img)
        }
    }
  },
  mounted() {
     this.userName =  localStorage.getItem('myName')
    axios
      .get(
        `http://10.177.68.9:8085/feed/fetchFriendList?userName=${this.myName}`)
      .then((response) => {
        console.log(response);
        this.friendList = response.data;
        console.log(this.friendList)
        axios
      .post(
        `http://10.177.68.6:8081/events`, this.friendList)
      .then((response) => {
        console.log(response);
        this.events = response.data;
      })
      .catch((error) => {
        this.errorMessage = error.errorMessage;
        console.log(error);
      });
      })
      .catch((error) => {
        this.errorMessage = error.errorMessage;
        console.log(error);
      });
      
    
    axios
      .get(`http://10.177.68.9:8085/feed/fetchUserSocial?userName=${this.myName}`)
      .then((response) => {
        console.log(response);
        this.feeds = response.data;
      })
      .catch((error) => {
        this.errorMessage = error.errorMessage;
        console.log(error);
      });
  },
};
</script>
<style scoped>
.today h1 { 
  text-align: center;
  padding: 20px;
}
.events {
  margin: 10px;
  width: 300px;
  height: 40px;
  align-items: center;
  text-align: center;
  padding: 25px 50px 0px;
  border-radius: 8px;
  box-shadow: 7px 4px 5px 1px rgb(0, 0, 0);
}
.likeanddis {
  display: flex;
}
.plaf {
  display: flex;
  justify-content: space-between;
}
.avatar {
  vertical-align: middle;
  width: 104px;
  height: 100px;
  border-radius: 50%;
  position: relative;
  top: -26px;
  margin-left: -2px;
}
.avatar > img:hover {
  transform: scale(1.3);
  transition: transform 0.5s;
  border: solid #000000 2px;
}
.container {
  height: 700px;
}
.body {
  width: 0;
  height: 0;
  margin: 0px;
}
.feed {
  width: 900px;
  float: right;
  height: 700px;
  position: inherit;
  box-shadow: 0 0 10px 1px #000000;
  overflow: scroll;
}
.today {
  width: 30%;
  float: left;
  height: 700px;
  box-shadow: 7px 4px 5px 1px rgb(0, 0, 0);
  overflow: scroll;
  box-shadow: 0 0 10px 1px #000000;
}
.uploadpost {
  width: 87%;
  height: 170px;
  display: inline-flex;
  margin: 30px;
  padding: 29px 8px 10px;
  overflow: scroll;
  box-shadow: 7px 4px 5px 1px rgb(0, 0, 0);
}
.timeline {
  width: 550px;
  /* float: right; */
  height: 83px;
  margin: 0px;
  padding: 20px;
  box-shadow: 7px 4px 5px 1px rgb(0, 0, 0);
}
.post {
  margin: 30px;
  width: 87%;
  height: 22%;
  padding: 29px 8px 10px;
  text-align: center;
  box-shadow: 7px 4px 5px 1px rgb(0, 0, 0);
  overflow: scroll;
}
.btn {
  background-color: white;
  width: 100px;
  margin: auto;
  display: block;
  color: #0a0ef7;
  padding: 0px 27px 11px;
  border: 1px solid white;
  cursor: pointer;
}
.commentinsidediv {
  display: none;
}
.commentdiv:hover .commentinsidediv {
  display: none;
}
</style>