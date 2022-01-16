<template>
  <span>
    <img height="10%" width="10%" :src="this.images[this.currentNumber]"/>
  </span>
</template>

<script>
export default {
  // created() {
  //   this.startRotation();
  // },
  // destroyed() {
  //   clearInterval(this.timer)
  // },
  data() {
    return {
      images: [
          'https://picsum.photos/1920/1080?1',
          'https://picsum.photos/1920/1080?2',
          'https://picsum.photos/1920/1080?3',
          'https://picsum.photos/1920/1080?4',
      ],
      currentNumber: 0,
      timer: null,
    }
  },
  // methods: {
  //   startRotation: () => {
  //     this.time = setInterval(() => {
  //       if (data.images.length - 1 === this.currentNumber) {
  //         this.currentNumber = -1
  //       }
  //       this.currentNumber += 1
  //     }, 3000);
  //   },
  // }
}
</script>

<style scoped>

</style>