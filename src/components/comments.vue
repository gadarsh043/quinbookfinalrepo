<template>
  <div id="comments-god-father">
      
      <div class="comments-container">
          <textarea name="" id="" cols="100" rows="2" v-model="comment"></textarea>
          <br>
          <button @click="addToCommentList">post</button>
          
            <div>
                <div v-for="i in commentlist" :key="i.id">
                   <p> {{i.message}}</p> <button @click="doSomething(i.postid)">reply</button>
                </div>
            </div>
          <p>{{comment}}</p>
           
      </div>
  </div>
</template>

<script>
//import commentsplus from './commentsplus.vue'
export default {
    data () {
        return {
            commentlist: [
                {
                    message:'1st comment',
                    postid:'121321312',
                    userName:'pndb'

                }
            ],
            comment: '',
        }
        
    },
    components: {
        
    },
    methods: {
        doSomething(i){
            console.log('comments' + i)
        },
        addToCommentList(){
            if(this.comment!== ''){
                this.commentlist.push(this.comment)
                this.comment = ''
            }
            
        }
    }

}
</script>


<style scoped>
p{
    display: inline;
}
</style>