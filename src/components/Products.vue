<template>
  <div>
    <h1>Products VUE</h1>

    <ul>
      <li v-for="product in products">
        <router-link :to="{name: 'Product', params: { productId:  product.id } }">{{product.name}}</router-link>
      </li>
    </ul>

  </div>
</template>

<script>
  export default {
    data(){
      return {
        products:[{
          id: 'dsjkaf903j',
          name: 'Pizza Pocket'
        },{
          id: 'dsfkj90322930',
          name: 'Nacho Pocket'
        }]
      }
    },
    beforeCreate(){
      console.log("WHAT IS THIS?", this.banana)
    },
    mounted(){
      console.log('ABOUT IS READY')
      console.log("WHAT IS THIS?", this.banana)
    }
  }
</script>

<style></style>