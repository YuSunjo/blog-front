<template>
  <div>
    <v-container>
      전체 설정
    </v-container>
    <v-container>
      배경사진
    </v-container>
    <input ref='imageInput' type='file' hidden @change='onChangeImages'>
    <v-btn @click='onClickImageUpload' type='button'>
      이미지 업로드
    </v-btn>
    <div v-if="backgroundImage == null || backgroundImage === ''">
      <div v-if="uploadImage !== '' || uploadImage != null">
        <v-img
          max-height='250'
          max-width='350'
          :src='uploadImage'
        ></v-img>
        <v-container>
          <v-btn @click='createConfig'>
            생성
          </v-btn>
        </v-container>
      </div>
    </div>
    <div v-else>
      <v-img
        lazy-src='https://picsum.photos/id/11/10/6'
        max-height='250'
        max-width='350'
        :src='backgroundImage'
      ></v-img>
      <v-btn @click='updateConfig'>
        수정
      </v-btn>
    </div>


  </div>
</template>

<script>
export default {
  data() {
    return {
      backgroundImage: this.$store.state.backgroundImage,
      uploadImage: this.$store.state.utils.uploadImage,
    };
  },
  methods: {
    onClickImageUpload() {
      this.$refs.imageInput.click();
    },
    onChangeImages(e) {
      console.log(e.target.files);
      const imageFormData = new FormData();
      [].forEach.call(e.target.files, (f) => {
        imageFormData.append("upload", f);
      });
      this.$store.dispatch("utils/uploadImage", imageFormData);
    },
    createConfig() {
      this.$store.dispatch("createConfig", {
        backgroundImage: this.uploadImage,
      });
    },
    updateConfig() {
      this.$store.dispatch("updateConfig", {
        backgroundImage: this.uploadImage
      })
    }
  },
};
</script>

<style scoped>

</style>