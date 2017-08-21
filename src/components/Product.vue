<template>
  <div>
    <h1>Product {{ id }}</h1>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        id: this.$route.params.productId
      }
    },
    mounted(){
      console.log('ABOUT IS READY')
      console.log("WHAT IS THIS?", this.$route.params.productId)
    }
  }
</script>

<style></style>