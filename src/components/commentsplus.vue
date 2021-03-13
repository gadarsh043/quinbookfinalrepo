<template>
  <div id="comments-god-father">
      <div class="comments-container">
          <input type="text"> <button>post</button><br>
          <button @click="doSomething">reply</button>
          <table>
                <tr v-for="i in xx" :key="i">
                    <comments :name="i"></comments>
                </tr>
            </table>
      </div>
  </div>
</template>

<script>
import comments from './comments.vue'
export default {
    data () {
        return {
            xx:0,
            commentlist: []
        }
        
    },
    components: {
        comments
    },
    methods: {
        doSomething(){
            console.log("commentsplus")
             this.xx++
        }
    }

}
</script>


<style>

</style>