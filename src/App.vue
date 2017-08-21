<template>
  <div id="app">
<<<<<<< HEAD
    <div>
      <!-- THIS IS YOUR NEW <a> -->
      <router-link :to="{name: 'Home'}">Home</router-link> 
      <router-link :to="{name: 'Products'}">Products</router-link> 
=======
    <div class="container">
      <div>
        <h1>Re<img src="./assets/logo.png">ues</h1>
      </div>
      <div class="row">
        <div class="col-md-8">
          <router-view></router-view>
        </div>
        <div class="col-md-4">
          <router-view name="ads"></router-view>
        </div>
      </div>
>>>>>>> beae641e54ba14bfe6d1cccd269a33f781ba2f84
    </div>
    <hr>
    <router-view></router-view>
    <hr>
    <footer>
      FOOT HERE
    </footer>
  </div>
</template>

<script>
<<<<<<< HEAD
  export default {
    name: 'app',
=======
  import Hello from './components/Hello'
  import ReviewCards from './components/Review-Cards'

  export default {
    name: 'app',
    components: {
      Hello,
      ReviewCards
    }
>>>>>>> beae641e54ba14bfe6d1cccd269a33f781ba2f84
  }

</script>

<style>
<<<<<<< HEAD
a{
  font-size: 30px;
  color: red;

}
=======
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  p {
    color: red;
  }
>>>>>>> beae641e54ba14bfe6d1cccd269a33f781ba2f84
</style>