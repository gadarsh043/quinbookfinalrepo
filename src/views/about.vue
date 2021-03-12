<template>
    <div class="container">
      <Navbar style="width:100.3%"/>
    <div class="userprofile" style="margin: 3px 0px 0px 0px;">
       <img src="https://www.pngitem.com/pimgs/m/78-786293_1240-x-1240-0-avatar-profile-icon-png.png" alt="Avatar" class="avatar">
    </div>
    <div class="user" style="padding: 15px 1px;height: 430px;">
      <profilecover class="userdetails"/>
      <div class="about" style="text-align: -webkit-center;overflow:scroll;">
        <br>
        <div>
          <div class="education">
            <!-- <img class='beautify-user-img' src='../assets/beautify.jpg'> -->
             <img class="preview" :src="img" width="120px" height="120px">
             <p style="font-style: italic; font-size: xxx-large; font-family: cursive;">Personal Details</p><br>
                <table>
                  <tr>
                    <th>First Name</th>---->
                    <td></td>
                  </tr>
                  <tr>
                    <th>Last Name</th>---->
                    <td></td>
                  </tr>
                  <tr>
                    <th>Phone Number</th>---->
                    <td></td>
                  </tr>
                  <tr>
                    <th>Gender</th>---->
                    <td></td>
                  </tr>
                  <tr>
                    <th>Date Of Birth</th>---->
                    <td></td>
                  </tr>
                  <tr>
                    <th>Password</th>---->
                    <td></td>
                  </tr>
                  <tr>
                    <th>Relationship Status</th>---->
                    <td></td>
                  </tr>
                  <tr>
                    <th>Marriage Anniversary</th>---->
                    <td></td>
                  </tr>
                  <tr>
                    <th>Address</th>---->
                    <td></td>
                  </tr>
                  <tr>
                    <th>Hobbies</th>---->
                    <td></td>
                  </tr>
                
                </table>
                
                <p style="font-style: italic; font-size: xxx-large; font-family: cursive;">Education</p><br>
                
                <table>
                  <tr>
                    <th>Secondary</th>---->
                    <td></td>
                  </tr>
                  <tr>
                    <th>Higher Secondary</th>---->
                    <td></td>
                  </tr>
                  <tr>
                    <th>University</th>---->
                    <td></td>
                  </tr>
                  </table>
                  
                  <p style="font-style: italic; font-size: xxx-large; font-family: cursive;">Co-orporate Life</p><br>
                  
                  <table>
                  <tr>
                    <th>Company Name</th>---->
                    <td></td>
                  </tr>
                  <tr>
                    <th>Job Profile</th>---->
                    <td></td>
                  </tr>
                  <tr>
                    <th>Job Start Date</th>---->
                    <td></td>
                  </tr>
                  <tr>
                    <th>Job End Date</th>---->
                    <td></td>
                  </tr>
                  <tr>
                    <th>Years of Experience</th>---->
                    <td></td>
                  </tr>
                  <tr>
                    <th>Job Location</th>---->
                    <td></td>
                  </tr>
                </table>
           
      </div>
      </div>
        </div>  
          </div>
    </div>
</template>
<script>
import axios from 'axios'
import Navbar from '../components/navbar.vue'
import profilecover from '../components/profile-cover.vue'
export default {
  name: 'about',
  data () {
   return {
     info:'',
     firstName: '',
     lastName: '',
     phoneNo: '',
     password: '',
     userName: '',
     gender: '',
     dateOfBirth: '',
     img: '',
     relationshipStatus: '',
     education10: '',
     education12: '',
     educationUni: '',
     jobProfile: '',
     companyName: '',
     jobStartDate: '',
     jobEndDate: '',
     yearsOfExp: 0,
     jobLocation: '',
     address: '',
     marriageAnniversary: '',
     Hobbies: ''
   }
  },
  validate () {
    
  },
  methods: {
    } ,
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
        },
  
  components: {
     Navbar,
     profilecover
 },
 mounted(){
   axios
   .get('http://10.177.68.6:8081/getDetails/userName?userName=test1',{ headers: { Authorization: localStorage.getItem('sessionID') } }) 
   .then(response => {
     console.log(response)
     this.info = response.data
   })
   .catch(error =>{
     console.log(error)
   })
    
 }
}
</script>
<style scoped>
.about{
  width: 60%;
  float: right;
  height: 450px;
  border: rgb(0, 0, 0) 2px solid;
  overflow: hidden;
}
.table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
   
}
/* .user{
  background-image: url('../assets/2.jpeg');
} */
/* .education{
  background-image: url('../assets/3.jpeg');
} */
.beautify-user-img{
    border-radius: 50%;
    height: 150px;
    width: 150px;
    box-shadow: 0 0 10px 1px gray;
  }
 td{
    -moz-box-shadow: 0 0 10px 1px gray;
    -webkit-box-shadow: 0 0 10px 1px gray;
    box-shadow: 0 0 10px 1px  #000000;
    text-align: center;
  }
  .avatar:hover{
    display: none;
  }
</style>