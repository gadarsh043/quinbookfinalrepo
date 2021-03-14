<template>
  <div>
    <!-- Like -->
    <img  :display="display" @click="toggle"  v-if="display" src="../assets/like.png" alt="Liked!" width="24px" height="24px">
    <img :display="display" @click="toggle" v-else src="../assets/after-like.png" width="28px" height="28px" >
    <!-- Dislike
    <img  :display2="display2" @click="toggle2" v-if="display2" src="../assets/dislike.png" width="24px" height="24px">
    <img :display2="display2" @click="toggle2" v-else src="../assets/after-dislike.png" width="24px" height="24px"> -->
    <div class="commentdiv" style="float">
                <img
                  src="../assets/comment.svg"
                  style="margin: 20px"
                  width="30"
                  height="30"
                />
                <div class="commentinsidediv">
                  <input type="text" name="How you doing" class="small" />
                </div>
              </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  props:['postId', 'fullName', 'myProfilePic'],
  data(){
    return {
      display: true,
      like:0
      // dislike:0,
      // display2: true
    }
  },
  methods: {
     toggle()
     {
       if(this.display)
       {
         this.display=false
         this.like=1
       }
       else{
         this.display=true
         this.like=0
       }
       console.log('likes:'+this.like)
      
      const obj = {
        like:this.like,
        dislike:0,
        postId:this.postId,
        fullName:this.fullName,
        profilePic:this.myProfilePic
      }
       axios.post('http://10.177.68.8:8090/QuinBookPost/postEngagement', obj,{headers: {sessionId: localStorage.getItem('sessionId')}})
       .then((response)=>{
        console.log(response.data);
        })
        .catch((error) => {
        this.errorMessage = error.errorMessage;
        console.log(error);
      })

     }
    // toggle() {
    //           // this.display=this.display?false:true
    //           // if(!this.display2){
    //           //   this.dislike=-1
    //           // }
              
    //           if(this.display) // liked
    //           {
    //             this.display=false
    //             this.like=1
    //             this.dislike=0
    //             if(!this.display2)
    //             {
    //               this.dislike=-1
    //             }
    //           }
    //           else // unliked
    //           {
    //             if(!this.display2)
    //             {
    //               this.display2=true
    //               this.display2=false
    //               this.dislike=-1
    //               this.like=1
    //             }
    //             else
    //             {
    //             this.display=true
    //             this.like=-1
    //             this.unlike=0
    //             }
    //           }

    //           // if(this.display === false && this.display2 === false)
    //           // {
    //           //     this.display=true;
    //           //     this.display2=true;
    //           // }
    //           console.log('likes:'+this.like+' dislikes'+this.dislike)
              

    //       },
    //       toggle2() {
    //         // this.display2=this.display2?false:true
    //         if(this.display2) // disliked
    //         {
    //           this.display2=false
    //           this.dislike=1
    //           this.like=0
    //           if(!this.display)
    //           {
    //             this.like=-1
    //           }
    //         }
    //         else
    //         {
    //           if(!this.display)
    //           {
    //             this.display=true
                
    //             this.display2=false
    //             this.like=-1
    //             this.dislike=1
    //           }
    //           else 
    //           {
    //           this.display2=true
              
    //           this.dislike=-1
    //           this.like=0
    //           }
    //         }

    //         // if(this.display === false && this.display2 === false)
    //         // {
    //         //     this.display=true;
    //         //     this.display2=true;
    //         // }
    //         console.log('likes:'+this.like+' dislikes'+this.dislike)
    //     }
  }
}
</script>
<style>
</style>