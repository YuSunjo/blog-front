<template>
  <div>
    <v-container>
      전체 설정
    </v-container>
    <v-container>
      배경사진
    </v-container>
    <div v-if="backgroundImage == null || backgroundImage === ''">
      <input ref="imageInput" type="file" hidden @change="onChangeImages">
      <v-btn @click="onClickImageUpload" type="button">
        이미지 업로드
      </v-btn>
      <div v-if="uploadImage !== null">
        <v-img
            lazy-src="https://picsum.photos/id/11/10/6"
            max-height="250"
            max-width="350"
            src="https://potato-velog-sunjo.s3.ap-northeast-2.amazonaws.com/USER/202201021354537971.png"
        ></v-img>
        <v-btn>
          생성
        </v-btn>
      </div>
    </div>
    <div v-else>
      <v-img
          lazy-src="https://picsum.photos/id/11/10/6"
          max-height="250"
          max-width="350"
          src="https://potato-velog-sunjo.s3.ap-northeast-2.amazonaws.com/USER/202201021354537971.png"
      ></v-img>
      <v-btn>
        수정
      </v-btn>
    </div>


  </div>
</template>

<script>
export default {
  fetch({store}) {
    store.dispatch('getConfig');
  },
  data() {
    return {
      backgroundImage: this.$store.state.backgroundImage,
      uploadImage: this.$store.state.utils.uploadImage
    }
  },
  methods: {
    onClickImageUpload() {
      this.$refs.imageInput.click();
    },
    onChangeImages(e) {
      console.log(e.target.files);
      const imageFormData = new FormData();
      [].forEach.call(e.target.files, (f) => {
        imageFormData.append('file', f);
      });
      this.$store.dispatch('utils/uploadImage', imageFormData)
    }
  }
}
</script>

<style scoped>

</style>