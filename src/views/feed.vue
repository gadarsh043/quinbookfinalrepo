<template>
  <div class="container">
    <navbar style="margin-bottom: 12px;" />
    <div class="today" style="margin: 0px 10px">
      <h1>Todays Events</h1>
      <!-- //Todo: implement list of events -->
      <div class="events" v-for="i in events" :key="i.id">
        <!-- {{ i.fullName }}'s {{ i.years }}th {{ i.eventType.substring(6) }}! -->
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
        <div>
          <input
            type="text"
            name="How you doing"
            class="timeline"
            placeholder="How you doin' ?"
          />
          <button class="btn" @click="onsubmit"></button>
          <div style="display: flex">
            <img
              src="../assets/video.svg"
              style="margin: 0px 105px"
              width="30"
              height="30"
            />
            <img
              src="../assets/photo.svg"
              style="margin: 0px 72px"
              width="30"
              height="30"
            />
            <button style="margin: 0px 100px">Post</button>
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
              1<img :id="i" src="../assets/thumbs-upB.svg" style="margin: 24px" @click="changeImagelike(i)">
              1<img :id="i+'i'" src="http://localhost:8080/img/thumbs-down.76c1523f.svg" style="margin: 24px" @click="changeImagedislike(i)">
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
            <p>feeds {{ i }}</p>
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
      years: 0,
      events: 5,
      userName: "ravi",
      date: "",
      location: "",
      postCaption: "",
    };
  },
  components: {
    navbar,
  },
  methods: {
    changeImagelike(id) {
        var image = document.getElementById(id);
        if (image.src.match("http://localhost:8080/img/thumbs-up.7c39be07.svg")) {
            image.src = "../assets/thumbs-upB.svg";
        }
        else {
            image.src = "http://localhost:8080/img/thumbs-up.7c39be07.svg";
        }
    },
    changeImagedislike(id) {
        var image = document.getElementById(id+'i');
        if (image.src.match("http://localhost:8080/img/thumbs-down.76c1523f.svg")) {
            image.src = "http://localhost:8080/img/thumbs-upB.9679fb84.svg";
        }
        else {
            image.src = "http://localhost:8080/img/thumbs-down.76c1523f.svg";
        }
    }
  },
  mounted() {
    axios
      .get(
        `http://10.177.68.6:8081/events?userNameList=test1&userNameList=test2&userNameList=test1`,{ headers: { Authorization: localStorage.getItem('sessionID') } })
      .then((response) => {
        console.log(response);
        this.events = response.data;
      })
      .catch((error) => {
        this.errorMessage = error.errorMessage;
        console.log(error);
      });
    axios
      .get(`http://localhost:8085/feed/fetchUserSocial?userName=test1`,{ headers: { Authorization: localStorage.getItem('sessionID') } })
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