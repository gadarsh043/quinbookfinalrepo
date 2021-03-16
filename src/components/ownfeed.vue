<template>
    <div>
        <div class="plaf">
            <span  v-if="i.postImages[0]" class="avatar"> 
                <img :src="i.postImages[0]" alt="PostImage" class="avatar" style="border: solid white 2px">
            </span>
            <span v-else>
                <img src="https://maestroselectronics.com/wp-content/uploads/2017/12/No_Image_Available.jpg" alt="Post Image" class="avatar">
            </span>
        </div>
            <input type="text" name="How you doing" :placeholder="i.postCaption" v-model="postCaption" class="timeline">
            <div style="display:flex">
                <input type="text" id="location" v-model="location" name="location" :placeholder="i.location" style="height: 19px;">
                <input type="file" @change="previewImage" accept="image/*">
                <img class="preview" :src="img" width="120px" height="120px">
                <button style="margin: 0px 100px; height: 25px;" @click="onupdate(i.postId)">Update</button>
                <button style="margin: 0px 99px 0px -88px; height: 25px;" @click="ondelete">Delete</button>
            </div>
        </div>
</template>

<script>
export default {

}
</script>

<style>

</style>